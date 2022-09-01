globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr__default from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","basePath":"/","assetsPath":"/_nuxt/","cdnURL":"","buildAssetsDir":"/_nuxt/"},"nitro":{"routes":{},"envPrefix":"NUXT_"},"siteUrl":"https://zem.gg","public":{"siteUrl":"https://zem.gg"}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr__default(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      return decodeURI(parseURL(event.req.originalUrl || event.req.url).pathname).replace(/\/$/, "/index");
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"9352-hq5T2mrdBC9H0I7OF49MpDLjQuI\"",
    "mtime": "2022-08-31T06:19:34.317Z",
    "path": "../public/200.html"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-UosdYfMEi/6/5oVQDGBhtb8kU1k\"",
    "mtime": "2022-08-31T06:19:14.680Z",
    "path": "../public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"9352-EOIr7xQtrofUlF5KeaSbsS2bIfA\"",
    "mtime": "2022-08-31T06:19:34.033Z",
    "path": "../public/index.html"
  },
  "/riot.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"24-VHkizzUV1GkkQklvv2vdtiI5m5o\"",
    "mtime": "2022-08-31T06:19:14.660Z",
    "path": "../public/riot.txt"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"3a-ycGpjKbSPUE5yPu0Aa9poj1SO/o\"",
    "mtime": "2022-08-31T06:19:14.660Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"c9b-qnmRJCkSSzhzyBbqrUAYdeuuYi8\"",
    "mtime": "2022-08-31T06:19:14.660Z",
    "path": "../public/sitemap.xml"
  },
  "/sw.js": {
    "type": "application/javascript",
    "etag": "\"e6d-neAVPdE+tAbuKd++mMg0ETGmiC4\"",
    "mtime": "2022-08-31T06:19:14.660Z",
    "path": "../public/sw.js"
  },
  "/_nuxt/195851c.js": {
    "type": "application/javascript",
    "etag": "\"32a73-RCRBrb8uKAYKMSMjTaUs43zjLwg\"",
    "mtime": "2022-08-31T06:19:14.688Z",
    "path": "../public/_nuxt/195851c.js"
  },
  "/_nuxt/1abdbb2.js": {
    "type": "application/javascript",
    "etag": "\"1fb-HcmEYuqXMz1f4WvrISiYrSsEb0Q\"",
    "mtime": "2022-08-31T06:19:14.688Z",
    "path": "../public/_nuxt/1abdbb2.js"
  },
  "/_nuxt/2699d18.js": {
    "type": "application/javascript",
    "etag": "\"31972-wcgRbQU+tEE4tAdiIYyMT9xD0oE\"",
    "mtime": "2022-08-31T06:19:14.688Z",
    "path": "../public/_nuxt/2699d18.js"
  },
  "/_nuxt/2a8a205.js": {
    "type": "application/javascript",
    "etag": "\"3fe92-kttqykONvNhFd9DXAYmC6Pkc1rg\"",
    "mtime": "2022-08-31T06:19:14.684Z",
    "path": "../public/_nuxt/2a8a205.js"
  },
  "/_nuxt/3a675ec.js": {
    "type": "application/javascript",
    "etag": "\"1c95-OrR2Vkr5zyjDJjSXUqvVF23sp5U\"",
    "mtime": "2022-08-31T06:19:14.684Z",
    "path": "../public/_nuxt/3a675ec.js"
  },
  "/_nuxt/4aec3c6.js": {
    "type": "application/javascript",
    "etag": "\"1485-pM5+c7cm/HuljVzu7LNvHGqgfg0\"",
    "mtime": "2022-08-31T06:19:14.684Z",
    "path": "../public/_nuxt/4aec3c6.js"
  },
  "/_nuxt/53ca2a6.js": {
    "type": "application/javascript",
    "etag": "\"357f-rSALtaz7i07dBtNt2iPYp/TQpVI\"",
    "mtime": "2022-08-31T06:19:14.684Z",
    "path": "../public/_nuxt/53ca2a6.js"
  },
  "/_nuxt/64469af.js": {
    "type": "application/javascript",
    "etag": "\"3739c-FVH3T1LN5tg8Lr4YqYHk4LbW+Wg\"",
    "mtime": "2022-08-31T06:19:14.684Z",
    "path": "../public/_nuxt/64469af.js"
  },
  "/_nuxt/669fddb.js": {
    "type": "application/javascript",
    "etag": "\"63c0-hib7E6X1p/uqUhysn9lTVlj76d0\"",
    "mtime": "2022-08-31T06:19:14.684Z",
    "path": "../public/_nuxt/669fddb.js"
  },
  "/_nuxt/7009483.js": {
    "type": "application/javascript",
    "etag": "\"39c4-4gcyzB2ifzCXJ1U4N0Di0HQ0A3o\"",
    "mtime": "2022-08-31T06:19:14.684Z",
    "path": "../public/_nuxt/7009483.js"
  },
  "/_nuxt/8e02272.js": {
    "type": "application/javascript",
    "etag": "\"1b41-lEkmEA097umGK2rr2X4XNtOVB7I\"",
    "mtime": "2022-08-31T06:19:14.684Z",
    "path": "../public/_nuxt/8e02272.js"
  },
  "/_nuxt/9c899c8.js": {
    "type": "application/javascript",
    "etag": "\"49a3-J0XLmfI9dP5PVgOISAz9Xo1vAoY\"",
    "mtime": "2022-08-31T06:19:14.680Z",
    "path": "../public/_nuxt/9c899c8.js"
  },
  "/_nuxt/a3c8ddd.js": {
    "type": "application/javascript",
    "etag": "\"1338a-5JojxWm3QtBTx3CgwzX5E/23xJI\"",
    "mtime": "2022-08-31T06:19:14.680Z",
    "path": "../public/_nuxt/a3c8ddd.js"
  },
  "/_nuxt/b27ec5f.js": {
    "type": "application/javascript",
    "etag": "\"9b5-LS8yR3pzv5wXauG50MgP5WXEMJQ\"",
    "mtime": "2022-08-31T06:19:14.680Z",
    "path": "../public/_nuxt/b27ec5f.js"
  },
  "/_nuxt/b5a6eba.js": {
    "type": "application/javascript",
    "etag": "\"17194-SJ1MuDYRVxAE03FdPdnDEPZgPSA\"",
    "mtime": "2022-08-31T06:19:14.680Z",
    "path": "../public/_nuxt/b5a6eba.js"
  },
  "/_nuxt/dcad587.js": {
    "type": "application/javascript",
    "etag": "\"a98-8FsKtinUfhMJreTu9gWAdktZ2yc\"",
    "mtime": "2022-08-31T06:19:14.680Z",
    "path": "../public/_nuxt/dcad587.js"
  },
  "/_nuxt/manifest.a8471600.json": {
    "type": "application/json",
    "etag": "\"d2-5BPQat9TsZ4eyDNoGH2ILqlpNNw\"",
    "mtime": "2022-08-31T06:19:14.680Z",
    "path": "../public/_nuxt/manifest.a8471600.json"
  },
  "/img/Discord.png": {
    "type": "image/png",
    "etag": "\"10bf4-/BLhq6xWhUDezFhOFao1UznA5s8\"",
    "mtime": "2022-08-31T06:19:14.680Z",
    "path": "../public/img/Discord.png"
  },
  "/img/Logo.png": {
    "type": "image/png",
    "etag": "\"227-/UFS/4oFmc6YDCCzsJOJVTcAMfw\"",
    "mtime": "2022-08-31T06:19:14.680Z",
    "path": "../public/img/Logo.png"
  },
  "/img/bg-wallpaper.jpg": {
    "type": "image/jpeg",
    "etag": "\"32b3e-IZTSOh/TLKg0BuDjcJLMAM5xNkQ\"",
    "mtime": "2022-08-31T06:19:14.680Z",
    "path": "../public/img/bg-wallpaper.jpg"
  },
  "/multiple/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"9a2d-7UmK81hu3aHtSsZfdZD4Ox+N4nk\"",
    "mtime": "2022-08-31T06:19:34.033Z",
    "path": "../public/multiple/index.html"
  },
  "/summoner/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"129de-78jPR+enJHVOK2K/6kITowwHkjo\"",
    "mtime": "2022-08-31T06:19:34.213Z",
    "path": "../public/summoner/index.html"
  },
  "/img/home_bg/1.png": {
    "type": "image/png",
    "etag": "\"30caa-Xmo7Kf/hSE4g5IMNzoHz3GeBHtI\"",
    "mtime": "2022-08-31T06:19:14.676Z",
    "path": "../public/img/home_bg/1.png"
  },
  "/img/home_bg/2.png": {
    "type": "image/png",
    "etag": "\"2d734-rvP4ESJ2z3g3A1T1gA+nPyYrtpQ\"",
    "mtime": "2022-08-31T06:19:14.676Z",
    "path": "../public/img/home_bg/2.png"
  },
  "/img/home_bg/3.png": {
    "type": "image/png",
    "etag": "\"59dc7-FRGrmCynBxAlPlAczXpUzbESKW8\"",
    "mtime": "2022-08-31T06:19:14.676Z",
    "path": "../public/img/home_bg/3.png"
  },
  "/img/home_bg/4.png": {
    "type": "image/png",
    "etag": "\"4f3d8-QUE+YvkFNUfPQjH0N+n6gURkclw\"",
    "mtime": "2022-08-31T06:19:14.676Z",
    "path": "../public/img/home_bg/4.png"
  },
  "/img/icon/lol.svg": {
    "type": "image/svg+xml",
    "etag": "\"2e8b-zY6+dxVuz1yul7odB2y3SByRXTI\"",
    "mtime": "2022-08-31T06:19:14.672Z",
    "path": "../public/img/icon/lol.svg"
  },
  "/img/icon/multiple.svg": {
    "type": "image/svg+xml",
    "etag": "\"429a-N9XXFMVt5fB4lrc0t2xCseQ97/4\"",
    "mtime": "2022-08-31T06:19:14.672Z",
    "path": "../public/img/icon/multiple.svg"
  },
  "/img/ranks/bronze.webp": {
    "type": "image/webp",
    "etag": "\"159e4-KmOogCWXF4htRKJDD/CDg6Op5gU\"",
    "mtime": "2022-08-31T06:19:14.672Z",
    "path": "../public/img/ranks/bronze.webp"
  },
  "/img/ranks/challenger.webp": {
    "type": "image/webp",
    "etag": "\"2d9ca-g8tETcF0O0yjpfMkm+mPrMEUiAM\"",
    "mtime": "2022-08-31T06:19:14.672Z",
    "path": "../public/img/ranks/challenger.webp"
  },
  "/img/ranks/diamond.webp": {
    "type": "image/webp",
    "etag": "\"1db9e-YKXUQi0ZaiQg/mbvI+7tSbqqwtM\"",
    "mtime": "2022-08-31T06:19:14.672Z",
    "path": "../public/img/ranks/diamond.webp"
  },
  "/img/ranks/gold.webp": {
    "type": "image/webp",
    "etag": "\"1f350-6Cj+hA5FQXnOXBIsKuKJYYSUSUo\"",
    "mtime": "2022-08-31T06:19:14.672Z",
    "path": "../public/img/ranks/gold.webp"
  },
  "/img/ranks/grandmaster.webp": {
    "type": "image/webp",
    "etag": "\"24370-SmehM3OtnUIGSdRDmsSJTVwlj/4\"",
    "mtime": "2022-08-31T06:19:14.672Z",
    "path": "../public/img/ranks/grandmaster.webp"
  },
  "/img/ranks/iron.webp": {
    "type": "image/webp",
    "etag": "\"8f9c-AHaopo5nM8XDxIgjzNsgf9LzPSo\"",
    "mtime": "2022-08-31T06:19:14.672Z",
    "path": "../public/img/ranks/iron.webp"
  },
  "/img/ranks/master.webp": {
    "type": "image/webp",
    "etag": "\"20354-hLxhZLR5/FrHOaYAMWE1NWUnQaA\"",
    "mtime": "2022-08-31T06:19:14.672Z",
    "path": "../public/img/ranks/master.webp"
  },
  "/img/ranks/platinum.webp": {
    "type": "image/webp",
    "etag": "\"1c998-SVm+UjoRWE8Yl+vn8hFCjL+lUUo\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/ranks/platinum.webp"
  },
  "/img/ranks/provisional.webp": {
    "type": "image/webp",
    "etag": "\"f144-PdPw0hup5Uf47VErDS6E+X+2UXA\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/ranks/provisional.webp"
  },
  "/img/ranks/silver.webp": {
    "type": "image/webp",
    "etag": "\"20a70-R981A+2ZKuyM6RcmM4lMHPrS9AE\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/ranks/silver.webp"
  },
  "/img/ranks/unranked.webp": {
    "type": "image/webp",
    "etag": "\"ed81-vB2xkpVN59lSj7qd41+IIwlmDgk\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/ranks/unranked.webp"
  },
  "/img/regions/br.png": {
    "type": "image/png",
    "etag": "\"22e1-5MJYcMlmD7GPTrrVNXdLrg74nL8\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/regions/br.png"
  },
  "/img/regions/eune.png": {
    "type": "image/png",
    "etag": "\"3473-jLvEVt/763L+I3oTBVDfsggJFs4\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/regions/eune.png"
  },
  "/img/regions/euw.png": {
    "type": "image/png",
    "etag": "\"36e3-IcLDJ5cqrHAKpsKwHM54M/9JPb4\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/regions/euw.png"
  },
  "/img/regions/jp.png": {
    "type": "image/png",
    "etag": "\"c2f-lvHCQQNLlsggjM3+5Ba97KDzSxo\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/regions/jp.png"
  },
  "/img/regions/kr.png": {
    "type": "image/png",
    "etag": "\"18a8-T1GJdbqANjsnd8UWbli5kmpF49k\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/regions/kr.png"
  },
  "/img/regions/lan.png": {
    "type": "image/png",
    "etag": "\"2819-oSGIUdg/k6TMCPjdsat+O2G8tGQ\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/regions/lan.png"
  },
  "/img/regions/las.png": {
    "type": "image/png",
    "etag": "\"1d96-jeinJO02HA69esoOBgJ64xg3OBQ\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/regions/las.png"
  },
  "/img/regions/na.png": {
    "type": "image/png",
    "etag": "\"2d52-9KN0GEdq/++/fBTyymblEcBIboU\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/regions/na.png"
  },
  "/img/regions/oce.png": {
    "type": "image/png",
    "etag": "\"24e3-nz8PVppM6nuGGXFEj8R1QLtYnE0\"",
    "mtime": "2022-08-31T06:19:14.668Z",
    "path": "../public/img/regions/oce.png"
  },
  "/img/regions/ru.png": {
    "type": "image/png",
    "etag": "\"1cc6-FNhsLNZT/CjGhHS3ANP+tPekiG4\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/regions/ru.png"
  },
  "/img/regions/tr.png": {
    "type": "image/png",
    "etag": "\"1643-4TE9cR6RToy/Ps2YvGQFbBdVoHE\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/regions/tr.png"
  },
  "/img/roles/BOTTOM.png": {
    "type": "image/png",
    "etag": "\"1ad7-SrpExii4tQPQwfdDfdpFlLU97vQ\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/roles/BOTTOM.png"
  },
  "/img/roles/BOTTOM.svg": {
    "type": "image/svg+xml",
    "etag": "\"176-9zrSW9hhj3Kq6daM+PZQdz+ou2Q\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/roles/BOTTOM.svg"
  },
  "/img/roles/JUNGLE.png": {
    "type": "image/png",
    "etag": "\"304e-Xu29b17hEQRiNABW8oYmBOHQB1g\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/roles/JUNGLE.png"
  },
  "/img/roles/JUNGLE.svg": {
    "type": "image/svg+xml",
    "etag": "\"411-IEhuWLolubaLf8RFMKV1shYzDD0\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/roles/JUNGLE.svg"
  },
  "/img/roles/MIDDLE.png": {
    "type": "image/png",
    "etag": "\"1ed5-fpkNt49SZAq0i4ooycC4qTK38CI\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/roles/MIDDLE.png"
  },
  "/img/roles/MIDDLE.svg": {
    "type": "image/svg+xml",
    "etag": "\"199-vlowcc3CHpqJaUMXXzSo+2X2vPk\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/roles/MIDDLE.svg"
  },
  "/img/roles/TOP.png": {
    "type": "image/png",
    "etag": "\"1926-sRVOVbbTSIDwa5MpqTdM1yj2XPg\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/roles/TOP.png"
  },
  "/img/roles/TOP.svg": {
    "type": "image/svg+xml",
    "etag": "\"17f-OL39NiLi7//6sNCXNpSTJcifq+8\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/roles/TOP.svg"
  },
  "/img/roles/UTILITY.png": {
    "type": "image/png",
    "etag": "\"1e32-/6vEstzm7dNGpYGKym55OPY8yFA\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/roles/UTILITY.png"
  },
  "/img/roles/UTILITY.svg": {
    "type": "image/svg+xml",
    "etag": "\"32c-XqV6coQWIDtYZ/gQue4yA86cHS8\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/roles/UTILITY.svg"
  },
  "/img/runes/domination.jpg": {
    "type": "image/jpeg",
    "etag": "\"14e52-VkkTnY/I78M1bHnQtW3W3tl20Ps\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/runes/domination.jpg"
  },
  "/img/runes/inspiration.jpg": {
    "type": "image/jpeg",
    "etag": "\"1781d-m8cwCMWCZxnPPkQdTEEKXDUEOU8\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/runes/inspiration.jpg"
  },
  "/img/runes/precision.jpg": {
    "type": "image/jpeg",
    "etag": "\"108ae-OFmRR8oaJgPZX1xD70rDee5Uf9g\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/runes/precision.jpg"
  },
  "/img/runes/resolve.jpg": {
    "type": "image/jpeg",
    "etag": "\"13361-FPZmsWqx2Mu16jRbQl64w1zz+bc\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/runes/resolve.jpg"
  },
  "/img/runes/sorcery.jpg": {
    "type": "image/jpeg",
    "etag": "\"12151-DANFk0JPUqmeys3H93tI4i57znY\"",
    "mtime": "2022-08-31T06:19:14.664Z",
    "path": "../public/img/runes/sorcery.jpg"
  },
  "/multiple/kr/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"9a6c-MwaLF9t1FImL5OKYJS0HFwDQ9UM\"",
    "mtime": "2022-08-31T06:19:34.265Z",
    "path": "../public/multiple/kr/index.html"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_eJTyMG = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_eJTyMG, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_eJTyMG, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr__default(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr__default(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
