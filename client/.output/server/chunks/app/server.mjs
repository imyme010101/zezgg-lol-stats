import { g as getDefaultExportFromNamespaceIfNotNamed, c as commonjsGlobal, a as getDefaultExportFromCjs } from '../handlers/renderer.mjs';
import * as mathjs from 'mathjs';
import * as cookieEs from 'cookie-es';
import * as axios from 'axios';
import * as destr from 'destr';
import * as url from 'url';
import * as hookable from 'hookable';
import * as radix3 from 'radix3';
import * as ohash from 'ohash';
import * as esnext_set_addAll from 'core-js/modules/esnext.set.add-all.js';
import * as esnext_set_deleteAll from 'core-js/modules/esnext.set.delete-all.js';
import * as esnext_set_difference from 'core-js/modules/esnext.set.difference.js';
import * as esnext_set_every from 'core-js/modules/esnext.set.every.js';
import * as esnext_set_filter from 'core-js/modules/esnext.set.filter.js';
import * as esnext_set_find from 'core-js/modules/esnext.set.find.js';
import * as esnext_set_intersection from 'core-js/modules/esnext.set.intersection.js';
import * as esnext_set_isDisjointFrom from 'core-js/modules/esnext.set.is-disjoint-from.js';
import * as esnext_set_isSubsetOf from 'core-js/modules/esnext.set.is-subset-of.js';
import * as esnext_set_isSupersetOf from 'core-js/modules/esnext.set.is-superset-of.js';
import * as esnext_set_join from 'core-js/modules/esnext.set.join.js';
import * as esnext_set_map from 'core-js/modules/esnext.set.map.js';
import * as esnext_set_reduce from 'core-js/modules/esnext.set.reduce.js';
import * as esnext_set_some from 'core-js/modules/esnext.set.some.js';
import * as esnext_set_symmetricDifference from 'core-js/modules/esnext.set.symmetric-difference.js';
import * as esnext_set_union from 'core-js/modules/esnext.set.union.js';
import * as deepmerge from 'deepmerge';
import * as esnext_array_lastIndex from 'core-js/modules/esnext.array.last-index.js';
import * as esnext_weakMap_deleteAll from 'core-js/modules/esnext.weak-map.delete-all.js';
import * as chart from 'chart.js';
import * as imageMeta from 'image-meta';
import 'h3';
import 'ufo';
import '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'fs';
import 'pathe';
import 'stream';
import 'unenv/runtime/mock/proxy';
import 'path';
import 'vm';
import 'module';

var server$2 = {exports: {}};

var server$1 = {exports: {}};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(mathjs);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(cookieEs);

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(axios);

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(destr);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(url);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(hookable);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(radix3);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(ohash);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_addAll);

const require$$9 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_deleteAll);

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_difference);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_every);

const require$$12 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_filter);

const require$$13 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_find);

const require$$14 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_intersection);

const require$$15 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isDisjointFrom);

const require$$16 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isSubsetOf);

const require$$17 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isSupersetOf);

const require$$18 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_join);

const require$$19 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_map);

const require$$20 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_reduce);

const require$$21 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_some);

const require$$22 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_symmetricDifference);

const require$$23 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_union);

const require$$24 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(deepmerge);

const require$$25 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_array_lastIndex);

const require$$26 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_weakMap_deleteAll);

const require$$27 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(chart);

const require$$28 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(imageMeta);

(function (module) {
	module.exports = function(modules) {
	  var installedModules = {};
	  var installedChunks = {
	    0: 0
	  };
	  function __webpack_require__(moduleId) {
	    if (installedModules[moduleId]) {
	      return installedModules[moduleId].exports;
	    }
	    var module2 = installedModules[moduleId] = {
	      i: moduleId,
	      l: false,
	      exports: {}
	    };
	    modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
	    module2.l = true;
	    return module2.exports;
	  }
	  __webpack_require__.e = function requireEnsure(chunkId) {
	    var promises = [];
	    var installedChunkData = installedChunks[chunkId];
	    if (installedChunkData !== 0) {
	      if (installedChunkData) {
	        promises.push(installedChunkData[2]);
	      } else {
	        var promise = new Promise(function(resolve, reject) {
	          installedChunkData = installedChunks[chunkId] = [resolve, reject];
	          import('../rollup/_dynamic-require.mjs').then(r => r.default || r).then(dynamicRequire => dynamicRequire( ({ "1": "pages/index", "2": "pages/multiple", "3": "pages/multiple/_region/_names", "4": "pages/summoner", "5": "pages/summoner/_region/_name/_mode", "6": "pages/summoner/_region/_name/champions/index", "7": "pages/summoner/_region/_name/live/index", "8": "pages/summoner/_region/_name/records/index" }[chunkId] || chunkId) + ".js")).then((chunk) => {
	            var moreModules = chunk.modules, chunkIds = chunk.ids;
	            for (var moduleId in moreModules) {
	              modules[moduleId] = moreModules[moduleId];
	            }
	            var callbacks = [];
	            for (var i = 0; i < chunkIds.length; i++) {
	              if (installedChunks[chunkIds[i]])
	                callbacks = callbacks.concat(installedChunks[chunkIds[i]][0]);
	              installedChunks[chunkIds[i]] = 0;
	            }
	            for (i = 0; i < callbacks.length; i++)
	              callbacks[i]();
	          });
	        });
	        promises.push(installedChunkData[2] = promise);
	      }
	    }
	    return Promise.all(promises);
	  };
	  __webpack_require__.m = modules;
	  __webpack_require__.c = installedModules;
	  __webpack_require__.d = function(exports, name, getter) {
	    if (!__webpack_require__.o(exports, name)) {
	      Object.defineProperty(exports, name, { enumerable: true, get: getter });
	    }
	  };
	  __webpack_require__.r = function(exports) {
	    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
	      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	  };
	  __webpack_require__.t = function(value, mode) {
	    if (mode & 1)
	      value = __webpack_require__(value);
	    if (mode & 8)
	      return value;
	    if (mode & 4 && typeof value === "object" && value && value.__esModule)
	      return value;
	    var ns = /* @__PURE__ */ Object.create(null);
	    __webpack_require__.r(ns);
	    Object.defineProperty(ns, "default", { enumerable: true, value });
	    if (mode & 2 && typeof value != "string")
	      for (var key in value)
	        __webpack_require__.d(ns, key, function(key2) {
	          return value[key2];
	        }.bind(null, key));
	    return ns;
	  };
	  __webpack_require__.n = function(module2) {
	    var getter = module2 && module2.__esModule ? function getDefault() {
	      return module2["default"];
	    } : function getModuleExports() {
	      return module2;
	    };
	    __webpack_require__.d(getter, "a", getter);
	    return getter;
	  };
	  __webpack_require__.o = function(object, property) {
	    return Object.prototype.hasOwnProperty.call(object, property);
	  };
	  __webpack_require__.p = "/_nuxt/";
	  __webpack_require__.oe = function(err) {
	    process.nextTick(function() {
	      throw err;
	    });
	  };
	  return __webpack_require__(__webpack_require__.s = 40);
	}([
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.d(__webpack_exports__, "n", function() {
	      return ref;
	    });
	    __webpack_require__.d(__webpack_exports__, "g", function() {
	      return isRef;
	    });
	    __webpack_require__.d(__webpack_exports__, "p", function() {
	      return toRef;
	    });
	    __webpack_require__.d(__webpack_exports__, "a", function() {
	      return computed;
	    });
	    __webpack_require__.d(__webpack_exports__, "m", function() {
	      return reactive;
	    });
	    __webpack_require__.d(__webpack_exports__, "f", function() {
	      return isReactive;
	    });
	    __webpack_require__.d(__webpack_exports__, "q", function() {
	      return watch;
	    });
	    __webpack_require__.d(__webpack_exports__, "i", function() {
	      return onBeforeMount;
	    });
	    __webpack_require__.d(__webpack_exports__, "j", function() {
	      return onBeforeUnmount;
	    });
	    __webpack_require__.d(__webpack_exports__, "l", function() {
	      return onUnmounted;
	    });
	    __webpack_require__.d(__webpack_exports__, "k", function() {
	      return onServerPrefetch;
	    });
	    __webpack_require__.d(__webpack_exports__, "o", function() {
	      return set;
	    });
	    __webpack_require__.d(__webpack_exports__, "e", function() {
	      return getCurrentInstance;
	    });
	    __webpack_require__.d(__webpack_exports__, "d", function() {
	      return defineComponent;
	    });
	    var _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
	    var _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0__);
	    __webpack_exports__["c"] = _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0___default.a;
	    const {
	      version,
	      ref,
	      shallowRef,
	      isRef,
	      toRef,
	      toRefs,
	      unref,
	      proxyRefs,
	      customRef,
	      triggerRef,
	      computed,
	      reactive,
	      isReactive,
	      isReadonly,
	      isShallow,
	      isProxy,
	      shallowReactive,
	      markRaw,
	      toRaw,
	      readonly,
	      shallowReadonly,
	      watch,
	      watchEffect,
	      watchPostEffect,
	      watchSyncEffect,
	      effectScope,
	      onScopeDispose,
	      getCurrentScope,
	      provide,
	      inject,
	      onBeforeMount,
	      onMounted,
	      onBeforeUpdate,
	      onUpdated,
	      onBeforeUnmount,
	      onUnmounted,
	      onErrorCaptured,
	      onActivated,
	      onDeactivated,
	      onServerPrefetch,
	      onRenderTracked,
	      onRenderTriggered,
	      set,
	      del,
	      h,
	      getCurrentInstance,
	      useSlots,
	      useAttrs,
	      mergeDefaults,
	      nextTick,
	      useCssModule,
	      useCssVars,
	      defineComponent,
	      defineAsyncComponent
	    } = _vue_runtime_common_js__WEBPACK_IMPORTED_MODULE_0___default.a;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.d(__webpack_exports__, "a", function() {
	      return normalizeComponent;
	    });
	    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
	      var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
	      if (render) {
	        options.render = render;
	        options.staticRenderFns = staticRenderFns;
	        options._compiled = true;
	      }
	      if (functionalTemplate) {
	        options.functional = true;
	      }
	      if (scopeId) {
	        options._scopeId = "data-v-" + scopeId;
	      }
	      var hook;
	      if (moduleIdentifier) {
	        hook = function(context) {
	          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
	          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
	            context = __VUE_SSR_CONTEXT__;
	          }
	          if (injectStyles) {
	            injectStyles.call(this, context);
	          }
	          if (context && context._registeredComponents) {
	            context._registeredComponents.add(moduleIdentifier);
	          }
	        };
	        options._ssrRegister = hook;
	      } else if (injectStyles) {
	        hook = shadowMode ? function() {
	          injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
	        } : injectStyles;
	      }
	      if (hook) {
	        if (options.functional) {
	          options._injectStyles = hook;
	          var originalRender = options.render;
	          options.render = function renderWithStyleInjection(h, context) {
	            hook.call(context);
	            return originalRender(h, context);
	          };
	        } else {
	          var existing = options.beforeCreate;
	          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	      }
	      return {
	        exports: scriptExports,
	        options
	      };
	    }
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.d(__webpack_exports__, "d", function() {
	      return mapState;
	    });
	    __webpack_require__.d(__webpack_exports__, "c", function() {
	      return mapGetters;
	    });
	    __webpack_require__.d(__webpack_exports__, "b", function() {
	      return mapActions;
	    });
	    var _dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
	    var _dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0__);
	    __webpack_require__.d(__webpack_exports__, "a", function() {
	      return _dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0___default.a;
	    });
	    const {
	      Store,
	      install,
	      version,
	      mapState,
	      mapMutations,
	      mapGetters,
	      mapActions,
	      createNamespacedHelpers,
	      createLogger
	    } = _dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0___default.a;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    (function(URLSearchParams) {
	      __webpack_require__.d(__webpack_exports__, "a", function() {
	        return encodeParam;
	      });
	      __webpack_require__.d(__webpack_exports__, "b", function() {
	        return encodePath;
	      });
	      __webpack_require__.d(__webpack_exports__, "c", function() {
	        return getQuery;
	      });
	      __webpack_require__.d(__webpack_exports__, "d", function() {
	        return hasProtocol;
	      });
	      __webpack_require__.d(__webpack_exports__, "e", function() {
	        return isSamePath;
	      });
	      __webpack_require__.d(__webpack_exports__, "f", function() {
	        return joinURL;
	      });
	      __webpack_require__.d(__webpack_exports__, "g", function() {
	        return normalizeURL;
	      });
	      __webpack_require__.d(__webpack_exports__, "h", function() {
	        return parseURL;
	      });
	      __webpack_require__.d(__webpack_exports__, "i", function() {
	        return withLeadingSlash;
	      });
	      __webpack_require__.d(__webpack_exports__, "j", function() {
	        return withQuery;
	      });
	      __webpack_require__.d(__webpack_exports__, "k", function() {
	        return withoutBase;
	      });
	      __webpack_require__.d(__webpack_exports__, "l", function() {
	        return withoutTrailingSlash;
	      });
	      const n = /[^\0-\x7E]/;
	      const t = /[\x2E\u3002\uFF0E\uFF61]/g;
	      const o = {
	        overflow: "Overflow Error",
	        "not-basic": "Illegal Input",
	        "invalid-input": "Invalid Input"
	      };
	      const e = Math.floor;
	      const r = String.fromCharCode;
	      function s(n2) {
	        throw new RangeError(o[n2]);
	      }
	      const c = function(n2, t2) {
	        return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
	      };
	      const u = function(n2, t2, o2) {
	        let r2 = 0;
	        for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
	          n2 = e(n2 / 35);
	        }
	        return e(r2 + 36 * n2 / (n2 + 38));
	      };
	      function toASCII(o2) {
	        return function(n2, o3) {
	          const e2 = n2.split("@");
	          let r2 = "";
	          e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
	          const s2 = function(n3, t2) {
	            const o4 = [];
	            let e3 = n3.length;
	            for (; e3--; ) {
	              o4[e3] = t2(n3[e3]);
	            }
	            return o4;
	          }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
	          return r2 + s2;
	        }(o2, function(t2) {
	          return n.test(t2) ? "xn--" + function(n2) {
	            const t3 = [];
	            const o3 = (n2 = function(n3) {
	              const t4 = [];
	              let o4 = 0;
	              const e2 = n3.length;
	              for (; o4 < e2; ) {
	                const r2 = n3.charCodeAt(o4++);
	                if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
	                  const e3 = n3.charCodeAt(o4++);
	                  (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
	                } else {
	                  t4.push(r2);
	                }
	              }
	              return t4;
	            }(n2)).length;
	            let f = 128;
	            let i = 0;
	            let l = 72;
	            for (const o4 of n2) {
	              o4 < 128 && t3.push(r(o4));
	            }
	            const h = t3.length;
	            let p = h;
	            for (h && t3.push("-"); p < o3; ) {
	              let o4 = 2147483647;
	              for (const t4 of n2) {
	                t4 >= f && t4 < o4 && (o4 = t4);
	              }
	              const a = p + 1;
	              o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
	              for (const o5 of n2) {
	                if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
	                  let n3 = i;
	                  for (let o6 = 36; ; o6 += 36) {
	                    const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
	                    if (n3 < s2) {
	                      break;
	                    }
	                    const u2 = n3 - s2;
	                    const f2 = 36 - s2;
	                    t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
	                  }
	                  t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
	                }
	              }
	              ++i, ++f;
	            }
	            return t3.join("");
	          }(t2) : t2;
	        });
	      }
	      const HASH_RE = /#/g;
	      const AMPERSAND_RE = /&/g;
	      const SLASH_RE = /\//g;
	      const EQUAL_RE = /=/g;
	      const IM_RE = /\?/g;
	      const PLUS_RE = /\+/g;
	      const ENC_BRACKET_OPEN_RE = /%5B/gi;
	      const ENC_BRACKET_CLOSE_RE = /%5D/gi;
	      const ENC_CARET_RE = /%5E/gi;
	      const ENC_BACKTICK_RE = /%60/gi;
	      const ENC_CURLY_OPEN_RE = /%7B/gi;
	      const ENC_PIPE_RE = /%7C/gi;
	      const ENC_CURLY_CLOSE_RE = /%7D/gi;
	      const ENC_SPACE_RE = /%20/gi;
	      const ENC_SLASH_RE = /%2F/gi;
	      const ENC_ENC_SLASH_RE = /%252F/gi;
	      function encode(text) {
	        return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
	      }
	      function encodeHash(text) {
	        return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
	      }
	      function encodeQueryValue(text) {
	        return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
	      }
	      function encodeQueryKey(text) {
	        return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
	      }
	      function encodePath(text) {
	        return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
	      }
	      function encodeParam(text) {
	        return encodePath(text).replace(SLASH_RE, "%2F");
	      }
	      function decode(text = "") {
	        try {
	          return decodeURIComponent("" + text);
	        } catch (_err) {
	          return "" + text;
	        }
	      }
	      function decodePath(text) {
	        return decode(text.replace(ENC_SLASH_RE, "%252F"));
	      }
	      function decodeQueryValue(text) {
	        return decode(text.replace(PLUS_RE, " "));
	      }
	      function encodeHost(name = "") {
	        return toASCII(name);
	      }
	      function parseQuery(paramsStr = "") {
	        const obj = {};
	        if (paramsStr[0] === "?") {
	          paramsStr = paramsStr.substr(1);
	        }
	        for (const param of paramsStr.split("&")) {
	          const s2 = param.match(/([^=]+)=?(.*)/) || [];
	          if (s2.length < 2) {
	            continue;
	          }
	          const key = decode(s2[1]);
	          if (key === "__proto__" || key === "constructor") {
	            continue;
	          }
	          const value = decodeQueryValue(s2[2] || "");
	          if (obj[key]) {
	            if (Array.isArray(obj[key])) {
	              obj[key].push(value);
	            } else {
	              obj[key] = [obj[key], value];
	            }
	          } else {
	            obj[key] = value;
	          }
	        }
	        return obj;
	      }
	      function encodeQueryItem(key, val) {
	        if (typeof val === "number" || typeof val === "boolean") {
	          val = String(val);
	        }
	        if (!val) {
	          return encodeQueryKey(key);
	        }
	        if (Array.isArray(val)) {
	          return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
	        }
	        return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
	      }
	      function stringifyQuery(query) {
	        return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
	      }
	      class $URL {
	        constructor(input = "") {
	          this.query = {};
	          if (typeof input !== "string") {
	            throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
	          }
	          const parsed = parseURL(input);
	          this.protocol = decode(parsed.protocol);
	          this.host = decode(parsed.host);
	          this.auth = decode(parsed.auth);
	          this.pathname = decodePath(parsed.pathname);
	          this.query = parseQuery(parsed.search);
	          this.hash = decode(parsed.hash);
	        }
	        get hostname() {
	          return parseHost(this.host).hostname;
	        }
	        get port() {
	          return parseHost(this.host).port || "";
	        }
	        get username() {
	          return parseAuth(this.auth).username;
	        }
	        get password() {
	          return parseAuth(this.auth).password || "";
	        }
	        get hasProtocol() {
	          return this.protocol.length;
	        }
	        get isAbsolute() {
	          return this.hasProtocol || this.pathname[0] === "/";
	        }
	        get search() {
	          const q = stringifyQuery(this.query);
	          return q.length ? "?" + q : "";
	        }
	        get searchParams() {
	          const p = new URLSearchParams();
	          for (const name in this.query) {
	            const value = this.query[name];
	            if (Array.isArray(value)) {
	              value.forEach((v) => p.append(name, v));
	            } else {
	              p.append(name, value || "");
	            }
	          }
	          return p;
	        }
	        get origin() {
	          return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
	        }
	        get fullpath() {
	          return encodePath(this.pathname) + this.search + encodeHash(this.hash);
	        }
	        get encodedAuth() {
	          if (!this.auth) {
	            return "";
	          }
	          const {
	            username,
	            password
	          } = parseAuth(this.auth);
	          return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
	        }
	        get href() {
	          const auth = this.encodedAuth;
	          const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
	          return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
	        }
	        append(url) {
	          if (url.hasProtocol) {
	            throw new Error("Cannot append a URL with protocol");
	          }
	          Object.assign(this.query, url.query);
	          if (url.pathname) {
	            this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
	          }
	          if (url.hash) {
	            this.hash = url.hash;
	          }
	        }
	        toJSON() {
	          return this.href;
	        }
	        toString() {
	          return this.href;
	        }
	      }
	      const PROTOCOL_REGEX = /^\w+:(\/\/)?/;
	      const PROTOCOL_RELATIVE_REGEX = /^\/\/[^/]+/;
	      function hasProtocol(inputStr, acceptProtocolRelative = false) {
	        return PROTOCOL_REGEX.test(inputStr) || acceptProtocolRelative && PROTOCOL_RELATIVE_REGEX.test(inputStr);
	      }
	      const TRAILING_SLASH_RE = /\/$|\/\?/;
	      function hasTrailingSlash(input = "", queryParams = false) {
	        if (!queryParams) {
	          return input.endsWith("/");
	        }
	        return TRAILING_SLASH_RE.test(input);
	      }
	      function withoutTrailingSlash(input = "", queryParams = false) {
	        if (!queryParams) {
	          return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
	        }
	        if (!hasTrailingSlash(input, true)) {
	          return input || "/";
	        }
	        const [s0, ...s2] = input.split("?");
	        return (s0.slice(0, -1) || "/") + (s2.length ? `?${s2.join("?")}` : "");
	      }
	      function withTrailingSlash(input = "", queryParams = false) {
	        if (!queryParams) {
	          return input.endsWith("/") ? input : input + "/";
	        }
	        if (hasTrailingSlash(input, true)) {
	          return input || "/";
	        }
	        const [s0, ...s2] = input.split("?");
	        return s0 + "/" + (s2.length ? `?${s2.join("?")}` : "");
	      }
	      function hasLeadingSlash(input = "") {
	        return input.startsWith("/");
	      }
	      function withoutLeadingSlash(input = "") {
	        return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
	      }
	      function withLeadingSlash(input = "") {
	        return hasLeadingSlash(input) ? input : "/" + input;
	      }
	      function withoutBase(input, base) {
	        if (isEmptyURL(base)) {
	          return input;
	        }
	        const _base = withoutTrailingSlash(base);
	        if (!input.startsWith(_base)) {
	          return input;
	        }
	        const trimmed = input.substring(_base.length);
	        return trimmed[0] === "/" ? trimmed : "/" + trimmed;
	      }
	      function withQuery(input, query) {
	        const parsed = parseURL(input);
	        const mergedQuery = {
	          ...parseQuery(parsed.search),
	          ...query
	        };
	        parsed.search = stringifyQuery(mergedQuery);
	        return stringifyParsedURL(parsed);
	      }
	      function getQuery(input) {
	        return parseQuery(parseURL(input).search);
	      }
	      function isEmptyURL(url) {
	        return !url || url === "/";
	      }
	      function isNonEmptyURL(url) {
	        return url && url !== "/";
	      }
	      function joinURL(base, ...input) {
	        let url = base || "";
	        for (const i of input.filter(isNonEmptyURL)) {
	          url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
	        }
	        return url;
	      }
	      function createURL(input) {
	        return new $URL(input);
	      }
	      function normalizeURL(input) {
	        return createURL(input).toString();
	      }
	      function isSamePath(p1, p2) {
	        return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
	      }
	      function parseURL(input = "", defaultProto) {
	        if (!hasProtocol(input, true)) {
	          return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
	        }
	        const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
	        const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
	        const {
	          pathname,
	          search,
	          hash
	        } = parsePath(path);
	        return {
	          protocol,
	          auth: auth ? auth.substr(0, auth.length - 1) : "",
	          host,
	          pathname,
	          search,
	          hash
	        };
	      }
	      function parsePath(input = "") {
	        const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
	        return {
	          pathname,
	          search,
	          hash
	        };
	      }
	      function parseAuth(input = "") {
	        const [username, password] = input.split(":");
	        return {
	          username: decode(username),
	          password: decode(password)
	        };
	      }
	      function parseHost(input = "") {
	        const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
	        return {
	          hostname: decode(hostname),
	          port
	        };
	      }
	      function stringifyParsedURL(parsed) {
	        const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
	        if (!parsed.protocol) {
	          return fullpath;
	        }
	        return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
	      }
	    }).call(this, __webpack_require__(22)["URLSearchParams"]);
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.d(__webpack_exports__, "e", function() {
	      return timeDifference;
	    });
	    __webpack_require__.d(__webpack_exports__, "c", function() {
	      return secToTime;
	    });
	    __webpack_require__.d(__webpack_exports__, "d", function() {
	      return sortTeamByRole;
	    });
	    __webpack_require__.d(__webpack_exports__, "a", function() {
	      return createCDragonAssetUrl;
	    });
	    __webpack_require__.d(__webpack_exports__, "b", function() {
	      return getApiUrl;
	    });
	    function timeDifference(previous) {
	      const current = new Date();
	      const msPerMinute = 60 * 1e3;
	      const msPerHour = msPerMinute * 60;
	      const msPerDay = msPerHour * 24;
	      const msPerWeek = msPerDay * 7;
	      const elapsed = current - previous;
	      if (elapsed < msPerMinute) {
	        return Math.round(elapsed / 1e3) + " \uCD08 \uC804";
	      } else if (elapsed < msPerHour) {
	        return Math.round(elapsed / msPerMinute) + " \uBD84 \uC804";
	      } else if (elapsed < msPerDay) {
	        return Math.round(elapsed / msPerHour) + " \uC2DC\uAC04 \uC804";
	      } else if (elapsed < msPerWeek) {
	        return Math.round(elapsed / msPerDay) + " \uC77C \uC804";
	      } else {
	        const dateOptions = {
	          day: "2-digit",
	          month: "2-digit",
	          year: "2-digit"
	        };
	        return new Date(previous).toLocaleString(void 0, dateOptions).replace(/\//g, ".");
	      }
	    }
	    function secToTime(seconds) {
	      const min = Math.floor(seconds / 60);
	      let newSec = Math.floor(seconds - min * 60);
	      newSec = newSec < 10 ? "0" + newSec : newSec;
	      return `${min}:${newSec}1`;
	    }
	    function sortTeamByRole(a, b) {
	      const sortingArr = ["TOP", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"];
	      return sortingArr.indexOf(a.role) - sortingArr.indexOf(b.role);
	    }
	    function createCDragonAssetUrl(iconPath) {
	      const name = iconPath.split("/assets/")[1].toLowerCase();
	      return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${name}`;
	    }
	    function getApiUrl() {
	      return ("http://localhost:3333") + "/";
	    }
	  },
	  function(module2, exports, __webpack_require__) {
	    module2.exports = function(cssWithMappingToString) {
	      var list = [];
	      list.toString = function toString() {
	        return this.map(function(item) {
	          var content = cssWithMappingToString(item);
	          if (item[2]) {
	            return "@media ".concat(item[2], " {").concat(content, "}");
	          }
	          return content;
	        }).join("");
	      };
	      list.i = function(modules, mediaQuery, dedupe) {
	        if (typeof modules === "string") {
	          modules = [[null, modules, ""]];
	        }
	        var alreadyImportedModules = {};
	        if (dedupe) {
	          for (var i = 0; i < this.length; i++) {
	            var id = this[i][0];
	            if (id != null) {
	              alreadyImportedModules[id] = true;
	            }
	          }
	        }
	        for (var _i = 0; _i < modules.length; _i++) {
	          var item = [].concat(modules[_i]);
	          if (dedupe && alreadyImportedModules[item[0]]) {
	            continue;
	          }
	          if (mediaQuery) {
	            if (!item[2]) {
	              item[2] = mediaQuery;
	            } else {
	              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
	            }
	          }
	          list.push(item);
	        }
	      };
	      return list;
	    };
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    __webpack_require__.d(__webpack_exports__, "default", function() {
	      return addStylesServer;
	    });
	    function listToStyles(parentId, list) {
	      var styles = [];
	      var newStyles = {};
	      for (var i = 0; i < list.length; i++) {
	        var item = list[i];
	        var id = item[0];
	        var css = item[1];
	        var media = item[2];
	        var sourceMap = item[3];
	        var part = {
	          id: parentId + ":" + i,
	          css,
	          media,
	          sourceMap
	        };
	        if (!newStyles[id]) {
	          styles.push(newStyles[id] = {
	            id,
	            parts: [part]
	          });
	        } else {
	          newStyles[id].parts.push(part);
	        }
	      }
	      return styles;
	    }
	    function addStylesServer(parentId, list, isProduction, context) {
	      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
	        context = __VUE_SSR_CONTEXT__;
	      }
	      if (context) {
	        if (!context.hasOwnProperty("styles")) {
	          Object.defineProperty(context, "styles", {
	            enumerable: true,
	            get: function() {
	              return renderStyles(context._styles);
	            }
	          });
	          context._renderStyles = renderStyles;
	        }
	        var styles = context._styles || (context._styles = {});
	        list = listToStyles(parentId, list);
	        if (isProduction) {
	          addStyleProd(styles, list);
	        } else {
	          addStyleDev(styles, list);
	        }
	      }
	    }
	    function addStyleProd(styles, list) {
	      for (var i = 0; i < list.length; i++) {
	        var parts = list[i].parts;
	        for (var j = 0; j < parts.length; j++) {
	          var part = parts[j];
	          var id = part.media || "default";
	          var style = styles[id];
	          if (style) {
	            if (style.ids.indexOf(part.id) < 0) {
	              style.ids.push(part.id);
	              style.css += "\n" + part.css;
	            }
	          } else {
	            styles[id] = {
	              ids: [part.id],
	              css: part.css,
	              media: part.media
	            };
	          }
	        }
	      }
	    }
	    function addStyleDev(styles, list) {
	      for (var i = 0; i < list.length; i++) {
	        var parts = list[i].parts;
	        for (var j = 0; j < parts.length; j++) {
	          var part = parts[j];
	          styles[part.id] = {
	            ids: [part.id],
	            css: part.css,
	            media: part.media
	          };
	        }
	      }
	    }
	    function renderStyles(styles) {
	      var css = "";
	      for (var key in styles) {
	        var style = styles[key];
	        css += '<style data-vue-ssr-id="' + style.ids.join(" ") + '"' + (style.media ? ' media="' + style.media + '"' : "") + ">" + style.css + "</style>";
	      }
	      return css;
	    }
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.d(__webpack_exports__, "f", function() {
	      return getPrimarRune;
	    });
	    __webpack_require__.d(__webpack_exports__, "g", function() {
	      return getSecondaryRune;
	    });
	    __webpack_require__.d(__webpack_exports__, "b", function() {
	      return createMatchData;
	    });
	    __webpack_require__.d(__webpack_exports__, "a", function() {
	      return createBasicSummonerData;
	    });
	    __webpack_require__.d(__webpack_exports__, "c", function() {
	      return createRecordsData;
	    });
	    __webpack_require__.d(__webpack_exports__, "h", function() {
	      return getSummonerScore;
	    });
	    __webpack_require__.d(__webpack_exports__, "i", function() {
	      return getSummonerScoreTotal;
	    });
	    __webpack_require__.d(__webpack_exports__, "d", function() {
	      return getCarryScore;
	    });
	    __webpack_require__.d(__webpack_exports__, "j", function() {
	      return getTeamScore;
	    });
	    __webpack_require__.d(__webpack_exports__, "e", function() {
	      return getColorTeamUn;
	    });
	    var _helpers_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
	    var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
	    var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
	    function getPrimarRune(perks, runes) {
	      const primaryRune = perks.selected.length ? runes.perks[perks.selected[0]] : null;
	      return primaryRune ? Object(_helpers_functions_js__WEBPACK_IMPORTED_MODULE_0__["a"])(primaryRune.icon) : null;
	    }
	    function getSecondaryRune(perks, runes) {
	      const secondaryRune = runes.perkstyles[perks.secondaryStyle];
	      return secondaryRune ? Object(_helpers_functions_js__WEBPACK_IMPORTED_MODULE_0__["a"])(secondaryRune.icon) : null;
	    }
	    function createMatchData(matches, runes) {
	      for (const match of matches) {
	        match.primaryRune = getPrimarRune(match.perks, runes);
	        match.secondaryRune = getSecondaryRune(match.perks, runes);
	        const date = new Date(match.date);
	        const dateOptions = {
	          day: "2-digit",
	          month: "2-digit",
	          year: "numeric"
	        };
	        const timeOptions = {
	          hour12: false,
	          hour: "2-digit",
	          minute: "2-digit"
	        };
	        match.fullDate = {
	          date: date.toLocaleString(void 0, dateOptions),
	          time: date.toLocaleString(void 0, timeOptions)
	        };
	        match.date = Object(_helpers_functions_js__WEBPACK_IMPORTED_MODULE_0__["e"])(match.date);
	        match.map = _data_data_js__WEBPACK_IMPORTED_MODULE_1__["c"][match.map];
	        match.gamemode = _data_data_js__WEBPACK_IMPORTED_MODULE_1__["b"][match.gamemode];
	        if (!match.gamemode) {
	          match.gamemode = {
	            name: "Unknown gamemode"
	          };
	        }
	      }
	      return matches;
	    }
	    function createBasicSummonerData(RiotData) {
	      if (typeof RiotData.ranked == "undefined") {
	        RiotData.soloQ = getLeagueData(RiotData.soloQ, "Solo/Duo");
	        RiotData.flex5v5 = getLeagueData(RiotData.flex5v5, "Flex 5vs5");
	        RiotData.flex3v3 = getLeagueData(RiotData.flex3v3, "Flex 3vs3");
	        if (!RiotData.soloQ) {
	          RiotData.soloQ = {
	            fullRank: "Unranked",
	            rankImgLink: "/img/ranks/unranked.webp",
	            leaguePoints: 0,
	            wins: 0,
	            losses: 0,
	            winrate: "0%",
	            name: "Solo/Duo"
	          };
	        }
	        if (!RiotData.flex5v5) {
	          RiotData.flex5v5 = {
	            fullRank: "Unranked",
	            rankImgLink: "/img/ranks/unranked.webp",
	            leaguePoints: 0,
	            tier: null,
	            wins: 0,
	            losses: 0,
	            winrate: "0%",
	            name: "\uC790\uC720\uB7AD\uD06C"
	          };
	        }
	      } else {
	        RiotData.ranked.soloQ = getLeagueData(RiotData.ranked.soloQ, "Solo/Duo");
	        RiotData.ranked.flex5v5 = getLeagueData(RiotData.ranked.flex5v5, "Flex 5vs5");
	        RiotData.ranked.flex3v3 = getLeagueData(RiotData.ranked.flex3v3, "Flex 3vs3");
	        if (!RiotData.ranked.soloQ) {
	          RiotData.ranked.soloQ = {
	            fullRank: "Unranked",
	            rankImgLink: "/img/ranks/unranked.webp",
	            leaguePoints: 0,
	            wins: 0,
	            losses: 0,
	            winrate: "0%",
	            name: "Solo/Duo"
	          };
	        }
	        if (!RiotData.ranked.flex5v5) {
	          RiotData.ranked.flex5v5 = {
	            fullRank: "Unranked",
	            rankImgLink: "/img/ranks/unranked.webp",
	            leaguePoints: 0,
	            tier: null,
	            wins: 0,
	            losses: 0,
	            winrate: "0%",
	            name: "\uC790\uC720\uB7AD\uD06C"
	          };
	        }
	      }
	      return RiotData;
	    }
	    function createRecordsData(recordsDto) {
	      const records = recordsDto.reduce((acc, record) => {
	        acc[record.what] = record;
	        return acc;
	      }, {});
	      records.game_duration.amount = Object(_helpers_functions_js__WEBPACK_IMPORTED_MODULE_0__["c"])(records.game_duration.amount);
	      records.gold.amount = records.gold.amount.toLocaleString();
	      records.damage_taken.amount = records.damage_taken.amount.toLocaleString();
	      records.damage_dealt_champions.amount = records.damage_dealt_champions.amount.toLocaleString();
	      records.damage_dealt_objectives.amount = records.damage_dealt_objectives.amount.toLocaleString();
	      records.kp.amount = `${records.kp.amount}%`;
	      records.time_spent_living.amount = Object(_helpers_functions_js__WEBPACK_IMPORTED_MODULE_0__["c"])(records.time_spent_living.amount);
	      records.heal.amount = records.heal.amount.toLocaleString();
	      return records;
	    }
	    function getLeagueData(leagueData, leagueName) {
	      if (!leagueData || typeof leagueData == "undefined")
	        return null;
	      leagueData.rankImgLink = getRankImg(leagueData);
	      leagueData.name = leagueName;
	      return leagueData;
	    }
	    function getRankImg(leagueData) {
	      const tier = leagueData.tier.toLowerCase();
	      return `/img/ranks/${tier}.webp`;
	    }
	    function getSummonerScore(matches, scores, tier, type) {
	      if (tier == null || matches.length < 3) {
	        return null;
	      } else {
	        const nMatches = matches.map((a1) => {
	          if (a1.role !== "NONE" && a1.result !== "Remake") {
	            return a1.stats[type];
	          }
	        }).filter((a1) => {
	          if (typeof a1 !== "undefined" && a1 !== null && a1 !== "") {
	            return a1;
	          }
	        });
	        if (nMatches.length < 3) {
	          return null;
	        } else {
	          const myAvg = Math.floor(Object(mathjs__WEBPACK_IMPORTED_MODULE_2__["mean"])(nMatches));
	          const tierAvg = Math.floor(Number(scores[type + "Avgs"][tier.toLowerCase()]));
	          const score = Math.floor((Number(myAvg) - Number(scores[type + "Avgs"][tier.toLowerCase()])) / Number(scores[type + "Stds"][tier.toLowerCase()]) * 10 + 50);
	          const percent = myAvg / tierAvg * 50 > 100 ? 100 : myAvg / tierAvg * 50;
	          let inbun = 0;
	          inbun = (Number(score) - 50) / 10 + 0.1;
	          if (inbun < 0) {
	            inbun = Math.ceil(Math.abs(inbun)) + inbun;
	          } else {
	            inbun = inbun + 1;
	          }
	          return {
	            percent,
	            score,
	            inbun: Number(inbun.toFixed(1))
	          };
	        }
	      }
	    }
	    function getSummonerScoreTotal(summonerScores) {
	      const inbun = (Number(summonerScores["vision"]["inbun"] + summonerScores["kills"]["inbun"] + summonerScores["assists"]["inbun"]) / 3).toFixed(1);
	      return {
	        score: 0,
	        inbun: Number(inbun)
	      };
	    }
	    function getCarryScore(matches) {
	      const kMatches = matches.map((a1) => {
	        if (a1.role !== "NONE" && a1.result !== "Remake") {
	          return a1.stats["kpRank"];
	        }
	      }).filter((a1) => {
	        if (typeof a1 !== "undefined" && a1 !== null && a1 !== "") {
	          return a1;
	        }
	      });
	      const kCarryScoreAvg = Number(Math.floor(Object(mathjs__WEBPACK_IMPORTED_MODULE_2__["mean"])(kMatches).toFixed(1)));
	      const dMatches = matches.map((a1) => {
	        if (a1.role !== "NONE" && a1.result !== "Remake") {
	          return a1.stats["killsRank"];
	        }
	      }).filter((a1) => {
	        if (typeof a1 !== "undefined" && a1 !== null && a1 !== "") {
	          return a1;
	        }
	      });
	      const dCarryScoreAvg = Number(Math.floor(Object(mathjs__WEBPACK_IMPORTED_MODULE_2__["mean"])(dMatches).toFixed(1)));
	      const vMatches = matches.map((a1) => {
	        if (a1.role !== "NONE" && a1.result !== "Remake") {
	          return a1.stats["visionRank"];
	        }
	      }).filter((a1) => {
	        if (typeof a1 !== "undefined") {
	          return a1;
	        }
	      });
	      const vCarryScoreAvg = Number(Math.floor(Object(mathjs__WEBPACK_IMPORTED_MODULE_2__["mean"])(vMatches).toFixed(1)));
	      return Number(Object(mathjs__WEBPACK_IMPORTED_MODULE_2__["mean"])([kCarryScoreAvg, dCarryScoreAvg, vCarryScoreAvg]).toFixed(1));
	    }
	    function getTeamScore(matches) {
	      const nMatches = matches.map((a1) => {
	        if (a1.role !== "NONE" && a1.result !== "Remake") {
	          return a1.stats["teamScore"];
	        }
	      }).filter((a1) => {
	        if (typeof a1 !== "undefined") {
	          return a1;
	        }
	      });
	      if (nMatches.length < 3) {
	        return null;
	      } else {
	        const myTeamScoreAvg = Number(Object(mathjs__WEBPACK_IMPORTED_MODULE_2__["mean"])(nMatches).toFixed(1));
	        let result = "";
	        if (myTeamScoreAvg < -3)
	          result = "\uC800\uC8FC";
	        else if (myTeamScoreAvg >= -3 && myTeamScoreAvg < -1.5)
	          result = "\uBE61\uCE68";
	        else if (myTeamScoreAvg >= -1.5 && myTeamScoreAvg < 0)
	          result = "\uB098\uC068";
	        else if (myTeamScoreAvg >= 0 && myTeamScoreAvg < 1.5)
	          result = "\uC5B5\uC6B8";
	        else if (myTeamScoreAvg >= 1.5 && myTeamScoreAvg < 2)
	          result = "\uBCF4\uD1B5";
	        else if (myTeamScoreAvg >= 2 && myTeamScoreAvg < 3)
	          result = "\uC88B\uC74C";
	        else if (myTeamScoreAvg >= 3)
	          result = "\uC21F\uAC00\uB77D";
	        return {
	          score: 0,
	          score: myTeamScoreAvg,
	          text: result
	        };
	      }
	    }
	    function getColorTeamUn(score) {
	      let result = "";
	      if (score < -3)
	        result = "#e84057";
	      else if (score >= -3 && score < -1.5)
	        result = "#e84057";
	      else if (score >= -1.5 && score < 0)
	        result = "#f17989";
	      else if (score >= 0 && score < 1.5)
	        result = "#f17989";
	      else if (score >= 1.5 && score < 2)
	        result = "#5383E8";
	      else if (score >= 2 && score < 3)
	        result = "#5383E8";
	      else if (score >= 3)
	        result = "#2c7a7b";
	      return result;
	    }
	  },
	  function(module2, exports) {
	    module2.exports = require$$0;
	  },
	  function(module2, exports) {
	    module2.exports = require$$1;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    var render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "w-full flex items-center justify-center"
	      }, [_vm._ssrNode((_vm.open ? '<div class="fixed inset-0 z-20 bg-c-0"' + _vm._ssrStyle(null, {
	        opacity: _vm.homepage ? 0 : 0.9
	      }, null) + "></div>" : "<!---->") + " "), _vm._ssrNode("<form" + _vm._ssrClass("text-lg text-c-0 relative z-30 rounded", [{
	        "w-1/2 mx-auto bg-c-1": _vm.homepage
	      }, {
	        "w-7/12 bg-white": !_vm.homepage
	      }, {
	        "w-full": _vm.$device.isMobile
	      }]) + ">", "</form>", [_vm._ssrNode('<div class="flex justify-between">', "</div>", [_vm._ssrNode('<div class="w-16 flex items-center justify-center z-40">', "</div>", [_c("SearchFormRegion", {
	        attrs: {
	          "dropdown": _vm.dropdown,
	          "homepage": _vm.homepage
	        },
	        on: {
	          "toggle": function($event) {
	            _vm.dropdown = !_vm.dropdown;
	          }
	        }
	      })], 1), _vm._ssrNode(' <div class="flex flex-1"><input spellcheck="false" type="text" placeholder="\uC18C\uD658\uC0AC\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694."' + _vm._ssrAttr("value", _vm.summoner) + _vm._ssrClass("relative w-full py-2 font-bold outline-none rounded-sm summoner-input", [{
	        "placeholder-c-1 text-c-1": !_vm.homepage
	      }, {
	        "placeholder-c-2 text-c-2 bg-c-1": _vm.homepage
	      }]) + '></div> <div class="w-12 flex items-center justify-center"><button type="submit"' + _vm._ssrClass(null, [{
	        "text-c-1": !_vm.homepage
	      }, {
	        "text-c-2": _vm.homepage
	      }]) + '><svg class="w-4 h-4"><use xlink:href="#search"></use></svg></button></div> '), _c("transition", {
	        attrs: {
	          "name": "scale-fade"
	        }
	      }, [_vm.open ? _c("SearchFormDropdown", {
	        attrs: {
	          "dropdown": _vm.dropdown,
	          "homepage": _vm.homepage
	        },
	        on: {
	          "close": function($event) {
	            _vm.open = false;
	          },
	          "toggle": function($event) {
	            _vm.dropdown = !_vm.dropdown;
	          }
	        },
	        model: {
	          value: _vm.summoner,
	          callback: function($$v) {
	            _vm.summoner = $$v;
	          },
	          expression: "summoner"
	        }
	      }) : _vm._e()], 1)], 2)])], 2);
	    };
	    var staticRenderFns = [];
	    var vuex = __webpack_require__(2);
	    var SearchFormDropdownvue_type_template_id_2ed31ea4_scoped_true_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "absolute w-full",
	        class: [{
	          "mt-12": !_vm.homepage
	        }, {
	          "mt-12": _vm.homepage
	        }]
	      }, [_vm._ssrNode('<div class="bg-c-1 rounded-md shadow p-1" data-v-2ed31ea4>', "</div>", [_vm._ssrNode('<div class="rounded-t-md bg-white" data-v-2ed31ea4>', "</div>", [_vm._ssrNode('<div class="px-3 pb-4 overflow-y-auto style-2" style="max-height: 300px;" data-v-2ed31ea4>', "</div>", [_vm._ssrNode("<div data-v-2ed31ea4>", "</div>", [_vm._ssrNode((_vm.recentSearches.length ? '<div class="text-base text-c-0 font-bold" data-v-2ed31ea4>\uCD5C\uADFC \uAC80\uC0C9 \uC18C\uD658\uC0AC</div>' : _vm.favorites.length === 0 ? '<div class="text-base text-c-0 font-bold" data-v-2ed31ea4>\uC8FC\uC778\uC7A5 \uC18C\uD658\uC0AC</div>' : "<!---->") + " "), _vm._ssrNode('<div role="listbox" tabindex="-1" class="flex flex-wrap items-center text-xs leading-none focus:outline-none" data-v-2ed31ea4>', "</div>", [_vm.recentSearches.length ? _vm._l(_vm.recentSearchesSliced, function(player, index) {
	        return _c("SearchFormDropdownPlayer", {
	          key: player.name + player.region,
	          attrs: {
	            "selected": index === _vm.selected - 1,
	            "player": player,
	            "favorites-list": false
	          },
	          on: {
	            "close": _vm.close
	          },
	          nativeOn: {
	            "mousemove": function($event) {
	              return _vm.onHover(index + 1);
	            }
	          }
	        });
	      }) : _vm.favorites.length === 0 ? [_c("SearchFormDropdownPlayer", {
	        attrs: {
	          "player": {
	            name: "fakeeeer",
	            icon: 4874,
	            region: "kr"
	          },
	          "selected": _vm.selected === 1,
	          "favorites-list": false
	        },
	        on: {
	          "close": _vm.close
	        },
	        nativeOn: {
	          "mousemove": function($event) {
	            return _vm.onHover(1);
	          }
	        }
	      })] : _vm._e()], 2)], 2), _vm._ssrNode(" "), _vm.favorites.length ? _vm._ssrNode("<div" + _vm._ssrClass(null, {
	        "mt-4": _vm.recentSearches.length
	      }) + " data-v-2ed31ea4>", "</div>", [_vm._ssrNode('<div class="text-base text-c-0 font-bold" data-v-2ed31ea4>\uC990\uACA8\uCC3E\uB294 \uC18C\uD55C\uC0AC</div> '), _vm._ssrNode('<div role="listbox" tabindex="-1" class="flex flex-wrap items-center text-xs leading-none" data-v-2ed31ea4>', "</div>", _vm._l(_vm.favorites, function(player, index) {
	        return _c("SearchFormDropdownPlayer", {
	          key: player.name + player.region,
	          attrs: {
	            "player": player,
	            "selected": index === _vm.selected - 1 - _vm.recentSearchesCount,
	            "favorites-list": true
	          },
	          on: {
	            "close": _vm.close
	          },
	          nativeOn: {
	            "mousemove": function($event) {
	              return _vm.onHover(index + _vm.recentSearchesCount + 1);
	            }
	          }
	        });
	      }), 1)], 2) : _vm._e()], 2)]), _vm._ssrNode(' <div class="px-4 py-4 bg-c-1" data-v-2ed31ea4><div class="flex items-center justify-between select-none text-xxs" data-v-2ed31ea4><div class="space-x-2" data-v-2ed31ea4><span class="text-xs font-bold bg-c-2 rounded-md px-2 py-2" data-v-2ed31ea4>Enter</span> <span data-v-2ed31ea4>\uC18C\uD658\uC0AC \uC120\uD0DD</span></div> <div class="space-x-2" data-v-2ed31ea4><span class="text-xs font-bold bg-c-2 rounded-md px-2 py-2" data-v-2ed31ea4>\u2193 \u2191</span> <span data-v-2ed31ea4>\uC18C\uD658\uC0AC \uD0D1\uC0C9</span></div> <div class="space-x-2" data-v-2ed31ea4><span class="text-xs font-bold bg-c-2 rounded-md px-2 py-2" data-v-2ed31ea4>Esc</span> <span data-v-2ed31ea4>\uB2EB\uAE30</span></div></div></div>')], 2)]);
	    };
	    var SearchFormDropdownvue_type_template_id_2ed31ea4_scoped_true_staticRenderFns = [];
	    var SearchFormDropdownPlayervue_type_template_id_417803aa_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("nuxt-link", {
	        staticClass: "flex items-center justify-between w-full px-4 py-3 mt-1 border-2 rounded-md shadow-md cursor-pointer select-none bypass-click",
	        class: _vm.selected ? "bg-white border-c-1" : "bg-c-2 border-gray-300",
	        attrs: {
	          "to": {
	            name: "summoner-region-name-mode",
	            params: {
	              region: _vm.player.region,
	              name: _vm.player.name
	            }
	          },
	          "title": _vm.player.name,
	          "role": "option"
	        },
	        nativeOn: {
	          "click": function($event) {
	            return _vm.close.apply(null, arguments);
	          }
	        }
	      }, [_c("div", {
	        staticClass: "flex items-center"
	      }, [_vm.favoritesList ? _c("svg", {
	        staticClass: "w-5 h-5 text-c-1"
	      }, [_c("use", {
	        attrs: {
	          "xlink:href": "#star"
	        }
	      })]) : _c("svg", {
	        staticClass: "w-5 h-5"
	      }, [_c("use", {
	        attrs: {
	          "xlink:href": "#time"
	        }
	      })]), _vm._v(" "), _c("div", {
	        staticClass: "w-20"
	      }, [_c("div", {
	        staticClass: "inline-flex px-2 py-1 ml-6 text-xs font-semibold uppercase rounded",
	        class: _vm.selected ? "bg-c-1 text-white" : "bg-gray-300"
	      }, [_vm._v(_vm._s(_vm.player.region))])]), _vm._v(" "), _c("div", {
	        staticClass: "w-6 h-6 ml-2 bg-center bg-cover rounded-md",
	        style: {
	          backgroundImage: `url('https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${_vm.player.icon}.jpg')`
	        }
	      }), _vm._v(" "), _c("div", {
	        staticClass: "ml-2 text-base"
	      }, [_vm._v(_vm._s(_vm.player.name))])]), _vm._v(" "), _c("div", {
	        staticClass: "flex items-center space-x-1"
	      }, [!_vm.favoritesList ? _c("button", {
	        staticClass: "flex items-center justify-center p-2 rounded-md hover:text-c-1 hover:bg-c-3",
	        on: {
	          "click": function($event) {
	            $event.preventDefault();
	            return _vm.favoriteClick.apply(null, arguments);
	          }
	        }
	      }, [_c("svg", {
	        staticClass: "w-4 h-4"
	      }, [_c("use", {
	        attrs: {
	          "xlink:href": "#star"
	        }
	      })])]) : _vm._e(), _vm._v(" "), _c("button", {
	        staticClass: "p-2 rounded-full cursor-pointerhover:text-md hover:text-white hover:bg-c-3",
	        on: {
	          "click": function($event) {
	            $event.preventDefault();
	            return _vm.closeClick.apply(null, arguments);
	          }
	        }
	      }, [_c("svg", {
	        staticClass: "w-4 h-4"
	      }, [_c("use", {
	        attrs: {
	          "xlink:href": "#times"
	        }
	      })])])])]);
	    };
	    var SearchFormDropdownPlayervue_type_template_id_417803aa_staticRenderFns = [];
	    var SearchFormDropdownPlayervue_type_script_lang_js_ = {
	      props: {
	        favoritesList: {
	          type: Boolean,
	          default: false
	        },
	        player: {
	          type: Object,
	          required: true
	        },
	        selected: {
	          type: Boolean,
	          default: false
	        }
	      },
	      methods: {
	        close() {
	          this.$emit("close");
	        },
	        closeClick() {
	          if (this.favoritesList) {
	            this.updateFavorite(this.player);
	            return;
	          }
	          this.removeRecentSearch(this.player);
	        },
	        favoriteClick() {
	          this.updateFavorite(this.player);
	        },
	        ...Object(vuex["b"])("settings", ["removeRecentSearch", "updateFavorite"])
	      }
	    };
	    var Form_SearchFormDropdownPlayervue_type_script_lang_js_ = SearchFormDropdownPlayervue_type_script_lang_js_;
	    var componentNormalizer = __webpack_require__(1);
	    var component = Object(componentNormalizer["a"])(Form_SearchFormDropdownPlayervue_type_script_lang_js_, SearchFormDropdownPlayervue_type_template_id_417803aa_render, SearchFormDropdownPlayervue_type_template_id_417803aa_staticRenderFns, false, null, null, "2512fadb");
	    var SearchFormDropdownPlayer = component.exports;
	    var SearchFormDropdownvue_type_script_lang_js_ = {
	      components: {
	        SearchFormDropdownPlayer
	      },
	      props: {
	        dropdown: {
	          type: Boolean,
	          default: false
	        },
	        homepage: {
	          type: Boolean,
	          default: false
	        },
	        value: {
	          type: String,
	          required: true
	        }
	      },
	      data() {
	        return {
	          bypassKeys: ["Esc", "Escape", "ArrowUp", "ArrowDown", "Enter", "Space", "/"],
	          favoritesCount: null,
	          totalCount: null,
	          recentSearchesCount: null,
	          selected: null
	        };
	      },
	      computed: {
	        allPlayers() {
	          return [...this.recentSearchesSliced, ...this.favorites];
	        },
	        recentSearchesSliced() {
	          return this.recentSearches.slice(0, 4);
	        },
	        ...Object(vuex["d"])({
	          selectedRegion: (state) => state.settings.region,
	          favorites: (state) => state.settings.favorites,
	          recentSearches: (state) => state.settings.recentSearches
	        })
	      },
	      created() {
	      },
	      mounted() {
	        this.recentSearchesCount = this.$refs.searches ? this.$refs.searches.children.length : 0;
	        this.favoritesCount = this.$refs.favorites ? this.$refs.favorites.children.length : 0;
	        this.totalCount = this.recentSearchesCount + this.favoritesCount;
	        if (this.totalCount > 0) {
	          this.selected = 1;
	        }
	      },
	      beforeDestroy() {
	      },
	      methods: {
	        close() {
	          this.$emit("close");
	          if (this.dropdown) {
	            this.toggle();
	          }
	        },
	        handleClick(e) {
	          const bypassElements = document.querySelectorAll(".bypass-click");
	          for (const element of bypassElements) {
	            if (e.target === element || element.contains(e.target))
	              return;
	          }
	          if (this.$refs["region-dropdown"] && e.target !== this.$refs["region-dropdown"] && !this.$refs["region-dropdown"].contains(e.target) && this.dropdown) {
	            this.toggle();
	          }
	          e.preventDefault();
	          this.$refs.searches.focus();
	        },
	        handleKeyDown(e) {
	          if (e.key === "ArrowUp" || e.key === "ArrowDown") {
	            e.preventDefault();
	            this.$refs.searches.focus();
	            if (e.key === "ArrowUp") {
	              this.onArrowUp();
	            } else {
	              this.onArrowDown();
	            }
	          }
	          if (this.bypassKeys.includes(e.key) || e.key === "k" && (e.ctrlKey || e.metaKey)) {
	            return;
	          }
	          const input = document.querySelector(".summoner-input");
	          input.focus();
	        },
	        onArrow() {
	          const scrollIntoBlock = this.selected === 1 ? "end" : this.selected >= 7 ? "start" : "nearest";
	          if (this.selected > this.recentSearchesCount) {
	            this.$refs.favorites.children[this.selected - this.recentSearchesCount - 1].scrollIntoView({
	              block: scrollIntoBlock
	            });
	          } else {
	            this.$refs.searches.children[this.selected - 1].scrollIntoView({
	              block: scrollIntoBlock
	            });
	          }
	        },
	        onArrowUp() {
	          this.selected = this.selected - 1 < 1 ? this.totalCount : this.selected - 1;
	          this.onArrow();
	        },
	        onArrowDown() {
	          this.selected = this.selected + 1 > this.totalCount ? 1 : this.selected + 1;
	          this.onArrow();
	        },
	        onHover(id) {
	          this.selected = id;
	          if (this.$refs.searches && this.$refs.searches !== document.activeElement) {
	            this.$refs.searches.focus();
	            this.onArrow();
	          }
	        },
	        onOptionSelect() {
	          console.log("OPTION SELECT");
	          if (this.selected === null) {
	            return;
	          }
	          const player = this.allPlayers[this.selected - 1];
	          this.$router.push(`/summoner/${player.region}/${player.name}`).catch(() => {
	          });
	          this.close();
	        },
	        toggle() {
	          this.$emit("toggle");
	        }
	      }
	    };
	    var Form_SearchFormDropdownvue_type_script_lang_js_ = SearchFormDropdownvue_type_script_lang_js_;
	    function injectStyles(context) {
	      var style0 = __webpack_require__(66);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var SearchFormDropdown_component = Object(componentNormalizer["a"])(Form_SearchFormDropdownvue_type_script_lang_js_, SearchFormDropdownvue_type_template_id_2ed31ea4_scoped_true_render, SearchFormDropdownvue_type_template_id_2ed31ea4_scoped_true_staticRenderFns, false, injectStyles, "2ed31ea4", "1cc7d5da");
	    var SearchFormDropdown = SearchFormDropdown_component.exports;
	    var SearchFormRegionvue_type_template_id_b76365fe_scoped_true_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "w-full px-2 relative"
	      }, [_vm._ssrNode("<div" + _vm._ssrClass("flex items-center justify-center transition duration-150 ease-in-out border-2 border-transparent rounded cursor-pointer1 w-full", [_vm.selectRegionClasses, {
	        "text-c-1": !_vm.homepage
	      }, {
	        "text-c-2": _vm.homepage
	      }]) + ' data-v-b76365fe><span class="font-bold uppercase select-none selected" data-v-b76365fe>' + _vm._ssrEscape(_vm._s(_vm.selectedRegion)) + '</span> <svg class="w-4 h-4" data-v-b76365fe><use xlink:href="#caret-down" data-v-b76365fe></use></svg></div> '), _c("transition", {
	        attrs: {
	          "name": "scale-fade"
	        }
	      }, [_c("div", {
	        directives: [{
	          name: "show",
	          rawName: "v-show",
	          value: _vm.dropdown,
	          expression: "dropdown"
	        }],
	        staticClass: "absolute right-0 text-white shadow cursor-pointer mr-1",
	        class: [_vm.dropdownClasses]
	      }, _vm._l(_vm.regions, function(region, index) {
	        return _c("div", {
	          key: region,
	          staticClass: "relative py-1 pl-5 pr-2 text-xs text-right select-none bg-c-1 hover:bg-c-2 hover:text-c-1",
	          class: _vm.classRegions(index),
	          on: {
	            "click": function($event) {
	              return _vm.selectRegion(region);
	            }
	          }
	        }, [region.toLowerCase() === _vm.selectedRegion ? _c("svg", {
	          staticClass: "absolute w-3 h-3 fill-current vertical-center dropIcon",
	          attrs: {
	            "xmlns": "http://www.w3.org/2000/svg",
	            "viewBox": "0 0 512 512"
	          }
	        }, [_c("path", {
	          attrs: {
	            "d": "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
	          }
	        })]) : _vm._e(), _vm._v("\n        " + _vm._s(region) + "\n      ")]);
	      }), 0)])], 2);
	    };
	    var SearchFormRegionvue_type_template_id_b76365fe_scoped_true_staticRenderFns = [];
	    var SearchFormRegionvue_type_script_lang_js_ = {
	      props: {
	        dropdown: {
	          type: Boolean,
	          default: false
	        },
	        homepage: {
	          type: Boolean,
	          default: false
	        }
	      },
	      data() {
	        return {
	          regions: ["BR", "EUNE", "EUW", "JP", "KR", "LAN", "LAS", "NA", "OCE", "TR", "RU"]
	        };
	      },
	      computed: {
	        dropdownClasses() {
	          return {
	            "dropDown rounded": !this.homepage,
	            "dropDownXl rounded": this.homepage
	          };
	        },
	        selectRegionClasses() {
	          return {
	            "text-base rounded-md": !this.homepage,
	            "text-base rounded-md": this.homepage,
	            "bg-c-1 text-c-2": this.dropdown && !this.homepage,
	            "bg-c-1 text-c-2": this.dropdown && this.homepage
	          };
	        },
	        ...Object(vuex["d"])({
	          selectedRegion: (state) => state.settings.region
	        })
	      },
	      methods: {
	        classRegions(index) {
	          return {
	            "rounded-t": index === 0,
	            "rounded-b": index === this.regions.length - 1
	          };
	        },
	        selectRegion(region) {
	          this.toggle();
	          this.updateSettings({
	            name: "region",
	            value: region.toLowerCase()
	          });
	        },
	        toggle() {
	          this.$emit("toggle");
	        },
	        ...Object(vuex["b"])("settings", ["updateSettings"])
	      }
	    };
	    var Form_SearchFormRegionvue_type_script_lang_js_ = SearchFormRegionvue_type_script_lang_js_;
	    function SearchFormRegion_injectStyles(context) {
	      var style0 = __webpack_require__(68);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var SearchFormRegion_component = Object(componentNormalizer["a"])(Form_SearchFormRegionvue_type_script_lang_js_, SearchFormRegionvue_type_template_id_b76365fe_scoped_true_render, SearchFormRegionvue_type_template_id_b76365fe_scoped_true_staticRenderFns, false, SearchFormRegion_injectStyles, "b76365fe", "a0de7106");
	    var SearchFormRegion = SearchFormRegion_component.exports;
	    var SearchFormvue_type_script_lang_js_ = {
	      components: {
	        SearchFormDropdown,
	        SearchFormRegion
	      },
	      props: {
	        homepage: {
	          type: Boolean,
	          default: false
	        },
	        isOpen: {
	          type: Boolean,
	          default: false
	        }
	      },
	      data() {
	        return {
	          summoner: "",
	          dropdown: false,
	          open: this.isOpen
	        };
	      },
	      computed: {
	        ...Object(vuex["d"])({
	          selectedRegion: (state) => state.settings.region
	        })
	      },
	      watch: {
	        open(newVal) {
	          if (newVal) {
	            this.dropDownOpening();
	          } else {
	            this.dropDownClosing();
	          }
	        },
	        $route(newRoute) {
	          this.summoner = newRoute.params.name;
	          this.dropdown = false;
	          this.open = false;
	        }
	      },
	      created() {
	        if (!this.summoner.length && !this.homepage) {
	          this.summoner = this.$route.params.name;
	        }
	      },
	      beforeDestroy() {
	        this.dropDownClosing();
	      },
	      methods: {
	        dropDownClosing() {
	        },
	        dropDownOpening() {
	        },
	        formSubmit() {
	          const search = this.summoner.replace("+", " ").split(" ").join("");
	          if (search.length) {
	            this.$emit("formSubmit", search, this.selectedRegion);
	          }
	        },
	        getScrollbarWidth() {
	          const outer = document.createElement("div");
	          outer.style.visibility = "hidden";
	          outer.style.overflow = "scroll";
	          outer.style.msOverflowStyle = "scrollbar";
	          document.body.appendChild(outer);
	          const inner = document.createElement("div");
	          outer.appendChild(inner);
	          const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
	          outer.parentNode.removeChild(outer);
	          return scrollbarWidth;
	        },
	        handleEscape(e) {
	          if (e.key === "Esc" || e.key === "Escape") {
	            this.open = false;
	          } else if (e.key === "k" && (e.ctrlKey || e.metaKey) || e.key === "/") {
	            e.preventDefault();
	            this.open = !this.open;
	          }
	        },
	        windowBlur() {
	          this.open = false;
	        }
	      }
	    };
	    var Form_SearchFormvue_type_script_lang_js_ = SearchFormvue_type_script_lang_js_;
	    var SearchForm_component = Object(componentNormalizer["a"])(Form_SearchFormvue_type_script_lang_js_, render, staticRenderFns, false, null, null, "6028cf29");
	    __webpack_exports__["a"] = SearchForm_component.exports;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    const middleware = {};
	    __webpack_exports__["default"] = middleware;
	  },
	  function(module2, exports) {
	    module2.exports = require$$2;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    (function(URLSearchParams) {
	      __webpack_require__.d(__webpack_exports__, "a", function() {
	        return appendHeader;
	      });
	      __webpack_require__.d(__webpack_exports__, "b", function() {
	        return sendRedirect;
	      });
	      __webpack_require__(3);
	      __webpack_require__(37);
	      __webpack_require__(14);
	      __webpack_require__(9);
	      const MIMES = {
	        html: "text/html",
	        json: "application/json"
	      };
	      const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
	      function send(event, data, type) {
	        if (type) {
	          defaultContentType(event, type);
	        }
	        return new Promise((resolve) => {
	          defer(() => {
	            event.res.end(data);
	            resolve(void 0);
	          });
	        });
	      }
	      function defaultContentType(event, type) {
	        if (type && !event.res.getHeader("Content-Type")) {
	          event.res.setHeader("Content-Type", type);
	        }
	      }
	      function sendRedirect(event, location, code = 302) {
	        event.res.statusCode = code;
	        event.res.setHeader("Location", location);
	        return send(event, "Redirecting to " + location, MIMES.html);
	      }
	      function appendHeader(event, name, value) {
	        let current = event.res.getHeader(name);
	        if (!current) {
	          event.res.setHeader(name, value);
	          return;
	        }
	        if (!Array.isArray(current)) {
	          current = [current.toString()];
	        }
	        event.res.setHeader(name, current.concat(value));
	      }
	      class H3Error extends Error {
	        constructor() {
	          super(...arguments);
	          this.statusCode = 500;
	          this.fatal = false;
	          this.unhandled = false;
	          this.statusMessage = "Internal Server Error";
	        }
	      }
	      H3Error.__h3_error__ = true;
	    }).call(this, __webpack_require__(22)["URLSearchParams"]);
	  },
	  function(module2, exports) {
	    module2.exports = require$$3;
	  },
	  function(module2, exports, __webpack_require__) {
	    /*!
	     * vue-no-ssr v1.1.1
	     * (c) 2018-present egoist <0x142857@gmail.com>
	     * Released under the MIT License.
	     */
	    var index = {
	      name: "NoSsr",
	      functional: true,
	      props: {
	        placeholder: String,
	        placeholderTag: {
	          type: String,
	          default: "div"
	        }
	      },
	      render: function render(h, ref) {
	        var parent = ref.parent;
	        var slots = ref.slots;
	        var props = ref.props;
	        var ref$1 = slots();
	        var defaultSlot = ref$1.default;
	        if (defaultSlot === void 0)
	          defaultSlot = [];
	        var placeholderSlot = ref$1.placeholder;
	        if (parent._isMounted) {
	          return defaultSlot;
	        }
	        parent.$once("hook:mounted", function() {
	          parent.$forceUpdate();
	        });
	        if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
	          return h(props.placeholderTag, {
	            class: ["no-ssr-placeholder"]
	          }, props.placeholder || placeholderSlot);
	        }
	        return defaultSlot.length > 0 ? defaultSlot.map(function() {
	          return h(false);
	        }) : h(false);
	      }
	    };
	    module2.exports = index;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.d(__webpack_exports__, "c", function() {
	      return maps;
	    });
	    __webpack_require__.d(__webpack_exports__, "b", function() {
	      return gameModes;
	    });
	    __webpack_require__.d(__webpack_exports__, "a", function() {
	      return colors;
	    });
	    const maps = {
	      10: "The Twisted Treeline",
	      11: "Summoner's Rift",
	      12: "Howling Abyss"
	    };
	    const gameModes = {
	      0: {
	        type: "Normal",
	        name: "\uCEE4\uC2A4\uD140"
	      },
	      900: {
	        type: "Normal",
	        name: "\uC6B0\uB974\uD504"
	      },
	      450: {
	        type: "Normal",
	        name: "\uCE7C\uBC14\uB78C"
	      },
	      400: {
	        type: "Normal",
	        name: "DRAFT 5vs5"
	      },
	      420: {
	        type: "Ranked",
	        name: "\uC194\uB7AD"
	      },
	      430: {
	        type: "Normal",
	        name: "\uC77C\uBC18"
	      },
	      440: {
	        type: "Ranked",
	        name: "\uC790\uC720 5"
	      },
	      460: {
	        type: "Normal",
	        name: "BLIND 3vs3"
	      },
	      470: {
	        type: "Ranked",
	        name: "\uC790\uC720 3"
	      },
	      700: {
	        type: "Ranked",
	        name: "CLASH"
	      },
	      800: {
	        type: "Bot",
	        name: "3vs3 \uC911\uAE09 AI"
	      },
	      810: {
	        type: "Bot",
	        name: "3vs3 Co-op vs. AI (Intro)"
	      },
	      820: {
	        type: "Bot",
	        name: "3vs3 Co-op vs. AI (Beginner)"
	      },
	      830: {
	        type: "Bot",
	        name: "\uC785\uBB38"
	      },
	      840: {
	        type: "Bot",
	        name: "Co-op vs. AI (Beginner)"
	      },
	      850: {
	        type: "Bot",
	        name: "\uC911\uAE09 AI"
	      },
	      920: {
	        type: "Normal",
	        name: "PORO KING"
	      },
	      1020: {
	        type: "Normal",
	        name: "One for All"
	      },
	      1300: {
	        type: "Normal",
	        name: "Nexus Blitz"
	      },
	      1400: {
	        type: "Normal",
	        name: "Ultimate Spellbook"
	      }
	    };
	    const colorValues = {
	      green: "54,148,109",
	      red: "197,85,93",
	      purple: "141,116,217",
	      teal: "56 178 172",
	      yellow: "166,176,134",
	      orange: "184,137,101",
	      brown: "161,127,134",
	      blue: "55, 118, 179"
	    };
	    const colors = {
	      kills: colorValues["green"],
	      deaths: colorValues["red"],
	      assists: colorValues["purple"],
	      minions: colorValues["teal"],
	      vision: colorValues["yellow"],
	      gold: colorValues["orange"],
	      dmgChamp: colorValues["red"],
	      dmgObj: colorValues["yellow"],
	      dmgTaken: colorValues["red"],
	      kp: colorValues["brown"],
	      winrate: colorValues["green"],
	      playrate: colorValues["purple"],
	      wins: colorValues["green"],
	      count: colorValues["purple"],
	      kda: colorValues["blue"],
	      gameLength: colorValues["green"]
	    };
	  },
	  function(module2, exports) {
	  },
	  function(module2, exports, __webpack_require__) {
	    /*!
	     * vuex v3.6.2
	     * (c) 2021 Evan You
	     * @license MIT
	     */
	    function applyMixin(Vue2) {
	      var version = Number(Vue2.version.split(".")[0]);
	      if (version >= 2) {
	        Vue2.mixin({
	          beforeCreate: vuexInit
	        });
	      } else {
	        var _init = Vue2.prototype._init;
	        Vue2.prototype._init = function(options) {
	          if (options === void 0)
	            options = {};
	          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	          _init.call(this, options);
	        };
	      }
	      function vuexInit() {
	        var options = this.$options;
	        if (options.store) {
	          this.$store = typeof options.store === "function" ? options.store() : options.store;
	        } else if (options.parent && options.parent.$store) {
	          this.$store = options.parent.$store;
	        }
	      }
	    }
	    var target = typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {};
	    var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	    function devtoolPlugin(store) {
	      if (!devtoolHook) {
	        return;
	      }
	      store._devtoolHook = devtoolHook;
	      devtoolHook.emit("vuex:init", store);
	      devtoolHook.on("vuex:travel-to-state", function(targetState) {
	        store.replaceState(targetState);
	      });
	      store.subscribe(function(mutation, state) {
	        devtoolHook.emit("vuex:mutation", mutation, state);
	      }, {
	        prepend: true
	      });
	      store.subscribeAction(function(action, state) {
	        devtoolHook.emit("vuex:action", action, state);
	      }, {
	        prepend: true
	      });
	    }
	    function find(list, f) {
	      return list.filter(f)[0];
	    }
	    function deepCopy(obj, cache) {
	      if (cache === void 0)
	        cache = [];
	      if (obj === null || typeof obj !== "object") {
	        return obj;
	      }
	      var hit = find(cache, function(c) {
	        return c.original === obj;
	      });
	      if (hit) {
	        return hit.copy;
	      }
	      var copy = Array.isArray(obj) ? [] : {};
	      cache.push({
	        original: obj,
	        copy
	      });
	      Object.keys(obj).forEach(function(key) {
	        copy[key] = deepCopy(obj[key], cache);
	      });
	      return copy;
	    }
	    function forEachValue(obj, fn) {
	      Object.keys(obj).forEach(function(key) {
	        return fn(obj[key], key);
	      });
	    }
	    function isObject(obj) {
	      return obj !== null && typeof obj === "object";
	    }
	    function isPromise(val) {
	      return val && typeof val.then === "function";
	    }
	    function partial(fn, arg) {
	      return function() {
	        return fn(arg);
	      };
	    }
	    var Module = function Module2(rawModule, runtime) {
	      this.runtime = runtime;
	      this._children = /* @__PURE__ */ Object.create(null);
	      this._rawModule = rawModule;
	      var rawState = rawModule.state;
	      this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
	    };
	    var prototypeAccessors = {
	      namespaced: {
	        configurable: true
	      }
	    };
	    prototypeAccessors.namespaced.get = function() {
	      return !!this._rawModule.namespaced;
	    };
	    Module.prototype.addChild = function addChild(key, module3) {
	      this._children[key] = module3;
	    };
	    Module.prototype.removeChild = function removeChild(key) {
	      delete this._children[key];
	    };
	    Module.prototype.getChild = function getChild(key) {
	      return this._children[key];
	    };
	    Module.prototype.hasChild = function hasChild(key) {
	      return key in this._children;
	    };
	    Module.prototype.update = function update2(rawModule) {
	      this._rawModule.namespaced = rawModule.namespaced;
	      if (rawModule.actions) {
	        this._rawModule.actions = rawModule.actions;
	      }
	      if (rawModule.mutations) {
	        this._rawModule.mutations = rawModule.mutations;
	      }
	      if (rawModule.getters) {
	        this._rawModule.getters = rawModule.getters;
	      }
	    };
	    Module.prototype.forEachChild = function forEachChild(fn) {
	      forEachValue(this._children, fn);
	    };
	    Module.prototype.forEachGetter = function forEachGetter(fn) {
	      if (this._rawModule.getters) {
	        forEachValue(this._rawModule.getters, fn);
	      }
	    };
	    Module.prototype.forEachAction = function forEachAction(fn) {
	      if (this._rawModule.actions) {
	        forEachValue(this._rawModule.actions, fn);
	      }
	    };
	    Module.prototype.forEachMutation = function forEachMutation(fn) {
	      if (this._rawModule.mutations) {
	        forEachValue(this._rawModule.mutations, fn);
	      }
	    };
	    Object.defineProperties(Module.prototype, prototypeAccessors);
	    var ModuleCollection = function ModuleCollection2(rawRootModule) {
	      this.register([], rawRootModule, false);
	    };
	    ModuleCollection.prototype.get = function get(path) {
	      return path.reduce(function(module3, key) {
	        return module3.getChild(key);
	      }, this.root);
	    };
	    ModuleCollection.prototype.getNamespace = function getNamespace(path) {
	      var module3 = this.root;
	      return path.reduce(function(namespace, key) {
	        module3 = module3.getChild(key);
	        return namespace + (module3.namespaced ? key + "/" : "");
	      }, "");
	    };
	    ModuleCollection.prototype.update = function update$1(rawRootModule) {
	      update([], this.root, rawRootModule);
	    };
	    ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
	      var this$1$1 = this;
	      if (runtime === void 0)
	        runtime = true;
	      var newModule = new Module(rawModule, runtime);
	      if (path.length === 0) {
	        this.root = newModule;
	      } else {
	        var parent = this.get(path.slice(0, -1));
	        parent.addChild(path[path.length - 1], newModule);
	      }
	      if (rawModule.modules) {
	        forEachValue(rawModule.modules, function(rawChildModule, key) {
	          this$1$1.register(path.concat(key), rawChildModule, runtime);
	        });
	      }
	    };
	    ModuleCollection.prototype.unregister = function unregister(path) {
	      var parent = this.get(path.slice(0, -1));
	      var key = path[path.length - 1];
	      var child = parent.getChild(key);
	      if (!child) {
	        return;
	      }
	      if (!child.runtime) {
	        return;
	      }
	      parent.removeChild(key);
	    };
	    ModuleCollection.prototype.isRegistered = function isRegistered(path) {
	      var parent = this.get(path.slice(0, -1));
	      var key = path[path.length - 1];
	      if (parent) {
	        return parent.hasChild(key);
	      }
	      return false;
	    };
	    function update(path, targetModule, newModule) {
	      targetModule.update(newModule);
	      if (newModule.modules) {
	        for (var key in newModule.modules) {
	          if (!targetModule.getChild(key)) {
	            return;
	          }
	          update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
	        }
	      }
	    }
	    var Vue;
	    var Store = function Store2(options) {
	      var this$1$1 = this;
	      if (options === void 0)
	        options = {};
	      if (!Vue && false) {
	        install(window.Vue);
	      }
	      var plugins = options.plugins;
	      if (plugins === void 0)
	        plugins = [];
	      var strict = options.strict;
	      if (strict === void 0)
	        strict = false;
	      this._committing = false;
	      this._actions = /* @__PURE__ */ Object.create(null);
	      this._actionSubscribers = [];
	      this._mutations = /* @__PURE__ */ Object.create(null);
	      this._wrappedGetters = /* @__PURE__ */ Object.create(null);
	      this._modules = new ModuleCollection(options);
	      this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
	      this._subscribers = [];
	      this._watcherVM = new Vue();
	      this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
	      var store = this;
	      var ref = this;
	      var dispatch = ref.dispatch;
	      var commit = ref.commit;
	      this.dispatch = function boundDispatch(type, payload) {
	        return dispatch.call(store, type, payload);
	      };
	      this.commit = function boundCommit(type, payload, options2) {
	        return commit.call(store, type, payload, options2);
	      };
	      this.strict = strict;
	      var state = this._modules.root.state;
	      installModule(this, state, [], this._modules.root);
	      resetStoreVM(this, state);
	      plugins.forEach(function(plugin) {
	        return plugin(this$1$1);
	      });
	      var useDevtools = options.devtools !== void 0 ? options.devtools : Vue.config.devtools;
	      if (useDevtools) {
	        devtoolPlugin(this);
	      }
	    };
	    var prototypeAccessors$1 = {
	      state: {
	        configurable: true
	      }
	    };
	    prototypeAccessors$1.state.get = function() {
	      return this._vm._data.$$state;
	    };
	    prototypeAccessors$1.state.set = function(v) {
	    };
	    Store.prototype.commit = function commit(_type, _payload, _options) {
	      var this$1$1 = this;
	      var ref = unifyObjectStyle(_type, _payload, _options);
	      var type = ref.type;
	      var payload = ref.payload;
	      var mutation = {
	        type,
	        payload
	      };
	      var entry = this._mutations[type];
	      if (!entry) {
	        return;
	      }
	      this._withCommit(function() {
	        entry.forEach(function commitIterator(handler) {
	          handler(payload);
	        });
	      });
	      this._subscribers.slice().forEach(function(sub) {
	        return sub(mutation, this$1$1.state);
	      });
	    };
	    Store.prototype.dispatch = function dispatch(_type, _payload) {
	      var this$1$1 = this;
	      var ref = unifyObjectStyle(_type, _payload);
	      var type = ref.type;
	      var payload = ref.payload;
	      var action = {
	        type,
	        payload
	      };
	      var entry = this._actions[type];
	      if (!entry) {
	        return;
	      }
	      try {
	        this._actionSubscribers.slice().filter(function(sub) {
	          return sub.before;
	        }).forEach(function(sub) {
	          return sub.before(action, this$1$1.state);
	        });
	      } catch (e) {
	      }
	      var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
	        return handler(payload);
	      })) : entry[0](payload);
	      return new Promise(function(resolve, reject) {
	        result.then(function(res) {
	          try {
	            this$1$1._actionSubscribers.filter(function(sub) {
	              return sub.after;
	            }).forEach(function(sub) {
	              return sub.after(action, this$1$1.state);
	            });
	          } catch (e) {
	          }
	          resolve(res);
	        }, function(error) {
	          try {
	            this$1$1._actionSubscribers.filter(function(sub) {
	              return sub.error;
	            }).forEach(function(sub) {
	              return sub.error(action, this$1$1.state, error);
	            });
	          } catch (e) {
	          }
	          reject(error);
	        });
	      });
	    };
	    Store.prototype.subscribe = function subscribe(fn, options) {
	      return genericSubscribe(fn, this._subscribers, options);
	    };
	    Store.prototype.subscribeAction = function subscribeAction(fn, options) {
	      var subs = typeof fn === "function" ? {
	        before: fn
	      } : fn;
	      return genericSubscribe(subs, this._actionSubscribers, options);
	    };
	    Store.prototype.watch = function watch(getter, cb, options) {
	      var this$1$1 = this;
	      return this._watcherVM.$watch(function() {
	        return getter(this$1$1.state, this$1$1.getters);
	      }, cb, options);
	    };
	    Store.prototype.replaceState = function replaceState(state) {
	      var this$1$1 = this;
	      this._withCommit(function() {
	        this$1$1._vm._data.$$state = state;
	      });
	    };
	    Store.prototype.registerModule = function registerModule(path, rawModule, options) {
	      if (options === void 0)
	        options = {};
	      if (typeof path === "string") {
	        path = [path];
	      }
	      this._modules.register(path, rawModule);
	      installModule(this, this.state, path, this._modules.get(path), options.preserveState);
	      resetStoreVM(this, this.state);
	    };
	    Store.prototype.unregisterModule = function unregisterModule(path) {
	      var this$1$1 = this;
	      if (typeof path === "string") {
	        path = [path];
	      }
	      this._modules.unregister(path);
	      this._withCommit(function() {
	        var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
	        Vue.delete(parentState, path[path.length - 1]);
	      });
	      resetStore(this);
	    };
	    Store.prototype.hasModule = function hasModule(path) {
	      if (typeof path === "string") {
	        path = [path];
	      }
	      return this._modules.isRegistered(path);
	    };
	    Store.prototype.hotUpdate = function hotUpdate(newOptions) {
	      this._modules.update(newOptions);
	      resetStore(this, true);
	    };
	    Store.prototype._withCommit = function _withCommit(fn) {
	      var committing = this._committing;
	      this._committing = true;
	      fn();
	      this._committing = committing;
	    };
	    Object.defineProperties(Store.prototype, prototypeAccessors$1);
	    function genericSubscribe(fn, subs, options) {
	      if (subs.indexOf(fn) < 0) {
	        options && options.prepend ? subs.unshift(fn) : subs.push(fn);
	      }
	      return function() {
	        var i = subs.indexOf(fn);
	        if (i > -1) {
	          subs.splice(i, 1);
	        }
	      };
	    }
	    function resetStore(store, hot) {
	      store._actions = /* @__PURE__ */ Object.create(null);
	      store._mutations = /* @__PURE__ */ Object.create(null);
	      store._wrappedGetters = /* @__PURE__ */ Object.create(null);
	      store._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
	      var state = store.state;
	      installModule(store, state, [], store._modules.root, true);
	      resetStoreVM(store, state, hot);
	    }
	    function resetStoreVM(store, state, hot) {
	      var oldVm = store._vm;
	      store.getters = {};
	      store._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
	      var wrappedGetters = store._wrappedGetters;
	      var computed = {};
	      forEachValue(wrappedGetters, function(fn, key) {
	        computed[key] = partial(fn, store);
	        Object.defineProperty(store.getters, key, {
	          get: function() {
	            return store._vm[key];
	          },
	          enumerable: true
	        });
	      });
	      var silent = Vue.config.silent;
	      Vue.config.silent = true;
	      store._vm = new Vue({
	        data: {
	          $$state: state
	        },
	        computed
	      });
	      Vue.config.silent = silent;
	      if (store.strict) {
	        enableStrictMode(store);
	      }
	      if (oldVm) {
	        if (hot) {
	          store._withCommit(function() {
	            oldVm._data.$$state = null;
	          });
	        }
	        Vue.nextTick(function() {
	          return oldVm.$destroy();
	        });
	      }
	    }
	    function installModule(store, rootState, path, module3, hot) {
	      var isRoot = !path.length;
	      var namespace = store._modules.getNamespace(path);
	      if (module3.namespaced) {
	        if (store._modulesNamespaceMap[namespace] && false) {
	          console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
	        }
	        store._modulesNamespaceMap[namespace] = module3;
	      }
	      if (!isRoot && !hot) {
	        var parentState = getNestedState(rootState, path.slice(0, -1));
	        var moduleName = path[path.length - 1];
	        store._withCommit(function() {
	          Vue.set(parentState, moduleName, module3.state);
	        });
	      }
	      var local = module3.context = makeLocalContext(store, namespace, path);
	      module3.forEachMutation(function(mutation, key) {
	        var namespacedType = namespace + key;
	        registerMutation(store, namespacedType, mutation, local);
	      });
	      module3.forEachAction(function(action, key) {
	        var type = action.root ? key : namespace + key;
	        var handler = action.handler || action;
	        registerAction(store, type, handler, local);
	      });
	      module3.forEachGetter(function(getter, key) {
	        var namespacedType = namespace + key;
	        registerGetter(store, namespacedType, getter, local);
	      });
	      module3.forEachChild(function(child, key) {
	        installModule(store, rootState, path.concat(key), child, hot);
	      });
	    }
	    function makeLocalContext(store, namespace, path) {
	      var noNamespace = namespace === "";
	      var local = {
	        dispatch: noNamespace ? store.dispatch : function(_type, _payload, _options) {
	          var args = unifyObjectStyle(_type, _payload, _options);
	          var payload = args.payload;
	          var options = args.options;
	          var type = args.type;
	          if (!options || !options.root) {
	            type = namespace + type;
	          }
	          return store.dispatch(type, payload);
	        },
	        commit: noNamespace ? store.commit : function(_type, _payload, _options) {
	          var args = unifyObjectStyle(_type, _payload, _options);
	          var payload = args.payload;
	          var options = args.options;
	          var type = args.type;
	          if (!options || !options.root) {
	            type = namespace + type;
	          }
	          store.commit(type, payload, options);
	        }
	      };
	      Object.defineProperties(local, {
	        getters: {
	          get: noNamespace ? function() {
	            return store.getters;
	          } : function() {
	            return makeLocalGetters(store, namespace);
	          }
	        },
	        state: {
	          get: function() {
	            return getNestedState(store.state, path);
	          }
	        }
	      });
	      return local;
	    }
	    function makeLocalGetters(store, namespace) {
	      if (!store._makeLocalGettersCache[namespace]) {
	        var gettersProxy = {};
	        var splitPos = namespace.length;
	        Object.keys(store.getters).forEach(function(type) {
	          if (type.slice(0, splitPos) !== namespace) {
	            return;
	          }
	          var localType = type.slice(splitPos);
	          Object.defineProperty(gettersProxy, localType, {
	            get: function() {
	              return store.getters[type];
	            },
	            enumerable: true
	          });
	        });
	        store._makeLocalGettersCache[namespace] = gettersProxy;
	      }
	      return store._makeLocalGettersCache[namespace];
	    }
	    function registerMutation(store, type, handler, local) {
	      var entry = store._mutations[type] || (store._mutations[type] = []);
	      entry.push(function wrappedMutationHandler(payload) {
	        handler.call(store, local.state, payload);
	      });
	    }
	    function registerAction(store, type, handler, local) {
	      var entry = store._actions[type] || (store._actions[type] = []);
	      entry.push(function wrappedActionHandler(payload) {
	        var res = handler.call(store, {
	          dispatch: local.dispatch,
	          commit: local.commit,
	          getters: local.getters,
	          state: local.state,
	          rootGetters: store.getters,
	          rootState: store.state
	        }, payload);
	        if (!isPromise(res)) {
	          res = Promise.resolve(res);
	        }
	        if (store._devtoolHook) {
	          return res.catch(function(err) {
	            store._devtoolHook.emit("vuex:error", err);
	            throw err;
	          });
	        } else {
	          return res;
	        }
	      });
	    }
	    function registerGetter(store, type, rawGetter, local) {
	      if (store._wrappedGetters[type]) {
	        return;
	      }
	      store._wrappedGetters[type] = function wrappedGetter(store2) {
	        return rawGetter(local.state, local.getters, store2.state, store2.getters);
	      };
	    }
	    function enableStrictMode(store) {
	      store._vm.$watch(function() {
	        return this._data.$$state;
	      }, function() {
	      }, {
	        deep: true,
	        sync: true
	      });
	    }
	    function getNestedState(state, path) {
	      return path.reduce(function(state2, key) {
	        return state2[key];
	      }, state);
	    }
	    function unifyObjectStyle(type, payload, options) {
	      if (isObject(type) && type.type) {
	        options = payload;
	        payload = type;
	        type = type.type;
	      }
	      return {
	        type,
	        payload,
	        options
	      };
	    }
	    function install(_Vue) {
	      if (Vue && _Vue === Vue) {
	        return;
	      }
	      Vue = _Vue;
	      applyMixin(Vue);
	    }
	    var mapState = normalizeNamespace(function(namespace, states) {
	      var res = {};
	      normalizeMap(states).forEach(function(ref) {
	        var key = ref.key;
	        var val = ref.val;
	        res[key] = function mappedState() {
	          var state = this.$store.state;
	          var getters = this.$store.getters;
	          if (namespace) {
	            var module3 = getModuleByNamespace(this.$store, "mapState", namespace);
	            if (!module3) {
	              return;
	            }
	            state = module3.context.state;
	            getters = module3.context.getters;
	          }
	          return typeof val === "function" ? val.call(this, state, getters) : state[val];
	        };
	        res[key].vuex = true;
	      });
	      return res;
	    });
	    var mapMutations = normalizeNamespace(function(namespace, mutations) {
	      var res = {};
	      normalizeMap(mutations).forEach(function(ref) {
	        var key = ref.key;
	        var val = ref.val;
	        res[key] = function mappedMutation() {
	          var args = [], len = arguments.length;
	          while (len--)
	            args[len] = arguments[len];
	          var commit = this.$store.commit;
	          if (namespace) {
	            var module3 = getModuleByNamespace(this.$store, "mapMutations", namespace);
	            if (!module3) {
	              return;
	            }
	            commit = module3.context.commit;
	          }
	          return typeof val === "function" ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
	        };
	      });
	      return res;
	    });
	    var mapGetters = normalizeNamespace(function(namespace, getters) {
	      var res = {};
	      normalizeMap(getters).forEach(function(ref) {
	        var key = ref.key;
	        var val = ref.val;
	        val = namespace + val;
	        res[key] = function mappedGetter() {
	          if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
	            return;
	          }
	          return this.$store.getters[val];
	        };
	        res[key].vuex = true;
	      });
	      return res;
	    });
	    var mapActions = normalizeNamespace(function(namespace, actions) {
	      var res = {};
	      normalizeMap(actions).forEach(function(ref) {
	        var key = ref.key;
	        var val = ref.val;
	        res[key] = function mappedAction() {
	          var args = [], len = arguments.length;
	          while (len--)
	            args[len] = arguments[len];
	          var dispatch = this.$store.dispatch;
	          if (namespace) {
	            var module3 = getModuleByNamespace(this.$store, "mapActions", namespace);
	            if (!module3) {
	              return;
	            }
	            dispatch = module3.context.dispatch;
	          }
	          return typeof val === "function" ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
	        };
	      });
	      return res;
	    });
	    var createNamespacedHelpers = function(namespace) {
	      return {
	        mapState: mapState.bind(null, namespace),
	        mapGetters: mapGetters.bind(null, namespace),
	        mapMutations: mapMutations.bind(null, namespace),
	        mapActions: mapActions.bind(null, namespace)
	      };
	    };
	    function normalizeMap(map) {
	      if (!isValidMap(map)) {
	        return [];
	      }
	      return Array.isArray(map) ? map.map(function(key) {
	        return {
	          key,
	          val: key
	        };
	      }) : Object.keys(map).map(function(key) {
	        return {
	          key,
	          val: map[key]
	        };
	      });
	    }
	    function isValidMap(map) {
	      return Array.isArray(map) || isObject(map);
	    }
	    function normalizeNamespace(fn) {
	      return function(namespace, map) {
	        if (typeof namespace !== "string") {
	          map = namespace;
	          namespace = "";
	        } else if (namespace.charAt(namespace.length - 1) !== "/") {
	          namespace += "/";
	        }
	        return fn(namespace, map);
	      };
	    }
	    function getModuleByNamespace(store, helper, namespace) {
	      var module3 = store._modulesNamespaceMap[namespace];
	      return module3;
	    }
	    function createLogger(ref) {
	      if (ref === void 0)
	        ref = {};
	      var collapsed = ref.collapsed;
	      if (collapsed === void 0)
	        collapsed = true;
	      var filter = ref.filter;
	      if (filter === void 0)
	        filter = function(mutation, stateBefore, stateAfter) {
	          return true;
	        };
	      var transformer = ref.transformer;
	      if (transformer === void 0)
	        transformer = function(state) {
	          return state;
	        };
	      var mutationTransformer = ref.mutationTransformer;
	      if (mutationTransformer === void 0)
	        mutationTransformer = function(mut) {
	          return mut;
	        };
	      var actionFilter = ref.actionFilter;
	      if (actionFilter === void 0)
	        actionFilter = function(action, state) {
	          return true;
	        };
	      var actionTransformer = ref.actionTransformer;
	      if (actionTransformer === void 0)
	        actionTransformer = function(act) {
	          return act;
	        };
	      var logMutations = ref.logMutations;
	      if (logMutations === void 0)
	        logMutations = true;
	      var logActions = ref.logActions;
	      if (logActions === void 0)
	        logActions = true;
	      var logger = ref.logger;
	      if (logger === void 0)
	        logger = console;
	      return function(store) {
	        var prevState = deepCopy(store.state);
	        if (typeof logger === "undefined") {
	          return;
	        }
	        if (logMutations) {
	          store.subscribe(function(mutation, state) {
	            var nextState = deepCopy(state);
	            if (filter(mutation, prevState, nextState)) {
	              var formattedTime = getFormattedTime();
	              var formattedMutation = mutationTransformer(mutation);
	              var message = "mutation " + mutation.type + formattedTime;
	              startMessage(logger, message, collapsed);
	              logger.log("%c prev state", "color: #9E9E9E; font-weight: bold", transformer(prevState));
	              logger.log("%c mutation", "color: #03A9F4; font-weight: bold", formattedMutation);
	              logger.log("%c next state", "color: #4CAF50; font-weight: bold", transformer(nextState));
	              endMessage(logger);
	            }
	            prevState = nextState;
	          });
	        }
	        if (logActions) {
	          store.subscribeAction(function(action, state) {
	            if (actionFilter(action, state)) {
	              var formattedTime = getFormattedTime();
	              var formattedAction = actionTransformer(action);
	              var message = "action " + action.type + formattedTime;
	              startMessage(logger, message, collapsed);
	              logger.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
	              endMessage(logger);
	            }
	          });
	        }
	      };
	    }
	    function startMessage(logger, message, collapsed) {
	      var startMessage2 = collapsed ? logger.groupCollapsed : logger.group;
	      try {
	        startMessage2.call(logger, message);
	      } catch (e) {
	        logger.log(message);
	      }
	    }
	    function endMessage(logger) {
	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("\u2014\u2014 log end \u2014\u2014");
	      }
	    }
	    function getFormattedTime() {
	      var time = new Date();
	      return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	    }
	    function repeat(str, times) {
	      return new Array(times + 1).join(str);
	    }
	    function pad(num, maxLength) {
	      return repeat("0", maxLength - num.toString().length) + num;
	    }
	    var index_cjs = {
	      Store,
	      install,
	      version: "3.6.2",
	      mapState,
	      mapMutations,
	      mapGetters,
	      mapActions,
	      createNamespacedHelpers,
	      createLogger
	    };
	    module2.exports = index_cjs;
	  },
	  function(module2, exports, __webpack_require__) {
	    {
	      module2.exports = __webpack_require__(41);
	    }
	  },
	  function(module2, exports, __webpack_require__) {
	    /*!
	     * vue-client-only v0.0.0-semantic-release
	     * (c) 2021-present egoist <0x142857@gmail.com>
	     * Released under the MIT License.
	     */
	    var index = {
	      name: "ClientOnly",
	      functional: true,
	      props: {
	        placeholder: String,
	        placeholderTag: {
	          type: String,
	          default: "div"
	        }
	      },
	      render: function render(h, ref) {
	        var parent = ref.parent;
	        var slots = ref.slots;
	        var props = ref.props;
	        var ref$1 = slots();
	        var defaultSlot = ref$1.default;
	        if (defaultSlot === void 0)
	          defaultSlot = [];
	        var placeholderSlot = ref$1.placeholder;
	        if (parent._isMounted) {
	          return defaultSlot;
	        }
	        parent.$once("hook:mounted", function() {
	          parent.$forceUpdate();
	        });
	        if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
	          return h(props.placeholderTag, {
	            class: ["client-only-placeholder"]
	          }, props.placeholder || placeholderSlot);
	        }
	        return defaultSlot.length > 0 ? defaultSlot.map(function() {
	          return h(false);
	        }) : h(false);
	      }
	    };
	    module2.exports = index;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    var render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", [_vm._ssrNode("<div" + _vm._ssrAttr("aria-expanded", _vm.isOpen) + ' aria-haspopup="true">', "</div>", [_vm._t("trigger")], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="bg-c-0 border border-c-0 fixed z-50 py-2 rounded-md shadow"' + _vm._ssrStyle(null, {
	        ..._vm.position
	      }, {
	        display: _vm.isOpen ? "" : "none"
	      }) + ">", "</div>", [_vm._t("default")], 2)], 2);
	    };
	    var staticRenderFns = [];
	    var Tooltipvue_type_script_lang_js_ = {
	      data() {
	        return {
	          isOpen: false,
	          left: 0,
	          offset: 12,
	          top: 0,
	          directionBottom: true,
	          directionRight: true,
	          directionChecked: false,
	          width: 0
	        };
	      },
	      computed: {
	        position() {
	          const valuetoRemove = this.directionBottom ? 0 : this.height();
	          const leftValue = this.directionRight ? this.left + this.offset : this.left - this.width - this.offset / 2;
	          return {
	            left: `${leftValue}px`,
	            top: `${this.top + this.offset - valuetoRemove}px`
	          };
	        }
	      },
	      created() {
	      },
	      destroyed() {
	      },
	      methods: {
	        checkTooltipVisibility() {
	          this.directionChecked = true;
	          const contentRect = this.$refs.content.getBoundingClientRect();
	          const triggerRect = this.$refs.trigger.getBoundingClientRect();
	          this.width = contentRect.width;
	          const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	          const viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
	          this.directionBottom = contentRect.bottom + this.offset < viewHeight;
	          this.directionRight = this.left + this.width + triggerRect.width + this.offset < viewWidth;
	        },
	        handleScroll() {
	          this.isOpen = false;
	        },
	        height() {
	          return this.$refs.content ? this.$refs.content.clientHeight : 0;
	        },
	        hideTooltip() {
	          this.isOpen = false;
	          this.directionBottom = true;
	          this.directionRight = true;
	          this.directionChecked = false;
	        },
	        async mousemove(event) {
	          this.left = event.clientX;
	          this.top = event.clientY;
	          if (!this.directionChecked) {
	            if (!this.$refs.content || !this.$refs.trigger) {
	              return;
	            }
	            await this.$nextTick();
	          }
	        },
	        showTooltip(event) {
	          this.left = event.clientX;
	          this.top = event.clientY;
	          this.isOpen = true;
	        }
	      }
	    };
	    var Common_Tooltipvue_type_script_lang_js_ = Tooltipvue_type_script_lang_js_;
	    var componentNormalizer = __webpack_require__(1);
	    var component = Object(componentNormalizer["a"])(Common_Tooltipvue_type_script_lang_js_, render, staticRenderFns, false, null, null, "0346d05d");
	    __webpack_exports__["a"] = component.exports;
	  },
	  function(module2, exports) {
	    module2.exports = require$$4;
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(60);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("502ab956", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(62);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("3d258bc4", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(63);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    __webpack_require__(6).default("52dd2c64", content, true);
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(65);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("3cedba9b", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(67);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("692562d5", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(69);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("24720a7c", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(71);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("420522c3", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(73);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("00553ff8", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(75);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("583b3b48", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(77);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("65f33262", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(79);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("6c74b10c", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    var content = __webpack_require__(81);
	    if (content.__esModule)
	      content = content.default;
	    if (typeof content === "string")
	      content = [[module2.i, content, ""]];
	    if (content.locals)
	      module2.exports = content.locals;
	    var add = __webpack_require__(6).default;
	    module2.exports.__inject__ = function(context) {
	      add("27fc8bbc", content, true, context);
	    };
	  },
	  function(module2, exports, __webpack_require__) {
	    /**
	     * vue-meta v2.4.0
	     * (c) 2020
	     * - Declan de Wet
	     * - Sébastien Chopin (@Atinux)
	     * - Pim (@pimlie)
	     * - All the amazing contributors
	     * @license MIT
	     */
	    function _interopDefault(ex) {
	      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
	    }
	    var deepmerge = _interopDefault(__webpack_require__(58));
	    var version = "2.4.0";
	    function _typeof(obj) {
	      "@babel/helpers - typeof";
	      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	        _typeof = function(obj2) {
	          return typeof obj2;
	        };
	      } else {
	        _typeof = function(obj2) {
	          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
	        };
	      }
	      return _typeof(obj);
	    }
	    function _defineProperty(obj, key, value) {
	      if (key in obj) {
	        Object.defineProperty(obj, key, {
	          value,
	          enumerable: true,
	          configurable: true,
	          writable: true
	        });
	      } else {
	        obj[key] = value;
	      }
	      return obj;
	    }
	    function ownKeys(object, enumerableOnly) {
	      var keys = Object.keys(object);
	      if (Object.getOwnPropertySymbols) {
	        var symbols = Object.getOwnPropertySymbols(object);
	        if (enumerableOnly)
	          symbols = symbols.filter(function(sym) {
	            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	          });
	        keys.push.apply(keys, symbols);
	      }
	      return keys;
	    }
	    function _objectSpread2(target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i] != null ? arguments[i] : {};
	        if (i % 2) {
	          ownKeys(Object(source), true).forEach(function(key) {
	            _defineProperty(target, key, source[key]);
	          });
	        } else if (Object.getOwnPropertyDescriptors) {
	          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	        } else {
	          ownKeys(Object(source)).forEach(function(key) {
	            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	          });
	        }
	      }
	      return target;
	    }
	    function _toConsumableArray(arr) {
	      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	    }
	    function _arrayWithoutHoles(arr) {
	      if (Array.isArray(arr))
	        return _arrayLikeToArray(arr);
	    }
	    function _iterableToArray(iter) {
	      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
	        return Array.from(iter);
	    }
	    function _unsupportedIterableToArray(o, minLen) {
	      if (!o)
	        return;
	      if (typeof o === "string")
	        return _arrayLikeToArray(o, minLen);
	      var n = Object.prototype.toString.call(o).slice(8, -1);
	      if (n === "Object" && o.constructor)
	        n = o.constructor.name;
	      if (n === "Map" || n === "Set")
	        return Array.from(o);
	      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
	        return _arrayLikeToArray(o, minLen);
	    }
	    function _arrayLikeToArray(arr, len) {
	      if (len == null || len > arr.length)
	        len = arr.length;
	      for (var i = 0, arr2 = new Array(len); i < len; i++)
	        arr2[i] = arr[i];
	      return arr2;
	    }
	    function _nonIterableSpread() {
	      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	    }
	    function _createForOfIteratorHelper(o, allowArrayLike) {
	      var it;
	      if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
	        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	          if (it)
	            o = it;
	          var i = 0;
	          var F = function() {
	          };
	          return {
	            s: F,
	            n: function() {
	              if (i >= o.length)
	                return {
	                  done: true
	                };
	              return {
	                done: false,
	                value: o[i++]
	              };
	            },
	            e: function(e) {
	              throw e;
	            },
	            f: F
	          };
	        }
	        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	      }
	      var normalCompletion = true, didErr = false, err;
	      return {
	        s: function() {
	          it = o[Symbol.iterator]();
	        },
	        n: function() {
	          var step = it.next();
	          normalCompletion = step.done;
	          return step;
	        },
	        e: function(e) {
	          didErr = true;
	          err = e;
	        },
	        f: function() {
	          try {
	            if (!normalCompletion && it.return != null)
	              it.return();
	          } finally {
	            if (didErr)
	              throw err;
	          }
	        }
	      };
	    }
	    function isArray(arg) {
	      return Array.isArray(arg);
	    }
	    function isUndefined(arg) {
	      return typeof arg === "undefined";
	    }
	    function isObject(arg) {
	      return _typeof(arg) === "object";
	    }
	    function isPureObject(arg) {
	      return _typeof(arg) === "object" && arg !== null;
	    }
	    function isFunction(arg) {
	      return typeof arg === "function";
	    }
	    function isString(arg) {
	      return typeof arg === "string";
	    }
	    function hasGlobalWindowFn() {
	      try {
	        return !isUndefined(window);
	      } catch (e) {
	        return false;
	      }
	    }
	    var hasGlobalWindow = hasGlobalWindowFn();
	    var _global = hasGlobalWindow ? window : commonjsGlobal;
	    var console2 = _global.console || {};
	    function warn(str) {
	      if (!console2 || !console2.warn) {
	        return;
	      }
	      console2.warn(str);
	    }
	    var showWarningNotSupported = function showWarningNotSupported2() {
	      return warn("This vue app/component has no vue-meta configuration");
	    };
	    var defaultInfo = {
	      title: void 0,
	      titleChunk: "",
	      titleTemplate: "%s",
	      htmlAttrs: {},
	      bodyAttrs: {},
	      headAttrs: {},
	      base: [],
	      link: [],
	      meta: [],
	      style: [],
	      script: [],
	      noscript: [],
	      __dangerouslyDisableSanitizers: [],
	      __dangerouslyDisableSanitizersByTagID: {}
	    };
	    var rootConfigKey = "_vueMeta";
	    var keyName = "metaInfo";
	    var attribute = "data-vue-meta";
	    var ssrAttribute = "data-vue-meta-server-rendered";
	    var tagIDKeyName = "vmid";
	    var metaTemplateKeyName = "template";
	    var contentKeyName = "content";
	    var ssrAppId = "ssr";
	    var debounceWait = 10;
	    var waitOnDestroyed = true;
	    var defaultOptions = {
	      keyName,
	      attribute,
	      ssrAttribute,
	      tagIDKeyName,
	      contentKeyName,
	      metaTemplateKeyName,
	      waitOnDestroyed,
	      debounceWait,
	      ssrAppId
	    };
	    var defaultInfoKeys = Object.keys(defaultInfo);
	    var disableOptionKeys = [defaultInfoKeys[12], defaultInfoKeys[13]];
	    var metaInfoOptionKeys = [defaultInfoKeys[1], defaultInfoKeys[2], "changed"].concat(disableOptionKeys);
	    var metaInfoAttributeKeys = [defaultInfoKeys[3], defaultInfoKeys[4], defaultInfoKeys[5]];
	    var tagsSupportingOnload = ["link", "style", "script"];
	    var tagsWithoutEndTag = ["base", "meta", "link"];
	    var tagsWithInnerContent = ["noscript", "script", "style"];
	    var tagAttributeAsInnerContent = ["innerHTML", "cssText", "json"];
	    var tagProperties = ["once", "skip", "template"];
	    var commonDataAttributes = ["body", "pbody"];
	    var booleanHtmlAttributes = ["allowfullscreen", "amp", "amp-boilerplate", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare", "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple", "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly", "required", "reversed", "scoped", "seamless", "selected", "sortable", "truespeed", "typemustmatch", "visible"];
	    var batchId = null;
	    function triggerUpdate(_ref, rootVm, hookName) {
	      var debounceWait2 = _ref.debounceWait;
	      if (!rootVm[rootConfigKey].initialized && (rootVm[rootConfigKey].initializing || hookName === "watcher")) {
	        rootVm[rootConfigKey].initialized = null;
	      }
	      if (rootVm[rootConfigKey].initialized && !rootVm[rootConfigKey].pausing) {
	        batchUpdate(function() {
	          return void rootVm.$meta().refresh();
	        }, debounceWait2);
	      }
	    }
	    function batchUpdate(callback, timeout) {
	      timeout = timeout === void 0 ? 10 : timeout;
	      if (!timeout) {
	        callback();
	        return;
	      }
	      clearTimeout(batchId);
	      batchId = setTimeout(function() {
	        callback();
	      }, timeout);
	      return batchId;
	    }
	    function find(array, predicate, thisArg) {
	      if (!Array.prototype.find) {
	        for (var idx = 0; idx < array.length; idx++) {
	          if (predicate.call(thisArg, array[idx], idx, array)) {
	            return array[idx];
	          }
	        }
	        return;
	      }
	      return array.find(predicate, thisArg);
	    }
	    function findIndex(array, predicate, thisArg) {
	      if (!Array.prototype.findIndex) {
	        for (var idx = 0; idx < array.length; idx++) {
	          if (predicate.call(thisArg, array[idx], idx, array)) {
	            return idx;
	          }
	        }
	        return -1;
	      }
	      return array.findIndex(predicate, thisArg);
	    }
	    function toArray(arg) {
	      if (!Array.from) {
	        return Array.prototype.slice.call(arg);
	      }
	      return Array.from(arg);
	    }
	    function includes(array, value) {
	      if (!Array.prototype.includes) {
	        for (var idx in array) {
	          if (array[idx] === value) {
	            return true;
	          }
	        }
	        return false;
	      }
	      return array.includes(value);
	    }
	    var querySelector = function querySelector2(arg, el) {
	      return (el || document).querySelectorAll(arg);
	    };
	    function getTag(tags, tag) {
	      if (!tags[tag]) {
	        tags[tag] = document.getElementsByTagName(tag)[0];
	      }
	      return tags[tag];
	    }
	    function getElementsKey(_ref) {
	      var body = _ref.body, pbody = _ref.pbody;
	      return body ? "body" : pbody ? "pbody" : "head";
	    }
	    function queryElements(parentNode, _ref2, attributes) {
	      var appId2 = _ref2.appId, attribute2 = _ref2.attribute, type = _ref2.type, tagIDKeyName2 = _ref2.tagIDKeyName;
	      attributes = attributes || {};
	      var queries = ["".concat(type, "[").concat(attribute2, '="').concat(appId2, '"]'), "".concat(type, "[data-").concat(tagIDKeyName2, "]")].map(function(query) {
	        for (var key in attributes) {
	          var val = attributes[key];
	          var attributeValue = val && val !== true ? '="'.concat(val, '"') : "";
	          query += "[data-".concat(key).concat(attributeValue, "]");
	        }
	        return query;
	      });
	      return toArray(querySelector(queries.join(", "), parentNode));
	    }
	    function removeElementsByAppId(_ref3, appId2) {
	      var attribute2 = _ref3.attribute;
	      toArray(querySelector("[".concat(attribute2, '="').concat(appId2, '"]'))).map(function(el) {
	        return el.remove();
	      });
	    }
	    function removeAttribute(el, attributeName) {
	      el.removeAttribute(attributeName);
	    }
	    function hasMetaInfo(vm) {
	      vm = vm || this;
	      return vm && (vm[rootConfigKey] === true || isObject(vm[rootConfigKey]));
	    }
	    function inMetaInfoBranch(vm) {
	      vm = vm || this;
	      return vm && !isUndefined(vm[rootConfigKey]);
	    }
	    function pause(rootVm, refresh2) {
	      rootVm[rootConfigKey].pausing = true;
	      return function() {
	        return resume(rootVm, refresh2);
	      };
	    }
	    function resume(rootVm, refresh2) {
	      rootVm[rootConfigKey].pausing = false;
	      if (refresh2 || refresh2 === void 0) {
	        return rootVm.$meta().refresh();
	      }
	    }
	    function addNavGuards(rootVm) {
	      var router = rootVm.$router;
	      if (rootVm[rootConfigKey].navGuards || !router) {
	        return;
	      }
	      rootVm[rootConfigKey].navGuards = true;
	      router.beforeEach(function(to, from, next) {
	        pause(rootVm);
	        next();
	      });
	      router.afterEach(function() {
	        rootVm.$nextTick(function() {
	          var _resume = resume(rootVm), metaInfo = _resume.metaInfo;
	          if (metaInfo && isFunction(metaInfo.afterNavigation)) {
	            metaInfo.afterNavigation(metaInfo);
	          }
	        });
	      });
	    }
	    var appId = 1;
	    function createMixin(Vue, options) {
	      var updateOnLifecycleHook = ["activated", "deactivated", "beforeMount"];
	      var wasServerRendered = false;
	      return {
	        beforeCreate: function beforeCreate() {
	          var _this2 = this;
	          var rootKey = "$root";
	          var $root = this[rootKey];
	          var $options = this.$options;
	          var devtoolsEnabled = Vue.config.devtools;
	          Object.defineProperty(this, "_hasMetaInfo", {
	            configurable: true,
	            get: function get() {
	              if (devtoolsEnabled && !$root[rootConfigKey].deprecationWarningShown) {
	                warn("VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead");
	                $root[rootConfigKey].deprecationWarningShown = true;
	              }
	              return hasMetaInfo(this);
	            }
	          });
	          if (this === $root) {
	            $root.$once("hook:beforeMount", function() {
	              wasServerRendered = this.$el && this.$el.nodeType === 1 && this.$el.hasAttribute("data-server-rendered");
	              if (!wasServerRendered && $root[rootConfigKey] && $root[rootConfigKey].appId === 1) {
	                var htmlTag = getTag({}, "html");
	                wasServerRendered = htmlTag && htmlTag.hasAttribute(options.ssrAttribute);
	              }
	            });
	          }
	          if (isUndefined($options[options.keyName]) || $options[options.keyName] === null) {
	            return;
	          }
	          if (!$root[rootConfigKey]) {
	            $root[rootConfigKey] = {
	              appId
	            };
	            appId++;
	            if (devtoolsEnabled && $root.$options[options.keyName]) {
	              this.$nextTick(function() {
	                var child = find($root.$children, function(c) {
	                  return c.$vnode && c.$vnode.fnOptions;
	                });
	                if (child && child.$vnode.fnOptions[options.keyName]) {
	                  warn("VueMeta has detected a possible global mixin which adds a ".concat(options.keyName, " property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead"));
	                }
	              });
	            }
	          }
	          if (!this[rootConfigKey]) {
	            this[rootConfigKey] = true;
	            var parent = this.$parent;
	            while (parent && parent !== $root) {
	              if (isUndefined(parent[rootConfigKey])) {
	                parent[rootConfigKey] = false;
	              }
	              parent = parent.$parent;
	            }
	          }
	          if (isFunction($options[options.keyName])) {
	            $options.computed = $options.computed || {};
	            $options.computed.$metaInfo = $options[options.keyName];
	            if (!this.$isServer) {
	              this.$on("hook:created", function() {
	                this.$watch("$metaInfo", function() {
	                  triggerUpdate(options, this[rootKey], "watcher");
	                });
	              });
	            }
	          }
	          if (isUndefined($root[rootConfigKey].initialized)) {
	            $root[rootConfigKey].initialized = this.$isServer;
	            if (!$root[rootConfigKey].initialized) {
	              if (!$root[rootConfigKey].initializedSsr) {
	                $root[rootConfigKey].initializedSsr = true;
	                this.$on("hook:beforeMount", function() {
	                  var $root2 = this[rootKey];
	                  if (wasServerRendered) {
	                    $root2[rootConfigKey].appId = options.ssrAppId;
	                  }
	                });
	              }
	              this.$on("hook:mounted", function() {
	                var $root2 = this[rootKey];
	                if ($root2[rootConfigKey].initialized) {
	                  return;
	                }
	                $root2[rootConfigKey].initializing = true;
	                this.$nextTick(function() {
	                  var _$root$$meta$refresh = $root2.$meta().refresh(), tags = _$root$$meta$refresh.tags, metaInfo = _$root$$meta$refresh.metaInfo;
	                  if (tags === false && $root2[rootConfigKey].initialized === null) {
	                    this.$nextTick(function() {
	                      return triggerUpdate(options, $root2, "init");
	                    });
	                  }
	                  $root2[rootConfigKey].initialized = true;
	                  delete $root2[rootConfigKey].initializing;
	                  if (!options.refreshOnceOnNavigation && metaInfo.afterNavigation) {
	                    addNavGuards($root2);
	                  }
	                });
	              });
	              if (options.refreshOnceOnNavigation) {
	                addNavGuards($root);
	              }
	            }
	          }
	          this.$on("hook:destroyed", function() {
	            var _this = this;
	            if (!this.$parent || !hasMetaInfo(this)) {
	              return;
	            }
	            delete this._hasMetaInfo;
	            this.$nextTick(function() {
	              if (!options.waitOnDestroyed || !_this.$el || !_this.$el.offsetParent) {
	                triggerUpdate(options, _this.$root, "destroyed");
	                return;
	              }
	              var interval = setInterval(function() {
	                if (_this.$el && _this.$el.offsetParent !== null) {
	                  return;
	                }
	                clearInterval(interval);
	                triggerUpdate(options, _this.$root, "destroyed");
	              }, 50);
	            });
	          });
	          if (this.$isServer) {
	            return;
	          }
	          updateOnLifecycleHook.forEach(function(lifecycleHook) {
	            _this2.$on("hook:".concat(lifecycleHook), function() {
	              triggerUpdate(options, this[rootKey], lifecycleHook);
	            });
	          });
	        }
	      };
	    }
	    function setOptions(options) {
	      options = isObject(options) ? options : {};
	      return {
	        keyName: options["keyName"] || defaultOptions.keyName,
	        attribute: options["attribute"] || defaultOptions.attribute,
	        ssrAttribute: options["ssrAttribute"] || defaultOptions.ssrAttribute,
	        tagIDKeyName: options["tagIDKeyName"] || defaultOptions.tagIDKeyName,
	        contentKeyName: options["contentKeyName"] || defaultOptions.contentKeyName,
	        metaTemplateKeyName: options["metaTemplateKeyName"] || defaultOptions.metaTemplateKeyName,
	        debounceWait: isUndefined(options["debounceWait"]) ? defaultOptions.debounceWait : options["debounceWait"],
	        waitOnDestroyed: isUndefined(options["waitOnDestroyed"]) ? defaultOptions.waitOnDestroyed : options["waitOnDestroyed"],
	        ssrAppId: options["ssrAppId"] || defaultOptions.ssrAppId,
	        refreshOnceOnNavigation: !!options["refreshOnceOnNavigation"]
	      };
	    }
	    function getOptions(options) {
	      var optionsCopy = {};
	      for (var key in options) {
	        optionsCopy[key] = options[key];
	      }
	      return optionsCopy;
	    }
	    function ensureIsArray(arg, key) {
	      if (!key || !isObject(arg)) {
	        return isArray(arg) ? arg : [];
	      }
	      if (!isArray(arg[key])) {
	        arg[key] = [];
	      }
	      return arg;
	    }
	    var serverSequences = [[/&/g, "&amp;"], [/</g, "&lt;"], [/>/g, "&gt;"], [/"/g, "&quot;"], [/'/g, "&#x27;"]];
	    var clientSequences = [[/&/g, "&"], [/</g, "<"], [/>/g, ">"], [/"/g, '"'], [/'/g, "'"]];
	    function escape(info, options, escapeOptions, escapeKeys) {
	      var tagIDKeyName2 = options.tagIDKeyName;
	      var _escapeOptions$doEsca = escapeOptions.doEscape, doEscape = _escapeOptions$doEsca === void 0 ? function(v) {
	        return v;
	      } : _escapeOptions$doEsca;
	      var escaped = {};
	      for (var key in info) {
	        var value = info[key];
	        if (includes(metaInfoOptionKeys, key)) {
	          escaped[key] = value;
	          continue;
	        }
	        var disableKey = disableOptionKeys[0];
	        if (escapeOptions[disableKey] && includes(escapeOptions[disableKey], key)) {
	          escaped[key] = value;
	          continue;
	        }
	        var tagId = info[tagIDKeyName2];
	        if (tagId) {
	          disableKey = disableOptionKeys[1];
	          if (escapeOptions[disableKey] && escapeOptions[disableKey][tagId] && includes(escapeOptions[disableKey][tagId], key)) {
	            escaped[key] = value;
	            continue;
	          }
	        }
	        if (isString(value)) {
	          escaped[key] = doEscape(value);
	        } else if (isArray(value)) {
	          escaped[key] = value.map(function(v) {
	            if (isPureObject(v)) {
	              return escape(v, options, escapeOptions, true);
	            }
	            return doEscape(v);
	          });
	        } else if (isPureObject(value)) {
	          escaped[key] = escape(value, options, escapeOptions, true);
	        } else {
	          escaped[key] = value;
	        }
	        if (escapeKeys) {
	          var escapedKey = doEscape(key);
	          if (key !== escapedKey) {
	            escaped[escapedKey] = escaped[key];
	            delete escaped[key];
	          }
	        }
	      }
	      return escaped;
	    }
	    function escapeMetaInfo(options, info, escapeSequences) {
	      escapeSequences = escapeSequences || [];
	      var escapeOptions = {
	        doEscape: function doEscape(value) {
	          return escapeSequences.reduce(function(val, seq) {
	            return val.replace(seq[0], seq[1]);
	          }, value);
	        }
	      };
	      disableOptionKeys.forEach(function(disableKey, index2) {
	        if (index2 === 0) {
	          ensureIsArray(info, disableKey);
	        } else if (index2 === 1) {
	          for (var key in info[disableKey]) {
	            ensureIsArray(info[disableKey], key);
	          }
	        }
	        escapeOptions[disableKey] = info[disableKey];
	      });
	      return escape(info, options, escapeOptions);
	    }
	    function applyTemplate(_ref, headObject, template, chunk) {
	      var component = _ref.component, metaTemplateKeyName2 = _ref.metaTemplateKeyName, contentKeyName2 = _ref.contentKeyName;
	      if (template === true || headObject[metaTemplateKeyName2] === true) {
	        return false;
	      }
	      if (isUndefined(template) && headObject[metaTemplateKeyName2]) {
	        template = headObject[metaTemplateKeyName2];
	        headObject[metaTemplateKeyName2] = true;
	      }
	      if (!template) {
	        delete headObject[metaTemplateKeyName2];
	        return false;
	      }
	      if (isUndefined(chunk)) {
	        chunk = headObject[contentKeyName2];
	      }
	      headObject[contentKeyName2] = isFunction(template) ? template.call(component, chunk) : template.replace(/%s/g, chunk);
	      return true;
	    }
	    function _arrayMerge(_ref, target, source) {
	      var component = _ref.component, tagIDKeyName2 = _ref.tagIDKeyName, metaTemplateKeyName2 = _ref.metaTemplateKeyName, contentKeyName2 = _ref.contentKeyName;
	      var destination = [];
	      if (!target.length && !source.length) {
	        return destination;
	      }
	      target.forEach(function(targetItem, targetIndex) {
	        if (!targetItem[tagIDKeyName2]) {
	          destination.push(targetItem);
	          return;
	        }
	        var sourceIndex = findIndex(source, function(item) {
	          return item[tagIDKeyName2] === targetItem[tagIDKeyName2];
	        });
	        var sourceItem = source[sourceIndex];
	        if (sourceIndex === -1) {
	          destination.push(targetItem);
	          return;
	        }
	        if (contentKeyName2 in sourceItem && sourceItem[contentKeyName2] === void 0 || "innerHTML" in sourceItem && sourceItem.innerHTML === void 0) {
	          destination.push(targetItem);
	          source.splice(sourceIndex, 1);
	          return;
	        }
	        if (sourceItem[contentKeyName2] === null || sourceItem.innerHTML === null) {
	          source.splice(sourceIndex, 1);
	          return;
	        }
	        var targetTemplate = targetItem[metaTemplateKeyName2];
	        if (!targetTemplate) {
	          return;
	        }
	        var sourceTemplate = sourceItem[metaTemplateKeyName2];
	        if (!sourceTemplate) {
	          applyTemplate({
	            component,
	            metaTemplateKeyName: metaTemplateKeyName2,
	            contentKeyName: contentKeyName2
	          }, sourceItem, targetTemplate);
	          sourceItem.template = true;
	          return;
	        }
	        if (!sourceItem[contentKeyName2]) {
	          applyTemplate({
	            component,
	            metaTemplateKeyName: metaTemplateKeyName2,
	            contentKeyName: contentKeyName2
	          }, sourceItem, void 0, targetItem[contentKeyName2]);
	        }
	      });
	      return destination.concat(source);
	    }
	    var warningShown = false;
	    function merge(target, source, options) {
	      options = options || {};
	      if (source.title === void 0) {
	        delete source.title;
	      }
	      metaInfoAttributeKeys.forEach(function(attrKey) {
	        if (!source[attrKey]) {
	          return;
	        }
	        for (var key in source[attrKey]) {
	          if (key in source[attrKey] && source[attrKey][key] === void 0) {
	            if (includes(booleanHtmlAttributes, key) && !warningShown) {
	              warn("VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details");
	              warningShown = true;
	            }
	            delete source[attrKey][key];
	          }
	        }
	      });
	      return deepmerge(target, source, {
	        arrayMerge: function arrayMerge(t, s) {
	          return _arrayMerge(options, t, s);
	        }
	      });
	    }
	    function getComponentMetaInfo(options, component) {
	      return getComponentOption(options || {}, component, defaultInfo);
	    }
	    function getComponentOption(options, component, result) {
	      result = result || {};
	      if (component._inactive) {
	        return result;
	      }
	      options = options || {};
	      var _options = options, keyName2 = _options.keyName;
	      var $metaInfo = component.$metaInfo, $options = component.$options, $children = component.$children;
	      if ($options[keyName2]) {
	        var data = $metaInfo || $options[keyName2];
	        if (isObject(data)) {
	          result = merge(result, data, options);
	        }
	      }
	      if ($children.length) {
	        $children.forEach(function(childComponent) {
	          if (!inMetaInfoBranch(childComponent)) {
	            return;
	          }
	          result = getComponentOption(options, childComponent, result);
	        });
	      }
	      return result;
	    }
	    var callbacks = [];
	    function isDOMComplete(d) {
	      return (d || document).readyState === "complete";
	    }
	    function addCallback(query, callback) {
	      if (arguments.length === 1) {
	        callback = query;
	        query = "";
	      }
	      callbacks.push([query, callback]);
	    }
	    function addCallbacks(_ref, type, tags, autoAddListeners) {
	      var tagIDKeyName2 = _ref.tagIDKeyName;
	      var hasAsyncCallback = false;
	      tags.forEach(function(tag) {
	        if (!tag[tagIDKeyName2] || !tag.callback) {
	          return;
	        }
	        hasAsyncCallback = true;
	        addCallback("".concat(type, "[data-").concat(tagIDKeyName2, '="').concat(tag[tagIDKeyName2], '"]'), tag.callback);
	      });
	      if (!autoAddListeners || !hasAsyncCallback) {
	        return hasAsyncCallback;
	      }
	      return addListeners();
	    }
	    function addListeners() {
	      if (isDOMComplete()) {
	        applyCallbacks();
	        return;
	      }
	      document.onreadystatechange = function() {
	        applyCallbacks();
	      };
	    }
	    function applyCallbacks(matchElement) {
	      callbacks.forEach(function(args) {
	        var query = args[0];
	        var callback = args[1];
	        var selector = "".concat(query, '[onload="this.__vm_l=1"]');
	        var elements = [];
	        if (!matchElement) {
	          elements = toArray(querySelector(selector));
	        }
	        if (matchElement && matchElement.matches(selector)) {
	          elements = [matchElement];
	        }
	        elements.forEach(function(element) {
	          if (element.__vm_cb) {
	            return;
	          }
	          var onload = function onload2() {
	            element.__vm_cb = true;
	            removeAttribute(element, "onload");
	            callback(element);
	          };
	          if (element.__vm_l) {
	            onload();
	            return;
	          }
	          if (!element.__vm_ev) {
	            element.__vm_ev = true;
	            element.addEventListener("load", onload);
	          }
	        });
	      });
	    }
	    var attributeMap = {};
	    function updateAttribute(appId2, options, type, attrs, tag) {
	      var _ref = options || {}, attribute2 = _ref.attribute;
	      var vueMetaAttrString = tag.getAttribute(attribute2);
	      if (vueMetaAttrString) {
	        attributeMap[type] = JSON.parse(decodeURI(vueMetaAttrString));
	        removeAttribute(tag, attribute2);
	      }
	      var data = attributeMap[type] || {};
	      var toUpdate = [];
	      for (var attr in data) {
	        if (data[attr] !== void 0 && appId2 in data[attr]) {
	          toUpdate.push(attr);
	          if (!attrs[attr]) {
	            delete data[attr][appId2];
	          }
	        }
	      }
	      for (var _attr in attrs) {
	        var attrData = data[_attr];
	        if (!attrData || attrData[appId2] !== attrs[_attr]) {
	          toUpdate.push(_attr);
	          if (attrs[_attr] !== void 0) {
	            data[_attr] = data[_attr] || {};
	            data[_attr][appId2] = attrs[_attr];
	          }
	        }
	      }
	      for (var _i = 0, _toUpdate = toUpdate; _i < _toUpdate.length; _i++) {
	        var _attr2 = _toUpdate[_i];
	        var _attrData = data[_attr2];
	        var attrValues = [];
	        for (var _appId in _attrData) {
	          Array.prototype.push.apply(attrValues, [].concat(_attrData[_appId]));
	        }
	        if (attrValues.length) {
	          var attrValue = includes(booleanHtmlAttributes, _attr2) && attrValues.some(Boolean) ? "" : attrValues.filter(function(v) {
	            return v !== void 0;
	          }).join(" ");
	          tag.setAttribute(_attr2, attrValue);
	        } else {
	          removeAttribute(tag, _attr2);
	        }
	      }
	      attributeMap[type] = data;
	    }
	    function updateTitle(title) {
	      if (!title && title !== "") {
	        return;
	      }
	      document.title = title;
	    }
	    function updateTag(appId2, options, type, tags, head, body) {
	      var _ref = options || {}, attribute2 = _ref.attribute, tagIDKeyName2 = _ref.tagIDKeyName;
	      var dataAttributes = commonDataAttributes.slice();
	      dataAttributes.push(tagIDKeyName2);
	      var newElements = [];
	      var queryOptions = {
	        appId: appId2,
	        attribute: attribute2,
	        type,
	        tagIDKeyName: tagIDKeyName2
	      };
	      var currentElements = {
	        head: queryElements(head, queryOptions),
	        pbody: queryElements(body, queryOptions, {
	          pbody: true
	        }),
	        body: queryElements(body, queryOptions, {
	          body: true
	        })
	      };
	      if (tags.length > 1) {
	        var found = [];
	        tags = tags.filter(function(x) {
	          var k = JSON.stringify(x);
	          var res = !includes(found, k);
	          found.push(k);
	          return res;
	        });
	      }
	      tags.forEach(function(tag) {
	        if (tag.skip) {
	          return;
	        }
	        var newElement = document.createElement(type);
	        if (!tag.once) {
	          newElement.setAttribute(attribute2, appId2);
	        }
	        Object.keys(tag).forEach(function(attr) {
	          if (includes(tagProperties, attr)) {
	            return;
	          }
	          if (attr === "innerHTML") {
	            newElement.innerHTML = tag.innerHTML;
	            return;
	          }
	          if (attr === "json") {
	            newElement.innerHTML = JSON.stringify(tag.json);
	            return;
	          }
	          if (attr === "cssText") {
	            if (newElement.styleSheet) {
	              newElement.styleSheet.cssText = tag.cssText;
	            } else {
	              newElement.appendChild(document.createTextNode(tag.cssText));
	            }
	            return;
	          }
	          if (attr === "callback") {
	            newElement.onload = function() {
	              return tag[attr](newElement);
	            };
	            return;
	          }
	          var _attr = includes(dataAttributes, attr) ? "data-".concat(attr) : attr;
	          var isBooleanAttribute = includes(booleanHtmlAttributes, attr);
	          if (isBooleanAttribute && !tag[attr]) {
	            return;
	          }
	          var value = isBooleanAttribute ? "" : tag[attr];
	          newElement.setAttribute(_attr, value);
	        });
	        var oldElements2 = currentElements[getElementsKey(tag)];
	        var indexToDelete;
	        var hasEqualElement = oldElements2.some(function(existingTag, index2) {
	          indexToDelete = index2;
	          return newElement.isEqualNode(existingTag);
	        });
	        if (hasEqualElement && (indexToDelete || indexToDelete === 0)) {
	          oldElements2.splice(indexToDelete, 1);
	        } else {
	          newElements.push(newElement);
	        }
	      });
	      var oldElements = [];
	      for (var _type in currentElements) {
	        Array.prototype.push.apply(oldElements, currentElements[_type]);
	      }
	      oldElements.forEach(function(element) {
	        element.parentNode.removeChild(element);
	      });
	      newElements.forEach(function(element) {
	        if (element.hasAttribute("data-body")) {
	          body.appendChild(element);
	          return;
	        }
	        if (element.hasAttribute("data-pbody")) {
	          body.insertBefore(element, body.firstChild);
	          return;
	        }
	        head.appendChild(element);
	      });
	      return {
	        oldTags: oldElements,
	        newTags: newElements
	      };
	    }
	    function updateClientMetaInfo(appId2, options, newInfo) {
	      options = options || {};
	      var _options = options, ssrAttribute2 = _options.ssrAttribute, ssrAppId2 = _options.ssrAppId;
	      var tags = {};
	      var htmlTag = getTag(tags, "html");
	      if (appId2 === ssrAppId2 && htmlTag.hasAttribute(ssrAttribute2)) {
	        removeAttribute(htmlTag, ssrAttribute2);
	        var addLoadListeners = false;
	        tagsSupportingOnload.forEach(function(type2) {
	          if (newInfo[type2] && addCallbacks(options, type2, newInfo[type2])) {
	            addLoadListeners = true;
	          }
	        });
	        if (addLoadListeners) {
	          addListeners();
	        }
	        return false;
	      }
	      var tagsAdded = {};
	      var tagsRemoved = {};
	      for (var type in newInfo) {
	        if (includes(metaInfoOptionKeys, type)) {
	          continue;
	        }
	        if (type === "title") {
	          updateTitle(newInfo.title);
	          continue;
	        }
	        if (includes(metaInfoAttributeKeys, type)) {
	          var tagName = type.substr(0, 4);
	          updateAttribute(appId2, options, type, newInfo[type], getTag(tags, tagName));
	          continue;
	        }
	        if (!isArray(newInfo[type])) {
	          continue;
	        }
	        var _updateTag = updateTag(appId2, options, type, newInfo[type], getTag(tags, "head"), getTag(tags, "body")), oldTags = _updateTag.oldTags, newTags = _updateTag.newTags;
	        if (newTags.length) {
	          tagsAdded[type] = newTags;
	          tagsRemoved[type] = oldTags;
	        }
	      }
	      return {
	        tagsAdded,
	        tagsRemoved
	      };
	    }
	    var appsMetaInfo;
	    function addApp(rootVm, appId2, options) {
	      return {
	        set: function set(metaInfo) {
	          return setMetaInfo(rootVm, appId2, options, metaInfo);
	        },
	        remove: function remove() {
	          return removeMetaInfo(rootVm, appId2, options);
	        }
	      };
	    }
	    function setMetaInfo(rootVm, appId2, options, metaInfo) {
	      if (rootVm && rootVm.$el) {
	        return updateClientMetaInfo(appId2, options, metaInfo);
	      }
	      appsMetaInfo = appsMetaInfo || {};
	      appsMetaInfo[appId2] = metaInfo;
	    }
	    function removeMetaInfo(rootVm, appId2, options) {
	      if (rootVm && rootVm.$el) {
	        var tags = {};
	        var _iterator = _createForOfIteratorHelper(metaInfoAttributeKeys), _step;
	        try {
	          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
	            var type = _step.value;
	            var tagName = type.substr(0, 4);
	            updateAttribute(appId2, options, type, {}, getTag(tags, tagName));
	          }
	        } catch (err) {
	          _iterator.e(err);
	        } finally {
	          _iterator.f();
	        }
	        return removeElementsByAppId(options, appId2);
	      }
	      if (appsMetaInfo[appId2]) {
	        delete appsMetaInfo[appId2];
	        clearAppsMetaInfo();
	      }
	    }
	    function getAppsMetaInfo() {
	      return appsMetaInfo;
	    }
	    function clearAppsMetaInfo(force) {
	      if (force || !Object.keys(appsMetaInfo).length) {
	        appsMetaInfo = void 0;
	      }
	    }
	    function getMetaInfo(options, info, escapeSequences, component) {
	      options = options || {};
	      escapeSequences = escapeSequences || [];
	      var _options = options, tagIDKeyName2 = _options.tagIDKeyName;
	      if (info.title) {
	        info.titleChunk = info.title;
	      }
	      if (info.titleTemplate && info.titleTemplate !== "%s") {
	        applyTemplate({
	          component,
	          contentKeyName: "title"
	        }, info, info.titleTemplate, info.titleChunk || "");
	      }
	      if (info.base) {
	        info.base = Object.keys(info.base).length ? [info.base] : [];
	      }
	      if (info.meta) {
	        info.meta = info.meta.filter(function(metaItem, index2, arr) {
	          var hasVmid = !!metaItem[tagIDKeyName2];
	          if (!hasVmid) {
	            return true;
	          }
	          var isFirstItemForVmid = index2 === findIndex(arr, function(item) {
	            return item[tagIDKeyName2] === metaItem[tagIDKeyName2];
	          });
	          return isFirstItemForVmid;
	        });
	        info.meta.forEach(function(metaObject) {
	          return applyTemplate(options, metaObject);
	        });
	      }
	      return escapeMetaInfo(options, info, escapeSequences);
	    }
	    function refresh(rootVm, options) {
	      options = options || {};
	      if (!rootVm[rootConfigKey]) {
	        showWarningNotSupported();
	        return {};
	      }
	      var rawInfo = getComponentMetaInfo(options, rootVm);
	      var metaInfo = getMetaInfo(options, rawInfo, clientSequences, rootVm);
	      var appId2 = rootVm[rootConfigKey].appId;
	      var tags = updateClientMetaInfo(appId2, options, metaInfo);
	      if (tags && isFunction(metaInfo.changed)) {
	        metaInfo.changed(metaInfo, tags.tagsAdded, tags.tagsRemoved);
	        tags = {
	          addedTags: tags.tagsAdded,
	          removedTags: tags.tagsRemoved
	        };
	      }
	      var appsMetaInfo2 = getAppsMetaInfo();
	      if (appsMetaInfo2) {
	        for (var additionalAppId in appsMetaInfo2) {
	          updateClientMetaInfo(additionalAppId, options, appsMetaInfo2[additionalAppId]);
	          delete appsMetaInfo2[additionalAppId];
	        }
	        clearAppsMetaInfo(true);
	      }
	      return {
	        vm: rootVm,
	        metaInfo,
	        tags
	      };
	    }
	    function attributeGenerator(options, type, data, _ref) {
	      var addSsrAttribute = _ref.addSsrAttribute;
	      var _ref2 = options || {}, attribute2 = _ref2.attribute, ssrAttribute2 = _ref2.ssrAttribute;
	      var attributeStr = "";
	      for (var attr in data) {
	        var attrData = data[attr];
	        var attrValues = [];
	        for (var appId2 in attrData) {
	          attrValues.push.apply(attrValues, _toConsumableArray([].concat(attrData[appId2])));
	        }
	        if (attrValues.length) {
	          attributeStr += booleanHtmlAttributes.includes(attr) && attrValues.some(Boolean) ? "".concat(attr) : "".concat(attr, '="').concat(attrValues.join(" "), '"');
	          attributeStr += " ";
	        }
	      }
	      if (attributeStr) {
	        attributeStr += "".concat(attribute2, '="').concat(encodeURI(JSON.stringify(data)), '"');
	      }
	      if (type === "htmlAttrs" && addSsrAttribute) {
	        return "".concat(ssrAttribute2).concat(attributeStr ? " " : "").concat(attributeStr);
	      }
	      return attributeStr;
	    }
	    function titleGenerator(options, type, data, generatorOptions) {
	      var _ref = generatorOptions || {}, ln = _ref.ln;
	      if (!data) {
	        return "";
	      }
	      return "<".concat(type, ">").concat(data, "</").concat(type, ">").concat(ln ? "\n" : "");
	    }
	    function tagGenerator(options, type, tags, generatorOptions) {
	      var _ref = options || {}, ssrAppId2 = _ref.ssrAppId, attribute2 = _ref.attribute, tagIDKeyName2 = _ref.tagIDKeyName;
	      var _ref2 = generatorOptions || {}, appId2 = _ref2.appId, _ref2$isSSR = _ref2.isSSR, isSSR = _ref2$isSSR === void 0 ? true : _ref2$isSSR, _ref2$body = _ref2.body, body = _ref2$body === void 0 ? false : _ref2$body, _ref2$pbody = _ref2.pbody, pbody = _ref2$pbody === void 0 ? false : _ref2$pbody, _ref2$ln = _ref2.ln, ln = _ref2$ln === void 0 ? false : _ref2$ln;
	      var dataAttributes = [tagIDKeyName2].concat(_toConsumableArray(commonDataAttributes));
	      if (!tags || !tags.length) {
	        return "";
	      }
	      return tags.reduce(function(tagsStr, tag) {
	        if (tag.skip) {
	          return tagsStr;
	        }
	        var tagKeys = Object.keys(tag);
	        if (tagKeys.length === 0) {
	          return tagsStr;
	        }
	        if (Boolean(tag.body) !== body || Boolean(tag.pbody) !== pbody) {
	          return tagsStr;
	        }
	        var attrs = tag.once ? "" : " ".concat(attribute2, '="').concat(appId2 || (isSSR === false ? "1" : ssrAppId2), '"');
	        for (var attr in tag) {
	          if (tagAttributeAsInnerContent.includes(attr) || tagProperties.includes(attr)) {
	            continue;
	          }
	          if (attr === "callback") {
	            attrs += ' onload="this.__vm_l=1"';
	            continue;
	          }
	          var prefix = "";
	          if (dataAttributes.includes(attr)) {
	            prefix = "data-";
	          }
	          var isBooleanAttr = !prefix && booleanHtmlAttributes.includes(attr);
	          if (isBooleanAttr && !tag[attr]) {
	            continue;
	          }
	          attrs += " ".concat(prefix).concat(attr) + (isBooleanAttr ? "" : '="'.concat(tag[attr], '"'));
	        }
	        var json = "";
	        if (tag.json) {
	          json = JSON.stringify(tag.json);
	        }
	        var content = tag.innerHTML || tag.cssText || json;
	        var hasEndTag = !tagsWithoutEndTag.includes(type);
	        var hasContent = hasEndTag && tagsWithInnerContent.includes(type);
	        return "".concat(tagsStr, "<").concat(type).concat(attrs).concat(!hasContent && hasEndTag ? "/" : "", ">") + (hasContent ? "".concat(content, "</").concat(type, ">") : "") + (ln ? "\n" : "");
	      }, "");
	    }
	    function generateServerInjector(options, metaInfo, globalInjectOptions) {
	      var serverInjector = {
	        data: metaInfo,
	        extraData: void 0,
	        addInfo: function addInfo(appId2, metaInfo2) {
	          this.extraData = this.extraData || {};
	          this.extraData[appId2] = metaInfo2;
	        },
	        callInjectors: function callInjectors(opts) {
	          var m = this.injectors;
	          return (opts.body || opts.pbody ? "" : m.title.text(opts)) + m.meta.text(opts) + m.base.text(opts) + m.link.text(opts) + m.style.text(opts) + m.script.text(opts) + m.noscript.text(opts);
	        },
	        injectors: {
	          head: function head(ln) {
	            return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
	              ln
	            }));
	          },
	          bodyPrepend: function bodyPrepend(ln) {
	            return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
	              ln,
	              pbody: true
	            }));
	          },
	          bodyAppend: function bodyAppend(ln) {
	            return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
	              ln,
	              body: true
	            }));
	          }
	        }
	      };
	      var _loop = function _loop2(type2) {
	        if (metaInfoOptionKeys.includes(type2)) {
	          return "continue";
	        }
	        serverInjector.injectors[type2] = {
	          text: function text(injectOptions) {
	            var addSsrAttribute = injectOptions === true;
	            injectOptions = _objectSpread2(_objectSpread2({
	              addSsrAttribute
	            }, globalInjectOptions), injectOptions);
	            if (type2 === "title") {
	              return titleGenerator(options, type2, serverInjector.data[type2], injectOptions);
	            }
	            if (metaInfoAttributeKeys.includes(type2)) {
	              var attributeData = {};
	              var data = serverInjector.data[type2];
	              if (data) {
	                var appId2 = injectOptions.isSSR === false ? "1" : options.ssrAppId;
	                for (var attr in data) {
	                  attributeData[attr] = _defineProperty({}, appId2, data[attr]);
	                }
	              }
	              if (serverInjector.extraData) {
	                for (var _appId in serverInjector.extraData) {
	                  var _data = serverInjector.extraData[_appId][type2];
	                  if (_data) {
	                    for (var _attr in _data) {
	                      attributeData[_attr] = _objectSpread2(_objectSpread2({}, attributeData[_attr]), {}, _defineProperty({}, _appId, _data[_attr]));
	                    }
	                  }
	                }
	              }
	              return attributeGenerator(options, type2, attributeData, injectOptions);
	            }
	            var str = tagGenerator(options, type2, serverInjector.data[type2], injectOptions);
	            if (serverInjector.extraData) {
	              for (var _appId2 in serverInjector.extraData) {
	                var _data2 = serverInjector.extraData[_appId2][type2];
	                var extraStr = tagGenerator(options, type2, _data2, _objectSpread2({
	                  appId: _appId2
	                }, injectOptions));
	                str = "".concat(str).concat(extraStr);
	              }
	            }
	            return str;
	          }
	        };
	      };
	      for (var type in defaultInfo) {
	        var _ret = _loop(type);
	        if (_ret === "continue")
	          continue;
	      }
	      return serverInjector;
	    }
	    function inject(rootVm, options, injectOptions) {
	      if (!rootVm[rootConfigKey]) {
	        showWarningNotSupported();
	        return {};
	      }
	      var rawInfo = getComponentMetaInfo(options, rootVm);
	      var metaInfo = getMetaInfo(options, rawInfo, serverSequences, rootVm);
	      var serverInjector = generateServerInjector(options, metaInfo, injectOptions);
	      var appsMetaInfo2 = getAppsMetaInfo();
	      if (appsMetaInfo2) {
	        for (var additionalAppId in appsMetaInfo2) {
	          serverInjector.addInfo(additionalAppId, appsMetaInfo2[additionalAppId]);
	          delete appsMetaInfo2[additionalAppId];
	        }
	        clearAppsMetaInfo(true);
	      }
	      return serverInjector.injectors;
	    }
	    function $meta(options) {
	      options = options || {};
	      var $root = this.$root;
	      return {
	        getOptions: function getOptions$1() {
	          return getOptions(options);
	        },
	        setOptions: function setOptions2(newOptions) {
	          var refreshNavKey = "refreshOnceOnNavigation";
	          if (newOptions && newOptions[refreshNavKey]) {
	            options.refreshOnceOnNavigation = !!newOptions[refreshNavKey];
	            addNavGuards($root);
	          }
	          var debounceWaitKey = "debounceWait";
	          if (newOptions && debounceWaitKey in newOptions) {
	            var debounceWait2 = parseInt(newOptions[debounceWaitKey]);
	            if (!isNaN(debounceWait2)) {
	              options.debounceWait = debounceWait2;
	            }
	          }
	          var waitOnDestroyedKey = "waitOnDestroyed";
	          if (newOptions && waitOnDestroyedKey in newOptions) {
	            options.waitOnDestroyed = !!newOptions[waitOnDestroyedKey];
	          }
	        },
	        refresh: function refresh$1() {
	          return refresh($root, options);
	        },
	        inject: function inject$1(injectOptions) {
	          return inject($root, options, injectOptions);
	        },
	        pause: function pause$1() {
	          return pause($root);
	        },
	        resume: function resume$1() {
	          return resume($root);
	        },
	        addApp: function addApp$1(appId2) {
	          return addApp($root, appId2, options);
	        }
	      };
	    }
	    function generate(rawInfo, options) {
	      options = setOptions(options);
	      var metaInfo = getMetaInfo(options, rawInfo, serverSequences);
	      var serverInjector = generateServerInjector(options, metaInfo);
	      return serverInjector.injectors;
	    }
	    function install(Vue, options) {
	      if (Vue.__vuemeta_installed) {
	        return;
	      }
	      Vue.__vuemeta_installed = true;
	      options = setOptions(options);
	      Vue.prototype.$meta = function() {
	        return $meta.call(this, options);
	      };
	      Vue.mixin(createMixin(Vue, options));
	    }
	    var index = {
	      version,
	      install,
	      generate: function generate$1(metaInfo, options) {
	        return generate(metaInfo, options);
	      },
	      hasMetaInfo
	    };
	    module2.exports = index;
	  },
	  function(module2, exports) {
	    module2.exports = require$$5;
	  },
	  function(module2, exports) {
	    module2.exports = require$$6;
	  },
	  function(module2, exports) {
	    module2.exports = require$$7;
	  },
	  function(module2) {
	    module2.exports = JSON.parse('{"title":"zem.gg","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"zem.gg"},{"hid":"description","name":"description","content":"## Build Setup"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"zem.gg"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"zem.gg"},{"hid":"og:description","name":"og:description","property":"og:description","content":"## Build Setup"}],"link":[{"hid":"shortcut-icon","rel":"shortcut icon","href":"/favicon.ico"},{"rel":"manifest","href":"/_nuxt/manifest.a8471600.json","hid":"manifest"}],"htmlAttrs":{"lang":"en"}}');
	  },
	  function(module2, exports, __webpack_require__) {
	    module2.exports = __webpack_require__(89);
	  },
	  function(module2, exports, __webpack_require__) {
	    /*!
	     * Vue.js v2.7.8
	     * (c) 2014-2022 Evan You
	     * Released under the MIT License.
	     */
	    /*!
	     * Vue.js v2.7.8
	     * (c) 2014-2022 Evan You
	     * Released under the MIT License.
	     */
	    __webpack_require__(42);
	    __webpack_require__(43);
	    __webpack_require__(44);
	    __webpack_require__(45);
	    __webpack_require__(46);
	    __webpack_require__(47);
	    __webpack_require__(48);
	    __webpack_require__(49);
	    __webpack_require__(50);
	    __webpack_require__(51);
	    __webpack_require__(52);
	    __webpack_require__(53);
	    __webpack_require__(54);
	    __webpack_require__(55);
	    __webpack_require__(56);
	    __webpack_require__(57);
	    const t = Object.freeze({}), e = Array.isArray;
	    function n(t2) {
	      return null == t2;
	    }
	    function o(t2) {
	      return null != t2;
	    }
	    function r(t2) {
	      return true === t2;
	    }
	    function s(t2) {
	      return "string" == typeof t2 || "number" == typeof t2 || "symbol" == typeof t2 || "boolean" == typeof t2;
	    }
	    function i(t2) {
	      return "function" == typeof t2;
	    }
	    function c(t2) {
	      return null !== t2 && "object" == typeof t2;
	    }
	    const a = Object.prototype.toString;
	    function l(t2) {
	      return "[object Object]" === a.call(t2);
	    }
	    function u(t2) {
	      const e2 = parseFloat(String(t2));
	      return e2 >= 0 && Math.floor(e2) === e2 && isFinite(t2);
	    }
	    function f(t2) {
	      return o(t2) && "function" == typeof t2.then && "function" == typeof t2.catch;
	    }
	    function d(t2) {
	      return null == t2 ? "" : Array.isArray(t2) || l(t2) && t2.toString === a ? JSON.stringify(t2, null, 2) : String(t2);
	    }
	    function p(t2) {
	      const e2 = parseFloat(t2);
	      return isNaN(e2) ? t2 : e2;
	    }
	    function h(t2, e2) {
	      const n2 = /* @__PURE__ */ Object.create(null), o2 = t2.split(",");
	      for (let t3 = 0; t3 < o2.length; t3++)
	        n2[o2[t3]] = true;
	      return e2 ? (t3) => n2[t3.toLowerCase()] : (t3) => n2[t3];
	    }
	    const m = h("key,ref,slot,slot-scope,is");
	    function _(t2, e2) {
	      if (t2.length) {
	        const n2 = t2.indexOf(e2);
	        if (n2 > -1)
	          return t2.splice(n2, 1);
	      }
	    }
	    const v = Object.prototype.hasOwnProperty;
	    function y(t2, e2) {
	      return v.call(t2, e2);
	    }
	    function g(t2) {
	      const e2 = /* @__PURE__ */ Object.create(null);
	      return function(n2) {
	        return e2[n2] || (e2[n2] = t2(n2));
	      };
	    }
	    const b = /-(\w)/g, $ = g((t2) => t2.replace(b, (t3, e2) => e2 ? e2.toUpperCase() : "")), w = g((t2) => t2.charAt(0).toUpperCase() + t2.slice(1)), C = /\B([A-Z])/g, x = g((t2) => t2.replace(C, "-$1").toLowerCase());
	    const k = Function.prototype.bind ? function(t2, e2) {
	      return t2.bind(e2);
	    } : function(t2, e2) {
	      function n2(n3) {
	        const o2 = arguments.length;
	        return o2 ? o2 > 1 ? t2.apply(e2, arguments) : t2.call(e2, n3) : t2.call(e2);
	      }
	      return n2._length = t2.length, n2;
	    };
	    function O(t2, e2) {
	      e2 = e2 || 0;
	      let n2 = t2.length - e2;
	      const o2 = new Array(n2);
	      for (; n2--; )
	        o2[n2] = t2[n2 + e2];
	      return o2;
	    }
	    function S(t2, e2) {
	      for (const n2 in e2)
	        t2[n2] = e2[n2];
	      return t2;
	    }
	    function A(t2) {
	      const e2 = {};
	      for (let n2 = 0; n2 < t2.length; n2++)
	        t2[n2] && S(e2, t2[n2]);
	      return e2;
	    }
	    function T(t2, e2, n2) {
	    }
	    const j = (t2, e2, n2) => false, E = (t2) => t2;
	    function P(t2, e2) {
	      if (t2 === e2)
	        return true;
	      const n2 = c(t2), o2 = c(e2);
	      if (!n2 || !o2)
	        return !n2 && !o2 && String(t2) === String(e2);
	      try {
	        const n3 = Array.isArray(t2), o3 = Array.isArray(e2);
	        if (n3 && o3)
	          return t2.length === e2.length && t2.every((t3, n4) => P(t3, e2[n4]));
	        if (t2 instanceof Date && e2 instanceof Date)
	          return t2.getTime() === e2.getTime();
	        if (n3 || o3)
	          return false;
	        {
	          const n4 = Object.keys(t2), o4 = Object.keys(e2);
	          return n4.length === o4.length && n4.every((n5) => P(t2[n5], e2[n5]));
	        }
	      } catch (t3) {
	        return false;
	      }
	    }
	    function I(t2, e2) {
	      for (let n2 = 0; n2 < t2.length; n2++)
	        if (P(t2[n2], e2))
	          return n2;
	      return -1;
	    }
	    function D(t2) {
	      let e2 = false;
	      return function() {
	        e2 || (e2 = true, t2.apply(this, arguments));
	      };
	    }
	    function N(t2, e2) {
	      return t2 === e2 ? 0 === t2 && 1 / t2 != 1 / e2 : t2 == t2 || e2 == e2;
	    }
	    const M = ["component", "directive", "filter"], R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch", "renderTracked", "renderTriggered"];
	    var L = {
	      optionMergeStrategies: /* @__PURE__ */ Object.create(null),
	      silent: false,
	      productionTip: false,
	      devtools: false,
	      performance: false,
	      errorHandler: null,
	      warnHandler: null,
	      ignoredElements: [],
	      keyCodes: /* @__PURE__ */ Object.create(null),
	      isReservedTag: j,
	      isReservedAttr: j,
	      isUnknownElement: j,
	      getTagNamespace: T,
	      parsePlatformTagName: E,
	      mustUseProp: j,
	      async: true,
	      _lifecycleHooks: R
	    };
	    function F(t2) {
	      const e2 = (t2 + "").charCodeAt(0);
	      return 36 === e2 || 95 === e2;
	    }
	    function U(t2, e2, n2, o2) {
	      Object.defineProperty(t2, e2, {
	        value: n2,
	        enumerable: !!o2,
	        writable: true,
	        configurable: true
	      });
	    }
	    const B = new RegExp(`[^${/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source}.$_\\d]`);
	    const V = "__proto__" in {}, z = false, H = z , K = H ;
	    const Z = H , J = {}.watch;
	    let X;
	    const Y = () => (void 0 === X && (X = "undefined" != typeof commonjsGlobal && commonjsGlobal.process && "server" === commonjsGlobal.process.env.VUE_ENV), X);
	    function et(t2) {
	      return "function" == typeof t2 && /native code/.test(t2.toString());
	    }
	    const nt = "undefined" != typeof Symbol && et(Symbol) && "undefined" != typeof Reflect && et(Reflect.ownKeys);
	    let ot;
	    ot = "undefined" != typeof Set && et(Set) ? Set : class {
	      constructor() {
	        this.set = /* @__PURE__ */ Object.create(null);
	      }
	      has(t2) {
	        return true === this.set[t2];
	      }
	      add(t2) {
	        this.set[t2] = true;
	      }
	      clear() {
	        this.set = /* @__PURE__ */ Object.create(null);
	      }
	    };
	    let rt = null;
	    function st(t2 = null) {
	      t2 || rt && rt._scope.off(), rt = t2, t2 && t2._scope.on();
	    }
	    class it {
	      constructor(t2, e2, n2, o2, r2, s2, i2, c2) {
	        this.tag = t2, this.data = e2, this.children = n2, this.text = o2, this.elm = r2, this.ns = void 0, this.context = s2, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e2 && e2.key, this.componentOptions = i2, this.componentInstance = void 0, this.parent = void 0, this.raw = false, this.isStatic = false, this.isRootInsert = true, this.isComment = false, this.isCloned = false, this.isOnce = false, this.asyncFactory = c2, this.asyncMeta = void 0, this.isAsyncPlaceholder = false;
	      }
	      get child() {
	        return this.componentInstance;
	      }
	    }
	    const ct = (t2 = "") => {
	      const e2 = new it();
	      return e2.text = t2, e2.isComment = true, e2;
	    };
	    function at(t2) {
	      return new it(void 0, void 0, void 0, String(t2));
	    }
	    function lt(t2) {
	      const e2 = new it(t2.tag, t2.data, t2.children && t2.children.slice(), t2.text, t2.elm, t2.context, t2.componentOptions, t2.asyncFactory);
	      return e2.ns = t2.ns, e2.isStatic = t2.isStatic, e2.key = t2.key, e2.isComment = t2.isComment, e2.fnContext = t2.fnContext, e2.fnOptions = t2.fnOptions, e2.fnScopeId = t2.fnScopeId, e2.asyncMeta = t2.asyncMeta, e2.isCloned = true, e2;
	    }
	    let ut = 0;
	    class ft {
	      constructor() {
	        this.id = ut++, this.subs = [];
	      }
	      addSub(t2) {
	        this.subs.push(t2);
	      }
	      removeSub(t2) {
	        _(this.subs, t2);
	      }
	      depend(t2) {
	        ft.target && ft.target.addDep(this);
	      }
	      notify(t2) {
	        const e2 = this.subs.slice();
	        for (let t3 = 0, n2 = e2.length; t3 < n2; t3++)
	          e2[t3].update();
	      }
	    }
	    ft.target = null;
	    const dt = [];
	    function pt(t2) {
	      dt.push(t2), ft.target = t2;
	    }
	    function ht() {
	      dt.pop(), ft.target = dt[dt.length - 1];
	    }
	    const mt = Array.prototype, _t = Object.create(mt);
	    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t2) {
	      const e2 = mt[t2];
	      U(_t, t2, function(...n2) {
	        const o2 = e2.apply(this, n2), r2 = this.__ob__;
	        let s2;
	        switch (t2) {
	          case "push":
	          case "unshift":
	            s2 = n2;
	            break;
	          case "splice":
	            s2 = n2.slice(2);
	        }
	        return s2 && r2.observeArray(s2), r2.dep.notify(), o2;
	      });
	    });
	    const vt = Object.getOwnPropertyNames(_t), yt = {};
	    let gt = true;
	    function bt(t2) {
	      gt = t2;
	    }
	    const $t = {
	      notify: T,
	      depend: T,
	      addSub: T,
	      removeSub: T
	    };
	    class wt {
	      constructor(t2, n2 = false, o2 = false) {
	        if (this.value = t2, this.shallow = n2, this.mock = o2, this.dep = o2 ? $t : new ft(), this.vmCount = 0, U(t2, "__ob__", this), e(t2)) {
	          if (!o2)
	            if (V)
	              t2.__proto__ = _t;
	            else
	              for (let e2 = 0, n3 = vt.length; e2 < n3; e2++) {
	                const n4 = vt[e2];
	                U(t2, n4, _t[n4]);
	              }
	          n2 || this.observeArray(t2);
	        } else {
	          const e2 = Object.keys(t2);
	          for (let r2 = 0; r2 < e2.length; r2++) {
	            xt(t2, e2[r2], yt, void 0, n2, o2);
	          }
	        }
	      }
	      observeArray(t2) {
	        for (let e2 = 0, n2 = t2.length; e2 < n2; e2++)
	          Ct(t2[e2], false, this.mock);
	      }
	    }
	    function Ct(t2, n2, o2) {
	      if (!c(t2) || It(t2) || t2 instanceof it)
	        return;
	      let r2;
	      return y(t2, "__ob__") && t2.__ob__ instanceof wt ? r2 = t2.__ob__ : !gt || !o2 && Y() || !e(t2) && !l(t2) || !Object.isExtensible(t2) || t2.__v_skip || (r2 = new wt(t2, n2, o2)), r2;
	    }
	    function xt(t2, n2, o2, r2, s2, i2) {
	      const c2 = new ft(), a2 = Object.getOwnPropertyDescriptor(t2, n2);
	      if (a2 && false === a2.configurable)
	        return;
	      const l2 = a2 && a2.get, u2 = a2 && a2.set;
	      l2 && !u2 || o2 !== yt && 2 !== arguments.length || (o2 = t2[n2]);
	      let f2 = !s2 && Ct(o2, false, i2);
	      return Object.defineProperty(t2, n2, {
	        enumerable: true,
	        configurable: true,
	        get: function() {
	          const n3 = l2 ? l2.call(t2) : o2;
	          return ft.target && (c2.depend(), f2 && (f2.dep.depend(), e(n3) && St(n3))), It(n3) && !s2 ? n3.value : n3;
	        },
	        set: function(e2) {
	          const n3 = l2 ? l2.call(t2) : o2;
	          if (N(n3, e2)) {
	            if (u2)
	              u2.call(t2, e2);
	            else {
	              if (l2)
	                return;
	              if (!s2 && It(n3) && !It(e2))
	                return void (n3.value = e2);
	              o2 = e2;
	            }
	            f2 = !s2 && Ct(e2, false, i2), c2.notify();
	          }
	        }
	      }), c2;
	    }
	    function kt(t2, n2, o2) {
	      if (Pt(t2))
	        return;
	      const r2 = t2.__ob__;
	      return e(t2) && u(n2) ? (t2.length = Math.max(t2.length, n2), t2.splice(n2, 1, o2), r2 && !r2.shallow && r2.mock && Ct(o2, false, true), o2) : n2 in t2 && !(n2 in Object.prototype) ? (t2[n2] = o2, o2) : t2._isVue || r2 && r2.vmCount ? o2 : r2 ? (xt(r2.value, n2, o2, void 0, r2.shallow, r2.mock), r2.dep.notify(), o2) : (t2[n2] = o2, o2);
	    }
	    function Ot(t2, n2) {
	      if (e(t2) && u(n2))
	        return void t2.splice(n2, 1);
	      const o2 = t2.__ob__;
	      t2._isVue || o2 && o2.vmCount || Pt(t2) || y(t2, n2) && (delete t2[n2], o2 && o2.dep.notify());
	    }
	    function St(t2) {
	      for (let n2, o2 = 0, r2 = t2.length; o2 < r2; o2++)
	        n2 = t2[o2], n2 && n2.__ob__ && n2.__ob__.dep.depend(), e(n2) && St(n2);
	    }
	    function At(t2) {
	      return Tt(t2, true), U(t2, "__v_isShallow", true), t2;
	    }
	    function Tt(t2, e2) {
	      Pt(t2) || Ct(t2, e2, Y());
	    }
	    function jt(t2) {
	      return Pt(t2) ? jt(t2.__v_raw) : !(!t2 || !t2.__ob__);
	    }
	    function Et(t2) {
	      return !(!t2 || !t2.__v_isShallow);
	    }
	    function Pt(t2) {
	      return !(!t2 || !t2.__v_isReadonly);
	    }
	    function It(t2) {
	      return !(!t2 || true !== t2.__v_isRef);
	    }
	    function Dt(t2, e2) {
	      if (It(t2))
	        return t2;
	      const n2 = {};
	      return U(n2, "__v_isRef", true), U(n2, "__v_isShallow", e2), U(n2, "dep", xt(n2, "value", t2, null, e2, Y())), n2;
	    }
	    function Nt(t2, e2, n2) {
	      Object.defineProperty(t2, n2, {
	        enumerable: true,
	        configurable: true,
	        get: () => {
	          const t3 = e2[n2];
	          if (It(t3))
	            return t3.value;
	          {
	            const e3 = t3 && t3.__ob__;
	            return e3 && e3.dep.depend(), t3;
	          }
	        },
	        set: (t3) => {
	          const o2 = e2[n2];
	          It(o2) && !It(t3) ? o2.value = t3 : e2[n2] = t3;
	        }
	      });
	    }
	    function Mt(t2, e2, n2) {
	      const o2 = t2[e2];
	      if (It(o2))
	        return o2;
	      const r2 = {
	        get value() {
	          const o3 = t2[e2];
	          return void 0 === o3 ? n2 : o3;
	        },
	        set value(n3) {
	          t2[e2] = n3;
	        }
	      };
	      return U(r2, "__v_isRef", true), r2;
	    }
	    function Rt(t2) {
	      return Lt(t2, false);
	    }
	    function Lt(t2, e2) {
	      if (!l(t2))
	        return t2;
	      if (Pt(t2))
	        return t2;
	      const n2 = e2 ? "__v_rawToShallowReadonly" : "__v_rawToReadonly", o2 = t2[n2];
	      if (o2)
	        return o2;
	      const r2 = Object.create(Object.getPrototypeOf(t2));
	      U(t2, n2, r2), U(r2, "__v_isReadonly", true), U(r2, "__v_raw", t2), It(t2) && U(r2, "__v_isRef", true), (e2 || Et(t2)) && U(r2, "__v_isShallow", true);
	      const s2 = Object.keys(t2);
	      for (let n3 = 0; n3 < s2.length; n3++)
	        Ft(r2, t2, s2[n3], e2);
	      return r2;
	    }
	    function Ft(t2, e2, n2, o2) {
	      Object.defineProperty(t2, n2, {
	        enumerable: true,
	        configurable: true,
	        get() {
	          const t3 = e2[n2];
	          return o2 || !l(t3) ? t3 : Rt(t3);
	        },
	        set() {
	        }
	      });
	    }
	    function Ut(t2, e2) {
	      return Vt(t2, null, {
	        flush: "post"
	      });
	    }
	    const Bt = {};
	    function Vt(n2, o2, {
	      immediate: r2,
	      deep: s2,
	      flush: c2 = "pre",
	      onTrack: a2,
	      onTrigger: l2
	    } = t) {
	      const u2 = rt, f2 = (t2, e2, n3 = null) => Pe(t2, null, n3, u2, e2);
	      let d2, p2, h2 = false, m2 = false;
	      if (It(n2) ? (d2 = () => n2.value, h2 = Et(n2)) : jt(n2) ? (d2 = () => (n2.__ob__.dep.depend(), n2), s2 = true) : e(n2) ? (m2 = true, h2 = n2.some((t2) => jt(t2) || Et(t2)), d2 = () => n2.map((t2) => It(t2) ? t2.value : jt(t2) ? nn(t2) : i(t2) ? f2(t2, "watcher getter") : void 0)) : d2 = i(n2) ? o2 ? () => f2(n2, "watcher getter") : () => {
	        if (!u2 || !u2._isDestroyed)
	          return p2 && p2(), f2(n2, "watcher", [_2]);
	      } : T, o2 && s2) {
	        const t2 = d2;
	        d2 = () => nn(t2());
	      }
	      let _2 = (t2) => {
	        p2 = v2.onStop = () => {
	          f2(t2, "watcher cleanup");
	        };
	      };
	      if (Y())
	        return _2 = T, o2 ? r2 && f2(o2, "watcher callback", [d2(), m2 ? [] : void 0, _2]) : d2(), T;
	      const v2 = new cn(rt, d2, T, {
	        lazy: true
	      });
	      v2.noRecurse = !o2;
	      let y2 = m2 ? [] : Bt;
	      return v2.run = () => {
	        if (v2.active || "pre" === c2 && u2 && u2._isBeingDestroyed)
	          if (o2) {
	            const t2 = v2.get();
	            (s2 || h2 || (m2 ? t2.some((t3, e2) => N(t3, y2[e2])) : N(t2, y2))) && (p2 && p2(), f2(o2, "watcher callback", [t2, y2 === Bt ? void 0 : y2, _2]), y2 = t2);
	          } else
	            v2.get();
	      }, "sync" === c2 ? v2.update = v2.run : "post" === c2 ? (v2.post = true, v2.update = () => An(v2)) : v2.update = () => {
	        if (u2 && u2 === rt && !u2._isMounted) {
	          const t2 = u2._preWatchers || (u2._preWatchers = []);
	          t2.indexOf(v2) < 0 && t2.push(v2);
	        } else
	          An(v2);
	      }, o2 ? r2 ? v2.run() : y2 = v2.get() : "post" === c2 && u2 ? u2.$once("hook:mounted", () => v2.get()) : v2.get(), () => {
	        v2.teardown();
	      };
	    }
	    let zt;
	    class Ht {
	      constructor(t2 = false) {
	        this.active = true, this.effects = [], this.cleanups = [], !t2 && zt && (this.parent = zt, this.index = (zt.scopes || (zt.scopes = [])).push(this) - 1);
	      }
	      run(t2) {
	        if (this.active) {
	          const e2 = zt;
	          try {
	            return zt = this, t2();
	          } finally {
	            zt = e2;
	          }
	        }
	      }
	      on() {
	        zt = this;
	      }
	      off() {
	        zt = this.parent;
	      }
	      stop(t2) {
	        if (this.active) {
	          let e2, n2;
	          for (e2 = 0, n2 = this.effects.length; e2 < n2; e2++)
	            this.effects[e2].teardown();
	          for (e2 = 0, n2 = this.cleanups.length; e2 < n2; e2++)
	            this.cleanups[e2]();
	          if (this.scopes)
	            for (e2 = 0, n2 = this.scopes.length; e2 < n2; e2++)
	              this.scopes[e2].stop(true);
	          if (this.parent && !t2) {
	            const t3 = this.parent.scopes.pop();
	            t3 && t3 !== this && (this.parent.scopes[this.index] = t3, t3.index = this.index);
	          }
	          this.active = false;
	        }
	      }
	    }
	    function Wt(t2) {
	      const e2 = t2._provided, n2 = t2.$parent && t2.$parent._provided;
	      return n2 === e2 ? t2._provided = Object.create(n2) : e2;
	    }
	    const Kt = g((t2) => {
	      const e2 = "&" === t2.charAt(0), n2 = "~" === (t2 = e2 ? t2.slice(1) : t2).charAt(0), o2 = "!" === (t2 = n2 ? t2.slice(1) : t2).charAt(0);
	      return {
	        name: t2 = o2 ? t2.slice(1) : t2,
	        once: n2,
	        capture: o2,
	        passive: e2
	      };
	    });
	    function qt(t2, n2) {
	      function o2() {
	        const t3 = o2.fns;
	        if (!e(t3))
	          return Pe(t3, null, arguments, n2, "v-on handler");
	        {
	          const e2 = t3.slice();
	          for (let t4 = 0; t4 < e2.length; t4++)
	            Pe(e2[t4], null, arguments, n2, "v-on handler");
	        }
	      }
	      return o2.fns = t2, o2;
	    }
	    function Gt(t2, e2, o2, s2, i2, c2) {
	      let a2, l2, u2, f2;
	      for (a2 in t2)
	        l2 = t2[a2], u2 = e2[a2], f2 = Kt(a2), n(l2) || (n(u2) ? (n(l2.fns) && (l2 = t2[a2] = qt(l2, c2)), r(f2.once) && (l2 = t2[a2] = i2(f2.name, l2, f2.capture)), o2(f2.name, l2, f2.capture, f2.passive, f2.params)) : l2 !== u2 && (u2.fns = l2, t2[a2] = u2));
	      for (a2 in e2)
	        n(t2[a2]) && (f2 = Kt(a2), s2(f2.name, e2[a2], f2.capture));
	    }
	    function Zt(t2, e2, s2) {
	      let i2;
	      t2 instanceof it && (t2 = t2.data.hook || (t2.data.hook = {}));
	      const c2 = t2[e2];
	      function a2() {
	        s2.apply(this, arguments), _(i2.fns, a2);
	      }
	      n(c2) ? i2 = qt([a2]) : o(c2.fns) && r(c2.merged) ? (i2 = c2, i2.fns.push(a2)) : i2 = qt([c2, a2]), i2.merged = true, t2[e2] = i2;
	    }
	    function Jt(t2, e2, n2, r2, s2) {
	      if (o(e2)) {
	        if (y(e2, n2))
	          return t2[n2] = e2[n2], s2 || delete e2[n2], true;
	        if (y(e2, r2))
	          return t2[n2] = e2[r2], s2 || delete e2[r2], true;
	      }
	      return false;
	    }
	    function Xt(t2) {
	      return s(t2) ? [at(t2)] : e(t2) ? Yt(t2) : void 0;
	    }
	    function Qt(t2) {
	      return o(t2) && o(t2.text) && false === t2.isComment;
	    }
	    function Yt(t2, i2) {
	      const c2 = [];
	      let a2, l2, u2, f2;
	      for (a2 = 0; a2 < t2.length; a2++)
	        l2 = t2[a2], n(l2) || "boolean" == typeof l2 || (u2 = c2.length - 1, f2 = c2[u2], e(l2) ? l2.length > 0 && (l2 = Yt(l2, `${i2 || ""}_${a2}`), Qt(l2[0]) && Qt(f2) && (c2[u2] = at(f2.text + l2[0].text), l2.shift()), c2.push.apply(c2, l2)) : s(l2) ? Qt(f2) ? c2[u2] = at(f2.text + l2) : "" !== l2 && c2.push(at(l2)) : Qt(l2) && Qt(f2) ? c2[u2] = at(f2.text + l2.text) : (r(t2._isVList) && o(l2.tag) && n(l2.key) && o(i2) && (l2.key = `__vlist${i2}_${a2}__`), c2.push(l2)));
	      return c2;
	    }
	    function te(t2, n2) {
	      let r2, s2, i2, a2, l2 = null;
	      if (e(t2) || "string" == typeof t2)
	        for (l2 = new Array(t2.length), r2 = 0, s2 = t2.length; r2 < s2; r2++)
	          l2[r2] = n2(t2[r2], r2);
	      else if ("number" == typeof t2)
	        for (l2 = new Array(t2), r2 = 0; r2 < t2; r2++)
	          l2[r2] = n2(r2 + 1, r2);
	      else if (c(t2))
	        if (nt && t2[Symbol.iterator]) {
	          l2 = [];
	          const e2 = t2[Symbol.iterator]();
	          let o2 = e2.next();
	          for (; !o2.done; )
	            l2.push(n2(o2.value, l2.length)), o2 = e2.next();
	        } else
	          for (i2 = Object.keys(t2), l2 = new Array(i2.length), r2 = 0, s2 = i2.length; r2 < s2; r2++)
	            a2 = i2[r2], l2[r2] = n2(t2[a2], a2, r2);
	      return o(l2) || (l2 = []), l2._isVList = true, l2;
	    }
	    function ee(t2, e2, n2, o2) {
	      const r2 = this.$scopedSlots[t2];
	      let s2;
	      r2 ? (n2 = n2 || {}, o2 && (n2 = S(S({}, o2), n2)), s2 = r2(n2) || (i(e2) ? e2() : e2)) : s2 = this.$slots[t2] || (i(e2) ? e2() : e2);
	      const c2 = n2 && n2.slot;
	      return c2 ? this.$createElement("template", {
	        slot: c2
	      }, s2) : s2;
	    }
	    function ne(t2) {
	      return Kn(this.$options, "filters", t2) || E;
	    }
	    function oe(t2, n2) {
	      return e(t2) ? -1 === t2.indexOf(n2) : t2 !== n2;
	    }
	    function re(t2, e2, n2, o2, r2) {
	      const s2 = L.keyCodes[e2] || n2;
	      return r2 && o2 && !L.keyCodes[e2] ? oe(r2, o2) : s2 ? oe(s2, t2) : o2 ? x(o2) !== e2 : void 0 === t2;
	    }
	    function se(t2, n2, o2, r2, s2) {
	      if (o2)
	        if (c(o2)) {
	          let i2;
	          e(o2) && (o2 = A(o2));
	          for (const e2 in o2) {
	            if ("class" === e2 || "style" === e2 || m(e2))
	              i2 = t2;
	            else {
	              const o3 = t2.attrs && t2.attrs.type;
	              i2 = r2 || L.mustUseProp(n2, o3, e2) ? t2.domProps || (t2.domProps = {}) : t2.attrs || (t2.attrs = {});
	            }
	            const c2 = $(e2), a2 = x(e2);
	            if (!(c2 in i2) && !(a2 in i2) && (i2[e2] = o2[e2], s2)) {
	              (t2.on || (t2.on = {}))[`update:${e2}`] = function(t3) {
	                o2[e2] = t3;
	              };
	            }
	          }
	        }
	      return t2;
	    }
	    function ie(t2, e2) {
	      const n2 = this._staticTrees || (this._staticTrees = []);
	      let o2 = n2[t2];
	      return o2 && !e2 || (o2 = n2[t2] = this.$options.staticRenderFns[t2].call(this._renderProxy, this._c, this), ae(o2, `__static__${t2}`, false)), o2;
	    }
	    function ce(t2, e2, n2) {
	      return ae(t2, `__once__${e2}${n2 ? `_${n2}` : ""}`, true), t2;
	    }
	    function ae(t2, n2, o2) {
	      if (e(t2))
	        for (let e2 = 0; e2 < t2.length; e2++)
	          t2[e2] && "string" != typeof t2[e2] && le(t2[e2], `${n2}_${e2}`, o2);
	      else
	        le(t2, n2, o2);
	    }
	    function le(t2, e2, n2) {
	      t2.isStatic = true, t2.key = e2, t2.isOnce = n2;
	    }
	    function ue(t2, e2) {
	      if (e2)
	        if (l(e2)) {
	          const n2 = t2.on = t2.on ? S({}, t2.on) : {};
	          for (const t3 in e2) {
	            const o2 = n2[t3], r2 = e2[t3];
	            n2[t3] = o2 ? [].concat(o2, r2) : r2;
	          }
	        }
	      return t2;
	    }
	    function fe(t2, n2, o2, r2) {
	      n2 = n2 || {
	        $stable: !o2
	      };
	      for (let r3 = 0; r3 < t2.length; r3++) {
	        const s2 = t2[r3];
	        e(s2) ? fe(s2, n2, o2) : s2 && (s2.proxy && (s2.fn.proxy = true), n2[s2.key] = s2.fn);
	      }
	      return r2 && (n2.$key = r2), n2;
	    }
	    function de(t2, e2) {
	      for (let n2 = 0; n2 < e2.length; n2 += 2) {
	        const o2 = e2[n2];
	        "string" == typeof o2 && o2 && (t2[e2[n2]] = e2[n2 + 1]);
	      }
	      return t2;
	    }
	    function pe(t2, e2) {
	      return "string" == typeof t2 ? e2 + t2 : t2;
	    }
	    function he(t2) {
	      t2._o = ce, t2._n = p, t2._s = d, t2._l = te, t2._t = ee, t2._q = P, t2._i = I, t2._m = ie, t2._f = ne, t2._k = re, t2._b = se, t2._v = at, t2._e = ct, t2._u = fe, t2._g = ue, t2._d = de, t2._p = pe;
	    }
	    function me(t2, e2) {
	      if (!t2 || !t2.length)
	        return {};
	      const n2 = {};
	      for (let o2 = 0, r2 = t2.length; o2 < r2; o2++) {
	        const r3 = t2[o2], s2 = r3.data;
	        if (s2 && s2.attrs && s2.attrs.slot && delete s2.attrs.slot, r3.context !== e2 && r3.fnContext !== e2 || !s2 || null == s2.slot)
	          (n2.default || (n2.default = [])).push(r3);
	        else {
	          const t3 = s2.slot, e3 = n2[t3] || (n2[t3] = []);
	          "template" === r3.tag ? e3.push.apply(e3, r3.children || []) : e3.push(r3);
	        }
	      }
	      for (const t3 in n2)
	        n2[t3].every(_e) && delete n2[t3];
	      return n2;
	    }
	    function _e(t2) {
	      return t2.isComment && !t2.asyncFactory || " " === t2.text;
	    }
	    function ve(t2) {
	      return t2.isComment && t2.asyncFactory;
	    }
	    function ye(e2, n2, o2, r2) {
	      let s2;
	      const i2 = Object.keys(o2).length > 0, c2 = n2 ? !!n2.$stable : !i2, a2 = n2 && n2.$key;
	      if (n2) {
	        if (n2._normalized)
	          return n2._normalized;
	        if (c2 && r2 && r2 !== t && a2 === r2.$key && !i2 && !r2.$hasNormal)
	          return r2;
	        s2 = {};
	        for (const t2 in n2)
	          n2[t2] && "$" !== t2[0] && (s2[t2] = ge(e2, o2, t2, n2[t2]));
	      } else
	        s2 = {};
	      for (const t2 in o2)
	        t2 in s2 || (s2[t2] = be(o2, t2));
	      return n2 && Object.isExtensible(n2) && (n2._normalized = s2), U(s2, "$stable", c2), U(s2, "$key", a2), U(s2, "$hasNormal", i2), s2;
	    }
	    function ge(t2, n2, o2, r2) {
	      const s2 = function() {
	        const n3 = rt;
	        st(t2);
	        let o3 = arguments.length ? r2.apply(null, arguments) : r2({});
	        o3 = o3 && "object" == typeof o3 && !e(o3) ? [o3] : Xt(o3);
	        const s3 = o3 && o3[0];
	        return st(n3), o3 && (!s3 || 1 === o3.length && s3.isComment && !ve(s3)) ? void 0 : o3;
	      };
	      return r2.proxy && Object.defineProperty(n2, o2, {
	        get: s2,
	        enumerable: true,
	        configurable: true
	      }), s2;
	    }
	    function be(t2, e2) {
	      return () => t2[e2];
	    }
	    function $e(e2) {
	      return {
	        get attrs() {
	          if (!e2._attrsProxy) {
	            const n2 = e2._attrsProxy = {};
	            U(n2, "_v_attr_proxy", true), we(n2, e2.$attrs, t, e2, "$attrs");
	          }
	          return e2._attrsProxy;
	        },
	        get listeners() {
	          if (!e2._listenersProxy) {
	            we(e2._listenersProxy = {}, e2.$listeners, t, e2, "$listeners");
	          }
	          return e2._listenersProxy;
	        },
	        get slots() {
	          return function(t2) {
	            t2._slotsProxy || xe(t2._slotsProxy = {}, t2.$scopedSlots);
	            return t2._slotsProxy;
	          }(e2);
	        },
	        emit: k(e2.$emit, e2),
	        expose(t2) {
	          t2 && Object.keys(t2).forEach((n2) => Nt(e2, t2, n2));
	        }
	      };
	    }
	    function we(t2, e2, n2, o2, r2) {
	      let s2 = false;
	      for (const i2 in e2)
	        i2 in t2 ? e2[i2] !== n2[i2] && (s2 = true) : (s2 = true, Ce(t2, i2, o2, r2));
	      for (const n3 in t2)
	        n3 in e2 || (s2 = true, delete t2[n3]);
	      return s2;
	    }
	    function Ce(t2, e2, n2, o2) {
	      Object.defineProperty(t2, e2, {
	        enumerable: true,
	        configurable: true,
	        get: () => n2[o2][e2]
	      });
	    }
	    function xe(t2, e2) {
	      for (const n2 in e2)
	        t2[n2] = e2[n2];
	      for (const n2 in t2)
	        n2 in e2 || delete t2[n2];
	    }
	    function ke() {
	      const t2 = rt;
	      return t2._setupContext || (t2._setupContext = $e(t2));
	    }
	    let Oe = null;
	    function Se(t2, e2) {
	      return (t2.__esModule || nt && "Module" === t2[Symbol.toStringTag]) && (t2 = t2.default), c(t2) ? e2.extend(t2) : t2;
	    }
	    function Ae(t2) {
	      if (e(t2))
	        for (let e2 = 0; e2 < t2.length; e2++) {
	          const n2 = t2[e2];
	          if (o(n2) && (o(n2.componentOptions) || ve(n2)))
	            return n2;
	        }
	    }
	    function Te(t2, n2, a2, l2, u2, f2) {
	      return (e(a2) || s(a2)) && (u2 = l2, l2 = a2, a2 = void 0), r(f2) && (u2 = 2), function(t3, n3, r2, s2, a3) {
	        if (o(r2) && o(r2.__ob__))
	          return ct();
	        o(r2) && o(r2.is) && (n3 = r2.is);
	        if (!n3)
	          return ct();
	        e(s2) && i(s2[0]) && ((r2 = r2 || {}).scopedSlots = {
	          default: s2[0]
	        }, s2.length = 0);
	        2 === a3 ? s2 = Xt(s2) : 1 === a3 && (s2 = function(t4) {
	          for (let n4 = 0; n4 < t4.length; n4++)
	            if (e(t4[n4]))
	              return Array.prototype.concat.apply([], t4);
	          return t4;
	        }(s2));
	        let l3, u3;
	        if ("string" == typeof n3) {
	          let e2;
	          u3 = t3.$vnode && t3.$vnode.ns || L.getTagNamespace(n3), l3 = L.isReservedTag(n3) ? new it(L.parsePlatformTagName(n3), r2, s2, void 0, void 0, t3) : r2 && r2.pre || !o(e2 = Kn(t3.$options, "components", n3)) ? new it(n3, r2, s2, void 0, void 0, t3) : Mn(e2, r2, t3, s2, n3);
	        } else
	          l3 = Mn(n3, r2, t3, s2);
	        return e(l3) ? l3 : o(l3) ? (o(u3) && je(l3, u3), o(r2) && function(t4) {
	          c(t4.style) && nn(t4.style);
	          c(t4.class) && nn(t4.class);
	        }(r2), l3) : ct();
	      }(t2, n2, a2, l2, u2);
	    }
	    function je(t2, e2, s2) {
	      if (t2.ns = e2, "foreignObject" === t2.tag && (e2 = void 0, s2 = true), o(t2.children))
	        for (let i2 = 0, c2 = t2.children.length; i2 < c2; i2++) {
	          const c3 = t2.children[i2];
	          o(c3.tag) && (n(c3.ns) || r(s2) && "svg" !== c3.tag) && je(c3, e2, s2);
	        }
	    }
	    function Ee(t2, e2, n2) {
	      pt();
	      try {
	        if (e2) {
	          let o2 = e2;
	          for (; o2 = o2.$parent; ) {
	            const r2 = o2.$options.errorCaptured;
	            if (r2)
	              for (let s2 = 0; s2 < r2.length; s2++)
	                try {
	                  if (false === r2[s2].call(o2, t2, e2, n2))
	                    return;
	                } catch (t3) {
	                  Ie(t3, o2, "errorCaptured hook");
	                }
	          }
	        }
	        Ie(t2, e2, n2);
	      } finally {
	        ht();
	      }
	    }
	    function Pe(t2, e2, n2, o2, r2) {
	      let s2;
	      try {
	        s2 = n2 ? t2.apply(e2, n2) : t2.call(e2), s2 && !s2._isVue && f(s2) && !s2._handled && (s2.catch((t3) => Ee(t3, o2, r2 + " (Promise/async)")), s2._handled = true);
	      } catch (t3) {
	        Ee(t3, o2, r2);
	      }
	      return s2;
	    }
	    function Ie(t2, e2, n2) {
	      if (L.errorHandler)
	        try {
	          return L.errorHandler.call(null, t2, e2, n2);
	        } catch (e3) {
	          e3 !== t2 && De(e3);
	        }
	      De(t2);
	    }
	    function De(t2, e2, n2) {
	      throw t2;
	    }
	    let Ne = false;
	    const Me = [];
	    let Re, Le = false;
	    function Fe() {
	      Le = false;
	      const t2 = Me.slice(0);
	      Me.length = 0;
	      for (let e2 = 0; e2 < t2.length; e2++)
	        t2[e2]();
	    }
	    if ("undefined" != typeof Promise && et(Promise)) {
	      const t2 = Promise.resolve();
	      Re = () => {
	        t2.then(Fe);
	      }, Ne = true;
	    } else if ("undefined" == typeof MutationObserver || !et(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
	      Re = "undefined" != typeof setImmediate && et(setImmediate) ? () => {
	        setImmediate(Fe);
	      } : () => {
	        setTimeout(Fe, 0);
	      };
	    else {
	      let t2 = 1;
	      const e2 = new MutationObserver(Fe), n2 = document.createTextNode(String(t2));
	      e2.observe(n2, {
	        characterData: true
	      }), Re = () => {
	        t2 = (t2 + 1) % 2, n2.data = String(t2);
	      }, Ne = true;
	    }
	    function Ue(t2, e2) {
	      let n2;
	      if (Me.push(() => {
	        if (t2)
	          try {
	            t2.call(e2);
	          } catch (t3) {
	            Ee(t3, e2, "nextTick");
	          }
	        else
	          n2 && n2(e2);
	      }), Le || (Le = true, Re()), !t2 && "undefined" != typeof Promise)
	        return new Promise((t3) => {
	          n2 = t3;
	        });
	    }
	    function Be(t2) {
	      return (e2, n2 = rt) => {
	        if (n2)
	          return function(t3, e3, n3) {
	            const o2 = t3.$options;
	            o2[e3] = Vn(o2[e3], n3);
	          }(n2, t2, e2);
	      };
	    }
	    const Ve = Be("beforeMount"), ze = Be("mounted"), He = Be("beforeUpdate"), We = Be("updated"), Ke = Be("beforeDestroy"), qe = Be("destroyed"), Ge = Be("errorCaptured"), Ze = Be("activated"), Je = Be("deactivated"), Xe = Be("serverPrefetch"), Qe = Be("renderTracked"), Ye = Be("renderTriggered");
	    var tn = Object.freeze({
	      __proto__: null,
	      version: "2.7.8",
	      defineComponent: function(t2) {
	        return t2;
	      },
	      ref: function(t2) {
	        return Dt(t2, false);
	      },
	      shallowRef: function(t2) {
	        return Dt(t2, true);
	      },
	      isRef: It,
	      toRef: Mt,
	      toRefs: function(t2) {
	        const n2 = e(t2) ? new Array(t2.length) : {};
	        for (const e2 in t2)
	          n2[e2] = Mt(t2, e2);
	        return n2;
	      },
	      unref: function(t2) {
	        return It(t2) ? t2.value : t2;
	      },
	      proxyRefs: function(t2) {
	        if (jt(t2))
	          return t2;
	        const e2 = {}, n2 = Object.keys(t2);
	        for (let o2 = 0; o2 < n2.length; o2++)
	          Nt(e2, t2, n2[o2]);
	        return e2;
	      },
	      customRef: function(t2) {
	        const e2 = new ft(), {
	          get: n2,
	          set: o2
	        } = t2(() => {
	          e2.depend();
	        }, () => {
	          e2.notify();
	        }), r2 = {
	          get value() {
	            return n2();
	          },
	          set value(t3) {
	            o2(t3);
	          }
	        };
	        return U(r2, "__v_isRef", true), r2;
	      },
	      triggerRef: function(t2) {
	        t2.dep && t2.dep.notify();
	      },
	      reactive: function(t2) {
	        return Tt(t2, false), t2;
	      },
	      isReactive: jt,
	      isReadonly: Pt,
	      isShallow: Et,
	      isProxy: function(t2) {
	        return jt(t2) || Pt(t2);
	      },
	      shallowReactive: At,
	      markRaw: function(t2) {
	        return U(t2, "__v_skip", true), t2;
	      },
	      toRaw: function t2(e2) {
	        const n2 = e2 && e2.__v_raw;
	        return n2 ? t2(n2) : e2;
	      },
	      readonly: Rt,
	      shallowReadonly: function(t2) {
	        return Lt(t2, true);
	      },
	      computed: function(t2, e2) {
	        let n2, o2;
	        const r2 = i(t2);
	        r2 ? (n2 = t2, o2 = T) : (n2 = t2.get, o2 = t2.set);
	        const s2 = Y() ? null : new cn(rt, n2, T, {
	          lazy: true
	        }), c2 = {
	          effect: s2,
	          get value() {
	            return s2 ? (s2.dirty && s2.evaluate(), ft.target && s2.depend(), s2.value) : n2();
	          },
	          set value(t3) {
	            o2(t3);
	          }
	        };
	        return U(c2, "__v_isRef", true), U(c2, "__v_isReadonly", r2), c2;
	      },
	      watch: function(t2, e2, n2) {
	        return Vt(t2, e2, n2);
	      },
	      watchEffect: function(t2, e2) {
	        return Vt(t2, null, e2);
	      },
	      watchPostEffect: Ut,
	      watchSyncEffect: function(t2, e2) {
	        return Vt(t2, null, {
	          flush: "sync"
	        });
	      },
	      EffectScope: Ht,
	      effectScope: function(t2) {
	        return new Ht(t2);
	      },
	      onScopeDispose: function(t2) {
	        zt && zt.cleanups.push(t2);
	      },
	      getCurrentScope: function() {
	        return zt;
	      },
	      provide: function(t2, e2) {
	        rt && (Wt(rt)[t2] = e2);
	      },
	      inject: function(t2, e2, n2 = false) {
	        const o2 = rt;
	        if (o2) {
	          const r2 = o2.$parent && o2.$parent._provided;
	          if (r2 && t2 in r2)
	            return r2[t2];
	          if (arguments.length > 1)
	            return n2 && i(e2) ? e2.call(o2) : e2;
	        }
	      },
	      h: function(t2, e2, n2) {
	        return Te(rt, t2, e2, n2, 2, true);
	      },
	      getCurrentInstance: function() {
	        return rt && {
	          proxy: rt
	        };
	      },
	      useSlots: function() {
	        return ke().slots;
	      },
	      useAttrs: function() {
	        return ke().attrs;
	      },
	      useListeners: function() {
	        return ke().listeners;
	      },
	      mergeDefaults: function(t2, n2) {
	        const o2 = e(t2) ? t2.reduce((t3, e2) => (t3[e2] = {}, t3), {}) : t2;
	        for (const t3 in n2) {
	          const r2 = o2[t3];
	          r2 ? e(r2) || i(r2) ? o2[t3] = {
	            type: r2,
	            default: n2[t3]
	          } : r2.default = n2[t3] : null === r2 && (o2[t3] = {
	            default: n2[t3]
	          });
	        }
	        return o2;
	      },
	      nextTick: Ue,
	      set: kt,
	      del: Ot,
	      useCssModule: function(e2 = "$style") {
	        {
	          if (!rt)
	            return t;
	          const n2 = rt[e2];
	          return n2 || t;
	        }
	      },
	      useCssVars: function(t2) {
	        return;
	      },
	      defineAsyncComponent: function(t2) {
	        i(t2) && (t2 = {
	          loader: t2
	        });
	        const {
	          loader: e2,
	          loadingComponent: n2,
	          errorComponent: o2,
	          delay: r2 = 200,
	          timeout: s2,
	          suspensible: c2 = false,
	          onError: a2
	        } = t2;
	        let l2 = null, u2 = 0;
	        const f2 = () => {
	          let t3;
	          return l2 || (t3 = l2 = e2().catch((t4) => {
	            if (t4 = t4 instanceof Error ? t4 : new Error(String(t4)), a2)
	              return new Promise((e3, n3) => {
	                a2(t4, () => e3((u2++, l2 = null, f2())), () => n3(t4), u2 + 1);
	              });
	            throw t4;
	          }).then((e3) => t3 !== l2 && l2 ? l2 : (e3 && (e3.__esModule || "Module" === e3[Symbol.toStringTag]) && (e3 = e3.default), e3)));
	        };
	        return () => ({
	          component: f2(),
	          delay: r2,
	          timeout: s2,
	          error: o2,
	          loading: n2
	        });
	      },
	      onBeforeMount: Ve,
	      onMounted: ze,
	      onBeforeUpdate: He,
	      onUpdated: We,
	      onBeforeUnmount: Ke,
	      onUnmounted: qe,
	      onErrorCaptured: Ge,
	      onActivated: Ze,
	      onDeactivated: Je,
	      onServerPrefetch: Xe,
	      onRenderTracked: Qe,
	      onRenderTriggered: Ye
	    });
	    const en = new ot();
	    function nn(t2) {
	      return on(t2, en), en.clear(), t2;
	    }
	    function on(t2, n2) {
	      let o2, r2;
	      const s2 = e(t2);
	      if (!(!s2 && !c(t2) || Object.isFrozen(t2) || t2 instanceof it)) {
	        if (t2.__ob__) {
	          const e2 = t2.__ob__.dep.id;
	          if (n2.has(e2))
	            return;
	          n2.add(e2);
	        }
	        if (s2)
	          for (o2 = t2.length; o2--; )
	            on(t2[o2], n2);
	        else if (It(t2))
	          on(t2.value, n2);
	        else
	          for (r2 = Object.keys(t2), o2 = r2.length; o2--; )
	            on(t2[r2[o2]], n2);
	      }
	    }
	    let rn, sn = 0;
	    class cn {
	      constructor(t2, e2, n2, o2, r2) {
	        !function(t3, e3 = zt) {
	          e3 && e3.active && e3.effects.push(t3);
	        }(this, zt || (t2 ? t2._scope : void 0)), (this.vm = t2) && r2 && (t2._watcher = this), o2 ? (this.deep = !!o2.deep, this.user = !!o2.user, this.lazy = !!o2.lazy, this.sync = !!o2.sync, this.before = o2.before) : this.deep = this.user = this.lazy = this.sync = false, this.cb = n2, this.id = ++sn, this.active = true, this.post = false, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ot(), this.newDepIds = new ot(), this.expression = "", i(e2) ? this.getter = e2 : (this.getter = function(t3) {
	          if (B.test(t3))
	            return;
	          const e3 = t3.split(".");
	          return function(t4) {
	            for (let n3 = 0; n3 < e3.length; n3++) {
	              if (!t4)
	                return;
	              t4 = t4[e3[n3]];
	            }
	            return t4;
	          };
	        }(e2), this.getter || (this.getter = T)), this.value = this.lazy ? void 0 : this.get();
	      }
	      get() {
	        let t2;
	        pt(this);
	        const e2 = this.vm;
	        try {
	          t2 = this.getter.call(e2, e2);
	        } catch (t3) {
	          if (!this.user)
	            throw t3;
	          Ee(t3, e2, `getter for watcher "${this.expression}"`);
	        } finally {
	          this.deep && nn(t2), ht(), this.cleanupDeps();
	        }
	        return t2;
	      }
	      addDep(t2) {
	        const e2 = t2.id;
	        this.newDepIds.has(e2) || (this.newDepIds.add(e2), this.newDeps.push(t2), this.depIds.has(e2) || t2.addSub(this));
	      }
	      cleanupDeps() {
	        let t2 = this.deps.length;
	        for (; t2--; ) {
	          const e3 = this.deps[t2];
	          this.newDepIds.has(e3.id) || e3.removeSub(this);
	        }
	        let e2 = this.depIds;
	        this.depIds = this.newDepIds, this.newDepIds = e2, this.newDepIds.clear(), e2 = this.deps, this.deps = this.newDeps, this.newDeps = e2, this.newDeps.length = 0;
	      }
	      update() {
	        this.lazy ? this.dirty = true : this.sync ? this.run() : An(this);
	      }
	      run() {
	        if (this.active) {
	          const t2 = this.get();
	          if (t2 !== this.value || c(t2) || this.deep) {
	            const e2 = this.value;
	            if (this.value = t2, this.user) {
	              const n2 = `callback for watcher "${this.expression}"`;
	              Pe(this.cb, this.vm, [t2, e2], this.vm, n2);
	            } else
	              this.cb.call(this.vm, t2, e2);
	          }
	        }
	      }
	      evaluate() {
	        this.value = this.get(), this.dirty = false;
	      }
	      depend() {
	        let t2 = this.deps.length;
	        for (; t2--; )
	          this.deps[t2].depend();
	      }
	      teardown() {
	        if (this.vm && !this.vm._isBeingDestroyed && _(this.vm._scope.effects, this), this.active) {
	          let t2 = this.deps.length;
	          for (; t2--; )
	            this.deps[t2].removeSub(this);
	          this.active = false, this.onStop && this.onStop();
	        }
	      }
	    }
	    function an(t2, e2) {
	      rn.$on(t2, e2);
	    }
	    function ln(t2, e2) {
	      rn.$off(t2, e2);
	    }
	    function un(t2, e2) {
	      const n2 = rn;
	      return function o2() {
	        const r2 = e2.apply(null, arguments);
	        null !== r2 && n2.$off(t2, o2);
	      };
	    }
	    function fn(t2, e2, n2) {
	      rn = t2, Gt(e2, n2 || {}, an, ln, un, t2), rn = void 0;
	    }
	    let dn = null;
	    function pn(t2) {
	      const e2 = dn;
	      return dn = t2, () => {
	        dn = e2;
	      };
	    }
	    function hn(t2) {
	      for (; t2 && (t2 = t2.$parent); )
	        if (t2._inactive)
	          return true;
	      return false;
	    }
	    function mn(t2, e2) {
	      if (e2) {
	        if (t2._directInactive = false, hn(t2))
	          return;
	      } else if (t2._directInactive)
	        return;
	      if (t2._inactive || null === t2._inactive) {
	        t2._inactive = false;
	        for (let e3 = 0; e3 < t2.$children.length; e3++)
	          mn(t2.$children[e3]);
	        vn(t2, "activated");
	      }
	    }
	    function _n(t2, e2) {
	      if (!(e2 && (t2._directInactive = true, hn(t2)) || t2._inactive)) {
	        t2._inactive = true;
	        for (let e3 = 0; e3 < t2.$children.length; e3++)
	          _n(t2.$children[e3]);
	        vn(t2, "deactivated");
	      }
	    }
	    function vn(t2, e2, n2, o2 = true) {
	      pt();
	      const r2 = rt;
	      o2 && st(t2);
	      const s2 = t2.$options[e2], i2 = `${e2} hook`;
	      if (s2)
	        for (let e3 = 0, o3 = s2.length; e3 < o3; e3++)
	          Pe(s2[e3], t2, n2 || null, t2, i2);
	      t2._hasHookEvent && t2.$emit("hook:" + e2), o2 && st(r2), ht();
	    }
	    const yn = [], gn = [];
	    let bn = {}, $n = false, wn = false, Cn = 0;
	    let xn = 0, kn = Date.now;
	    const On = (t2, e2) => {
	      if (t2.post) {
	        if (!e2.post)
	          return 1;
	      } else if (e2.post)
	        return -1;
	      return t2.id - e2.id;
	    };
	    function Sn() {
	      let t2, e2;
	      for (xn = kn(), wn = true, yn.sort(On), Cn = 0; Cn < yn.length; Cn++)
	        t2 = yn[Cn], t2.before && t2.before(), e2 = t2.id, bn[e2] = null, t2.run();
	      const n2 = gn.slice(), o2 = yn.slice();
	      Cn = yn.length = gn.length = 0, bn = {}, $n = wn = false, function(t3) {
	        for (let e3 = 0; e3 < t3.length; e3++)
	          t3[e3]._inactive = true, mn(t3[e3], true);
	      }(n2), function(t3) {
	        let e3 = t3.length;
	        for (; e3--; ) {
	          const n3 = t3[e3], o3 = n3.vm;
	          o3 && o3._watcher === n3 && o3._isMounted && !o3._isDestroyed && vn(o3, "updated");
	        }
	      }(o2);
	    }
	    function An(t2) {
	      const e2 = t2.id;
	      if (null == bn[e2] && (t2 !== ft.target || !t2.noRecurse)) {
	        if (bn[e2] = true, wn) {
	          let e3 = yn.length - 1;
	          for (; e3 > Cn && yn[e3].id > t2.id; )
	            e3--;
	          yn.splice(e3 + 1, 0, t2);
	        } else
	          yn.push(t2);
	        $n || ($n = true, Ue(Sn));
	      }
	    }
	    function Tn(t2, e2) {
	      if (t2) {
	        const n2 = /* @__PURE__ */ Object.create(null), o2 = nt ? Reflect.ownKeys(t2) : Object.keys(t2);
	        for (let r2 = 0; r2 < o2.length; r2++) {
	          const s2 = o2[r2];
	          if ("__ob__" === s2)
	            continue;
	          const c2 = t2[s2].from;
	          if (c2 in e2._provided)
	            n2[s2] = e2._provided[c2];
	          else if ("default" in t2[s2]) {
	            const o3 = t2[s2].default;
	            n2[s2] = i(o3) ? o3.call(e2) : o3;
	          }
	        }
	        return n2;
	      }
	    }
	    function jn(n2, o2, s2, i2, c2) {
	      const a2 = c2.options;
	      let l2;
	      y(i2, "_uid") ? (l2 = Object.create(i2), l2._original = i2) : (l2 = i2, i2 = i2._original);
	      const u2 = r(a2._compiled), f2 = !u2;
	      this.data = n2, this.props = o2, this.children = s2, this.parent = i2, this.listeners = n2.on || t, this.injections = Tn(a2.inject, i2), this.slots = () => (this.$slots || ye(i2, n2.scopedSlots, this.$slots = me(s2, i2)), this.$slots), Object.defineProperty(this, "scopedSlots", {
	        enumerable: true,
	        get() {
	          return ye(i2, n2.scopedSlots, this.slots());
	        }
	      }), u2 && (this.$options = a2, this.$slots = this.slots(), this.$scopedSlots = ye(i2, n2.scopedSlots, this.$slots)), a2._scopeId ? this._c = (t2, n3, o3, r2) => {
	        const s3 = Te(l2, t2, n3, o3, r2, f2);
	        return s3 && !e(s3) && (s3.fnScopeId = a2._scopeId, s3.fnContext = i2), s3;
	      } : this._c = (t2, e2, n3, o3) => Te(l2, t2, e2, n3, o3, f2);
	    }
	    function En(t2, e2, n2, o2, r2) {
	      const s2 = lt(t2);
	      return s2.fnContext = n2, s2.fnOptions = o2, e2.slot && ((s2.data || (s2.data = {})).slot = e2.slot), s2;
	    }
	    function Pn(t2, e2) {
	      for (const n2 in e2)
	        t2[$(n2)] = e2[n2];
	    }
	    function In(t2) {
	      return t2.name || t2.__name || t2._componentTag;
	    }
	    he(jn.prototype);
	    const Dn = {
	      init(t2, e2) {
	        if (t2.componentInstance && !t2.componentInstance._isDestroyed && t2.data.keepAlive) {
	          const e3 = t2;
	          Dn.prepatch(e3, e3);
	        } else {
	          (t2.componentInstance = function(t3, e3) {
	            const n2 = {
	              _isComponent: true,
	              _parentVnode: t3,
	              parent: e3
	            }, r2 = t3.data.inlineTemplate;
	            o(r2) && (n2.render = r2.render, n2.staticRenderFns = r2.staticRenderFns);
	            return new t3.componentOptions.Ctor(n2);
	          }(t2, dn)).$mount(e2 ? t2.elm : void 0, e2);
	        }
	      },
	      prepatch(e2, n2) {
	        const o2 = n2.componentOptions;
	        !function(e3, n3, o3, r2, s2) {
	          const i2 = r2.data.scopedSlots, c2 = e3.$scopedSlots, a2 = !!(i2 && !i2.$stable || c2 !== t && !c2.$stable || i2 && e3.$scopedSlots.$key !== i2.$key || !i2 && e3.$scopedSlots.$key);
	          let l2 = !!(s2 || e3.$options._renderChildren || a2);
	          const u2 = e3.$vnode;
	          e3.$options._parentVnode = r2, e3.$vnode = r2, e3._vnode && (e3._vnode.parent = r2), e3.$options._renderChildren = s2;
	          const f2 = r2.data.attrs || t;
	          e3._attrsProxy && we(e3._attrsProxy, f2, u2.data && u2.data.attrs || t, e3, "$attrs") && (l2 = true), e3.$attrs = f2, o3 = o3 || t;
	          const d2 = e3.$options._parentListeners;
	          if (e3._listenersProxy && we(e3._listenersProxy, o3, d2 || t, e3, "$listeners"), e3.$listeners = e3.$options._parentListeners = o3, fn(e3, o3, d2), n3 && e3.$options.props) {
	            bt(false);
	            const t2 = e3._props, o4 = e3.$options._propKeys || [];
	            for (let r3 = 0; r3 < o4.length; r3++) {
	              const s3 = o4[r3], i3 = e3.$options.props;
	              t2[s3] = qn(s3, i3, n3, e3);
	            }
	            bt(true), e3.$options.propsData = n3;
	          }
	          l2 && (e3.$slots = me(s2, r2.context), e3.$forceUpdate());
	        }(n2.componentInstance = e2.componentInstance, o2.propsData, o2.listeners, n2, o2.children);
	      },
	      insert(t2) {
	        const {
	          context: e2,
	          componentInstance: n2
	        } = t2;
	        var o2;
	        n2._isMounted || (n2._isMounted = true, vn(n2, "mounted")), t2.data.keepAlive && (e2._isMounted ? ((o2 = n2)._inactive = false, gn.push(o2)) : mn(n2, true));
	      },
	      destroy(t2) {
	        const {
	          componentInstance: e2
	        } = t2;
	        e2._isDestroyed || (t2.data.keepAlive ? _n(e2, true) : e2.$destroy());
	      }
	    }, Nn = Object.keys(Dn);
	    function Mn(s2, i2, a2, l2, u2) {
	      if (n(s2))
	        return;
	      const d2 = a2.$options._base;
	      if (c(s2) && (s2 = d2.extend(s2)), "function" != typeof s2)
	        return;
	      let p2;
	      if (n(s2.cid) && (p2 = s2, s2 = function(t2, e2) {
	        if (r(t2.error) && o(t2.errorComp))
	          return t2.errorComp;
	        if (o(t2.resolved))
	          return t2.resolved;
	        const s3 = Oe;
	        if (s3 && o(t2.owners) && -1 === t2.owners.indexOf(s3) && t2.owners.push(s3), r(t2.loading) && o(t2.loadingComp))
	          return t2.loadingComp;
	        if (s3 && !o(t2.owners)) {
	          const r2 = t2.owners = [s3];
	          let i3 = true, a3 = null, l3 = null;
	          s3.$on("hook:destroyed", () => _(r2, s3));
	          const u3 = (t3) => {
	            for (let t4 = 0, e3 = r2.length; t4 < e3; t4++)
	              r2[t4].$forceUpdate();
	            t3 && (r2.length = 0, null !== a3 && (clearTimeout(a3), a3 = null), null !== l3 && (clearTimeout(l3), l3 = null));
	          }, d3 = D((n2) => {
	            t2.resolved = Se(n2, e2), i3 ? r2.length = 0 : u3(true);
	          }), p3 = D((e3) => {
	            o(t2.errorComp) && (t2.error = true, u3(true));
	          }), h3 = t2(d3, p3);
	          return c(h3) && (f(h3) ? n(t2.resolved) && h3.then(d3, p3) : f(h3.component) && (h3.component.then(d3, p3), o(h3.error) && (t2.errorComp = Se(h3.error, e2)), o(h3.loading) && (t2.loadingComp = Se(h3.loading, e2), 0 === h3.delay ? t2.loading = true : a3 = setTimeout(() => {
	            a3 = null, n(t2.resolved) && n(t2.error) && (t2.loading = true, u3(false));
	          }, h3.delay || 200)), o(h3.timeout) && (l3 = setTimeout(() => {
	            l3 = null, n(t2.resolved) && p3(null);
	          }, h3.timeout)))), i3 = false, t2.loading ? t2.loadingComp : t2.resolved;
	        }
	      }(p2, d2), void 0 === s2))
	        return function(t2, e2, n2, o2, r2) {
	          const s3 = ct();
	          return s3.asyncFactory = t2, s3.asyncMeta = {
	            data: e2,
	            context: n2,
	            children: o2,
	            tag: r2
	          }, s3;
	        }(p2, i2, a2, l2, u2);
	      i2 = i2 || {}, co(s2), o(i2.model) && function(t2, n2) {
	        const r2 = t2.model && t2.model.prop || "value", s3 = t2.model && t2.model.event || "input";
	        (n2.attrs || (n2.attrs = {}))[r2] = n2.model.value;
	        const i3 = n2.on || (n2.on = {}), c2 = i3[s3], a3 = n2.model.callback;
	        o(c2) ? (e(c2) ? -1 === c2.indexOf(a3) : c2 !== a3) && (i3[s3] = [a3].concat(c2)) : i3[s3] = a3;
	      }(s2.options, i2);
	      const h2 = function(t2, e2, r2) {
	        const s3 = e2.options.props;
	        if (n(s3))
	          return;
	        const i3 = {}, {
	          attrs: c2,
	          props: a3
	        } = t2;
	        if (o(c2) || o(a3))
	          for (const t3 in s3) {
	            const e3 = x(t3);
	            Jt(i3, a3, t3, e3, true) || Jt(i3, c2, t3, e3, false);
	          }
	        return i3;
	      }(i2, s2);
	      if (r(s2.options.functional))
	        return function(n2, r2, s3, i3, c2) {
	          const a3 = n2.options, l3 = {}, u3 = a3.props;
	          if (o(u3))
	            for (const e2 in u3)
	              l3[e2] = qn(e2, u3, r2 || t);
	          else
	            o(s3.attrs) && Pn(l3, s3.attrs), o(s3.props) && Pn(l3, s3.props);
	          const f2 = new jn(s3, l3, c2, i3, n2), d3 = a3.render.call(null, f2._c, f2);
	          if (d3 instanceof it)
	            return En(d3, s3, f2.parent, a3);
	          if (e(d3)) {
	            const t2 = Xt(d3) || [], e2 = new Array(t2.length);
	            for (let n3 = 0; n3 < t2.length; n3++)
	              e2[n3] = En(t2[n3], s3, f2.parent, a3);
	            return e2;
	          }
	        }(s2, h2, i2, a2, l2);
	      const m2 = i2.on;
	      if (i2.on = i2.nativeOn, r(s2.options.abstract)) {
	        const t2 = i2.slot;
	        i2 = {}, t2 && (i2.slot = t2);
	      }
	      !function(t2) {
	        const e2 = t2.hook || (t2.hook = {});
	        for (let t3 = 0; t3 < Nn.length; t3++) {
	          const n2 = Nn[t3], o2 = e2[n2], r2 = Dn[n2];
	          o2 === r2 || o2 && o2._merged || (e2[n2] = o2 ? Rn(r2, o2) : r2);
	        }
	      }(i2);
	      const v2 = In(s2.options) || u2;
	      return new it(`vue-component-${s2.cid}${v2 ? `-${v2}` : ""}`, i2, void 0, void 0, void 0, a2, {
	        Ctor: s2,
	        propsData: h2,
	        listeners: m2,
	        tag: u2,
	        children: l2
	      }, p2);
	    }
	    function Rn(t2, e2) {
	      const n2 = (n3, o2) => {
	        t2(n3, o2), e2(n3, o2);
	      };
	      return n2._merged = true, n2;
	    }
	    let Ln = T;
	    const Fn = L.optionMergeStrategies;
	    function Un(t2, e2) {
	      if (!e2)
	        return t2;
	      let n2, o2, r2;
	      const s2 = nt ? Reflect.ownKeys(e2) : Object.keys(e2);
	      for (let i2 = 0; i2 < s2.length; i2++)
	        n2 = s2[i2], "__ob__" !== n2 && (o2 = t2[n2], r2 = e2[n2], y(t2, n2) ? o2 !== r2 && l(o2) && l(r2) && Un(o2, r2) : kt(t2, n2, r2));
	      return t2;
	    }
	    function Bn(t2, e2, n2) {
	      return n2 ? function() {
	        const o2 = i(e2) ? e2.call(n2, n2) : e2, r2 = i(t2) ? t2.call(n2, n2) : t2;
	        return o2 ? Un(o2, r2) : r2;
	      } : e2 ? t2 ? function() {
	        return Un(i(e2) ? e2.call(this, this) : e2, i(t2) ? t2.call(this, this) : t2);
	      } : e2 : t2;
	    }
	    function Vn(t2, n2) {
	      const o2 = n2 ? t2 ? t2.concat(n2) : e(n2) ? n2 : [n2] : t2;
	      return o2 ? function(t3) {
	        const e2 = [];
	        for (let n3 = 0; n3 < t3.length; n3++)
	          -1 === e2.indexOf(t3[n3]) && e2.push(t3[n3]);
	        return e2;
	      }(o2) : o2;
	    }
	    function zn(t2, e2, n2, o2) {
	      const r2 = Object.create(t2 || null);
	      return e2 ? S(r2, e2) : r2;
	    }
	    Fn.data = function(t2, e2, n2) {
	      return n2 ? Bn(t2, e2, n2) : e2 && "function" != typeof e2 ? t2 : Bn(t2, e2);
	    }, R.forEach((t2) => {
	      Fn[t2] = Vn;
	    }), M.forEach(function(t2) {
	      Fn[t2 + "s"] = zn;
	    }), Fn.watch = function(t2, n2, o2, r2) {
	      if (t2 === J && (t2 = void 0), n2 === J && (n2 = void 0), !n2)
	        return Object.create(t2 || null);
	      if (!t2)
	        return n2;
	      const s2 = {};
	      S(s2, t2);
	      for (const t3 in n2) {
	        let o3 = s2[t3];
	        const r3 = n2[t3];
	        o3 && !e(o3) && (o3 = [o3]), s2[t3] = o3 ? o3.concat(r3) : e(r3) ? r3 : [r3];
	      }
	      return s2;
	    }, Fn.props = Fn.methods = Fn.inject = Fn.computed = function(t2, e2, n2, o2) {
	      if (!t2)
	        return e2;
	      const r2 = /* @__PURE__ */ Object.create(null);
	      return S(r2, t2), e2 && S(r2, e2), r2;
	    }, Fn.provide = Bn;
	    const Hn = function(t2, e2) {
	      return void 0 === e2 ? t2 : e2;
	    };
	    function Wn(t2, n2, o2) {
	      if (i(n2) && (n2 = n2.options), function(t3, n3) {
	        const o3 = t3.props;
	        if (!o3)
	          return;
	        const r3 = {};
	        let s3, i2, c3;
	        if (e(o3))
	          for (s3 = o3.length; s3--; )
	            i2 = o3[s3], "string" == typeof i2 && (c3 = $(i2), r3[c3] = {
	              type: null
	            });
	        else if (l(o3))
	          for (const t4 in o3)
	            i2 = o3[t4], c3 = $(t4), r3[c3] = l(i2) ? i2 : {
	              type: i2
	            };
	        t3.props = r3;
	      }(n2), function(t3, n3) {
	        const o3 = t3.inject;
	        if (!o3)
	          return;
	        const r3 = t3.inject = {};
	        if (e(o3))
	          for (let t4 = 0; t4 < o3.length; t4++)
	            r3[o3[t4]] = {
	              from: o3[t4]
	            };
	        else if (l(o3))
	          for (const t4 in o3) {
	            const e2 = o3[t4];
	            r3[t4] = l(e2) ? S({
	              from: t4
	            }, e2) : {
	              from: e2
	            };
	          }
	      }(n2), function(t3) {
	        const e2 = t3.directives;
	        if (e2)
	          for (const t4 in e2) {
	            const n3 = e2[t4];
	            i(n3) && (e2[t4] = {
	              bind: n3,
	              update: n3
	            });
	          }
	      }(n2), !n2._base && (n2.extends && (t2 = Wn(t2, n2.extends, o2)), n2.mixins))
	        for (let e2 = 0, r3 = n2.mixins.length; e2 < r3; e2++)
	          t2 = Wn(t2, n2.mixins[e2], o2);
	      const r2 = {};
	      let s2;
	      for (s2 in t2)
	        c2(s2);
	      for (s2 in n2)
	        y(t2, s2) || c2(s2);
	      function c2(e2) {
	        const s3 = Fn[e2] || Hn;
	        r2[e2] = s3(t2[e2], n2[e2], o2, e2);
	      }
	      return r2;
	    }
	    function Kn(t2, e2, n2, o2) {
	      if ("string" != typeof n2)
	        return;
	      const r2 = t2[e2];
	      if (y(r2, n2))
	        return r2[n2];
	      const s2 = $(n2);
	      if (y(r2, s2))
	        return r2[s2];
	      const i2 = w(s2);
	      if (y(r2, i2))
	        return r2[i2];
	      return r2[n2] || r2[s2] || r2[i2];
	    }
	    function qn(t2, e2, n2, o2) {
	      const r2 = e2[t2], s2 = !y(n2, t2);
	      let c2 = n2[t2];
	      const a2 = Xn(Boolean, r2.type);
	      if (a2 > -1) {
	        if (s2 && !y(r2, "default"))
	          c2 = false;
	        else if ("" === c2 || c2 === x(t2)) {
	          const t3 = Xn(String, r2.type);
	          (t3 < 0 || a2 < t3) && (c2 = true);
	        }
	      }
	      if (void 0 === c2) {
	        c2 = function(t3, e4, n3) {
	          if (!y(e4, "default"))
	            return;
	          const o3 = e4.default;
	          if (t3 && t3.$options.propsData && void 0 === t3.$options.propsData[n3] && void 0 !== t3._props[n3])
	            return t3._props[n3];
	          return i(o3) && "Function" !== Zn(e4.type) ? o3.call(t3) : o3;
	        }(o2, r2, t2);
	        const e3 = gt;
	        bt(true), Ct(c2), bt(e3);
	      }
	      return c2;
	    }
	    const Gn = /^\s*function (\w+)/;
	    function Zn(t2) {
	      const e2 = t2 && t2.toString().match(Gn);
	      return e2 ? e2[1] : "";
	    }
	    function Jn(t2, e2) {
	      return Zn(t2) === Zn(e2);
	    }
	    function Xn(t2, n2) {
	      if (!e(n2))
	        return Jn(n2, t2) ? 0 : -1;
	      for (let e2 = 0, o2 = n2.length; e2 < o2; e2++)
	        if (Jn(n2[e2], t2))
	          return e2;
	      return -1;
	    }
	    const Qn = {
	      enumerable: true,
	      configurable: true,
	      get: T,
	      set: T
	    };
	    function Yn(t2, e2, n2) {
	      Qn.get = function() {
	        return this[e2][n2];
	      }, Qn.set = function(t3) {
	        this[e2][n2] = t3;
	      }, Object.defineProperty(t2, n2, Qn);
	    }
	    function to(t2) {
	      const n2 = t2.$options;
	      if (n2.props && function(t3, e2) {
	        const n3 = t3.$options.propsData || {}, o2 = t3._props = At({}), r2 = t3.$options._propKeys = [];
	        t3.$parent && bt(false);
	        for (const s2 in e2) {
	          r2.push(s2);
	          xt(o2, s2, qn(s2, e2, n3, t3)), s2 in t3 || Yn(t3, "_props", s2);
	        }
	        bt(true);
	      }(t2, n2.props), function(t3) {
	        const e2 = t3.$options, n3 = e2.setup;
	        if (n3) {
	          const o2 = t3._setupContext = $e(t3);
	          st(t3), pt();
	          const r2 = Pe(n3, null, [t3._props || At({}), o2], t3, "setup");
	          if (ht(), st(), i(r2))
	            e2.render = r2;
	          else if (c(r2))
	            if (t3._setupState = r2, r2.__sfc) {
	              const e3 = t3._setupProxy = {};
	              for (const t4 in r2)
	                "__sfc" !== t4 && Nt(e3, r2, t4);
	            } else
	              for (const e3 in r2)
	                F(e3) || Nt(t3, r2, e3);
	        }
	      }(t2), n2.methods && function(t3, e2) {
	        t3.$options.props;
	        for (const n3 in e2)
	          t3[n3] = "function" != typeof e2[n3] ? T : k(e2[n3], t3);
	      }(t2, n2.methods), n2.data)
	        !function(t3) {
	          let e2 = t3.$options.data;
	          e2 = t3._data = i(e2) ? function(t4, e3) {
	            pt();
	            try {
	              return t4.call(e3, e3);
	            } catch (t5) {
	              return Ee(t5, e3, "data()"), {};
	            } finally {
	              ht();
	            }
	          }(e2, t3) : e2 || {}, l(e2) || (e2 = {});
	          const n3 = Object.keys(e2), o2 = t3.$options.props;
	          t3.$options.methods;
	          let r2 = n3.length;
	          for (; r2--; ) {
	            const e3 = n3[r2];
	            o2 && y(o2, e3) || F(e3) || Yn(t3, "_data", e3);
	          }
	          const s2 = Ct(e2);
	          s2 && s2.vmCount++;
	        }(t2);
	      else {
	        const e2 = Ct(t2._data = {});
	        e2 && e2.vmCount++;
	      }
	      n2.computed && function(t3, e2) {
	        const n3 = t3._computedWatchers = /* @__PURE__ */ Object.create(null), o2 = Y();
	        for (const r2 in e2) {
	          const s2 = e2[r2], c2 = i(s2) ? s2 : s2.get;
	          o2 || (n3[r2] = new cn(t3, c2 || T, T, eo)), r2 in t3 || no(t3, r2, s2);
	        }
	      }(t2, n2.computed), n2.watch && n2.watch !== J && function(t3, n3) {
	        for (const o2 in n3) {
	          const r2 = n3[o2];
	          if (e(r2))
	            for (let e2 = 0; e2 < r2.length; e2++)
	              so(t3, o2, r2[e2]);
	          else
	            so(t3, o2, r2);
	        }
	      }(t2, n2.watch);
	    }
	    const eo = {
	      lazy: true
	    };
	    function no(t2, e2, n2) {
	      const o2 = !Y();
	      i(n2) ? (Qn.get = o2 ? oo(e2) : ro(n2), Qn.set = T) : (Qn.get = n2.get ? o2 && false !== n2.cache ? oo(e2) : ro(n2.get) : T, Qn.set = n2.set || T), Object.defineProperty(t2, e2, Qn);
	    }
	    function oo(t2) {
	      return function() {
	        const e2 = this._computedWatchers && this._computedWatchers[t2];
	        if (e2)
	          return e2.dirty && e2.evaluate(), ft.target && e2.depend(), e2.value;
	      };
	    }
	    function ro(t2) {
	      return function() {
	        return t2.call(this, this);
	      };
	    }
	    function so(t2, e2, n2, o2) {
	      return l(n2) && (o2 = n2, n2 = n2.handler), "string" == typeof n2 && (n2 = t2[n2]), t2.$watch(e2, n2, o2);
	    }
	    let io = 0;
	    function co(t2) {
	      let e2 = t2.options;
	      if (t2.super) {
	        const n2 = co(t2.super);
	        if (n2 !== t2.superOptions) {
	          t2.superOptions = n2;
	          const o2 = function(t3) {
	            let e3;
	            const n3 = t3.options, o3 = t3.sealedOptions;
	            for (const t4 in n3)
	              n3[t4] !== o3[t4] && (e3 || (e3 = {}), e3[t4] = n3[t4]);
	            return e3;
	          }(t2);
	          o2 && S(t2.extendOptions, o2), e2 = t2.options = Wn(n2, t2.extendOptions), e2.name && (e2.components[e2.name] = t2);
	        }
	      }
	      return e2;
	    }
	    function ao(t2) {
	      this._init(t2);
	    }
	    function lo(t2) {
	      t2.cid = 0;
	      let e2 = 1;
	      t2.extend = function(t3) {
	        t3 = t3 || {};
	        const n2 = this, o2 = n2.cid, r2 = t3._Ctor || (t3._Ctor = {});
	        if (r2[o2])
	          return r2[o2];
	        const s2 = In(t3) || In(n2.options), i2 = function(t4) {
	          this._init(t4);
	        };
	        return (i2.prototype = Object.create(n2.prototype)).constructor = i2, i2.cid = e2++, i2.options = Wn(n2.options, t3), i2.super = n2, i2.options.props && function(t4) {
	          const e3 = t4.options.props;
	          for (const n3 in e3)
	            Yn(t4.prototype, "_props", n3);
	        }(i2), i2.options.computed && function(t4) {
	          const e3 = t4.options.computed;
	          for (const n3 in e3)
	            no(t4.prototype, n3, e3[n3]);
	        }(i2), i2.extend = n2.extend, i2.mixin = n2.mixin, i2.use = n2.use, M.forEach(function(t4) {
	          i2[t4] = n2[t4];
	        }), s2 && (i2.options.components[s2] = i2), i2.superOptions = n2.options, i2.extendOptions = t3, i2.sealedOptions = S({}, i2.options), r2[o2] = i2, i2;
	      };
	    }
	    function uo(t2) {
	      return t2 && (In(t2.Ctor.options) || t2.tag);
	    }
	    function fo(t2, n2) {
	      return e(t2) ? t2.indexOf(n2) > -1 : "string" == typeof t2 ? t2.split(",").indexOf(n2) > -1 : (o2 = t2, "[object RegExp]" === a.call(o2) && t2.test(n2));
	      var o2;
	    }
	    function po(t2, e2) {
	      const {
	        cache: n2,
	        keys: o2,
	        _vnode: r2
	      } = t2;
	      for (const t3 in n2) {
	        const s2 = n2[t3];
	        if (s2) {
	          const i2 = s2.name;
	          i2 && !e2(i2) && ho(n2, t3, o2, r2);
	        }
	      }
	    }
	    function ho(t2, e2, n2, o2) {
	      const r2 = t2[e2];
	      !r2 || o2 && r2.tag === o2.tag || r2.componentInstance.$destroy(), t2[e2] = null, _(n2, e2);
	    }
	    !function(e2) {
	      e2.prototype._init = function(e3) {
	        const n2 = this;
	        n2._uid = io++, n2._isVue = true, n2.__v_skip = true, n2._scope = new Ht(true), e3 && e3._isComponent ? function(t2, e4) {
	          const n3 = t2.$options = Object.create(t2.constructor.options), o2 = e4._parentVnode;
	          n3.parent = e4.parent, n3._parentVnode = o2;
	          const r2 = o2.componentOptions;
	          n3.propsData = r2.propsData, n3._parentListeners = r2.listeners, n3._renderChildren = r2.children, n3._componentTag = r2.tag, e4.render && (n3.render = e4.render, n3.staticRenderFns = e4.staticRenderFns);
	        }(n2, e3) : n2.$options = Wn(co(n2.constructor), e3 || {}, n2), n2._renderProxy = n2, n2._self = n2, function(t2) {
	          const e4 = t2.$options;
	          let n3 = e4.parent;
	          if (n3 && !e4.abstract) {
	            for (; n3.$options.abstract && n3.$parent; )
	              n3 = n3.$parent;
	            n3.$children.push(t2);
	          }
	          t2.$parent = n3, t2.$root = n3 ? n3.$root : t2, t2.$children = [], t2.$refs = {}, t2._provided = n3 ? n3._provided : /* @__PURE__ */ Object.create(null), t2._watcher = null, t2._inactive = null, t2._directInactive = false, t2._isMounted = false, t2._isDestroyed = false, t2._isBeingDestroyed = false;
	        }(n2), function(t2) {
	          t2._events = /* @__PURE__ */ Object.create(null), t2._hasHookEvent = false;
	          const e4 = t2.$options._parentListeners;
	          e4 && fn(t2, e4);
	        }(n2), function(e4) {
	          e4._vnode = null, e4._staticTrees = null;
	          const n3 = e4.$options, o2 = e4.$vnode = n3._parentVnode, r2 = o2 && o2.context;
	          e4.$slots = me(n3._renderChildren, r2), e4.$scopedSlots = o2 ? ye(e4.$parent, o2.data.scopedSlots, e4.$slots) : t, e4._c = (t2, n4, o3, r3) => Te(e4, t2, n4, o3, r3, false), e4.$createElement = (t2, n4, o3, r3) => Te(e4, t2, n4, o3, r3, true);
	          const s2 = o2 && o2.data;
	          xt(e4, "$attrs", s2 && s2.attrs || t, null, true), xt(e4, "$listeners", n3._parentListeners || t, null, true);
	        }(n2), vn(n2, "beforeCreate", void 0, false), function(t2) {
	          const e4 = Tn(t2.$options.inject, t2);
	          e4 && (bt(false), Object.keys(e4).forEach((n3) => {
	            xt(t2, n3, e4[n3]);
	          }), bt(true));
	        }(n2), to(n2), function(t2) {
	          const e4 = t2.$options.provide;
	          if (e4) {
	            const n3 = i(e4) ? e4.call(t2) : e4;
	            if (!c(n3))
	              return;
	            const o2 = Wt(t2), r2 = nt ? Reflect.ownKeys(n3) : Object.keys(n3);
	            for (let t3 = 0; t3 < r2.length; t3++) {
	              const e5 = r2[t3];
	              Object.defineProperty(o2, e5, Object.getOwnPropertyDescriptor(n3, e5));
	            }
	          }
	        }(n2), vn(n2, "created"), n2.$options.el && n2.$mount(n2.$options.el);
	      };
	    }(ao), function(t2) {
	      const e2 = {
	        get: function() {
	          return this._data;
	        }
	      }, n2 = {
	        get: function() {
	          return this._props;
	        }
	      };
	      Object.defineProperty(t2.prototype, "$data", e2), Object.defineProperty(t2.prototype, "$props", n2), t2.prototype.$set = kt, t2.prototype.$delete = Ot, t2.prototype.$watch = function(t3, e3, n3) {
	        const o2 = this;
	        if (l(e3))
	          return so(o2, t3, e3, n3);
	        (n3 = n3 || {}).user = true;
	        const r2 = new cn(o2, t3, e3, n3);
	        if (n3.immediate) {
	          const t4 = `callback for immediate watcher "${r2.expression}"`;
	          pt(), Pe(e3, o2, [r2.value], o2, t4), ht();
	        }
	        return function() {
	          r2.teardown();
	        };
	      };
	    }(ao), function(t2) {
	      const n2 = /^hook:/;
	      t2.prototype.$on = function(t3, o2) {
	        const r2 = this;
	        if (e(t3))
	          for (let e2 = 0, n3 = t3.length; e2 < n3; e2++)
	            r2.$on(t3[e2], o2);
	        else
	          (r2._events[t3] || (r2._events[t3] = [])).push(o2), n2.test(t3) && (r2._hasHookEvent = true);
	        return r2;
	      }, t2.prototype.$once = function(t3, e2) {
	        const n3 = this;
	        function o2() {
	          n3.$off(t3, o2), e2.apply(n3, arguments);
	        }
	        return o2.fn = e2, n3.$on(t3, o2), n3;
	      }, t2.prototype.$off = function(t3, n3) {
	        const o2 = this;
	        if (!arguments.length)
	          return o2._events = /* @__PURE__ */ Object.create(null), o2;
	        if (e(t3)) {
	          for (let e2 = 0, r3 = t3.length; e2 < r3; e2++)
	            o2.$off(t3[e2], n3);
	          return o2;
	        }
	        const r2 = o2._events[t3];
	        if (!r2)
	          return o2;
	        if (!n3)
	          return o2._events[t3] = null, o2;
	        let s2, i2 = r2.length;
	        for (; i2--; )
	          if (s2 = r2[i2], s2 === n3 || s2.fn === n3) {
	            r2.splice(i2, 1);
	            break;
	          }
	        return o2;
	      }, t2.prototype.$emit = function(t3) {
	        const e2 = this;
	        let n3 = e2._events[t3];
	        if (n3) {
	          n3 = n3.length > 1 ? O(n3) : n3;
	          const o2 = O(arguments, 1), r2 = `event handler for "${t3}"`;
	          for (let t4 = 0, s2 = n3.length; t4 < s2; t4++)
	            Pe(n3[t4], e2, o2, e2, r2);
	        }
	        return e2;
	      };
	    }(ao), function(t2) {
	      t2.prototype._update = function(t3, e2) {
	        const n2 = this, o2 = n2.$el, r2 = n2._vnode, s2 = pn(n2);
	        n2._vnode = t3, n2.$el = r2 ? n2.__patch__(r2, t3) : n2.__patch__(n2.$el, t3, e2, false), s2(), o2 && (o2.__vue__ = null), n2.$el && (n2.$el.__vue__ = n2), n2.$vnode && n2.$parent && n2.$vnode === n2.$parent._vnode && (n2.$parent.$el = n2.$el);
	      }, t2.prototype.$forceUpdate = function() {
	        const t3 = this;
	        t3._watcher && t3._watcher.update();
	      }, t2.prototype.$destroy = function() {
	        const t3 = this;
	        if (t3._isBeingDestroyed)
	          return;
	        vn(t3, "beforeDestroy"), t3._isBeingDestroyed = true;
	        const e2 = t3.$parent;
	        !e2 || e2._isBeingDestroyed || t3.$options.abstract || _(e2.$children, t3), t3._scope.stop(), t3._data.__ob__ && t3._data.__ob__.vmCount--, t3._isDestroyed = true, t3.__patch__(t3._vnode, null), vn(t3, "destroyed"), t3.$off(), t3.$el && (t3.$el.__vue__ = null), t3.$vnode && (t3.$vnode.parent = null);
	      };
	    }(ao), function(t2) {
	      he(t2.prototype), t2.prototype.$nextTick = function(t3) {
	        return Ue(t3, this);
	      }, t2.prototype._render = function() {
	        const t3 = this, {
	          render: n2,
	          _parentVnode: o2
	        } = t3.$options;
	        let r2;
	        o2 && t3._isMounted && (t3.$scopedSlots = ye(t3.$parent, o2.data.scopedSlots, t3.$slots, t3.$scopedSlots), t3._slotsProxy && xe(t3._slotsProxy, t3.$scopedSlots)), t3.$vnode = o2;
	        try {
	          st(t3), Oe = t3, r2 = n2.call(t3._renderProxy, t3.$createElement);
	        } catch (e2) {
	          Ee(e2, t3, "render"), r2 = t3._vnode;
	        } finally {
	          Oe = null, st();
	        }
	        return e(r2) && 1 === r2.length && (r2 = r2[0]), r2 instanceof it || (r2 = ct()), r2.parent = o2, r2;
	      };
	    }(ao);
	    const mo = [String, RegExp, Array];
	    var _o = {
	      KeepAlive: {
	        name: "keep-alive",
	        abstract: true,
	        props: {
	          include: mo,
	          exclude: mo,
	          max: [String, Number]
	        },
	        methods: {
	          cacheVNode() {
	            const {
	              cache: t2,
	              keys: e2,
	              vnodeToCache: n2,
	              keyToCache: o2
	            } = this;
	            if (n2) {
	              const {
	                tag: r2,
	                componentInstance: s2,
	                componentOptions: i2
	              } = n2;
	              t2[o2] = {
	                name: uo(i2),
	                tag: r2,
	                componentInstance: s2
	              }, e2.push(o2), this.max && e2.length > parseInt(this.max) && ho(t2, e2[0], e2, this._vnode), this.vnodeToCache = null;
	            }
	          }
	        },
	        created() {
	          this.cache = /* @__PURE__ */ Object.create(null), this.keys = [];
	        },
	        destroyed() {
	          for (const t2 in this.cache)
	            ho(this.cache, t2, this.keys);
	        },
	        mounted() {
	          this.cacheVNode(), this.$watch("include", (t2) => {
	            po(this, (e2) => fo(t2, e2));
	          }), this.$watch("exclude", (t2) => {
	            po(this, (e2) => !fo(t2, e2));
	          });
	        },
	        updated() {
	          this.cacheVNode();
	        },
	        render() {
	          const t2 = this.$slots.default, e2 = Ae(t2), n2 = e2 && e2.componentOptions;
	          if (n2) {
	            const t3 = uo(n2), {
	              include: o2,
	              exclude: r2
	            } = this;
	            if (o2 && (!t3 || !fo(o2, t3)) || r2 && t3 && fo(r2, t3))
	              return e2;
	            const {
	              cache: s2,
	              keys: i2
	            } = this, c2 = null == e2.key ? n2.Ctor.cid + (n2.tag ? `::${n2.tag}` : "") : e2.key;
	            s2[c2] ? (e2.componentInstance = s2[c2].componentInstance, _(i2, c2), i2.push(c2)) : (this.vnodeToCache = e2, this.keyToCache = c2), e2.data.keepAlive = true;
	          }
	          return e2 || t2 && t2[0];
	        }
	      }
	    };
	    !function(t2) {
	      const e2 = {
	        get: () => L
	      };
	      Object.defineProperty(t2, "config", e2), t2.util = {
	        warn: Ln,
	        extend: S,
	        mergeOptions: Wn,
	        defineReactive: xt
	      }, t2.set = kt, t2.delete = Ot, t2.nextTick = Ue, t2.observable = (t3) => (Ct(t3), t3), t2.options = /* @__PURE__ */ Object.create(null), M.forEach((e3) => {
	        t2.options[e3 + "s"] = /* @__PURE__ */ Object.create(null);
	      }), t2.options._base = t2, S(t2.options.components, _o), function(t3) {
	        t3.use = function(t4) {
	          const e3 = this._installedPlugins || (this._installedPlugins = []);
	          if (e3.indexOf(t4) > -1)
	            return this;
	          const n2 = O(arguments, 1);
	          return n2.unshift(this), i(t4.install) ? t4.install.apply(t4, n2) : i(t4) && t4.apply(null, n2), e3.push(t4), this;
	        };
	      }(t2), function(t3) {
	        t3.mixin = function(t4) {
	          return this.options = Wn(this.options, t4), this;
	        };
	      }(t2), lo(t2), function(t3) {
	        M.forEach((e3) => {
	          t3[e3] = function(t4, n2) {
	            return n2 ? ("component" === e3 && l(n2) && (n2.name = n2.name || t4, n2 = this.options._base.extend(n2)), "directive" === e3 && i(n2) && (n2 = {
	              bind: n2,
	              update: n2
	            }), this.options[e3 + "s"][t4] = n2, n2) : this.options[e3 + "s"][t4];
	          };
	        });
	      }(t2);
	    }(ao), Object.defineProperty(ao.prototype, "$isServer", {
	      get: Y
	    }), Object.defineProperty(ao.prototype, "$ssrContext", {
	      get() {
	        return this.$vnode && this.$vnode.ssrContext;
	      }
	    }), Object.defineProperty(ao, "FunctionalRenderContext", {
	      value: jn
	    }), ao.version = "2.7.8";
	    const vo = h("style,class"), yo = h("input,textarea,option,select,progress"), go = h("contenteditable,draggable,spellcheck"), bo = h("events,caret,typing,plaintext-only"), $o = h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"), wo = "http://www.w3.org/1999/xlink", Co = (t2) => ":" === t2.charAt(5) && "xlink" === t2.slice(0, 5), xo = (t2) => Co(t2) ? t2.slice(6, t2.length) : "", ko = (t2) => null == t2 || false === t2;
	    function Oo(t2) {
	      let e2 = t2.data, n2 = t2, r2 = t2;
	      for (; o(r2.componentInstance); )
	        r2 = r2.componentInstance._vnode, r2 && r2.data && (e2 = So(r2.data, e2));
	      for (; o(n2 = n2.parent); )
	        n2 && n2.data && (e2 = So(e2, n2.data));
	      return function(t3, e3) {
	        if (o(t3) || o(e3))
	          return Ao(t3, To(e3));
	        return "";
	      }(e2.staticClass, e2.class);
	    }
	    function So(t2, e2) {
	      return {
	        staticClass: Ao(t2.staticClass, e2.staticClass),
	        class: o(t2.class) ? [t2.class, e2.class] : e2.class
	      };
	    }
	    function Ao(t2, e2) {
	      return t2 ? e2 ? t2 + " " + e2 : t2 : e2 || "";
	    }
	    function To(t2) {
	      return Array.isArray(t2) ? function(t3) {
	        let e2, n2 = "";
	        for (let r2 = 0, s2 = t3.length; r2 < s2; r2++)
	          o(e2 = To(t3[r2])) && "" !== e2 && (n2 && (n2 += " "), n2 += e2);
	        return n2;
	      }(t2) : c(t2) ? function(t3) {
	        let e2 = "";
	        for (const n2 in t3)
	          t3[n2] && (e2 && (e2 += " "), e2 += n2);
	        return e2;
	      }(t2) : "string" == typeof t2 ? t2 : "";
	    }
	    const jo = {
	      svg: "http://www.w3.org/2000/svg",
	      math: "http://www.w3.org/1998/Math/MathML"
	    }, Eo = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), Po = h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true), Io = (t2) => Eo(t2) || Po(t2);
	    const No = h("text,number,password,search,email,tel,url");
	    var Mo = Object.freeze({
	      __proto__: null,
	      createElement: function(t2, e2) {
	        const n2 = document.createElement(t2);
	        return "select" !== t2 || e2.data && e2.data.attrs && void 0 !== e2.data.attrs.multiple && n2.setAttribute("multiple", "multiple"), n2;
	      },
	      createElementNS: function(t2, e2) {
	        return document.createElementNS(jo[t2], e2);
	      },
	      createTextNode: function(t2) {
	        return document.createTextNode(t2);
	      },
	      createComment: function(t2) {
	        return document.createComment(t2);
	      },
	      insertBefore: function(t2, e2, n2) {
	        t2.insertBefore(e2, n2);
	      },
	      removeChild: function(t2, e2) {
	        t2.removeChild(e2);
	      },
	      appendChild: function(t2, e2) {
	        t2.appendChild(e2);
	      },
	      parentNode: function(t2) {
	        return t2.parentNode;
	      },
	      nextSibling: function(t2) {
	        return t2.nextSibling;
	      },
	      tagName: function(t2) {
	        return t2.tagName;
	      },
	      setTextContent: function(t2, e2) {
	        t2.textContent = e2;
	      },
	      setStyleScope: function(t2, e2) {
	        t2.setAttribute(e2, "");
	      }
	    }), Ro = {
	      create(t2, e2) {
	        Lo(e2);
	      },
	      update(t2, e2) {
	        t2.data.ref !== e2.data.ref && (Lo(t2, true), Lo(e2));
	      },
	      destroy(t2) {
	        Lo(t2, true);
	      }
	    };
	    function Lo(t2, n2) {
	      const r2 = t2.data.ref;
	      if (!o(r2))
	        return;
	      const s2 = t2.context, c2 = t2.componentInstance || t2.elm, a2 = n2 ? null : c2, l2 = n2 ? void 0 : c2;
	      if (i(r2))
	        return void Pe(r2, s2, [a2], s2, "template ref function");
	      const u2 = t2.data.refInFor, f2 = "string" == typeof r2 || "number" == typeof r2, d2 = It(r2), p2 = s2.$refs;
	      if (f2 || d2) {
	        if (u2) {
	          const t3 = f2 ? p2[r2] : r2.value;
	          n2 ? e(t3) && _(t3, c2) : e(t3) ? t3.includes(c2) || t3.push(c2) : f2 ? (p2[r2] = [c2], Fo(s2, r2, p2[r2])) : r2.value = [c2];
	        } else if (f2) {
	          if (n2 && p2[r2] !== c2)
	            return;
	          p2[r2] = l2, Fo(s2, r2, a2);
	        } else if (d2) {
	          if (n2 && r2.value !== c2)
	            return;
	          r2.value = a2;
	        }
	      }
	    }
	    function Fo({
	      _setupState: t2
	    }, e2, n2) {
	      t2 && y(t2, e2) && (It(t2[e2]) ? t2[e2].value = n2 : t2[e2] = n2);
	    }
	    const Uo = new it("", {}, []), Bo = ["create", "activate", "update", "remove", "destroy"];
	    function Vo(t2, e2) {
	      return t2.key === e2.key && t2.asyncFactory === e2.asyncFactory && (t2.tag === e2.tag && t2.isComment === e2.isComment && o(t2.data) === o(e2.data) && function(t3, e3) {
	        if ("input" !== t3.tag)
	          return true;
	        let n2;
	        const r2 = o(n2 = t3.data) && o(n2 = n2.attrs) && n2.type, s2 = o(n2 = e3.data) && o(n2 = n2.attrs) && n2.type;
	        return r2 === s2 || No(r2) && No(s2);
	      }(t2, e2) || r(t2.isAsyncPlaceholder) && n(e2.asyncFactory.error));
	    }
	    function zo(t2, e2, n2) {
	      let r2, s2;
	      const i2 = {};
	      for (r2 = e2; r2 <= n2; ++r2)
	        s2 = t2[r2].key, o(s2) && (i2[s2] = r2);
	      return i2;
	    }
	    var Ho = {
	      create: Wo,
	      update: Wo,
	      destroy: function(t2) {
	        Wo(t2, Uo);
	      }
	    };
	    function Wo(t2, e2) {
	      (t2.data.directives || e2.data.directives) && function(t3, e3) {
	        const n2 = t3 === Uo, o2 = e3 === Uo, r2 = qo(t3.data.directives, t3.context), s2 = qo(e3.data.directives, e3.context), i2 = [], c2 = [];
	        let a2, l2, u2;
	        for (a2 in s2)
	          l2 = r2[a2], u2 = s2[a2], l2 ? (u2.oldValue = l2.value, u2.oldArg = l2.arg, Zo(u2, "update", e3, t3), u2.def && u2.def.componentUpdated && c2.push(u2)) : (Zo(u2, "bind", e3, t3), u2.def && u2.def.inserted && i2.push(u2));
	        if (i2.length) {
	          const o3 = () => {
	            for (let n3 = 0; n3 < i2.length; n3++)
	              Zo(i2[n3], "inserted", e3, t3);
	          };
	          n2 ? Zt(e3, "insert", o3) : o3();
	        }
	        c2.length && Zt(e3, "postpatch", () => {
	          for (let n3 = 0; n3 < c2.length; n3++)
	            Zo(c2[n3], "componentUpdated", e3, t3);
	        });
	        if (!n2)
	          for (a2 in r2)
	            s2[a2] || Zo(r2[a2], "unbind", t3, t3, o2);
	      }(t2, e2);
	    }
	    const Ko = /* @__PURE__ */ Object.create(null);
	    function qo(t2, e2) {
	      const n2 = /* @__PURE__ */ Object.create(null);
	      if (!t2)
	        return n2;
	      let o2, r2;
	      for (o2 = 0; o2 < t2.length; o2++)
	        r2 = t2[o2], r2.modifiers || (r2.modifiers = Ko), n2[Go(r2)] = r2, e2._setupState && e2._setupState.__sfc && (r2.def = r2.def || Kn(e2, "_setupState", "v-" + r2.name)), r2.def = r2.def || Kn(e2.$options, "directives", r2.name);
	      return n2;
	    }
	    function Go(t2) {
	      return t2.rawName || `${t2.name}.${Object.keys(t2.modifiers || {}).join(".")}`;
	    }
	    function Zo(t2, e2, n2, o2, r2) {
	      const s2 = t2.def && t2.def[e2];
	      if (s2)
	        try {
	          s2(n2.elm, t2, n2, o2, r2);
	        } catch (o3) {
	          Ee(o3, n2.context, `directive ${t2.name} ${e2} hook`);
	        }
	    }
	    var Jo = [Ro, Ho];
	    function Xo(t2, e2) {
	      const s2 = e2.componentOptions;
	      if (o(s2) && false === s2.Ctor.options.inheritAttrs)
	        return;
	      if (n(t2.data.attrs) && n(e2.data.attrs))
	        return;
	      let i2, c2, a2;
	      const l2 = e2.elm, u2 = t2.data.attrs || {};
	      let f2 = e2.data.attrs || {};
	      for (i2 in (o(f2.__ob__) || r(f2._v_attr_proxy)) && (f2 = e2.data.attrs = S({}, f2)), f2)
	        c2 = f2[i2], a2 = u2[i2], a2 !== c2 && Qo(l2, i2, c2, e2.data.pre);
	      for (i2 in u2)
	        n(f2[i2]) && (Co(i2) ? l2.removeAttributeNS(wo, xo(i2)) : go(i2) || l2.removeAttribute(i2));
	    }
	    function Qo(t2, e2, n2, o2) {
	      o2 || t2.tagName.indexOf("-") > -1 ? Yo(t2, e2, n2) : $o(e2) ? ko(n2) ? t2.removeAttribute(e2) : (n2 = "allowfullscreen" === e2 && "EMBED" === t2.tagName ? "true" : e2, t2.setAttribute(e2, n2)) : go(e2) ? t2.setAttribute(e2, ((t3, e3) => ko(e3) || "false" === e3 ? "false" : "contenteditable" === t3 && bo(e3) ? e3 : "true")(e2, n2)) : Co(e2) ? ko(n2) ? t2.removeAttributeNS(wo, xo(e2)) : t2.setAttributeNS(wo, e2, n2) : Yo(t2, e2, n2);
	    }
	    function Yo(t2, e2, n2) {
	      if (ko(n2))
	        t2.removeAttribute(e2);
	      else {
	        t2.setAttribute(e2, n2);
	      }
	    }
	    var tr = {
	      create: Xo,
	      update: Xo
	    };
	    function er(t2, e2) {
	      const r2 = e2.elm, s2 = e2.data, i2 = t2.data;
	      if (n(s2.staticClass) && n(s2.class) && (n(i2) || n(i2.staticClass) && n(i2.class)))
	        return;
	      let c2 = Oo(e2);
	      const a2 = r2._transitionClasses;
	      o(a2) && (c2 = Ao(c2, To(a2))), c2 !== r2._prevClass && (r2.setAttribute("class", c2), r2._prevClass = c2);
	    }
	    var nr = {
	      create: er,
	      update: er
	    };
	    let or;
	    function rr(t2, e2, n2) {
	      const o2 = or;
	      return function r2() {
	        const s2 = e2.apply(null, arguments);
	        null !== s2 && cr(t2, r2, n2, o2);
	      };
	    }
	    const sr = Ne && !(Z );
	    function ir(t2, e2, n2, o2) {
	      if (sr) {
	        const t3 = xn, n3 = e2;
	        e2 = n3._wrapper = function(e3) {
	          if (e3.target === e3.currentTarget || e3.timeStamp >= t3 || e3.timeStamp <= 0 || e3.target.ownerDocument !== document)
	            return n3.apply(this, arguments);
	        };
	      }
	      or.addEventListener(t2, e2, n2);
	    }
	    function cr(t2, e2, n2, o2) {
	      (o2 || or).removeEventListener(t2, e2._wrapper || e2, n2);
	    }
	    function ar(t2, e2) {
	      if (n(t2.data.on) && n(e2.data.on))
	        return;
	      const r2 = e2.data.on || {}, s2 = t2.data.on || {};
	      or = e2.elm || t2.elm, function(t3) {
	        if (o(t3.__r)) {
	          const e3 = "input";
	          t3[e3] = [].concat(t3.__r, t3[e3] || []), delete t3.__r;
	        }
	        o(t3.__c) && (t3.change = [].concat(t3.__c, t3.change || []), delete t3.__c);
	      }(r2), Gt(r2, s2, ir, cr, rr, e2.context), or = void 0;
	    }
	    var lr = {
	      create: ar,
	      update: ar,
	      destroy: (t2) => ar(t2, Uo)
	    };
	    let ur;
	    function fr(t2, e2) {
	      if (n(t2.data.domProps) && n(e2.data.domProps))
	        return;
	      let s2, i2;
	      const c2 = e2.elm, a2 = t2.data.domProps || {};
	      let l2 = e2.data.domProps || {};
	      for (s2 in (o(l2.__ob__) || r(l2._v_attr_proxy)) && (l2 = e2.data.domProps = S({}, l2)), a2)
	        s2 in l2 || (c2[s2] = "");
	      for (s2 in l2) {
	        if (i2 = l2[s2], "textContent" === s2 || "innerHTML" === s2) {
	          if (e2.children && (e2.children.length = 0), i2 === a2[s2])
	            continue;
	          1 === c2.childNodes.length && c2.removeChild(c2.childNodes[0]);
	        }
	        if ("value" === s2 && "PROGRESS" !== c2.tagName) {
	          c2._value = i2;
	          const t3 = n(i2) ? "" : String(i2);
	          dr(c2, t3) && (c2.value = t3);
	        } else if ("innerHTML" === s2 && Po(c2.tagName) && n(c2.innerHTML)) {
	          ur = ur || document.createElement("div"), ur.innerHTML = `<svg>${i2}</svg>`;
	          const t3 = ur.firstChild;
	          for (; c2.firstChild; )
	            c2.removeChild(c2.firstChild);
	          for (; t3.firstChild; )
	            c2.appendChild(t3.firstChild);
	        } else if (i2 !== a2[s2])
	          try {
	            c2[s2] = i2;
	          } catch (t3) {
	          }
	      }
	    }
	    function dr(t2, e2) {
	      return !t2.composing && ("OPTION" === t2.tagName || function(t3, e3) {
	        let n2 = true;
	        try {
	          n2 = document.activeElement !== t3;
	        } catch (t4) {
	        }
	        return n2 && t3.value !== e3;
	      }(t2, e2) || function(t3, e3) {
	        const n2 = t3.value, r2 = t3._vModifiers;
	        if (o(r2)) {
	          if (r2.number)
	            return p(n2) !== p(e3);
	          if (r2.trim)
	            return n2.trim() !== e3.trim();
	        }
	        return n2 !== e3;
	      }(t2, e2));
	    }
	    var pr = {
	      create: fr,
	      update: fr
	    };
	    const hr = g(function(t2) {
	      const e2 = {}, n2 = /:(.+)/;
	      return t2.split(/;(?![^(]*\))/g).forEach(function(t3) {
	        if (t3) {
	          const o2 = t3.split(n2);
	          o2.length > 1 && (e2[o2[0].trim()] = o2[1].trim());
	        }
	      }), e2;
	    });
	    function mr(t2) {
	      const e2 = _r(t2.style);
	      return t2.staticStyle ? S(t2.staticStyle, e2) : e2;
	    }
	    function _r(t2) {
	      return Array.isArray(t2) ? A(t2) : "string" == typeof t2 ? hr(t2) : t2;
	    }
	    const vr = /^--/, yr = /\s*!important$/, gr = (t2, e2, n2) => {
	      if (vr.test(e2))
	        t2.style.setProperty(e2, n2);
	      else if (yr.test(n2))
	        t2.style.setProperty(x(e2), n2.replace(yr, ""), "important");
	      else {
	        const o2 = wr(e2);
	        if (Array.isArray(n2))
	          for (let e3 = 0, r2 = n2.length; e3 < r2; e3++)
	            t2.style[o2] = n2[e3];
	        else
	          t2.style[o2] = n2;
	      }
	    }, br = ["Webkit", "Moz", "ms"];
	    let $r;
	    const wr = g(function(t2) {
	      if ($r = $r || document.createElement("div").style, "filter" !== (t2 = $(t2)) && t2 in $r)
	        return t2;
	      const e2 = t2.charAt(0).toUpperCase() + t2.slice(1);
	      for (let t3 = 0; t3 < br.length; t3++) {
	        const n2 = br[t3] + e2;
	        if (n2 in $r)
	          return n2;
	      }
	    });
	    function Cr(t2, e2) {
	      const r2 = e2.data, s2 = t2.data;
	      if (n(r2.staticStyle) && n(r2.style) && n(s2.staticStyle) && n(s2.style))
	        return;
	      let i2, c2;
	      const a2 = e2.elm, l2 = s2.staticStyle, u2 = s2.normalizedStyle || s2.style || {}, f2 = l2 || u2, d2 = _r(e2.data.style) || {};
	      e2.data.normalizedStyle = o(d2.__ob__) ? S({}, d2) : d2;
	      const p2 = function(t3, e3) {
	        const n2 = {};
	        let o2;
	        if (e3) {
	          let e4 = t3;
	          for (; e4.componentInstance; )
	            e4 = e4.componentInstance._vnode, e4 && e4.data && (o2 = mr(e4.data)) && S(n2, o2);
	        }
	        (o2 = mr(t3.data)) && S(n2, o2);
	        let r3 = t3;
	        for (; r3 = r3.parent; )
	          r3.data && (o2 = mr(r3.data)) && S(n2, o2);
	        return n2;
	      }(e2, true);
	      for (c2 in f2)
	        n(p2[c2]) && gr(a2, c2, "");
	      for (c2 in p2)
	        i2 = p2[c2], i2 !== f2[c2] && gr(a2, c2, null == i2 ? "" : i2);
	    }
	    var xr = {
	      create: Cr,
	      update: Cr
	    };
	    const kr = /\s+/;
	    function Or(t2, e2) {
	      if (e2 && (e2 = e2.trim()))
	        if (t2.classList)
	          e2.indexOf(" ") > -1 ? e2.split(kr).forEach((e3) => t2.classList.add(e3)) : t2.classList.add(e2);
	        else {
	          const n2 = ` ${t2.getAttribute("class") || ""} `;
	          n2.indexOf(" " + e2 + " ") < 0 && t2.setAttribute("class", (n2 + e2).trim());
	        }
	    }
	    function Sr(t2, e2) {
	      if (e2 && (e2 = e2.trim()))
	        if (t2.classList)
	          e2.indexOf(" ") > -1 ? e2.split(kr).forEach((e3) => t2.classList.remove(e3)) : t2.classList.remove(e2), t2.classList.length || t2.removeAttribute("class");
	        else {
	          let n2 = ` ${t2.getAttribute("class") || ""} `;
	          const o2 = " " + e2 + " ";
	          for (; n2.indexOf(o2) >= 0; )
	            n2 = n2.replace(o2, " ");
	          n2 = n2.trim(), n2 ? t2.setAttribute("class", n2) : t2.removeAttribute("class");
	        }
	    }
	    function Ar(t2) {
	      if (t2) {
	        if ("object" == typeof t2) {
	          const e2 = {};
	          return false !== t2.css && S(e2, Tr(t2.name || "v")), S(e2, t2), e2;
	        }
	        return "string" == typeof t2 ? Tr(t2) : void 0;
	      }
	    }
	    const Tr = g((t2) => ({
	      enterClass: `${t2}-enter`,
	      enterToClass: `${t2}-enter-to`,
	      enterActiveClass: `${t2}-enter-active`,
	      leaveClass: `${t2}-leave`,
	      leaveToClass: `${t2}-leave-to`,
	      leaveActiveClass: `${t2}-leave-active`
	    }));
	    let Er = "transition", Pr = "transitionend", Ir = "animation", Dr = "animationend";
	    const Nr = (t2) => t2();
	    function Mr(t2) {
	      Nr(() => {
	        Nr(t2);
	      });
	    }
	    function Rr(t2, e2) {
	      const n2 = t2._transitionClasses || (t2._transitionClasses = []);
	      n2.indexOf(e2) < 0 && (n2.push(e2), Or(t2, e2));
	    }
	    function Lr(t2, e2) {
	      t2._transitionClasses && _(t2._transitionClasses, e2), Sr(t2, e2);
	    }
	    function Fr(t2, e2, n2) {
	      const {
	        type: o2,
	        timeout: r2,
	        propCount: s2
	      } = Br(t2, e2);
	      if (!o2)
	        return n2();
	      const i2 = "transition" === o2 ? Pr : Dr;
	      let c2 = 0;
	      const a2 = () => {
	        t2.removeEventListener(i2, l2), n2();
	      }, l2 = (e3) => {
	        e3.target === t2 && ++c2 >= s2 && a2();
	      };
	      setTimeout(() => {
	        c2 < s2 && a2();
	      }, r2 + 1), t2.addEventListener(i2, l2);
	    }
	    const Ur = /\b(transform|all)(,|$)/;
	    function Br(t2, e2) {
	      const n2 = window.getComputedStyle(t2), o2 = (n2[Er + "Delay"] || "").split(", "), r2 = (n2[Er + "Duration"] || "").split(", "), s2 = Vr(o2, r2), i2 = (n2[Ir + "Delay"] || "").split(", "), c2 = (n2[Ir + "Duration"] || "").split(", "), a2 = Vr(i2, c2);
	      let l2, u2 = 0, f2 = 0;
	      "transition" === e2 ? s2 > 0 && (l2 = "transition", u2 = s2, f2 = r2.length) : "animation" === e2 ? a2 > 0 && (l2 = "animation", u2 = a2, f2 = c2.length) : (u2 = Math.max(s2, a2), l2 = u2 > 0 ? s2 > a2 ? "transition" : "animation" : null, f2 = l2 ? "transition" === l2 ? r2.length : c2.length : 0);
	      return {
	        type: l2,
	        timeout: u2,
	        propCount: f2,
	        hasTransform: "transition" === l2 && Ur.test(n2[Er + "Property"])
	      };
	    }
	    function Vr(t2, e2) {
	      for (; t2.length < e2.length; )
	        t2 = t2.concat(t2);
	      return Math.max.apply(null, e2.map((e3, n2) => zr(e3) + zr(t2[n2])));
	    }
	    function zr(t2) {
	      return 1e3 * Number(t2.slice(0, -1).replace(",", "."));
	    }
	    function Hr(t2, e2) {
	      const r2 = t2.elm;
	      o(r2._leaveCb) && (r2._leaveCb.cancelled = true, r2._leaveCb());
	      const s2 = Ar(t2.data.transition);
	      if (n(s2))
	        return;
	      if (o(r2._enterCb) || 1 !== r2.nodeType)
	        return;
	      const {
	        css: a2,
	        type: l2,
	        enterClass: u2,
	        enterToClass: f2,
	        enterActiveClass: d2,
	        appearClass: h2,
	        appearToClass: m2,
	        appearActiveClass: _2,
	        beforeEnter: v2,
	        enter: y2,
	        afterEnter: g2,
	        enterCancelled: b2,
	        beforeAppear: $2,
	        appear: w2,
	        afterAppear: C2,
	        appearCancelled: x2,
	        duration: k2
	      } = s2;
	      let O2 = dn, S2 = dn.$vnode;
	      for (; S2 && S2.parent; )
	        O2 = S2.context, S2 = S2.parent;
	      const A2 = !O2._isMounted || !t2.isRootInsert;
	      if (A2 && !w2 && "" !== w2)
	        return;
	      const T2 = A2 && h2 ? h2 : u2, j2 = A2 && _2 ? _2 : d2, E2 = A2 && m2 ? m2 : f2, P2 = A2 && $2 || v2, I2 = A2 && i(w2) ? w2 : y2, N2 = A2 && C2 || g2, M2 = A2 && x2 || b2, R2 = p(c(k2) ? k2.enter : k2), L2 = false !== a2 && !K, F2 = qr(I2), U2 = r2._enterCb = D(() => {
	        L2 && (Lr(r2, E2), Lr(r2, j2)), U2.cancelled ? (L2 && Lr(r2, T2), M2 && M2(r2)) : N2 && N2(r2), r2._enterCb = null;
	      });
	      t2.data.show || Zt(t2, "insert", () => {
	        const e3 = r2.parentNode, n2 = e3 && e3._pending && e3._pending[t2.key];
	        n2 && n2.tag === t2.tag && n2.elm._leaveCb && n2.elm._leaveCb(), I2 && I2(r2, U2);
	      }), P2 && P2(r2), L2 && (Rr(r2, T2), Rr(r2, j2), Mr(() => {
	        Lr(r2, T2), U2.cancelled || (Rr(r2, E2), F2 || (Kr(R2) ? setTimeout(U2, R2) : Fr(r2, l2, U2)));
	      })), t2.data.show && (e2 && e2(), I2 && I2(r2, U2)), L2 || F2 || U2();
	    }
	    function Wr(t2, e2) {
	      const r2 = t2.elm;
	      o(r2._enterCb) && (r2._enterCb.cancelled = true, r2._enterCb());
	      const s2 = Ar(t2.data.transition);
	      if (n(s2) || 1 !== r2.nodeType)
	        return e2();
	      if (o(r2._leaveCb))
	        return;
	      const {
	        css: i2,
	        type: a2,
	        leaveClass: l2,
	        leaveToClass: u2,
	        leaveActiveClass: f2,
	        beforeLeave: d2,
	        leave: h2,
	        afterLeave: m2,
	        leaveCancelled: _2,
	        delayLeave: v2,
	        duration: y2
	      } = s2, g2 = false !== i2 && !K, b2 = qr(h2), $2 = p(c(y2) ? y2.leave : y2), w2 = r2._leaveCb = D(() => {
	        r2.parentNode && r2.parentNode._pending && (r2.parentNode._pending[t2.key] = null), g2 && (Lr(r2, u2), Lr(r2, f2)), w2.cancelled ? (g2 && Lr(r2, l2), _2 && _2(r2)) : (e2(), m2 && m2(r2)), r2._leaveCb = null;
	      });
	      function C2() {
	        w2.cancelled || (!t2.data.show && r2.parentNode && ((r2.parentNode._pending || (r2.parentNode._pending = {}))[t2.key] = t2), d2 && d2(r2), g2 && (Rr(r2, l2), Rr(r2, f2), Mr(() => {
	          Lr(r2, l2), w2.cancelled || (Rr(r2, u2), b2 || (Kr($2) ? setTimeout(w2, $2) : Fr(r2, a2, w2)));
	        })), h2 && h2(r2, w2), g2 || b2 || w2());
	      }
	      v2 ? v2(C2) : C2();
	    }
	    function Kr(t2) {
	      return "number" == typeof t2 && !isNaN(t2);
	    }
	    function qr(t2) {
	      if (n(t2))
	        return false;
	      const e2 = t2.fns;
	      return o(e2) ? qr(Array.isArray(e2) ? e2[0] : e2) : (t2._length || t2.length) > 1;
	    }
	    (function(t2) {
	      let i2, c2;
	      const a2 = {}, {
	        modules: l2,
	        nodeOps: u2
	      } = t2;
	      for (i2 = 0; i2 < Bo.length; ++i2)
	        for (a2[Bo[i2]] = [], c2 = 0; c2 < l2.length; ++c2)
	          o(l2[c2][Bo[i2]]) && a2[Bo[i2]].push(l2[c2][Bo[i2]]);
	      function f2(t3) {
	        const e2 = u2.parentNode(t3);
	        o(e2) && u2.removeChild(e2, t3);
	      }
	      function d2(t3, e2, n2, s2, i3, c3, l3) {
	        if (o(t3.elm) && o(c3) && (t3 = c3[l3] = lt(t3)), t3.isRootInsert = !i3, function(t4, e3, n3, s3) {
	          let i4 = t4.data;
	          if (o(i4)) {
	            const c4 = o(t4.componentInstance) && i4.keepAlive;
	            if (o(i4 = i4.hook) && o(i4 = i4.init) && i4(t4, false), o(t4.componentInstance))
	              return p2(t4, e3), m2(n3, t4.elm, s3), r(c4) && function(t5, e4, n4, r2) {
	                let s4, i5 = t5;
	                for (; i5.componentInstance; )
	                  if (i5 = i5.componentInstance._vnode, o(s4 = i5.data) && o(s4 = s4.transition)) {
	                    for (s4 = 0; s4 < a2.activate.length; ++s4)
	                      a2.activate[s4](Uo, i5);
	                    e4.push(i5);
	                    break;
	                  }
	                m2(n4, t5.elm, r2);
	              }(t4, e3, n3, s3), true;
	          }
	        }(t3, e2, n2, s2))
	          return;
	        const f3 = t3.data, d3 = t3.children, h2 = t3.tag;
	        o(h2) ? (t3.elm = t3.ns ? u2.createElementNS(t3.ns, h2) : u2.createElement(h2, t3), g2(t3), _2(t3, d3, e2), o(f3) && y2(t3, e2), m2(n2, t3.elm, s2)) : r(t3.isComment) ? (t3.elm = u2.createComment(t3.text), m2(n2, t3.elm, s2)) : (t3.elm = u2.createTextNode(t3.text), m2(n2, t3.elm, s2));
	      }
	      function p2(t3, e2) {
	        o(t3.data.pendingInsert) && (e2.push.apply(e2, t3.data.pendingInsert), t3.data.pendingInsert = null), t3.elm = t3.componentInstance.$el, v2(t3) ? (y2(t3, e2), g2(t3)) : (Lo(t3), e2.push(t3));
	      }
	      function m2(t3, e2, n2) {
	        o(t3) && (o(n2) ? u2.parentNode(n2) === t3 && u2.insertBefore(t3, e2, n2) : u2.appendChild(t3, e2));
	      }
	      function _2(t3, n2, o2) {
	        if (e(n2))
	          for (let e2 = 0; e2 < n2.length; ++e2)
	            d2(n2[e2], o2, t3.elm, null, true, n2, e2);
	        else
	          s(t3.text) && u2.appendChild(t3.elm, u2.createTextNode(String(t3.text)));
	      }
	      function v2(t3) {
	        for (; t3.componentInstance; )
	          t3 = t3.componentInstance._vnode;
	        return o(t3.tag);
	      }
	      function y2(t3, e2) {
	        for (let e3 = 0; e3 < a2.create.length; ++e3)
	          a2.create[e3](Uo, t3);
	        i2 = t3.data.hook, o(i2) && (o(i2.create) && i2.create(Uo, t3), o(i2.insert) && e2.push(t3));
	      }
	      function g2(t3) {
	        let e2;
	        if (o(e2 = t3.fnScopeId))
	          u2.setStyleScope(t3.elm, e2);
	        else {
	          let n2 = t3;
	          for (; n2; )
	            o(e2 = n2.context) && o(e2 = e2.$options._scopeId) && u2.setStyleScope(t3.elm, e2), n2 = n2.parent;
	        }
	        o(e2 = dn) && e2 !== t3.context && e2 !== t3.fnContext && o(e2 = e2.$options._scopeId) && u2.setStyleScope(t3.elm, e2);
	      }
	      function b2(t3, e2, n2, o2, r2, s2) {
	        for (; o2 <= r2; ++o2)
	          d2(n2[o2], s2, t3, e2, false, n2, o2);
	      }
	      function $2(t3) {
	        let e2, n2;
	        const r2 = t3.data;
	        if (o(r2))
	          for (o(e2 = r2.hook) && o(e2 = e2.destroy) && e2(t3), e2 = 0; e2 < a2.destroy.length; ++e2)
	            a2.destroy[e2](t3);
	        if (o(e2 = t3.children))
	          for (n2 = 0; n2 < t3.children.length; ++n2)
	            $2(t3.children[n2]);
	      }
	      function w2(t3, e2, n2) {
	        for (; e2 <= n2; ++e2) {
	          const n3 = t3[e2];
	          o(n3) && (o(n3.tag) ? (C2(n3), $2(n3)) : f2(n3.elm));
	        }
	      }
	      function C2(t3, e2) {
	        if (o(e2) || o(t3.data)) {
	          let n2;
	          const r2 = a2.remove.length + 1;
	          for (o(e2) ? e2.listeners += r2 : e2 = function(t4, e3) {
	            function n3() {
	              0 == --n3.listeners && f2(t4);
	            }
	            return n3.listeners = e3, n3;
	          }(t3.elm, r2), o(n2 = t3.componentInstance) && o(n2 = n2._vnode) && o(n2.data) && C2(n2, e2), n2 = 0; n2 < a2.remove.length; ++n2)
	            a2.remove[n2](t3, e2);
	          o(n2 = t3.data.hook) && o(n2 = n2.remove) ? n2(t3, e2) : e2();
	        } else
	          f2(t3.elm);
	      }
	      function x2(t3, e2, n2, r2) {
	        for (let s2 = n2; s2 < r2; s2++) {
	          const n3 = e2[s2];
	          if (o(n3) && Vo(t3, n3))
	            return s2;
	        }
	      }
	      function k2(t3, e2, s2, i3, c3, l3) {
	        if (t3 === e2)
	          return;
	        o(e2.elm) && o(i3) && (e2 = i3[c3] = lt(e2));
	        const f3 = e2.elm = t3.elm;
	        if (r(t3.isAsyncPlaceholder))
	          return void (o(e2.asyncFactory.resolved) ? A2(t3.elm, e2, s2) : e2.isAsyncPlaceholder = true);
	        if (r(e2.isStatic) && r(t3.isStatic) && e2.key === t3.key && (r(e2.isCloned) || r(e2.isOnce)))
	          return void (e2.componentInstance = t3.componentInstance);
	        let p3;
	        const h2 = e2.data;
	        o(h2) && o(p3 = h2.hook) && o(p3 = p3.prepatch) && p3(t3, e2);
	        const m3 = t3.children, _3 = e2.children;
	        if (o(h2) && v2(e2)) {
	          for (p3 = 0; p3 < a2.update.length; ++p3)
	            a2.update[p3](t3, e2);
	          o(p3 = h2.hook) && o(p3 = p3.update) && p3(t3, e2);
	        }
	        n(e2.text) ? o(m3) && o(_3) ? m3 !== _3 && function(t4, e3, r2, s3, i4) {
	          let c4, a3, l4, f4, p4 = 0, h3 = 0, m4 = e3.length - 1, _4 = e3[0], v3 = e3[m4], y3 = r2.length - 1, g3 = r2[0], $3 = r2[y3];
	          const C3 = !i4;
	          for (; p4 <= m4 && h3 <= y3; )
	            n(_4) ? _4 = e3[++p4] : n(v3) ? v3 = e3[--m4] : Vo(_4, g3) ? (k2(_4, g3, s3, r2, h3), _4 = e3[++p4], g3 = r2[++h3]) : Vo(v3, $3) ? (k2(v3, $3, s3, r2, y3), v3 = e3[--m4], $3 = r2[--y3]) : Vo(_4, $3) ? (k2(_4, $3, s3, r2, y3), C3 && u2.insertBefore(t4, _4.elm, u2.nextSibling(v3.elm)), _4 = e3[++p4], $3 = r2[--y3]) : Vo(v3, g3) ? (k2(v3, g3, s3, r2, h3), C3 && u2.insertBefore(t4, v3.elm, _4.elm), v3 = e3[--m4], g3 = r2[++h3]) : (n(c4) && (c4 = zo(e3, p4, m4)), a3 = o(g3.key) ? c4[g3.key] : x2(g3, e3, p4, m4), n(a3) ? d2(g3, s3, t4, _4.elm, false, r2, h3) : (l4 = e3[a3], Vo(l4, g3) ? (k2(l4, g3, s3, r2, h3), e3[a3] = void 0, C3 && u2.insertBefore(t4, l4.elm, _4.elm)) : d2(g3, s3, t4, _4.elm, false, r2, h3)), g3 = r2[++h3]);
	          p4 > m4 ? (f4 = n(r2[y3 + 1]) ? null : r2[y3 + 1].elm, b2(t4, f4, r2, h3, y3, s3)) : h3 > y3 && w2(e3, p4, m4);
	        }(f3, m3, _3, s2, l3) : o(_3) ? (o(t3.text) && u2.setTextContent(f3, ""), b2(f3, null, _3, 0, _3.length - 1, s2)) : o(m3) ? w2(m3, 0, m3.length - 1) : o(t3.text) && u2.setTextContent(f3, "") : t3.text !== e2.text && u2.setTextContent(f3, e2.text), o(h2) && o(p3 = h2.hook) && o(p3 = p3.postpatch) && p3(t3, e2);
	      }
	      function O2(t3, e2, n2) {
	        if (r(n2) && o(t3.parent))
	          t3.parent.data.pendingInsert = e2;
	        else
	          for (let t4 = 0; t4 < e2.length; ++t4)
	            e2[t4].data.hook.insert(e2[t4]);
	      }
	      const S2 = h("attrs,class,staticClass,staticStyle,key");
	      function A2(t3, e2, n2, s2) {
	        let i3;
	        const {
	          tag: c3,
	          data: a3,
	          children: l3
	        } = e2;
	        if (s2 = s2 || a3 && a3.pre, e2.elm = t3, r(e2.isComment) && o(e2.asyncFactory))
	          return e2.isAsyncPlaceholder = true, true;
	        if (o(a3) && (o(i3 = a3.hook) && o(i3 = i3.init) && i3(e2, true), o(i3 = e2.componentInstance)))
	          return p2(e2, n2), true;
	        if (o(c3)) {
	          if (o(l3))
	            if (t3.hasChildNodes()) {
	              if (o(i3 = a3) && o(i3 = i3.domProps) && o(i3 = i3.innerHTML)) {
	                if (i3 !== t3.innerHTML)
	                  return false;
	              } else {
	                let e3 = true, o2 = t3.firstChild;
	                for (let t4 = 0; t4 < l3.length; t4++) {
	                  if (!o2 || !A2(o2, l3[t4], n2, s2)) {
	                    e3 = false;
	                    break;
	                  }
	                  o2 = o2.nextSibling;
	                }
	                if (!e3 || o2)
	                  return false;
	              }
	            } else
	              _2(e2, l3, n2);
	          if (o(a3)) {
	            let t4 = false;
	            for (const o2 in a3)
	              if (!S2(o2)) {
	                t4 = true, y2(e2, n2);
	                break;
	              }
	            !t4 && a3.class && nn(a3.class);
	          }
	        } else
	          t3.data !== e2.text && (t3.data = e2.text);
	        return true;
	      }
	      return function(t3, e2, s2, i3) {
	        if (n(e2))
	          return void (o(t3) && $2(t3));
	        let c3 = false;
	        const l3 = [];
	        if (n(t3))
	          c3 = true, d2(e2, l3);
	        else {
	          const n2 = o(t3.nodeType);
	          if (!n2 && Vo(t3, e2))
	            k2(t3, e2, l3, null, null, i3);
	          else {
	            if (n2) {
	              if (1 === t3.nodeType && t3.hasAttribute("data-server-rendered") && (t3.removeAttribute("data-server-rendered"), s2 = true), r(s2) && A2(t3, e2, l3))
	                return O2(e2, l3, true), t3;
	              f3 = t3, t3 = new it(u2.tagName(f3).toLowerCase(), {}, [], void 0, f3);
	            }
	            const i4 = t3.elm, c4 = u2.parentNode(i4);
	            if (d2(e2, l3, i4._leaveCb ? null : c4, u2.nextSibling(i4)), o(e2.parent)) {
	              let t4 = e2.parent;
	              const n3 = v2(e2);
	              for (; t4; ) {
	                for (let e3 = 0; e3 < a2.destroy.length; ++e3)
	                  a2.destroy[e3](t4);
	                if (t4.elm = e2.elm, n3) {
	                  for (let e4 = 0; e4 < a2.create.length; ++e4)
	                    a2.create[e4](Uo, t4);
	                  const e3 = t4.data.hook.insert;
	                  if (e3.merged)
	                    for (let t5 = 1; t5 < e3.fns.length; t5++)
	                      e3.fns[t5]();
	                } else
	                  Lo(t4);
	                t4 = t4.parent;
	              }
	            }
	            o(c4) ? w2([t3], 0, 0) : o(t3.tag) && $2(t3);
	          }
	        }
	        var f3;
	        return O2(e2, l3, c3), e2.elm;
	      };
	    })({
	      nodeOps: Mo,
	      modules: [tr, nr, lr, pr, xr, {}].concat(Jo)
	    });
	    const Jr = {
	      inserted(t2, e2, n2, o2) {
	        "select" === n2.tag ? (o2.elm && !o2.elm._vOptions ? Zt(n2, "postpatch", () => {
	          Jr.componentUpdated(t2, e2, n2);
	        }) : Xr(t2, e2, n2.context), t2._vOptions = [].map.call(t2.options, ts)) : ("textarea" === n2.tag || No(t2.type)) && (t2._vModifiers = e2.modifiers, e2.modifiers.lazy || (t2.addEventListener("compositionstart", es), t2.addEventListener("compositionend", ns), t2.addEventListener("change", ns), K ));
	      },
	      componentUpdated(t2, e2, n2) {
	        if ("select" === n2.tag) {
	          Xr(t2, e2, n2.context);
	          const o2 = t2._vOptions, r2 = t2._vOptions = [].map.call(t2.options, ts);
	          if (r2.some((t3, e3) => !P(t3, o2[e3]))) {
	            (t2.multiple ? e2.value.some((t3) => Yr(t3, r2)) : e2.value !== e2.oldValue && Yr(e2.value, r2)) && os(t2, "change");
	          }
	        }
	      }
	    };
	    function Xr(t2, e2, n2) {
	      Qr(t2, e2);
	    }
	    function Qr(t2, e2, n2) {
	      const o2 = e2.value, r2 = t2.multiple;
	      if (r2 && !Array.isArray(o2))
	        return;
	      let s2, i2;
	      for (let e3 = 0, n3 = t2.options.length; e3 < n3; e3++)
	        if (i2 = t2.options[e3], r2)
	          s2 = I(o2, ts(i2)) > -1, i2.selected !== s2 && (i2.selected = s2);
	        else if (P(ts(i2), o2))
	          return void (t2.selectedIndex !== e3 && (t2.selectedIndex = e3));
	      r2 || (t2.selectedIndex = -1);
	    }
	    function Yr(t2, e2) {
	      return e2.every((e3) => !P(e3, t2));
	    }
	    function ts(t2) {
	      return "_value" in t2 ? t2._value : t2.value;
	    }
	    function es(t2) {
	      t2.target.composing = true;
	    }
	    function ns(t2) {
	      t2.target.composing && (t2.target.composing = false, os(t2.target, "input"));
	    }
	    function os(t2, e2) {
	      const n2 = document.createEvent("HTMLEvents");
	      n2.initEvent(e2, true, true), t2.dispatchEvent(n2);
	    }
	    function rs(t2) {
	      return !t2.componentInstance || t2.data && t2.data.transition ? t2 : rs(t2.componentInstance._vnode);
	    }
	    var ss = {
	      bind(t2, {
	        value: e2
	      }, n2) {
	        const o2 = (n2 = rs(n2)).data && n2.data.transition, r2 = t2.__vOriginalDisplay = "none" === t2.style.display ? "" : t2.style.display;
	        e2 && o2 ? (n2.data.show = true, Hr(n2, () => {
	          t2.style.display = r2;
	        })) : t2.style.display = e2 ? r2 : "none";
	      },
	      update(t2, {
	        value: e2,
	        oldValue: n2
	      }, o2) {
	        if (!e2 == !n2)
	          return;
	        (o2 = rs(o2)).data && o2.data.transition ? (o2.data.show = true, e2 ? Hr(o2, () => {
	          t2.style.display = t2.__vOriginalDisplay;
	        }) : Wr(o2, () => {
	          t2.style.display = "none";
	        })) : t2.style.display = e2 ? t2.__vOriginalDisplay : "none";
	      },
	      unbind(t2, e2, n2, o2, r2) {
	        r2 || (t2.style.display = t2.__vOriginalDisplay);
	      }
	    }, is = {
	      model: Jr,
	      show: ss
	    };
	    const cs = {
	      name: String,
	      appear: Boolean,
	      css: Boolean,
	      mode: String,
	      type: String,
	      enterClass: String,
	      leaveClass: String,
	      enterToClass: String,
	      leaveToClass: String,
	      enterActiveClass: String,
	      leaveActiveClass: String,
	      appearClass: String,
	      appearActiveClass: String,
	      appearToClass: String,
	      duration: [Number, String, Object]
	    };
	    function as(t2) {
	      const e2 = t2 && t2.componentOptions;
	      return e2 && e2.Ctor.options.abstract ? as(Ae(e2.children)) : t2;
	    }
	    function ls(t2) {
	      const e2 = {}, n2 = t2.$options;
	      for (const o3 in n2.propsData)
	        e2[o3] = t2[o3];
	      const o2 = n2._parentListeners;
	      for (const t3 in o2)
	        e2[$(t3)] = o2[t3];
	      return e2;
	    }
	    function us(t2, e2) {
	      if (/\d-keep-alive$/.test(e2.tag))
	        return t2("keep-alive", {
	          props: e2.componentOptions.propsData
	        });
	    }
	    const fs = (t2) => t2.tag || ve(t2), ds = (t2) => "show" === t2.name;
	    var ps = {
	      name: "transition",
	      props: cs,
	      abstract: true,
	      render(t2) {
	        let e2 = this.$slots.default;
	        if (!e2)
	          return;
	        if (e2 = e2.filter(fs), !e2.length)
	          return;
	        const n2 = this.mode, o2 = e2[0];
	        if (function(t3) {
	          for (; t3 = t3.parent; )
	            if (t3.data.transition)
	              return true;
	        }(this.$vnode))
	          return o2;
	        const r2 = as(o2);
	        if (!r2)
	          return o2;
	        if (this._leaving)
	          return us(t2, o2);
	        const i2 = `__transition-${this._uid}-`;
	        r2.key = null == r2.key ? r2.isComment ? i2 + "comment" : i2 + r2.tag : s(r2.key) ? 0 === String(r2.key).indexOf(i2) ? r2.key : i2 + r2.key : r2.key;
	        const c2 = (r2.data || (r2.data = {})).transition = ls(this), a2 = this._vnode, l2 = as(a2);
	        if (r2.data.directives && r2.data.directives.some(ds) && (r2.data.show = true), l2 && l2.data && !function(t3, e3) {
	          return e3.key === t3.key && e3.tag === t3.tag;
	        }(r2, l2) && !ve(l2) && (!l2.componentInstance || !l2.componentInstance._vnode.isComment)) {
	          const e3 = l2.data.transition = S({}, c2);
	          if ("out-in" === n2)
	            return this._leaving = true, Zt(e3, "afterLeave", () => {
	              this._leaving = false, this.$forceUpdate();
	            }), us(t2, o2);
	          if ("in-out" === n2) {
	            if (ve(r2))
	              return a2;
	            let t3;
	            const n3 = () => {
	              t3();
	            };
	            Zt(c2, "afterEnter", n3), Zt(c2, "enterCancelled", n3), Zt(e3, "delayLeave", (e4) => {
	              t3 = e4;
	            });
	          }
	        }
	        return o2;
	      }
	    };
	    const hs = S({
	      tag: String,
	      moveClass: String
	    }, cs);
	    delete hs.mode;
	    var ms = {
	      props: hs,
	      beforeMount() {
	        const t2 = this._update;
	        this._update = (e2, n2) => {
	          const o2 = pn(this);
	          this.__patch__(this._vnode, this.kept, false, true), this._vnode = this.kept, o2(), t2.call(this, e2, n2);
	        };
	      },
	      render(t2) {
	        const e2 = this.tag || this.$vnode.data.tag || "span", n2 = /* @__PURE__ */ Object.create(null), o2 = this.prevChildren = this.children, r2 = this.$slots.default || [], s2 = this.children = [], i2 = ls(this);
	        for (let t3 = 0; t3 < r2.length; t3++) {
	          const e3 = r2[t3];
	          e3.tag && null != e3.key && 0 !== String(e3.key).indexOf("__vlist") && (s2.push(e3), n2[e3.key] = e3, (e3.data || (e3.data = {})).transition = i2);
	        }
	        if (o2) {
	          const r3 = [], s3 = [];
	          for (let t3 = 0; t3 < o2.length; t3++) {
	            const e3 = o2[t3];
	            e3.data.transition = i2, e3.data.pos = e3.elm.getBoundingClientRect(), n2[e3.key] ? r3.push(e3) : s3.push(e3);
	          }
	          this.kept = t2(e2, null, r3), this.removed = s3;
	        }
	        return t2(e2, null, s2);
	      },
	      updated() {
	        const t2 = this.prevChildren, e2 = this.moveClass || (this.name || "v") + "-move";
	        t2.length && this.hasMove(t2[0].elm, e2) && (t2.forEach(_s), t2.forEach(vs), t2.forEach(ys), this._reflow = document.body.offsetHeight, t2.forEach((t3) => {
	          if (t3.data.moved) {
	            const n2 = t3.elm, o2 = n2.style;
	            Rr(n2, e2), o2.transform = o2.WebkitTransform = o2.transitionDuration = "", n2.addEventListener(Pr, n2._moveCb = function t4(o3) {
	              o3 && o3.target !== n2 || o3 && !/transform$/.test(o3.propertyName) || (n2.removeEventListener(Pr, t4), n2._moveCb = null, Lr(n2, e2));
	            });
	          }
	        }));
	      },
	      methods: {
	        hasMove(t2, e2) {
	          return false;
	        }
	      }
	    };
	    function _s(t2) {
	      t2.elm._moveCb && t2.elm._moveCb(), t2.elm._enterCb && t2.elm._enterCb();
	    }
	    function vs(t2) {
	      t2.data.newPos = t2.elm.getBoundingClientRect();
	    }
	    function ys(t2) {
	      const e2 = t2.data.pos, n2 = t2.data.newPos, o2 = e2.left - n2.left, r2 = e2.top - n2.top;
	      if (o2 || r2) {
	        t2.data.moved = true;
	        const e3 = t2.elm.style;
	        e3.transform = e3.WebkitTransform = `translate(${o2}px,${r2}px)`, e3.transitionDuration = "0s";
	      }
	    }
	    var gs = {
	      Transition: ps,
	      TransitionGroup: ms
	    };
	    ao.config.mustUseProp = (t2, e2, n2) => "value" === n2 && yo(t2) && "button" !== e2 || "selected" === n2 && "option" === t2 || "checked" === n2 && "input" === t2 || "muted" === n2 && "video" === t2, ao.config.isReservedTag = Io, ao.config.isReservedAttr = vo, ao.config.getTagNamespace = function(t2) {
	      return Po(t2) ? "svg" : "math" === t2 ? "math" : void 0;
	    }, ao.config.isUnknownElement = function(t2) {
	      return true;
	    }, S(ao.options.directives, is), S(ao.options.components, gs), ao.prototype.__patch__ = T, ao.prototype.$mount = function(t2, e2) {
	      return function(t3, e3, n2) {
	        let o2;
	        t3.$el = e3, t3.$options.render || (t3.$options.render = ct), vn(t3, "beforeMount"), o2 = () => {
	          t3._update(t3._render(), n2);
	        }, new cn(t3, o2, T, {
	          before() {
	            t3._isMounted && !t3._isDestroyed && vn(t3, "beforeUpdate");
	          }
	        }, true), n2 = false;
	        const r2 = t3._preWatchers;
	        if (r2)
	          for (let t4 = 0; t4 < r2.length; t4++)
	            r2[t4].run();
	        return null == t3.$vnode && (t3._isMounted = true, vn(t3, "mounted")), t3;
	      }(this, t2 = t2 && z ? function(t3) {
	        if ("string" == typeof t3) {
	          return document.querySelector(t3) || document.createElement("div");
	        }
	        return t3;
	      }(t2) : void 0, e2);
	    }, S(ao, tn), module2.exports = ao;
	  },
	  function(module2, exports) {
	    module2.exports = require$$8;
	  },
	  function(module2, exports) {
	    module2.exports = require$$9;
	  },
	  function(module2, exports) {
	    module2.exports = require$$10;
	  },
	  function(module2, exports) {
	    module2.exports = require$$11;
	  },
	  function(module2, exports) {
	    module2.exports = require$$12;
	  },
	  function(module2, exports) {
	    module2.exports = require$$13;
	  },
	  function(module2, exports) {
	    module2.exports = require$$14;
	  },
	  function(module2, exports) {
	    module2.exports = require$$15;
	  },
	  function(module2, exports) {
	    module2.exports = require$$16;
	  },
	  function(module2, exports) {
	    module2.exports = require$$17;
	  },
	  function(module2, exports) {
	    module2.exports = require$$18;
	  },
	  function(module2, exports) {
	    module2.exports = require$$19;
	  },
	  function(module2, exports) {
	    module2.exports = require$$20;
	  },
	  function(module2, exports) {
	    module2.exports = require$$21;
	  },
	  function(module2, exports) {
	    module2.exports = require$$22;
	  },
	  function(module2, exports) {
	    module2.exports = require$$23;
	  },
	  function(module2, exports) {
	    module2.exports = require$$24;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, "/*purgecss start ignore*/\n.__nuxt-error-page{\n  padding:1rem;\n  background:#f7f8fb;\n  color:#47494e;\n  text-align:center;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  font-family:sans-serif;\n  font-weight:100!important;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -webkit-font-smoothing:antialiased;\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n.__nuxt-error-page .error{\n  max-width:450px\n}\n.__nuxt-error-page .title{\n  font-size:1.5rem;\n  margin-top:15px;\n  color:#47494e;\n  margin-bottom:8px\n}\n.__nuxt-error-page .description{\n  color:#7f828b;\n  line-height:21px;\n  margin-bottom:10px\n}\n.__nuxt-error-page a{\n  color:#7f828b!important;\n  text-decoration:none\n}\n.__nuxt-error-page .logo{\n  position:fixed;\n  left:12px;\n  bottom:12px\n}\n\n/*purgecss end ignore*/", ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_nuxt_loading_vue_vue_type_style_index_0_id_333d9fca_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_nuxt_loading_vue_vue_type_style_index_0_id_333d9fca_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_nuxt_loading_vue_vue_type_style_index_0_id_333d9fca_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, "/*purgecss start ignore*/\n.nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:5px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#ff9600;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}\n\n/*purgecss end ignore*/", ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n		system-ui,\n		-apple-system, /* Firefox supports this but not yet `system-ui` */\n		'Segoe UI',\n		Roboto,\n		Helvetica,\n		Arial,\n		sans-serif,\n		'Apple Color Emoji',\n		'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n		ui-monospace,\n		SFMono-Regular,\n		Consolas,\n		'Liberation Mono',\n		Menlo,\n		monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.form-checkbox:checked{\n  background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\");\n  border-color:transparent;\n  background-size:100% 100%;\n  background-position:center;\n  background-repeat:no-repeat;\n}\n\n@media not print{\n  .form-checkbox::-ms-check{\n    color:transparent;\n    background:inherit;\n    border-color:inherit;\n    border-radius:inherit;\n  }\n}\n\n.form-checkbox{\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n  -webkit-print-color-adjust:exact;\n          color-adjust:exact;\n  display:inline-block;\n  vertical-align:middle;\n  background-origin:border-box;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none;\n  flex-shrink:0;\n  height:1.5rem;\n  width:1.5rem;\n  color:#3b82f6;\n  background-color:rgba(23, 49, 79, 0.6);\n  border-color:#3730a3;\n}\n\n.form-checkbox:focus{\n  outline:none;\n  border-color:#4338ca;\n}\n\n.pointer-events-none{\n  pointer-events:none;\n}\n\n.static{\n  position:static;\n}\n\n.fixed{\n  position:fixed;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.inset-0{\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n}\n\n.inset-y-0{\n  top:0px;\n  bottom:0px;\n}\n\n.top-0{\n  top:0px;\n}\n\n.right-0{\n  right:0px;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n.left-0{\n  left:0px;\n}\n\n.z-10{\n  z-index:10;\n}\n\n.z-20{\n  z-index:20;\n}\n\n.z-30{\n  z-index:30;\n}\n\n.z-40{\n  z-index:40;\n}\n\n.z-50{\n  z-index:50;\n}\n\n.mx-1{\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n}\n\n.mx-2{\n  margin-left:0.5rem;\n  margin-right:0.5rem;\n}\n\n.mx-3{\n  margin-left:0.75rem;\n  margin-right:0.75rem;\n}\n\n.mx-4{\n  margin-left:1rem;\n  margin-right:1rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.my-1{\n  margin-top:0.25rem;\n  margin-bottom:0.25rem;\n}\n\n.mt-1{\n  margin-top:0.25rem;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.mt-3{\n  margin-top:0.75rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mt-6{\n  margin-top:1.5rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.mt-12{\n  margin-top:3rem;\n}\n\n.mt-24{\n  margin-top:6rem;\n}\n\n.mt-2px{\n  margin-top:2px;\n}\n\n.-mt-1{\n  margin-top:-0.25rem;\n}\n\n.-mt-4{\n  margin-top:-1rem;\n}\n\n.-mt-36{\n  margin-top:-9rem;\n}\n\n.mr-1{\n  margin-right:0.25rem;\n}\n\n.mr-2{\n  margin-right:0.5rem;\n}\n\n.mb-1{\n  margin-bottom:0.25rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-8{\n  margin-bottom:2rem;\n}\n\n.-mb-1{\n  margin-bottom:-0.25rem;\n}\n\n.ml-1{\n  margin-left:0.25rem;\n}\n\n.ml-2{\n  margin-left:0.5rem;\n}\n\n.ml-3{\n  margin-left:0.75rem;\n}\n\n.ml-4{\n  margin-left:1rem;\n}\n\n.ml-5{\n  margin-left:1.25rem;\n}\n\n.ml-6{\n  margin-left:1.5rem;\n}\n\n.ml-12{\n  margin-left:3rem;\n}\n\n.ml-16{\n  margin-left:4rem;\n}\n\n.ml-2px{\n  margin-left:2px;\n}\n\n.block{\n  display:block;\n}\n\n.inline-block{\n  display:inline-block;\n}\n\n.inline{\n  display:inline;\n}\n\n.flex{\n  display:flex;\n}\n\n.inline-flex{\n  display:inline-flex;\n}\n\n.table{\n  display:table;\n}\n\n.grid{\n  display:grid;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-0{\n  height:0px;\n}\n\n.h-3{\n  height:0.75rem;\n}\n\n.h-4{\n  height:1rem;\n}\n\n.h-5{\n  height:1.25rem;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-7{\n  height:1.75rem;\n}\n\n.h-8{\n  height:2rem;\n}\n\n.h-10{\n  height:2.5rem;\n}\n\n.h-12{\n  height:3rem;\n}\n\n.h-16{\n  height:4rem;\n}\n\n.h-20{\n  height:5rem;\n}\n\n.h-24{\n  height:6rem;\n}\n\n.h-48{\n  height:12rem;\n}\n\n.h-56{\n  height:14rem;\n}\n\n.h-60{\n  height:15rem;\n}\n\n.h-2px{\n  height:2px;\n}\n\n.h-3p5{\n  height:0.875rem;\n}\n\n.h-full{\n  height:100%;\n}\n\n.h-screen{\n  height:100vh;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.w-3{\n  width:0.75rem;\n}\n\n.w-4{\n  width:1rem;\n}\n\n.w-5{\n  width:1.25rem;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-7{\n  width:1.75rem;\n}\n\n.w-8{\n  width:2rem;\n}\n\n.w-10{\n  width:2.5rem;\n}\n\n.w-12{\n  width:3rem;\n}\n\n.w-16{\n  width:4rem;\n}\n\n.w-20{\n  width:5rem;\n}\n\n.w-22{\n  width:5.5rem;\n}\n\n.w-24{\n  width:6rem;\n}\n\n.w-28{\n  width:7rem;\n}\n\n.w-40{\n  width:10rem;\n}\n\n.w-48{\n  width:12rem;\n}\n\n.w-56{\n  width:14rem;\n}\n\n.w-60{\n  width:15rem;\n}\n\n.w-96{\n  width:24rem;\n}\n\n.w-3p5{\n  width:0.875rem;\n}\n\n.w-1\\/2{\n  width:50%;\n}\n\n.w-1\\/5{\n  width:20%;\n}\n\n.w-1\\/6{\n  width:16.666667%;\n}\n\n.w-3\\/6{\n  width:50%;\n}\n\n.w-2\\/12{\n  width:16.666667%;\n}\n\n.w-3\\/12{\n  width:25%;\n}\n\n.w-4\\/12{\n  width:33.333333%;\n}\n\n.w-5\\/12{\n  width:41.666667%;\n}\n\n.w-6\\/12{\n  width:50%;\n}\n\n.w-7\\/12{\n  width:58.333333%;\n}\n\n.w-9\\/12{\n  width:75%;\n}\n\n.w-full{\n  width:100%;\n}\n\n.max-w-sm{\n  max-width:24rem;\n}\n\n.max-w-md{\n  max-width:28rem;\n}\n\n.max-w-lg{\n  max-width:32rem;\n}\n\n.flex-1{\n  flex:1 1 0%;\n}\n\n.flex-shrink-0{\n  flex-shrink:0;\n}\n\n.flex-grow{\n  flex-grow:1;\n}\n\n.table-fixed{\n  table-layout:fixed;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-95{\n  --tw-scale-x:.95;\n  --tw-scale-y:.95;\n}\n\n.scale-100{\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n}\n\n.scale-125{\n  --tw-scale-x:1.25;\n  --tw-scale-y:1.25;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.cursor-pointer{\n  cursor:pointer;\n}\n\n.select-none{\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none;\n}\n\n.resize-none{\n  resize:none;\n}\n\n.appearance-none{\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n}\n\n.grid-cols-3{\n  grid-template-columns:repeat(3, minmax(0, 1fr));\n}\n\n.grid-cols-5{\n  grid-template-columns:repeat(5, minmax(0, 1fr));\n}\n\n.grid-cols-6{\n  grid-template-columns:repeat(6, minmax(0, 1fr));\n}\n\n.grid-cols-10{\n  grid-template-columns:repeat(10, minmax(0, 1fr));\n}\n\n.flex-row-reverse{\n  flex-direction:row-reverse;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.items-start{\n  align-items:flex-start;\n}\n\n.items-end{\n  align-items:flex-end;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.items-baseline{\n  align-items:baseline;\n}\n\n.items-stretch{\n  align-items:stretch;\n}\n\n.justify-start{\n  justify-content:flex-start;\n}\n\n.justify-end{\n  justify-content:flex-end;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.justify-around{\n  justify-content:space-around;\n}\n\n.gap-1{\n  gap:0.25rem;\n}\n\n.gap-2{\n  gap:0.5rem;\n}\n\n.gap-4{\n  gap:1rem;\n}\n\n.gap-8{\n  gap:2rem;\n}\n\n.space-x-1 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(1rem * var(--tw-space-x-reverse));\n  margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-8 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(2rem * var(--tw-space-x-reverse));\n  margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-y-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(1rem * var(--tw-space-y-reverse));\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.overflow-y-auto{\n  overflow-y:auto;\n}\n\n.truncate{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n}\n\n.whitespace-nowrap{\n  white-space:nowrap;\n}\n\n.rounded-sm{\n  border-radius:0.125rem;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-lg{\n  border-radius:0.5rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.rounded-t-sm{\n  border-top-left-radius:0.125rem;\n  border-top-right-radius:0.125rem;\n}\n\n.rounded-t{\n  border-top-left-radius:0.25rem;\n  border-top-right-radius:0.25rem;\n}\n\n.rounded-t-md{\n  border-top-left-radius:0.375rem;\n  border-top-right-radius:0.375rem;\n}\n\n.rounded-t-lg{\n  border-top-left-radius:0.5rem;\n  border-top-right-radius:0.5rem;\n}\n\n.rounded-r-lg{\n  border-top-right-radius:0.5rem;\n  border-bottom-right-radius:0.5rem;\n}\n\n.rounded-r-full{\n  border-top-right-radius:9999px;\n  border-bottom-right-radius:9999px;\n}\n\n.rounded-b-sm{\n  border-bottom-right-radius:0.125rem;\n  border-bottom-left-radius:0.125rem;\n}\n\n.rounded-b{\n  border-bottom-right-radius:0.25rem;\n  border-bottom-left-radius:0.25rem;\n}\n\n.rounded-b-lg{\n  border-bottom-right-radius:0.5rem;\n  border-bottom-left-radius:0.5rem;\n}\n\n.rounded-l-lg{\n  border-top-left-radius:0.5rem;\n  border-bottom-left-radius:0.5rem;\n}\n\n.rounded-l-full{\n  border-top-left-radius:9999px;\n  border-bottom-left-radius:9999px;\n}\n\n.rounded-br-lg{\n  border-bottom-right-radius:0.5rem;\n}\n\n.rounded-bl-lg{\n  border-bottom-left-radius:0.5rem;\n}\n\n.border-2{\n  border-width:2px;\n}\n\n.border-3{\n  border-width:3px;\n}\n\n.border-4{\n  border-width:4px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-t-2{\n  border-top-width:2px;\n}\n\n.border-r-2{\n  border-right-width:2px;\n}\n\n.border-r{\n  border-right-width:1px;\n}\n\n.border-b-2{\n  border-bottom-width:2px;\n}\n\n.border-b{\n  border-bottom-width:1px;\n}\n\n.border-l-2{\n  border-left-width:2px;\n}\n\n.border-l{\n  border-left-width:1px;\n}\n\n.border-transparent{\n  border-color:transparent;\n}\n\n.border-gray-300{\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n}\n\n.border-red-400{\n  --tw-border-opacity:1;\n  border-color:rgba(248, 113, 113, var(--tw-border-opacity));\n}\n\n.border-red-500{\n  --tw-border-opacity:1;\n  border-color:rgba(239, 68, 68, var(--tw-border-opacity));\n}\n\n.border-red-600{\n  --tw-border-opacity:1;\n  border-color:rgba(220, 38, 38, var(--tw-border-opacity));\n}\n\n.border-yellow-500{\n  --tw-border-opacity:1;\n  border-color:rgba(245, 158, 11, var(--tw-border-opacity));\n}\n\n.border-yellow-600{\n  --tw-border-opacity:1;\n  border-color:rgba(217, 119, 6, var(--tw-border-opacity));\n}\n\n.border-green-500{\n  --tw-border-opacity:1;\n  border-color:rgba(16, 185, 129, var(--tw-border-opacity));\n}\n\n.border-purple-500{\n  --tw-border-opacity:1;\n  border-color:rgba(139, 92, 246, var(--tw-border-opacity));\n}\n\n.border-teal-400{\n  --tw-border-opacity:1;\n  border-color:rgba(45, 212, 191, var(--tw-border-opacity));\n}\n\n.border-teal-500{\n  --tw-border-opacity:1;\n  border-color:rgba(20, 184, 166, var(--tw-border-opacity));\n}\n\n.border-teal-600{\n  --tw-border-opacity:1;\n  border-color:rgba(13, 148, 136, var(--tw-border-opacity));\n}\n\n.border-c-0{\n  --tw-border-opacity:1;\n  border-color:rgba(21, 22, 24, var(--tw-border-opacity));\n}\n\n.border-c-1{\n  --tw-border-opacity:1;\n  border-color:rgba(255, 150, 0, var(--tw-border-opacity));\n}\n\n.border-c-3{\n  --tw-border-opacity:1;\n  border-color:rgba(78, 65, 219, var(--tw-border-opacity));\n}\n\n.hover\\:border-white:hover{\n  --tw-border-opacity:1;\n  border-color:rgba(255, 255, 255, var(--tw-border-opacity));\n}\n\n.bg-transparent{\n  background-color:transparent;\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-gray-200{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.bg-gray-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n\n.bg-gray-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity));\n}\n\n.bg-red-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(252, 165, 165, var(--tw-bg-opacity));\n}\n\n.bg-red-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(248, 113, 113, var(--tw-bg-opacity));\n}\n\n.bg-red-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(239, 68, 68, var(--tw-bg-opacity));\n}\n\n.bg-red-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n\n.bg-yellow-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(251, 191, 36, var(--tw-bg-opacity));\n}\n\n.bg-green-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(52, 211, 153, var(--tw-bg-opacity));\n}\n\n.bg-green-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(16, 185, 129, var(--tw-bg-opacity));\n}\n\n.bg-blue-200{\n  --tw-bg-opacity:1;\n  background-color:rgba(191, 219, 254, var(--tw-bg-opacity));\n}\n\n.bg-blue-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(147, 197, 253, var(--tw-bg-opacity));\n}\n\n.bg-blue-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(96, 165, 250, var(--tw-bg-opacity));\n}\n\n.bg-blue-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(37, 99, 235, var(--tw-bg-opacity));\n}\n\n.bg-purple-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(124, 58, 237, var(--tw-bg-opacity));\n}\n\n.bg-teal-200{\n  --tw-bg-opacity:1;\n  background-color:rgba(153, 246, 228, var(--tw-bg-opacity));\n}\n\n.bg-teal-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(45, 212, 191, var(--tw-bg-opacity));\n}\n\n.bg-teal-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(20, 184, 166, var(--tw-bg-opacity));\n}\n\n.bg-teal-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(13, 148, 136, var(--tw-bg-opacity));\n}\n\n.bg-teal-700{\n  --tw-bg-opacity:1;\n  background-color:rgba(15, 118, 110, var(--tw-bg-opacity));\n}\n\n.bg-teal-800{\n  --tw-bg-opacity:1;\n  background-color:rgba(17, 94, 89, var(--tw-bg-opacity));\n}\n\n.bg-teal-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(19, 78, 74, var(--tw-bg-opacity));\n}\n\n.bg-sky-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(2, 132, 199, var(--tw-bg-opacity));\n}\n\n.bg-c-0{\n  --tw-bg-opacity:1;\n  background-color:rgba(21, 22, 24, var(--tw-bg-opacity));\n}\n\n.bg-c-1{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 150, 0, var(--tw-bg-opacity));\n}\n\n.bg-c-2{\n  --tw-bg-opacity:1;\n  background-color:rgba(244, 244, 249, var(--tw-bg-opacity));\n}\n\n.bg-c-3{\n  --tw-bg-opacity:1;\n  background-color:rgba(78, 65, 219, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-c-2:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(244, 244, 249, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-c-3:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(78, 65, 219, var(--tw-bg-opacity));\n}\n\n.bg-opacity-25{\n  --tw-bg-opacity:0.25;\n}\n\n.bg-opacity-75{\n  --tw-bg-opacity:0.75;\n}\n\n.bg-cover{\n  background-size:cover;\n}\n\n.bg-contain{\n  background-size:contain;\n}\n\n.bg-center{\n  background-position:center;\n}\n\n.bg-no-repeat{\n  background-repeat:no-repeat;\n}\n\n.fill-current{\n  fill:currentColor;\n}\n\n.stroke-current{\n  stroke:currentColor;\n}\n\n.p-1{\n  padding:0.25rem;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-3{\n  padding:0.75rem;\n}\n\n.p-6{\n  padding:1.5rem;\n}\n\n.p-2px{\n  padding:2px;\n}\n\n.px-1{\n  padding-left:0.25rem;\n  padding-right:0.25rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.px-5{\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n}\n\n.px-6{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n}\n\n.px-10{\n  padding-left:2.5rem;\n  padding-right:2.5rem;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.py-3{\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n}\n\n.py-4{\n  padding-top:1rem;\n  padding-bottom:1rem;\n}\n\n.py-5{\n  padding-top:1.25rem;\n  padding-bottom:1.25rem;\n}\n\n.py-16{\n  padding-top:4rem;\n  padding-bottom:4rem;\n}\n\n.py-20{\n  padding-top:5rem;\n  padding-bottom:5rem;\n}\n\n.pt-1{\n  padding-top:0.25rem;\n}\n\n.pt-5{\n  padding-top:1.25rem;\n}\n\n.pt-12{\n  padding-top:3rem;\n}\n\n.pt-16{\n  padding-top:4rem;\n}\n\n.pt-20{\n  padding-top:5rem;\n}\n\n.pt-40{\n  padding-top:10rem;\n}\n\n.pr-1{\n  padding-right:0.25rem;\n}\n\n.pr-2{\n  padding-right:0.5rem;\n}\n\n.pr-8{\n  padding-right:2rem;\n}\n\n.pr-10{\n  padding-right:2.5rem;\n}\n\n.pb-1{\n  padding-bottom:0.25rem;\n}\n\n.pb-2{\n  padding-bottom:0.5rem;\n}\n\n.pb-4{\n  padding-bottom:1rem;\n}\n\n.pl-2{\n  padding-left:0.5rem;\n}\n\n.pl-4{\n  padding-left:1rem;\n}\n\n.pl-5{\n  padding-left:1.25rem;\n}\n\n.pl-10{\n  padding-left:2.5rem;\n}\n\n.text-left{\n  text-align:left;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-right{\n  text-align:right;\n}\n\n.font-gong{\n  font-family:GongGothicBold;\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-base{\n  font-size:1rem;\n  line-height:1.5rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.text-4xl{\n  font-size:2.25rem;\n  line-height:2.5rem;\n}\n\n.text-5xl{\n  font-size:3rem;\n  line-height:1;\n}\n\n.text-z{\n  font-size:0;\n}\n\n.text-xxs{\n  font-size:0.755rem;\n}\n\n.font-light{\n  font-weight:300;\n}\n\n.font-normal{\n  font-weight:400;\n}\n\n.font-medium{\n  font-weight:500;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.font-extrabold{\n  font-weight:800;\n}\n\n.font-black{\n  font-weight:900;\n}\n\n.uppercase{\n  text-transform:uppercase;\n}\n\n.capitalize{\n  text-transform:capitalize;\n}\n\n.leading-4{\n  line-height:1rem;\n}\n\n.leading-none{\n  line-height:1;\n}\n\n.leading-tight{\n  line-height:1.25;\n}\n\n.leading-snug{\n  line-height:1.375;\n}\n\n.leading-loose{\n  line-height:2;\n}\n\n.text-black{\n  --tw-text-opacity:1;\n  color:rgba(0, 0, 0, var(--tw-text-opacity));\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-100{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-red-100{\n  --tw-text-opacity:1;\n  color:rgba(254, 226, 226, var(--tw-text-opacity));\n}\n\n.text-red-300{\n  --tw-text-opacity:1;\n  color:rgba(252, 165, 165, var(--tw-text-opacity));\n}\n\n.text-red-400{\n  --tw-text-opacity:1;\n  color:rgba(248, 113, 113, var(--tw-text-opacity));\n}\n\n.text-red-500{\n  --tw-text-opacity:1;\n  color:rgba(239, 68, 68, var(--tw-text-opacity));\n}\n\n.text-red-600{\n  --tw-text-opacity:1;\n  color:rgba(220, 38, 38, var(--tw-text-opacity));\n}\n\n.text-yellow-400{\n  --tw-text-opacity:1;\n  color:rgba(251, 191, 36, var(--tw-text-opacity));\n}\n\n.text-yellow-500{\n  --tw-text-opacity:1;\n  color:rgba(245, 158, 11, var(--tw-text-opacity));\n}\n\n.text-yellow-600{\n  --tw-text-opacity:1;\n  color:rgba(217, 119, 6, var(--tw-text-opacity));\n}\n\n.text-green-400{\n  --tw-text-opacity:1;\n  color:rgba(52, 211, 153, var(--tw-text-opacity));\n}\n\n.text-green-500{\n  --tw-text-opacity:1;\n  color:rgba(16, 185, 129, var(--tw-text-opacity));\n}\n\n.text-blue-100{\n  --tw-text-opacity:1;\n  color:rgba(219, 234, 254, var(--tw-text-opacity));\n}\n\n.text-blue-200{\n  --tw-text-opacity:1;\n  color:rgba(191, 219, 254, var(--tw-text-opacity));\n}\n\n.text-blue-300{\n  --tw-text-opacity:1;\n  color:rgba(147, 197, 253, var(--tw-text-opacity));\n}\n\n.text-blue-500{\n  --tw-text-opacity:1;\n  color:rgba(59, 130, 246, var(--tw-text-opacity));\n}\n\n.text-blue-600{\n  --tw-text-opacity:1;\n  color:rgba(37, 99, 235, var(--tw-text-opacity));\n}\n\n.text-purple-500{\n  --tw-text-opacity:1;\n  color:rgba(139, 92, 246, var(--tw-text-opacity));\n}\n\n.text-teal-100{\n  --tw-text-opacity:1;\n  color:rgba(204, 251, 241, var(--tw-text-opacity));\n}\n\n.text-teal-200{\n  --tw-text-opacity:1;\n  color:rgba(153, 246, 228, var(--tw-text-opacity));\n}\n\n.text-teal-400{\n  --tw-text-opacity:1;\n  color:rgba(45, 212, 191, var(--tw-text-opacity));\n}\n\n.text-teal-600{\n  --tw-text-opacity:1;\n  color:rgba(13, 148, 136, var(--tw-text-opacity));\n}\n\n.text-teal-700{\n  --tw-text-opacity:1;\n  color:rgba(15, 118, 110, var(--tw-text-opacity));\n}\n\n.text-c-0{\n  --tw-text-opacity:1;\n  color:rgba(21, 22, 24, var(--tw-text-opacity));\n}\n\n.text-c-1{\n  --tw-text-opacity:1;\n  color:rgba(255, 150, 0, var(--tw-text-opacity));\n}\n\n.text-c-2{\n  --tw-text-opacity:1;\n  color:rgba(244, 244, 249, var(--tw-text-opacity));\n}\n\n.text-c-3{\n  --tw-text-opacity:1;\n  color:rgba(78, 65, 219, var(--tw-text-opacity));\n}\n\n.hover\\:text-white:hover{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.hover\\:text-teal-200:hover{\n  --tw-text-opacity:1;\n  color:rgba(153, 246, 228, var(--tw-text-opacity));\n}\n\n.hover\\:text-c-1:hover{\n  --tw-text-opacity:1;\n  color:rgba(255, 150, 0, var(--tw-text-opacity));\n}\n\n.placeholder-c-1::-moz-placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(255, 150, 0, var(--tw-placeholder-opacity));\n}\n\n.placeholder-c-1::placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(255, 150, 0, var(--tw-placeholder-opacity));\n}\n\n.placeholder-c-2::-moz-placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(244, 244, 249, var(--tw-placeholder-opacity));\n}\n\n.placeholder-c-2::placeholder{\n  --tw-placeholder-opacity:1;\n  color:rgba(244, 244, 249, var(--tw-placeholder-opacity));\n}\n\n.opacity-0{\n  opacity:0;\n}\n\n.opacity-50{\n  opacity:0.5;\n}\n\n.opacity-100{\n  opacity:1;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-sm{\n  --tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.outline-none{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.filter{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.blur{\n  --tw-blur:blur(8px);\n}\n\n.grayscale{\n  --tw-grayscale:grayscale(100%);\n}\n\n.transition-all{\n  transition-property:all;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.transition-colors{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.duration-75{\n  transition-duration:75ms;\n}\n\n.duration-100{\n  transition-duration:100ms;\n}\n\n.duration-150{\n  transition-duration:150ms;\n}\n\n.duration-200{\n  transition-duration:200ms;\n}\n\n.duration-300{\n  transition-duration:300ms;\n}\n\n.duration-500{\n  transition-duration:500ms;\n}\n\n.ease-in{\n  transition-timing-function:cubic-bezier(0.4, 0, 1, 1);\n}\n\n.ease-out{\n  transition-timing-function:cubic-bezier(0, 0, 0.2, 1);\n}\n\n.ease-in-out{\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@font-face{\n  font-family:\"GothicA1-Light\";\n\n  src:url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-Light.woff2) format(\"woff2\");\n\n  font-weight:300;\n\n  font-style:normal\n}\n\n@font-face{\n  font-family:\"GongGothicBold\";\n\n  src:url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicBold.woff) format(\"woff\");\n\n  font-weight:400;\n\n  font-style:normal\n}\n\n*,body{\n  font-family:\"GothicA1-Light\"\n}\n\n::-webkit-scrollbar{\n  width:10px;\n  height:10px\n}\n\n::-webkit-scrollbar,::-webkit-scrollbar-track{\n  background-color:#d5d5d5\n}\n\n::-webkit-scrollbar-thumb{\n  background-image:linear-gradient(45deg,#ff9600,#ff9600)\n}\n\n.style-2::-webkit-scrollbar-track{\n  border-radius:8px;\n  background-color:#d5d5d5\n}\n\n.style-2::-webkit-scrollbar{\n  width:8px;\n  height:8px;\n  background-color:#d5d5d5\n}\n\n.style-2::-webkit-scrollbar-thumb{\n  background-image:linear-gradient(45deg,#ff9600,#ff9600)\n}\n\n.min-w-1200{\n  min-width:1200px\n}\n\n.page-wrapper{\n  width:1080px\n}\n\nbutton:focus{\n  outline:0\n}\n\n.vertical-center{\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.horizontal-center{\n  left:0;\n  right:0;\n  margin:0 auto\n}\n\n.bg-gradient{\n  background:linear-gradient(180deg,#2c5282,rgba(44,82,130,0))\n}\n\n.bg-gradient-x{\n  background:linear-gradient(270deg,#2c5282,rgba(44,82,130,0))\n}\n\n.text-overflow{\n  text-overflow:ellipsis\n}\n\n.heading{\n  background:linear-gradient(0deg,#225c9b 0,#225c87);\n  box-shadow:inset 0 -1px rgba(235,248,255,.1)\n}\n\n.inputbox-color{\n  background:rgba(60,54,107,.73)\n}\n\n.Win{\n  background-color:rgba(37,99,235,.10196078431372549);\n  border:1px solid rgba(37,99,235,.25882352941176473);\n  border-radius:.375rem\n}\n\n.Fail{\n  background-color:rgba(220,38,38,.10196078431372549);\n  border:1px solid rgba(220,38,38,.25882352941176473);\n  border-radius:.375rem\n}\n\n.Remake{\n  background-color:rgba(117,133,146,.10196078431372549);\n  border:1px solid rgba(117,133,146,.25882352941176473);\n  border-radius:.375rem\n}\n\n.ban:after{\n  content:\"\";\n  position:absolute;\n  left:0;\n  top:50%;\n  width:calc(100% + 1px);\n  height:2px;\n  transform:rotate(-45deg)\n}\n\n.ban-blue:after{\n  background:#38b2ac\n}\n\n.ban-red:after{\n  background:#f56565\n}\n\n.ban-img{\n  filter:grayscale(100%)\n}\n\n.ban-order{\n  left:-7px;\n  top:-5px\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:mt-0{\n    margin-top:0px;\n  }\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}", ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_RuneStyle_vue_vue_type_style_index_0_id_b1ca2680_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_RuneStyle_vue_vue_type_style_index_0_id_b1ca2680_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_RuneStyle_vue_vue_type_style_index_0_id_b1ca2680_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, "/*purgecss start ignore*/\n.not-used-rune[data-v-b1ca2680]{\n  filter:grayscale(100%)\n}\n.not-used-rune[data-v-b1ca2680]:hover{\n  filter:none\n}\n.used-rune[data-v-b1ca2680]:hover{\n  filter:brightness(1.2)\n}\n\n/*purgecss end ignore*/", ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_SearchFormDropdown_vue_vue_type_style_index_0_id_2ed31ea4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_SearchFormDropdown_vue_vue_type_style_index_0_id_2ed31ea4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_SearchFormDropdown_vue_vue_type_style_index_0_id_2ed31ea4_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, "/*purgecss start ignore*/\n.key[data-v-2ed31ea4]{\n  padding:.2rem .45rem;\n  box-shadow:0 2px 0 0 #3182ce,0 5px 3px 0 rgba(0,0,0,.1),0 5px 2px 0 rgba(0,0,0,.06)\n}\n\n/*purgecss end ignore*/", ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_SearchFormRegion_vue_vue_type_style_index_0_id_b76365fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_SearchFormRegion_vue_vue_type_style_index_0_id_b76365fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_SearchFormRegion_vue_vue_type_style_index_0_id_b76365fe_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, "/*purgecss start ignore*/\n.dropDown[data-v-b76365fe]{\n  top:40px\n}\n.dropDownXl[data-v-b76365fe]{\n  top:58px;\n  right:50px\n}\n.dropIcon[data-v-b76365fe]{\n  left:4px\n}\n\n/*purgecss end ignore*/", ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_default_m_vue_vue_type_style_index_0_id_557c66b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_default_m_vue_vue_type_style_index_0_id_557c66b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_default_m_vue_vue_type_style_index_0_id_557c66b2_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, '/*purgecss start ignore*/\n.menu[data-v-557c66b2]{\n  border-bottom:4px solid transparent\n}\n.nuxt-link-active[data-v-557c66b2]{\n  border-bottom:4px solid #ff9600;\n  color:#ff9600\n}\n.logo[data-v-557c66b2]{\n  letter-spacing:3px;\n  display:inline;\n  font-size:1em;\n  line-height:100%;\n  font-weight:700;\n  font-family:"GongGothicBold"\n}\n\n/*purgecss end ignore*/', ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_default_vue_vue_type_style_index_0_id_246b49a7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_default_vue_vue_type_style_index_0_id_246b49a7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_default_vue_vue_type_style_index_0_id_246b49a7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, '/*purgecss start ignore*/\n.menu[data-v-246b49a7]{\n  border-bottom:4px solid transparent\n}\n.nuxt-link-active[data-v-246b49a7]{\n  border-bottom:4px solid #ff9600;\n  color:#ff9600\n}\n.logo[data-v-246b49a7]{\n  letter-spacing:3px;\n  display:inline;\n  font-size:1em;\n  line-height:100%;\n  font-weight:700;\n  font-family:"GongGothicBold"\n}\n\n/*purgecss end ignore*/', ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_home_m_vue_vue_type_style_index_0_id_6c10702b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_home_m_vue_vue_type_style_index_0_id_6c10702b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_home_m_vue_vue_type_style_index_0_id_6c10702b_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, '/*purgecss start ignore*/\n.menu[data-v-6c10702b]{\n  border-bottom:4px solid transparent\n}\n.nuxt-link-active[data-v-6c10702b]{\n  border-bottom:4px solid #ff9600;\n  color:#ff9600\n}\n.logo[data-v-6c10702b]{\n  letter-spacing:3px;\n  display:inline;\n  font-size:1em;\n  line-height:100%;\n  font-weight:700;\n  font-family:"GongGothicBold"\n}\n\n/*purgecss end ignore*/', ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_home_vue_vue_type_style_index_0_id_568b82f0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_home_vue_vue_type_style_index_0_id_568b82f0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_home_vue_vue_type_style_index_0_id_568b82f0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, '/*purgecss start ignore*/\n.menu[data-v-568b82f0]{\n  border-bottom:4px solid transparent\n}\n.nuxt-link-active[data-v-568b82f0]{\n  border-bottom:4px solid #ff9600;\n  color:#ff9600\n}\n.logo[data-v-568b82f0]{\n  letter-spacing:3px;\n  display:inline;\n  font-size:1em;\n  line-height:100%;\n  font-weight:700;\n  font-family:"GongGothicBold"\n}\n\n/*purgecss end ignore*/', ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_multiple_m_vue_vue_type_style_index_0_id_111e11af_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_multiple_m_vue_vue_type_style_index_0_id_111e11af_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_multiple_m_vue_vue_type_style_index_0_id_111e11af_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, '/*purgecss start ignore*/\n.menu[data-v-111e11af]{\n  border-bottom:4px solid transparent\n}\n.nuxt-link-active[data-v-111e11af]{\n  border-bottom:4px solid #ff9600;\n  color:#ff9600\n}\n.logo[data-v-111e11af]{\n  letter-spacing:3px;\n  display:inline;\n  font-size:1em;\n  line-height:100%;\n  font-weight:700;\n  font-family:"GongGothicBold"\n}\n\n/*purgecss end ignore*/', ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_multiple_vue_vue_type_style_index_0_id_6ed1acf7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
	    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_multiple_vue_vue_type_style_index_0_id_6ed1acf7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
	      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
	        (function(key) {
	          __webpack_require__.d(__webpack_exports__, key, function() {
	            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_multiple_vue_vue_type_style_index_0_id_6ed1acf7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
	          });
	        })(__WEBPACK_IMPORT_KEY__);
	  },
	  function(module2, exports, __webpack_require__) {
	    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
	    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
	      return i[1];
	    });
	    ___CSS_LOADER_EXPORT___.push([module2.i, '/*purgecss start ignore*/\n.menu[data-v-6ed1acf7]{\n  border-bottom:4px solid transparent\n}\n.nuxt-link-active[data-v-6ed1acf7]{\n  border-bottom:4px solid #ff9600;\n  color:#ff9600\n}\n.logo[data-v-6ed1acf7]{\n  letter-spacing:3px;\n  display:inline;\n  font-size:1em;\n  line-height:100%;\n  font-weight:700;\n  font-family:"GongGothicBold"\n}\n\n/*purgecss end ignore*/', ""]);
	    ___CSS_LOADER_EXPORT___.locals = {};
	    module2.exports = ___CSS_LOADER_EXPORT___;
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    __webpack_require__.d(__webpack_exports__, "state", function() {
	      return state;
	    });
	    __webpack_require__.d(__webpack_exports__, "mutations", function() {
	      return mutations;
	    });
	    __webpack_require__.d(__webpack_exports__, "actions", function() {
	      return actions;
	    });
	    const state = () => ({
	      regionsList: {
	        "br": "br1",
	        "eune": "eun1",
	        "euw": "euw1",
	        "jp": "jp1",
	        "kr": "kr",
	        "lan": "la1",
	        "las": "la2",
	        "na": "na1",
	        "oce": "oc1",
	        "tr": "tr1",
	        "ru": "ru"
	      },
	      roles: ["TOP", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"]
	    });
	    const mutations = {};
	    const actions = {};
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    __webpack_require__.d(__webpack_exports__, "namespaced", function() {
	      return namespaced;
	    });
	    __webpack_require__.d(__webpack_exports__, "state", function() {
	      return state;
	    });
	    __webpack_require__.d(__webpack_exports__, "mutations", function() {
	      return mutations;
	    });
	    __webpack_require__.d(__webpack_exports__, "actions", function() {
	      return actions;
	    });
	    __webpack_require__.d(__webpack_exports__, "getters", function() {
	      return getters;
	    });
	    var _helpers_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
	    const namespaced = true;
	    const state = () => ({
	      kStats: [[5008, 5005, 5007], [5008, 5002, 5003], [5001, 5002, 5003]],
	      runes: null,
	      runesOpen: false,
	      selectedRunes: {}
	    });
	    const mutations = {
	      DISPLAY_HIDE_RUNES(state2, selectedRunes) {
	        state2.runesOpen = !state2.runesOpen;
	        state2.selectedRunes = selectedRunes;
	      },
	      SET_RUNES(state2, runes) {
	        state2.runes = runes;
	      }
	    };
	    const actions = {
	      displayOrHideRunes({
	        commit
	      }, selectedRunes) {
	        commit("DISPLAY_HIDE_RUNES", selectedRunes);
	      },
	      async getRunes({
	        commit,
	        getters: getters2
	      }) {
	        if (getters2.runesLoaded) {
	          return;
	        }
	        const resp = await this.$axios.$get(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_0__["b"])() + "cdragon/runes");
	        commit("SET_RUNES", resp);
	      }
	    };
	    const getters = {
	      runesLoaded: (state2) => state2.runes
	    };
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    __webpack_require__.d(__webpack_exports__, "namespaced", function() {
	      return namespaced;
	    });
	    __webpack_require__.d(__webpack_exports__, "state", function() {
	      return state;
	    });
	    __webpack_require__.d(__webpack_exports__, "mutations", function() {
	      return mutations;
	    });
	    __webpack_require__.d(__webpack_exports__, "actions", function() {
	      return actions;
	    });
	    __webpack_require__.d(__webpack_exports__, "getters", function() {
	      return getters;
	    });
	    var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
	    var _helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
	    const namespaced = true;
	    const state = () => ({
	      matches: []
	    });
	    const mutations = {
	      MATCH_LOADING(state2, matchId) {
	        const alreadyIn = state2.matches.find((m) => m.matchId === matchId);
	        if (!alreadyIn) {
	          state2.matches.push({
	            matchId,
	            status: "loading"
	          });
	        }
	      },
	      MATCH_FOUND(state2, {
	        matchDetails,
	        ranksLoaded
	      }) {
	        matchDetails.status = "loaded";
	        matchDetails.ranksLoaded = ranksLoaded;
	        if (ranksLoaded) {
	          for (const player of matchDetails.blueTeam.players) {
	            player.rank = player.rank && player.rank[420];
	          }
	          for (const player of matchDetails.redTeam.players) {
	            player.rank = player.rank && player.rank[420];
	          }
	        }
	        const index = state2.matches.findIndex((m) => m.matchId === matchDetails.matchId);
	        vue__WEBPACK_IMPORTED_MODULE_0__["c"].set(state2.matches, index, matchDetails);
	      },
	      MATCH_RANKS_FOUND(state2, {
	        matchId,
	        ranksByPlayer
	      }) {
	        const match = state2.matches.find((m) => m.matchId === matchId);
	        for (const player of match.blueTeam.players) {
	          const ranks = ranksByPlayer[player.id];
	          if (!ranks)
	            continue;
	          vue__WEBPACK_IMPORTED_MODULE_0__["c"].set(player, "rank", ranks[420]);
	        }
	        for (const player of match.redTeam.players) {
	          const ranks = ranksByPlayer[player.id];
	          if (!ranks)
	            continue;
	          vue__WEBPACK_IMPORTED_MODULE_0__["c"].set(player, "rank", ranks[420]);
	        }
	        match.ranksLoaded = true;
	      }
	    };
	    const actions = {
	      async matchDetails({
	        commit
	      }, matchId) {
	        commit("MATCH_LOADING", matchId);
	        const resp = await this.$axios.$post(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["b"])() + "match/details", {
	          matchId
	        });
	        const {
	          matchDetails,
	          ranksLoaded
	        } = resp;
	        commit("MATCH_FOUND", {
	          matchDetails,
	          ranksLoaded
	        });
	      }
	    };
	    const getters = {
	      getMatchDetails: (state2) => (matchId) => state2.matches.find((m) => m.matchId === matchId)
	    };
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    __webpack_require__.d(__webpack_exports__, "namespaced", function() {
	      return namespaced;
	    });
	    __webpack_require__.d(__webpack_exports__, "state", function() {
	      return state;
	    });
	    __webpack_require__.d(__webpack_exports__, "mutations", function() {
	      return mutations;
	    });
	    __webpack_require__.d(__webpack_exports__, "actions", function() {
	      return actions;
	    });
	    __webpack_require__.d(__webpack_exports__, "getters", function() {
	      return getters;
	    });
	    var _helpers_summoner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
	    var _helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
	    const namespaced = true;
	    const state = () => ({
	      summoners: [],
	      status: ""
	    });
	    const mutations = {
	      MULTIPLE_REQUEST(state2) {
	        state2.status = "loading";
	      },
	      MULTIPLE_FOUND(state2, infos) {
	        state2.status = "found";
	        state2.summoners = infos;
	      },
	      MULTIPLE_NOT_FOUND(state2) {
	        state2.status = "error";
	      }
	    };
	    const actions = {
	      async multipleRequest({
	        commit,
	        dispatch,
	        rootState
	      }, {
	        summoners,
	        region
	      }) {
	        const regionId = rootState.regionsList[region];
	        commit("MULTIPLE_REQUEST");
	        try {
	          const resp = await this.$axios.$post(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["b"])() + "multiple", {
	            summoners,
	            region: regionId
	          });
	          if (!resp) {
	            dispatch("notification/add", {
	              type: "error",
	              message: "\uBA40\uD2F0 \uC11C\uCE58 \uAC80\uC0C9\uC5D0 \uC2E4\uD328 \uD558\uC600\uC2B5\uB2C8\uB2E4."
	            }, {
	              root: true
	            });
	          }
	          resp.rankeds = resp.rankeds.map((value) => {
	            return Object(_helpers_summoner__WEBPACK_IMPORTED_MODULE_0__["a"])(value);
	          });
	          commit("MULTIPLE_FOUND", resp);
	          return resp.multipleId;
	        } catch (error) {
	          if (error.response && error.response.status === 422) {
	            dispatch("notification/add", {
	              type: "error",
	              message: "Summoner not found."
	            }, {
	              root: true
	            });
	          }
	          if (error.message !== "Summoner changed") {
	            commit("MULTIPLE_NOT_FOUND");
	          }
	        }
	      }
	    };
	    const getters = {
	      multipleFound: (state2) => state2.status === "found",
	      multipleNotFound: (state2) => state2.status === "error",
	      multipleLoading: (state2) => state2.status === "loading"
	    };
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    __webpack_require__.d(__webpack_exports__, "namespaced", function() {
	      return namespaced;
	    });
	    __webpack_require__.d(__webpack_exports__, "state", function() {
	      return state;
	    });
	    __webpack_require__.d(__webpack_exports__, "mutations", function() {
	      return mutations;
	    });
	    __webpack_require__.d(__webpack_exports__, "actions", function() {
	      return actions;
	    });
	    const namespaced = true;
	    const state = () => ({
	      notifications: []
	    });
	    let nextId = 1;
	    const mutations = {
	      PUSH(state2, notification) {
	        state2.notifications.push({
	          ...notification,
	          id: nextId++
	        });
	      },
	      DELETE(state2, notificationToRemove) {
	        state2.notifications = state2.notifications.filter((notification) => notification.id !== notificationToRemove.id);
	      }
	    };
	    const actions = {
	      add({
	        commit
	      }, notification) {
	        commit("PUSH", notification);
	      },
	      remove({
	        commit
	      }, notificationToRemove) {
	        commit("DELETE", notificationToRemove);
	      }
	    };
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    __webpack_require__.d(__webpack_exports__, "namespaced", function() {
	      return namespaced;
	    });
	    __webpack_require__.d(__webpack_exports__, "state", function() {
	      return state;
	    });
	    __webpack_require__.d(__webpack_exports__, "mutations", function() {
	      return mutations;
	    });
	    __webpack_require__.d(__webpack_exports__, "actions", function() {
	      return actions;
	    });
	    const namespaced = true;
	    const state = () => ({
	      favorites: [],
	      percent: false,
	      recentSearches: [],
	      region: "kr"
	    });
	    const mutations = {
	      ADD_FAVORITE(state2, summoner) {
	        state2.favorites.push(summoner);
	      },
	      ADD_SEARCH(state2, summoner) {
	        const alreadyFav = state2.favorites.find((s) => s.name === summoner.name && s.region === summoner.region);
	        if (alreadyFav) {
	          return;
	        }
	        let searches = state2.recentSearches;
	        const alreadySearch = searches.find((s) => s.name === summoner.name && s.region === summoner.region);
	        if (alreadySearch) {
	          alreadySearch.date = Date.now();
	          searches.sort((a, b) => b.date - a.date);
	          return;
	        }
	        if (searches.length > 10) {
	          searches.pop();
	        }
	        summoner.date = Date.now();
	        searches.unshift(summoner);
	      },
	      REMOVE_FAVORITE(state2, summoner) {
	        state2.favorites = state2.favorites.filter((s) => s.name !== summoner.name || s.region !== summoner.region);
	      },
	      REMOVE_SEARCH(state2, summoner) {
	        state2.recentSearches = state2.recentSearches.filter((s) => s.name !== summoner.name || s.region !== summoner.region);
	      },
	      UPDATE_SETTING(state2, {
	        name,
	        value
	      }) {
	        state2[name] = value;
	      }
	    };
	    const actions = {
	      addRecentSearch({
	        commit,
	        dispatch,
	        state: state2
	      }, summoner) {
	        commit("ADD_SEARCH", summoner);
	        dispatch("updateSettings", {
	          name: "recentSearches",
	          value: state2.recentSearches,
	          isJson: true
	        });
	      },
	      removeRecentSearch({
	        commit,
	        dispatch,
	        state: state2
	      }, summoner) {
	        commit("REMOVE_SEARCH", summoner);
	        dispatch("updateSettings", {
	          name: "recentSearches",
	          value: state2.recentSearches,
	          isJson: true
	        });
	      },
	      updateFavorite({
	        commit,
	        dispatch,
	        state: state2
	      }, summoner) {
	        const alreadyFav = state2.favorites.find((s) => s.name === summoner.name && s.region === summoner.region);
	        if (alreadyFav) {
	          commit("REMOVE_FAVORITE", summoner);
	        } else {
	          if (state2.favorites.length >= 6) {
	            return dispatch("notification/add", {
	              type: "error",
	              message: "Too many favorite summoners."
	            }, {
	              root: true
	            });
	          }
	          commit("ADD_FAVORITE", summoner);
	          const searched = state2.recentSearches.find((s) => s.name === summoner.name && s.region === summoner.region);
	          if (searched) {
	            dispatch("removeRecentSearch", summoner);
	          }
	        }
	        dispatch("updateSettings", {
	          name: "favorites",
	          value: state2.favorites,
	          isJson: true
	        });
	      },
	      updatePercent({
	        commit
	      }, percent) {
	        if (typeof percent !== "boolean") {
	          percent = localStorage.getItem("settings-percent") === "true";
	        } else {
	          localStorage.setItem("settings-percent", percent);
	        }
	        commit("UPDATE_SETTING", {
	          name: "percent",
	          value: percent
	        });
	      },
	      updateSettings({
	        commit
	      }, {
	        name,
	        value,
	        isJson = false
	      }) {
	        if (!value) {
	          value = localStorage.getItem(name);
	          value = isJson ? JSON.parse(value) : value;
	          if (!value)
	            return;
	        } else {
	          localStorage.setItem(name, isJson ? JSON.stringify(value) : value);
	        }
	        commit("UPDATE_SETTING", {
	          name,
	          value
	        });
	      }
	    };
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    __webpack_require__.d(__webpack_exports__, "namespaced", function() {
	      return namespaced;
	    });
	    __webpack_require__.d(__webpack_exports__, "state", function() {
	      return state;
	    });
	    __webpack_require__.d(__webpack_exports__, "mutations", function() {
	      return mutations;
	    });
	    __webpack_require__.d(__webpack_exports__, "actions", function() {
	      return actions;
	    });
	    __webpack_require__.d(__webpack_exports__, "getters", function() {
	      return getters;
	    });
	    var _helpers_summoner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
	    var _helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
	    const namespaced = true;
	    const state = () => ({
	      basic: {
	        account: {},
	        currentSeason: null,
	        currentGameMode: null,
	        matchList: [],
	        ranked: {},
	        scores: {},
	        recentActivity: [],
	        seasons: [],
	        gamemodes: [],
	        status: ""
	      },
	      overview: {
	        NB_LOAD_GAMES: 10,
	        matches: [],
	        stats: {},
	        loaded: false,
	        matchesLoading: false,
	        moreMatchesToFetch: true
	      },
	      champions: {
	        list: [],
	        championsLoaded: false
	      },
	      records: {
	        list: {},
	        recordsLoaded: false
	      },
	      scores: {
	        score: 0,
	        tierScoreLoaded: false
	      },
	      live: {
	        match: {},
	        liveLoaded: false,
	        playing: false
	      }
	    });
	    const mutations = {
	      BASIC_REQUEST(state2) {
	        state2.basic.status = "loading";
	        state2.basic.currentSeason = null;
	        state2.champions.championsLoaded = false;
	        state2.records.recordsLoaded = false;
	        state2.scores.tierScoreLoaded = false;
	        state2.overview.loaded = false;
	        state2.overview.moreMatchesToFetch = true;
	        state2.live.liveLoaded = false;
	      },
	      CHAMPIONS_NOT_FOUND(state2) {
	        state2.champions.championsLoaded = false;
	      },
	      CHAMPIONS_FOUND(state2, {
	        champions
	      }) {
	        state2.champions.list = champions;
	        state2.champions.championsLoaded = true;
	      },
	      KEEP_LAST_X_MATCHES(state2, number) {
	        state2.overview.matches = state2.overview.matches.slice(0, number);
	      },
	      LIVE_FOUND(state2, {
	        live
	      }) {
	        state2.live.match = live;
	        state2.live.liveLoaded = true;
	      },
	      LIVE_LOADING(state2) {
	        state2.live.playing = true;
	        state2.live.liveLoaded = false;
	      },
	      MATCHES_LOADING(state2) {
	        state2.overview.matchesLoading = true;
	      },
	      MATCHES_FOUND(state2, {
	        newMatches,
	        stats
	      }) {
	        state2.overview.matchesLoading = false;
	        if (newMatches.length > 0) {
	          state2.basic.recentActivity = stats.recentActivity;
	          state2.overview.matches = [...state2.overview.matches, ...newMatches];
	          state2.overview.stats = stats;
	          state2.champions.championsLoaded = false;
	          state2.records.recordsLoaded = false;
	          state2.scores.tierScoreLoaded = false;
	        }
	        state2.overview.moreMatchesToFetch = newMatches.length >= state2.overview.NB_LOAD_GAMES - 1;
	      },
	      OVERVIEW_FOUND(state2, infos) {
	        state2.basic.recentActivity = infos.stats.recentActivity;
	        state2.overview.matches = infos.matches;
	        state2.overview.stats = infos.stats;
	        state2.overview.loaded = true;
	        state2.records.recordsLoaded = false;
	        state2.scores.tierScoreLoaded = false;
	        state2.overview.moreMatchesToFetch = infos.matches.length >= state2.overview.NB_LOAD_GAMES - 1;
	      },
	      RECORDS_FOUND(state2, {
	        records
	      }) {
	        state2.records.list = records;
	        state2.records.recordsLoaded = true;
	      },
	      TIERSCORE_FOUND(state2, {
	        scores
	      }) {
	        state2.scores = scores;
	        state2.scores.tierScoreLoaded = true;
	      },
	      SUMMONER_FOUND(state2, infos) {
	        state2.basic.account = infos.account;
	        state2.basic.matchList = infos.matchList;
	        state2.basic.ranked = infos.ranked;
	        state2.basic.recentActivity = infos.recentActivity;
	        state2.basic.scores = infos.scores;
	        state2.basic.seasons = infos.seasons.sort((a, b) => b - a);
	        state2.basic.gamemodes = infos.gamemodes;
	        state2.basic.status = "found";
	        state2.live.match = infos.current;
	        state2.live.playing = infos.playing;
	      },
	      SUMMONER_NOT_FOUND(state2) {
	        state2.basic.status = "error";
	      },
	      SUMMONER_NOT_PLAYING(state2) {
	        state2.live.match = {};
	        state2.live.playing = false;
	        state2.live.liveLoaded = false;
	      },
	      UPDATE_SEASON(state2, {
	        season,
	        gamemode
	      }) {
	        state2.basic.currentSeason = season;
	        state2.basic.currentGameMode = gamemode;
	        state2.overview.loaded = false;
	        state2.champions.championsLoaded = false;
	        state2.records.recordsLoaded = false;
	        state2.scores.tierScoreLoaded = false;
	      }
	    };
	    const actions = {
	      async basicRequest({
	        commit,
	        dispatch,
	        rootState
	      }, {
	        summoner,
	        region
	      }) {
	        const regionId = rootState.regionsList[region];
	        commit("BASIC_REQUEST");
	        try {
	          const resp = await this.$axios.$post(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["b"])() + "summoner/basic", {
	            summoner,
	            region: regionId
	          });
	          if (!resp) {
	            return commit("SUMMONER_NOT_FOUND");
	          }
	          const infos = Object(_helpers_summoner__WEBPACK_IMPORTED_MODULE_0__["a"])(resp);
	          commit("SUMMONER_FOUND", infos);
	          dispatch("settings/addRecentSearch", {
	            name: infos.account.name,
	            icon: infos.account.profileIconId,
	            region
	          }, {
	            root: true
	          });
	        } catch (error) {
	        }
	      },
	      championsNotLoaded({
	        commit
	      }) {
	        commit("CHAMPIONS_NOT_FOUND");
	      },
	      async championsRequest({
	        commit,
	        rootState
	      }, queue = null) {
	        const resp = await this.$axios.$post(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["b"])() + "summoner/champions", {
	          puuid: rootState.summoner.basic.account.puuid,
	          queue
	        });
	        commit("CHAMPIONS_FOUND", {
	          champions: resp
	        });
	      },
	      async liveMatchRequest({
	        commit,
	        rootState
	      }) {
	        commit("LIVE_LOADING");
	        const resp = await this.$axios.$post(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["b"])() + "summoner/live", {
	          id: rootState.summoner.basic.account.id,
	          region: rootState.regionsList[rootState.settings.region]
	        });
	        if (resp) {
	          commit("LIVE_FOUND", {
	            live: resp
	          });
	        } else {
	          commit("SUMMONER_NOT_PLAYING");
	        }
	      },
	      async moreMatches({
	        commit,
	        rootState
	      }) {
	        commit("MATCHES_LOADING");
	        if (!rootState.summoner.overview.matches.length)
	          return;
	        const lastMatchId = rootState.summoner.overview.matches[rootState.summoner.overview.matches.length - 1].matchId;
	        const resp = await this.$axios.$post(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["b"])() + "match", {
	          puuid: rootState.summoner.basic.account.puuid,
	          region: rootState.regionsList[rootState.settings.region],
	          lastMatchId,
	          queue: rootState.summoner.basic.currentGameMode ? rootState.summoner.basic.currentGameMode : ""
	        });
	        const newMatches = Object(_helpers_summoner__WEBPACK_IMPORTED_MODULE_0__["b"])(resp.matches, rootState.cdragon.runes);
	        commit("MATCHES_FOUND", {
	          newMatches,
	          stats: resp.stats
	        });
	      },
	      async overviewRequest({
	        commit,
	        rootState
	      }, gamemode = null) {
	        const resp = await this.$axios.$post(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["b"])() + "summoner/overview", {
	          puuid: rootState.summoner.basic.account.puuid,
	          accountId: rootState.summoner.basic.account.accountId,
	          region: rootState.regionsList[rootState.settings.region],
	          queue: gamemode ? String(gamemode) : ""
	        });
	        resp.matches = Object(_helpers_summoner__WEBPACK_IMPORTED_MODULE_0__["b"])(resp.matchesDetails, rootState.cdragon.runes);
	        commit("OVERVIEW_FOUND", resp);
	      },
	      async recordsRequest({
	        commit,
	        rootState
	      }) {
	        const resp = await this.$axios.$post(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["b"])() + "summoner/records", {
	          puuid: rootState.summoner.basic.account.puuid
	        });
	        const records = resp.length ? Object(_helpers_summoner__WEBPACK_IMPORTED_MODULE_0__["c"])(resp) : {};
	        commit("RECORDS_FOUND", {
	          records
	        });
	      },
	      async scoresRequest({
	        commit,
	        rootState
	      }) {
	        const resp = await this.$axios.$post(Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_1__["b"])() + "summoner/summonerscore", {
	          puuid: rootState.summoner.basic.account.puuid,
	          tier: rootState.summoner.basic.ranked.soloQ.tier
	        });
	        const scores = resp.summonerScores;
	        commit("TIERSCORE_FOUND", {
	          scores
	        });
	      },
	      sliceOverviewMatches({
	        commit
	      }, number) {
	        commit("KEEP_LAST_X_MATCHES", number);
	      },
	      updateSeason({
	        commit
	      }, season) {
	        commit("UPDATE_SEASON", {
	          season
	        });
	      }
	    };
	    const getters = {
	      matchesLoading: (state2) => state2.overview.matchesLoading,
	      overviewLoaded: (state2) => state2.overview.loaded,
	      playing: (state2) => state2.live.playing,
	      regionFilterApplied: (state2) => !!state2.basic.currentSeason,
	      summonerFound: (state2) => state2.basic.status === "found",
	      summonerNotFound: (state2) => state2.basic.status === "error",
	      summonerLoading: (state2) => state2.basic.status === "loading"
	    };
	  },
	  function(module2, __webpack_exports__, __webpack_require__) {
	    __webpack_require__.r(__webpack_exports__);
	    var static_namespaceObject = {};
	    __webpack_require__.r(static_namespaceObject);
	    __webpack_require__.d(static_namespaceObject, "getImage", function() {
	      return static_getImage;
	    });
	    __webpack_require__.d(static_namespaceObject, "supportsAlias", function() {
	      return static_supportsAlias;
	    });
	    var cloudinary_namespaceObject = {};
	    __webpack_require__.r(cloudinary_namespaceObject);
	    __webpack_require__.d(cloudinary_namespaceObject, "getImage", function() {
	      return cloudinary_getImage;
	    });
	    var vue_runtime = __webpack_require__(0);
	    var dist = __webpack_require__(3);
	    var _nuxt_middleware = __webpack_require__(11);
	    function createGetCounter(counterObject, defaultKey = "") {
	      return function getCounter(id = defaultKey) {
	        if (counterObject[id] === void 0) {
	          counterObject[id] = 0;
	        }
	        return counterObject[id]++;
	      };
	    }
	    function globalHandleError(error) {
	      if (vue_runtime["c"].config.errorHandler) {
	        vue_runtime["c"].config.errorHandler(error);
	      }
	    }
	    function interopDefault(promise) {
	      return promise.then((m) => m.default || m);
	    }
	    function hasFetch(vm) {
	      return vm.$options && typeof vm.$options.fetch === "function" && !vm.$options.fetch.length;
	    }
	    function purifyData(data) {
	      {
	        return data;
	      }
	    }
	    function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
	      const children = vm.$children || [];
	      for (const child of children) {
	        if (child.$fetch) {
	          instances.push(child);
	        }
	        if (child.$children) {
	          getChildrenComponentInstancesUsingFetch(child, instances);
	        }
	      }
	      return instances;
	    }
	    function applyAsyncData(Component, asyncData) {
	      if (!asyncData && Component.options.__hasNuxtData) {
	        return;
	      }
	      const ComponentData = Component.options._originDataFn || Component.options.data || function() {
	        return {};
	      };
	      Component.options._originDataFn = ComponentData;
	      Component.options.data = function() {
	        const data = ComponentData.call(this, this);
	        if (this.$ssrContext) {
	          asyncData = this.$ssrContext.asyncData[Component.cid];
	        }
	        return {
	          ...data,
	          ...asyncData
	        };
	      };
	      Component.options.__hasNuxtData = true;
	      if (Component._Ctor && Component._Ctor.options) {
	        Component._Ctor.options.data = Component.options.data;
	      }
	    }
	    function sanitizeComponent(Component) {
	      if (Component.options && Component._Ctor === Component) {
	        return Component;
	      }
	      if (!Component.options) {
	        Component = vue_runtime["c"].extend(Component);
	        Component._Ctor = Component;
	      } else {
	        Component._Ctor = Component;
	        Component.extendOptions = Component.options;
	      }
	      if (!Component.options.name && Component.options.__file) {
	        Component.options.name = Component.options.__file;
	      }
	      return Component;
	    }
	    function getMatchedComponents(route, matches = false, prop = "components") {
	      return Array.prototype.concat.apply([], route.matched.map((m, index) => {
	        return Object.keys(m[prop]).map((key) => {
	          matches && matches.push(index);
	          return m[prop][key];
	        });
	      }));
	    }
	    function getMatchedComponentsInstances(route, matches = false) {
	      return getMatchedComponents(route, matches, "instances");
	    }
	    function flatMapComponents(route, fn) {
	      return Array.prototype.concat.apply([], route.matched.map((m, index) => {
	        return Object.keys(m.components).reduce((promises, key) => {
	          if (m.components[key]) {
	            promises.push(fn(m.components[key], m.instances[key], m, key, index));
	          } else {
	            delete m.components[key];
	          }
	          return promises;
	        }, []);
	      }));
	    }
	    function resolveRouteComponents(route, fn) {
	      return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
	        if (typeof Component === "function" && !Component.options) {
	          try {
	            Component = await Component();
	          } catch (error) {
	            if (error && error.name === "ChunkLoadError" && false) {
	              const timeNow = Date.now();
	              const previousReloadTime = parseInt(window.sessionStorage.getItem("nuxt-reload"));
	              if (!previousReloadTime || previousReloadTime + 6e4 < timeNow) {
	                window.sessionStorage.setItem("nuxt-reload", timeNow);
	                window.location.reload(true);
	              }
	            }
	            throw error;
	          }
	        }
	        match.components[key] = Component = sanitizeComponent(Component);
	        return typeof fn === "function" ? fn(Component, instance, match, key) : Component;
	      }));
	    }
	    async function getRouteData(route) {
	      if (!route) {
	        return;
	      }
	      await resolveRouteComponents(route);
	      return {
	        ...route,
	        meta: getMatchedComponents(route).map((Component, index) => {
	          return {
	            ...Component.options.meta,
	            ...(route.matched[index] || {}).meta
	          };
	        })
	      };
	    }
	    async function setContext(app, context) {
	      if (!app.context) {
	        app.context = {
	          isStatic: false,
	          isDev: false,
	          isHMR: false,
	          app,
	          store: app.store,
	          payload: context.payload,
	          error: context.error,
	          base: app.router.options.base,
	          env: {
	            "SITE_URL": "https://zem.gg",
	            "API_URL": "https://api.zem.gg",
	            "LOCAL_API_URL": "http://localhost:3333",
	            "SITE_NAME": "ZEM.GG",
	            "SITE_TITLE_FIX": "\uB864 \uC804\uC801 \uAC80\uC0C9 ZEM.GG"
	          }
	        };
	        if (context.req) {
	          app.context.req = context.req;
	        }
	        if (context.res) {
	          app.context.res = context.res;
	        }
	        if (context.ssrContext) {
	          app.context.ssrContext = context.ssrContext;
	        }
	        app.context.redirect = (status, path, query) => {
	          if (!status) {
	            return;
	          }
	          app.context._redirected = true;
	          let pathType = typeof path;
	          if (typeof status !== "number" && (pathType === "undefined" || pathType === "object")) {
	            query = path || {};
	            path = status;
	            pathType = typeof path;
	            status = 302;
	          }
	          if (pathType === "object") {
	            path = app.router.resolve(path).route.fullPath;
	          }
	          if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
	            app.context.next({
	              path,
	              query,
	              status
	            });
	          } else {
	            path = Object(dist["j"])(path, query);
	            {
	              app.context.next({
	                path,
	                status
	              });
	            }
	          }
	        };
	        {
	          app.context.beforeNuxtRender = (fn) => context.beforeRenderFns.push(fn);
	          app.context.beforeSerialize = (fn) => context.beforeSerializeFns.push(fn);
	        }
	      }
	      const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
	      if (context.route) {
	        app.context.route = currentRouteData;
	      }
	      if (context.from) {
	        app.context.from = fromRouteData;
	      }
	      app.context.next = context.next;
	      app.context._redirected = false;
	      app.context._errored = false;
	      app.context.isHMR = false;
	      app.context.params = app.context.route.params || {};
	      app.context.query = app.context.route.query || {};
	    }
	    function middlewareSeries(promises, appContext) {
	      if (!promises.length || appContext._redirected || appContext._errored) {
	        return Promise.resolve();
	      }
	      return promisify(promises[0], appContext).then(() => {
	        return middlewareSeries(promises.slice(1), appContext);
	      });
	    }
	    function promisify(fn, context) {
	      let promise;
	      if (fn.length === 2) {
	        promise = new Promise((resolve) => {
	          fn(context, function(err, data) {
	            if (err) {
	              context.error(err);
	            }
	            data = data || {};
	            resolve(data);
	          });
	        });
	      } else {
	        promise = fn(context);
	      }
	      if (promise && promise instanceof Promise && typeof promise.then === "function") {
	        return promise;
	      }
	      return Promise.resolve(promise);
	    }
	    function getLocation(base, mode) {
	      if (mode === "hash") {
	        return window.location.hash.replace(/^#\//, "");
	      }
	      base = decodeURI(base).slice(0, -1);
	      let path = decodeURI(window.location.pathname);
	      if (base && path.startsWith(base)) {
	        path = path.slice(base.length);
	      }
	      const fullPath = (path || "/") + window.location.search + window.location.hash;
	      return Object(dist["g"])(fullPath);
	    }
	    function compile(str, options) {
	      return tokensToFunction(parse(str, options), options);
	    }
	    function normalizeError(err) {
	      let message;
	      if (!(err.message || typeof err === "string")) {
	        try {
	          message = JSON.stringify(err, null, 2);
	        } catch (e) {
	          message = `[${err.constructor.name}]`;
	        }
	      } else {
	        message = err.message || err;
	      }
	      return {
	        ...err,
	        message,
	        statusCode: err.statusCode || err.status || err.response && err.response.status || 500
	      };
	    }
	    const PATH_REGEXP = new RegExp([
	      "(\\\\.)",
	      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
	    ].join("|"), "g");
	    function parse(str, options) {
	      const tokens = [];
	      let key = 0;
	      let index = 0;
	      let path = "";
	      const defaultDelimiter = options && options.delimiter || "/";
	      let res;
	      while ((res = PATH_REGEXP.exec(str)) != null) {
	        const m = res[0];
	        const escaped = res[1];
	        const offset = res.index;
	        path += str.slice(index, offset);
	        index = offset + m.length;
	        if (escaped) {
	          path += escaped[1];
	          continue;
	        }
	        const next = str[index];
	        const prefix = res[2];
	        const name = res[3];
	        const capture = res[4];
	        const group = res[5];
	        const modifier = res[6];
	        const asterisk = res[7];
	        if (path) {
	          tokens.push(path);
	          path = "";
	        }
	        const partial = prefix != null && next != null && next !== prefix;
	        const repeat = modifier === "+" || modifier === "*";
	        const optional = modifier === "?" || modifier === "*";
	        const delimiter = res[2] || defaultDelimiter;
	        const pattern = capture || group;
	        tokens.push({
	          name: name || key++,
	          prefix: prefix || "",
	          delimiter,
	          optional,
	          repeat,
	          partial,
	          asterisk: Boolean(asterisk),
	          pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
	        });
	      }
	      if (index < str.length) {
	        path += str.substr(index);
	      }
	      if (path) {
	        tokens.push(path);
	      }
	      return tokens;
	    }
	    function encodeURIComponentPretty(str, slashAllowed) {
	      const re = slashAllowed ? /[?#]/g : /[/?#]/g;
	      return encodeURI(str).replace(re, (c) => {
	        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
	      });
	    }
	    function encodeAsterisk(str) {
	      return encodeURIComponentPretty(str, true);
	    }
	    function escapeString(str) {
	      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
	    }
	    function escapeGroup(group) {
	      return group.replace(/([=!:$/()])/g, "\\$1");
	    }
	    function tokensToFunction(tokens, options) {
	      const matches = new Array(tokens.length);
	      for (let i = 0; i < tokens.length; i++) {
	        if (typeof tokens[i] === "object") {
	          matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", utils_flags(options));
	        }
	      }
	      return function(obj, opts) {
	        let path = "";
	        const data = obj || {};
	        const options2 = opts || {};
	        const encode2 = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
	        for (let i = 0; i < tokens.length; i++) {
	          const token = tokens[i];
	          if (typeof token === "string") {
	            path += token;
	            continue;
	          }
	          const value = data[token.name || "pathMatch"];
	          let segment;
	          if (value == null) {
	            if (token.optional) {
	              if (token.partial) {
	                path += token.prefix;
	              }
	              continue;
	            } else {
	              throw new TypeError('Expected "' + token.name + '" to be defined');
	            }
	          }
	          if (Array.isArray(value)) {
	            if (!token.repeat) {
	              throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
	            }
	            if (value.length === 0) {
	              if (token.optional) {
	                continue;
	              } else {
	                throw new TypeError('Expected "' + token.name + '" to not be empty');
	              }
	            }
	            for (let j = 0; j < value.length; j++) {
	              segment = encode2(value[j]);
	              if (!matches[i].test(segment)) {
	                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
	              }
	              path += (j === 0 ? token.prefix : token.delimiter) + segment;
	            }
	            continue;
	          }
	          segment = token.asterisk ? encodeAsterisk(value) : encode2(value);
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	          }
	          path += token.prefix + segment;
	        }
	        return path;
	      };
	    }
	    function utils_flags(options) {
	      return options && options.sensitive ? "" : "i";
	    }
	    function addLifecycleHook(vm, hook, fn) {
	      if (!vm.$options[hook]) {
	        vm.$options[hook] = [];
	      }
	      if (!vm.$options[hook].includes(fn)) {
	        vm.$options[hook].push(fn);
	      }
	    }
	    dist["f"];
	    dist["l"];
	    dist["e"];
	    async function serverPrefetch() {
	      if (!this._fetchOnServer) {
	        return;
	      }
	      try {
	        await this.$options.fetch.call(this);
	      } catch (err) {
	        this.$fetchState.error = normalizeError(err);
	      }
	      this.$fetchState.pending = false;
	      this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters[""]++;
	      const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
	      attrs["data-fetch-key"] = this._fetchKey;
	      this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
	        _error: this.$fetchState.error
	      } : purifyData(this._data);
	    }
	    var fetch_server = {
	      created() {
	        if (!hasFetch(this)) {
	          return;
	        }
	        if (typeof this.$options.fetchOnServer === "function") {
	          this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
	        } else {
	          this._fetchOnServer = this.$options.fetchOnServer !== false;
	        }
	        const defaultKey = this.$options._scopeId || this.$options.name || "";
	        const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
	        if (typeof this.$options.fetchKey === "function") {
	          this._fetchKey = this.$options.fetchKey.call(this, getCounter);
	        } else {
	          const key = "string" === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
	          this._fetchKey = key ? key + ":" + getCounter(key) : String(getCounter(key));
	        }
	        this.$fetch = () => {
	        };
	        vue_runtime["c"].util.defineReactive(this, "$fetchState", {
	          pending: true,
	          error: null,
	          timestamp: Date.now()
	        });
	        addLifecycleHook(this, "serverPrefetch", serverPrefetch);
	      }
	    };
	    var vuex = __webpack_require__(2);
	    var vue_meta_common = __webpack_require__(35);
	    var vue_meta_common_default = /* @__PURE__ */ __webpack_require__.n(vue_meta_common);
	    var vue_client_only_common = __webpack_require__(20);
	    var vue_client_only_common_default = /* @__PURE__ */ __webpack_require__.n(vue_client_only_common);
	    var vue_no_ssr_common = __webpack_require__(15);
	    var vue_no_ssr_common_default = /* @__PURE__ */ __webpack_require__.n(vue_no_ssr_common);
	    function extend(a, b) {
	      for (var key in b) {
	        a[key] = b[key];
	      }
	      return a;
	    }
	    var encodeReserveRE = /[!'()*]/g;
	    var encodeReserveReplacer = function(c) {
	      return "%" + c.charCodeAt(0).toString(16);
	    };
	    var commaRE = /%2C/g;
	    var encode = function(str) {
	      return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ",");
	    };
	    function decode(str) {
	      try {
	        return decodeURIComponent(str);
	      } catch (err) {
	      }
	      return str;
	    }
	    function resolveQuery(query, extraQuery, _parseQuery) {
	      if (extraQuery === void 0)
	        extraQuery = {};
	      var parse2 = _parseQuery || parseQuery;
	      var parsedQuery;
	      try {
	        parsedQuery = parse2(query || "");
	      } catch (e) {
	        parsedQuery = {};
	      }
	      for (var key in extraQuery) {
	        var value = extraQuery[key];
	        parsedQuery[key] = Array.isArray(value) ? value.map(castQueryParamValue) : castQueryParamValue(value);
	      }
	      return parsedQuery;
	    }
	    var castQueryParamValue = function(value) {
	      return value == null || typeof value === "object" ? value : String(value);
	    };
	    function parseQuery(query) {
	      var res = {};
	      query = query.trim().replace(/^(\?|#|&)/, "");
	      if (!query) {
	        return res;
	      }
	      query.split("&").forEach(function(param) {
	        var parts = param.replace(/\+/g, " ").split("=");
	        var key = decode(parts.shift());
	        var val = parts.length > 0 ? decode(parts.join("=")) : null;
	        if (res[key] === void 0) {
	          res[key] = val;
	        } else if (Array.isArray(res[key])) {
	          res[key].push(val);
	        } else {
	          res[key] = [res[key], val];
	        }
	      });
	      return res;
	    }
	    function stringifyQuery(obj) {
	      var res = obj ? Object.keys(obj).map(function(key) {
	        var val = obj[key];
	        if (val === void 0) {
	          return "";
	        }
	        if (val === null) {
	          return encode(key);
	        }
	        if (Array.isArray(val)) {
	          var result = [];
	          val.forEach(function(val2) {
	            if (val2 === void 0) {
	              return;
	            }
	            if (val2 === null) {
	              result.push(encode(key));
	            } else {
	              result.push(encode(key) + "=" + encode(val2));
	            }
	          });
	          return result.join("&");
	        }
	        return encode(key) + "=" + encode(val);
	      }).filter(function(x) {
	        return x.length > 0;
	      }).join("&") : null;
	      return res ? "?" + res : "";
	    }
	    var trailingSlashRE = /\/?$/;
	    function createRoute(record, location, redirectedFrom, router) {
	      var stringifyQuery2 = router && router.options.stringifyQuery;
	      var query = location.query || {};
	      try {
	        query = clone(query);
	      } catch (e) {
	      }
	      var route = {
	        name: location.name || record && record.name,
	        meta: record && record.meta || {},
	        path: location.path || "/",
	        hash: location.hash || "",
	        query,
	        params: location.params || {},
	        fullPath: getFullPath(location, stringifyQuery2),
	        matched: record ? formatMatch(record) : []
	      };
	      if (redirectedFrom) {
	        route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery2);
	      }
	      return Object.freeze(route);
	    }
	    function clone(value) {
	      if (Array.isArray(value)) {
	        return value.map(clone);
	      } else if (value && typeof value === "object") {
	        var res = {};
	        for (var key in value) {
	          res[key] = clone(value[key]);
	        }
	        return res;
	      } else {
	        return value;
	      }
	    }
	    var START = createRoute(null, {
	      path: "/"
	    });
	    function formatMatch(record) {
	      var res = [];
	      while (record) {
	        res.unshift(record);
	        record = record.parent;
	      }
	      return res;
	    }
	    function getFullPath(ref, _stringifyQuery) {
	      var path = ref.path;
	      var query = ref.query;
	      if (query === void 0)
	        query = {};
	      var hash = ref.hash;
	      if (hash === void 0)
	        hash = "";
	      var stringify = _stringifyQuery || stringifyQuery;
	      return (path || "/") + stringify(query) + hash;
	    }
	    function isSameRoute(a, b, onlyPath) {
	      if (b === START) {
	        return a === b;
	      } else if (!b) {
	        return false;
	      } else if (a.path && b.path) {
	        return a.path.replace(trailingSlashRE, "") === b.path.replace(trailingSlashRE, "") && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query));
	      } else if (a.name && b.name) {
	        return a.name === b.name && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params));
	      } else {
	        return false;
	      }
	    }
	    function isObjectEqual(a, b) {
	      if (a === void 0)
	        a = {};
	      if (b === void 0)
	        b = {};
	      if (!a || !b) {
	        return a === b;
	      }
	      var aKeys = Object.keys(a).sort();
	      var bKeys = Object.keys(b).sort();
	      if (aKeys.length !== bKeys.length) {
	        return false;
	      }
	      return aKeys.every(function(key, i) {
	        var aVal = a[key];
	        var bKey = bKeys[i];
	        if (bKey !== key) {
	          return false;
	        }
	        var bVal = b[key];
	        if (aVal == null || bVal == null) {
	          return aVal === bVal;
	        }
	        if (typeof aVal === "object" && typeof bVal === "object") {
	          return isObjectEqual(aVal, bVal);
	        }
	        return String(aVal) === String(bVal);
	      });
	    }
	    function isIncludedRoute(current, target) {
	      return current.path.replace(trailingSlashRE, "/").indexOf(target.path.replace(trailingSlashRE, "/")) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
	    }
	    function queryIncludes(current, target) {
	      for (var key in target) {
	        if (!(key in current)) {
	          return false;
	        }
	      }
	      return true;
	    }
	    function handleRouteEntered(route) {
	      for (var i = 0; i < route.matched.length; i++) {
	        var record = route.matched[i];
	        for (var name in record.instances) {
	          var instance = record.instances[name];
	          var cbs = record.enteredCbs[name];
	          if (!instance || !cbs) {
	            continue;
	          }
	          delete record.enteredCbs[name];
	          for (var i$1 = 0; i$1 < cbs.length; i$1++) {
	            if (!instance._isBeingDestroyed) {
	              cbs[i$1](instance);
	            }
	          }
	        }
	      }
	    }
	    var View = {
	      name: "RouterView",
	      functional: true,
	      props: {
	        name: {
	          type: String,
	          default: "default"
	        }
	      },
	      render: function render2(_, ref) {
	        var props = ref.props;
	        var children = ref.children;
	        var parent = ref.parent;
	        var data = ref.data;
	        data.routerView = true;
	        var h = parent.$createElement;
	        var name = props.name;
	        var route = parent.$route;
	        var cache = parent._routerViewCache || (parent._routerViewCache = {});
	        var depth = 0;
	        var inactive = false;
	        while (parent && parent._routerRoot !== parent) {
	          var vnodeData = parent.$vnode ? parent.$vnode.data : {};
	          if (vnodeData.routerView) {
	            depth++;
	          }
	          if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
	            inactive = true;
	          }
	          parent = parent.$parent;
	        }
	        data.routerViewDepth = depth;
	        if (inactive) {
	          var cachedData = cache[name];
	          var cachedComponent = cachedData && cachedData.component;
	          if (cachedComponent) {
	            if (cachedData.configProps) {
	              fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
	            }
	            return h(cachedComponent, data, children);
	          } else {
	            return h();
	          }
	        }
	        var matched = route.matched[depth];
	        var component = matched && matched.components[name];
	        if (!matched || !component) {
	          cache[name] = null;
	          return h();
	        }
	        cache[name] = {
	          component
	        };
	        data.registerRouteInstance = function(vm, val) {
	          var current = matched.instances[name];
	          if (val && current !== vm || !val && current === vm) {
	            matched.instances[name] = val;
	          }
	        };
	        (data.hook || (data.hook = {})).prepatch = function(_2, vnode) {
	          matched.instances[name] = vnode.componentInstance;
	        };
	        data.hook.init = function(vnode) {
	          if (vnode.data.keepAlive && vnode.componentInstance && vnode.componentInstance !== matched.instances[name]) {
	            matched.instances[name] = vnode.componentInstance;
	          }
	          handleRouteEntered(route);
	        };
	        var configProps = matched.props && matched.props[name];
	        if (configProps) {
	          extend(cache[name], {
	            route,
	            configProps
	          });
	          fillPropsinData(component, data, route, configProps);
	        }
	        return h(component, data, children);
	      }
	    };
	    function fillPropsinData(component, data, route, configProps) {
	      var propsToPass = data.props = resolveProps(route, configProps);
	      if (propsToPass) {
	        propsToPass = data.props = extend({}, propsToPass);
	        var attrs = data.attrs = data.attrs || {};
	        for (var key in propsToPass) {
	          if (!component.props || !(key in component.props)) {
	            attrs[key] = propsToPass[key];
	            delete propsToPass[key];
	          }
	        }
	      }
	    }
	    function resolveProps(route, config) {
	      switch (typeof config) {
	        case "undefined":
	          return;
	        case "object":
	          return config;
	        case "function":
	          return config(route);
	        case "boolean":
	          return config ? route.params : void 0;
	      }
	    }
	    function resolvePath(relative, base, append) {
	      var firstChar = relative.charAt(0);
	      if (firstChar === "/") {
	        return relative;
	      }
	      if (firstChar === "?" || firstChar === "#") {
	        return base + relative;
	      }
	      var stack = base.split("/");
	      if (!append || !stack[stack.length - 1]) {
	        stack.pop();
	      }
	      var segments = relative.replace(/^\//, "").split("/");
	      for (var i = 0; i < segments.length; i++) {
	        var segment = segments[i];
	        if (segment === "..") {
	          stack.pop();
	        } else if (segment !== ".") {
	          stack.push(segment);
	        }
	      }
	      if (stack[0] !== "") {
	        stack.unshift("");
	      }
	      return stack.join("/");
	    }
	    function parsePath(path) {
	      var hash = "";
	      var query = "";
	      var hashIndex = path.indexOf("#");
	      if (hashIndex >= 0) {
	        hash = path.slice(hashIndex);
	        path = path.slice(0, hashIndex);
	      }
	      var queryIndex = path.indexOf("?");
	      if (queryIndex >= 0) {
	        query = path.slice(queryIndex + 1);
	        path = path.slice(0, queryIndex);
	      }
	      return {
	        path,
	        query,
	        hash
	      };
	    }
	    function cleanPath(path) {
	      return path.replace(/\/(?:\s*\/)+/g, "/");
	    }
	    var isarray = Array.isArray || function(arr) {
	      return Object.prototype.toString.call(arr) == "[object Array]";
	    };
	    var pathToRegexp_1 = pathToRegexp;
	    var parse_1 = vue_router_esm_parse;
	    var compile_1 = vue_router_esm_compile;
	    var tokensToFunction_1 = vue_router_esm_tokensToFunction;
	    var tokensToRegExp_1 = tokensToRegExp;
	    var vue_router_esm_PATH_REGEXP = new RegExp([
	      "(\\\\.)",
	      "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
	    ].join("|"), "g");
	    function vue_router_esm_parse(str, options) {
	      var tokens = [];
	      var key = 0;
	      var index = 0;
	      var path = "";
	      var defaultDelimiter = options && options.delimiter || "/";
	      var res;
	      while ((res = vue_router_esm_PATH_REGEXP.exec(str)) != null) {
	        var m = res[0];
	        var escaped = res[1];
	        var offset = res.index;
	        path += str.slice(index, offset);
	        index = offset + m.length;
	        if (escaped) {
	          path += escaped[1];
	          continue;
	        }
	        var next = str[index];
	        var prefix = res[2];
	        var name = res[3];
	        var capture = res[4];
	        var group = res[5];
	        var modifier = res[6];
	        var asterisk = res[7];
	        if (path) {
	          tokens.push(path);
	          path = "";
	        }
	        var partial = prefix != null && next != null && next !== prefix;
	        var repeat = modifier === "+" || modifier === "*";
	        var optional = modifier === "?" || modifier === "*";
	        var delimiter = res[2] || defaultDelimiter;
	        var pattern = capture || group;
	        tokens.push({
	          name: name || key++,
	          prefix: prefix || "",
	          delimiter,
	          optional,
	          repeat,
	          partial,
	          asterisk: !!asterisk,
	          pattern: pattern ? vue_router_esm_escapeGroup(pattern) : asterisk ? ".*" : "[^" + vue_router_esm_escapeString(delimiter) + "]+?"
	        });
	      }
	      if (index < str.length) {
	        path += str.substr(index);
	      }
	      if (path) {
	        tokens.push(path);
	      }
	      return tokens;
	    }
	    function vue_router_esm_compile(str, options) {
	      return vue_router_esm_tokensToFunction(vue_router_esm_parse(str, options), options);
	    }
	    function vue_router_esm_encodeURIComponentPretty(str) {
	      return encodeURI(str).replace(/[\/?#]/g, function(c) {
	        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
	      });
	    }
	    function vue_router_esm_encodeAsterisk(str) {
	      return encodeURI(str).replace(/[?#]/g, function(c) {
	        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
	      });
	    }
	    function vue_router_esm_tokensToFunction(tokens, options) {
	      var matches = new Array(tokens.length);
	      for (var i = 0; i < tokens.length; i++) {
	        if (typeof tokens[i] === "object") {
	          matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", vue_router_esm_flags(options));
	        }
	      }
	      return function(obj, opts) {
	        var path = "";
	        var data = obj || {};
	        var options2 = opts || {};
	        var encode2 = options2.pretty ? vue_router_esm_encodeURIComponentPretty : encodeURIComponent;
	        for (var i2 = 0; i2 < tokens.length; i2++) {
	          var token = tokens[i2];
	          if (typeof token === "string") {
	            path += token;
	            continue;
	          }
	          var value = data[token.name];
	          var segment;
	          if (value == null) {
	            if (token.optional) {
	              if (token.partial) {
	                path += token.prefix;
	              }
	              continue;
	            } else {
	              throw new TypeError('Expected "' + token.name + '" to be defined');
	            }
	          }
	          if (isarray(value)) {
	            if (!token.repeat) {
	              throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
	            }
	            if (value.length === 0) {
	              if (token.optional) {
	                continue;
	              } else {
	                throw new TypeError('Expected "' + token.name + '" to not be empty');
	              }
	            }
	            for (var j = 0; j < value.length; j++) {
	              segment = encode2(value[j]);
	              if (!matches[i2].test(segment)) {
	                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
	              }
	              path += (j === 0 ? token.prefix : token.delimiter) + segment;
	            }
	            continue;
	          }
	          segment = token.asterisk ? vue_router_esm_encodeAsterisk(value) : encode2(value);
	          if (!matches[i2].test(segment)) {
	            throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	          }
	          path += token.prefix + segment;
	        }
	        return path;
	      };
	    }
	    function vue_router_esm_escapeString(str) {
	      return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
	    }
	    function vue_router_esm_escapeGroup(group) {
	      return group.replace(/([=!:$\/()])/g, "\\$1");
	    }
	    function attachKeys(re, keys) {
	      re.keys = keys;
	      return re;
	    }
	    function vue_router_esm_flags(options) {
	      return options && options.sensitive ? "" : "i";
	    }
	    function regexpToRegexp(path, keys) {
	      var groups = path.source.match(/\((?!\?)/g);
	      if (groups) {
	        for (var i = 0; i < groups.length; i++) {
	          keys.push({
	            name: i,
	            prefix: null,
	            delimiter: null,
	            optional: false,
	            repeat: false,
	            partial: false,
	            asterisk: false,
	            pattern: null
	          });
	        }
	      }
	      return attachKeys(path, keys);
	    }
	    function arrayToRegexp(path, keys, options) {
	      var parts = [];
	      for (var i = 0; i < path.length; i++) {
	        parts.push(pathToRegexp(path[i], keys, options).source);
	      }
	      var regexp = new RegExp("(?:" + parts.join("|") + ")", vue_router_esm_flags(options));
	      return attachKeys(regexp, keys);
	    }
	    function stringToRegexp(path, keys, options) {
	      return tokensToRegExp(vue_router_esm_parse(path, options), keys, options);
	    }
	    function tokensToRegExp(tokens, keys, options) {
	      if (!isarray(keys)) {
	        options = keys || options;
	        keys = [];
	      }
	      options = options || {};
	      var strict = options.strict;
	      var end = options.end !== false;
	      var route = "";
	      for (var i = 0; i < tokens.length; i++) {
	        var token = tokens[i];
	        if (typeof token === "string") {
	          route += vue_router_esm_escapeString(token);
	        } else {
	          var prefix = vue_router_esm_escapeString(token.prefix);
	          var capture = "(?:" + token.pattern + ")";
	          keys.push(token);
	          if (token.repeat) {
	            capture += "(?:" + prefix + capture + ")*";
	          }
	          if (token.optional) {
	            if (!token.partial) {
	              capture = "(?:" + prefix + "(" + capture + "))?";
	            } else {
	              capture = prefix + "(" + capture + ")?";
	            }
	          } else {
	            capture = prefix + "(" + capture + ")";
	          }
	          route += capture;
	        }
	      }
	      var delimiter = vue_router_esm_escapeString(options.delimiter || "/");
	      var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
	      if (!strict) {
	        route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?";
	      }
	      if (end) {
	        route += "$";
	      } else {
	        route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
	      }
	      return attachKeys(new RegExp("^" + route, vue_router_esm_flags(options)), keys);
	    }
	    function pathToRegexp(path, keys, options) {
	      if (!isarray(keys)) {
	        options = keys || options;
	        keys = [];
	      }
	      options = options || {};
	      if (path instanceof RegExp) {
	        return regexpToRegexp(path, keys);
	      }
	      if (isarray(path)) {
	        return arrayToRegexp(path, keys, options);
	      }
	      return stringToRegexp(path, keys, options);
	    }
	    pathToRegexp_1.parse = parse_1;
	    pathToRegexp_1.compile = compile_1;
	    pathToRegexp_1.tokensToFunction = tokensToFunction_1;
	    pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
	    var regexpCompileCache = /* @__PURE__ */ Object.create(null);
	    function fillParams(path, params, routeMsg) {
	      params = params || {};
	      try {
	        var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));
	        if (typeof params.pathMatch === "string") {
	          params[0] = params.pathMatch;
	        }
	        return filler(params, {
	          pretty: true
	        });
	      } catch (e) {
	        return "";
	      } finally {
	        delete params[0];
	      }
	    }
	    function normalizeLocation(raw, current, append, router) {
	      var next = typeof raw === "string" ? {
	        path: raw
	      } : raw;
	      if (next._normalized) {
	        return next;
	      } else if (next.name) {
	        next = extend({}, raw);
	        var params = next.params;
	        if (params && typeof params === "object") {
	          next.params = extend({}, params);
	        }
	        return next;
	      }
	      if (!next.path && next.params && current) {
	        next = extend({}, next);
	        next._normalized = true;
	        var params$1 = extend(extend({}, current.params), next.params);
	        if (current.name) {
	          next.name = current.name;
	          next.params = params$1;
	        } else if (current.matched.length) {
	          var rawPath = current.matched[current.matched.length - 1].path;
	          next.path = fillParams(rawPath, params$1, "path " + current.path);
	        } else ;
	        return next;
	      }
	      var parsedPath = parsePath(next.path || "");
	      var basePath = current && current.path || "/";
	      var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;
	      var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);
	      var hash = next.hash || parsedPath.hash;
	      if (hash && hash.charAt(0) !== "#") {
	        hash = "#" + hash;
	      }
	      return {
	        _normalized: true,
	        path,
	        query,
	        hash
	      };
	    }
	    var toTypes = [String, Object];
	    var eventTypes = [String, Array];
	    var noop = function() {
	    };
	    var Link = {
	      name: "RouterLink",
	      props: {
	        to: {
	          type: toTypes,
	          required: true
	        },
	        tag: {
	          type: String,
	          default: "a"
	        },
	        custom: Boolean,
	        exact: Boolean,
	        exactPath: Boolean,
	        append: Boolean,
	        replace: Boolean,
	        activeClass: String,
	        exactActiveClass: String,
	        ariaCurrentValue: {
	          type: String,
	          default: "page"
	        },
	        event: {
	          type: eventTypes,
	          default: "click"
	        }
	      },
	      render: function render2(h) {
	        var this$1$1 = this;
	        var router = this.$router;
	        var current = this.$route;
	        var ref = router.resolve(this.to, current, this.append);
	        var location = ref.location;
	        var route = ref.route;
	        var href = ref.href;
	        var classes = {};
	        var globalActiveClass = router.options.linkActiveClass;
	        var globalExactActiveClass = router.options.linkExactActiveClass;
	        var activeClassFallback = globalActiveClass == null ? "router-link-active" : globalActiveClass;
	        var exactActiveClassFallback = globalExactActiveClass == null ? "router-link-exact-active" : globalExactActiveClass;
	        var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
	        var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
	        var compareTarget = route.redirectedFrom ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router) : route;
	        classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
	        classes[activeClass] = this.exact || this.exactPath ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);
	        var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;
	        var handler = function(e) {
	          if (guardEvent(e)) {
	            if (this$1$1.replace) {
	              router.replace(location, noop);
	            } else {
	              router.push(location, noop);
	            }
	          }
	        };
	        var on = {
	          click: guardEvent
	        };
	        if (Array.isArray(this.event)) {
	          this.event.forEach(function(e) {
	            on[e] = handler;
	          });
	        } else {
	          on[this.event] = handler;
	        }
	        var data = {
	          class: classes
	        };
	        var scopedSlot = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
	          href,
	          route,
	          navigate: handler,
	          isActive: classes[activeClass],
	          isExactActive: classes[exactActiveClass]
	        });
	        if (scopedSlot) {
	          if (scopedSlot.length === 1) {
	            return scopedSlot[0];
	          } else if (scopedSlot.length > 1 || !scopedSlot.length) {
	            return scopedSlot.length === 0 ? h() : h("span", {}, scopedSlot);
	          }
	        }
	        if (this.tag === "a") {
	          data.on = on;
	          data.attrs = {
	            href,
	            "aria-current": ariaCurrentValue
	          };
	        } else {
	          var a = findAnchor(this.$slots.default);
	          if (a) {
	            a.isStatic = false;
	            var aData = a.data = extend({}, a.data);
	            aData.on = aData.on || {};
	            for (var event in aData.on) {
	              var handler$1 = aData.on[event];
	              if (event in on) {
	                aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
	              }
	            }
	            for (var event$1 in on) {
	              if (event$1 in aData.on) {
	                aData.on[event$1].push(on[event$1]);
	              } else {
	                aData.on[event$1] = handler;
	              }
	            }
	            var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	            aAttrs.href = href;
	            aAttrs["aria-current"] = ariaCurrentValue;
	          } else {
	            data.on = on;
	          }
	        }
	        return h(this.tag, data, this.$slots.default);
	      }
	    };
	    function guardEvent(e) {
	      if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
	        return;
	      }
	      if (e.defaultPrevented) {
	        return;
	      }
	      if (e.button !== void 0 && e.button !== 0) {
	        return;
	      }
	      if (e.currentTarget && e.currentTarget.getAttribute) {
	        var target = e.currentTarget.getAttribute("target");
	        if (/\b_blank\b/i.test(target)) {
	          return;
	        }
	      }
	      if (e.preventDefault) {
	        e.preventDefault();
	      }
	      return true;
	    }
	    function findAnchor(children) {
	      if (children) {
	        var child;
	        for (var i = 0; i < children.length; i++) {
	          child = children[i];
	          if (child.tag === "a") {
	            return child;
	          }
	          if (child.children && (child = findAnchor(child.children))) {
	            return child;
	          }
	        }
	      }
	    }
	    var _Vue;
	    function install(Vue) {
	      if (install.installed && _Vue === Vue) {
	        return;
	      }
	      install.installed = true;
	      _Vue = Vue;
	      var isDef = function(v) {
	        return v !== void 0;
	      };
	      var registerInstance = function(vm, callVal) {
	        var i = vm.$options._parentVnode;
	        if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
	          i(vm, callVal);
	        }
	      };
	      Vue.mixin({
	        beforeCreate: function beforeCreate() {
	          if (isDef(this.$options.router)) {
	            this._routerRoot = this;
	            this._router = this.$options.router;
	            this._router.init(this);
	            Vue.util.defineReactive(this, "_route", this._router.history.current);
	          } else {
	            this._routerRoot = this.$parent && this.$parent._routerRoot || this;
	          }
	          registerInstance(this, this);
	        },
	        destroyed: function destroyed() {
	          registerInstance(this);
	        }
	      });
	      Object.defineProperty(Vue.prototype, "$router", {
	        get: function get() {
	          return this._routerRoot._router;
	        }
	      });
	      Object.defineProperty(Vue.prototype, "$route", {
	        get: function get() {
	          return this._routerRoot._route;
	        }
	      });
	      Vue.component("RouterView", View);
	      Vue.component("RouterLink", Link);
	      var strats = Vue.config.optionMergeStrategies;
	      strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
	    }
	    var inBrowser = false;
	    function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap, parentRoute) {
	      var pathList = oldPathList || [];
	      var pathMap = oldPathMap || /* @__PURE__ */ Object.create(null);
	      var nameMap = oldNameMap || /* @__PURE__ */ Object.create(null);
	      routes.forEach(function(route) {
	        addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
	      });
	      for (var i = 0, l = pathList.length; i < l; i++) {
	        if (pathList[i] === "*") {
	          pathList.push(pathList.splice(i, 1)[0]);
	          l--;
	          i--;
	        }
	      }
	      return {
	        pathList,
	        pathMap,
	        nameMap
	      };
	    }
	    function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
	      var path = route.path;
	      var name = route.name;
	      var pathToRegexpOptions = route.pathToRegexpOptions || {};
	      var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);
	      if (typeof route.caseSensitive === "boolean") {
	        pathToRegexpOptions.sensitive = route.caseSensitive;
	      }
	      var record = {
	        path: normalizedPath,
	        regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
	        components: route.components || {
	          default: route.component
	        },
	        alias: route.alias ? typeof route.alias === "string" ? [route.alias] : route.alias : [],
	        instances: {},
	        enteredCbs: {},
	        name,
	        parent,
	        matchAs,
	        redirect: route.redirect,
	        beforeEnter: route.beforeEnter,
	        meta: route.meta || {},
	        props: route.props == null ? {} : route.components ? route.props : {
	          default: route.props
	        }
	      };
	      if (route.children) {
	        route.children.forEach(function(child) {
	          var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : void 0;
	          addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
	        });
	      }
	      if (!pathMap[record.path]) {
	        pathList.push(record.path);
	        pathMap[record.path] = record;
	      }
	      if (route.alias !== void 0) {
	        var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
	        for (var i = 0; i < aliases.length; ++i) {
	          var alias = aliases[i];
	          var aliasRoute = {
	            path: alias,
	            children: route.children
	          };
	          addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || "/");
	        }
	      }
	      if (name) {
	        if (!nameMap[name]) {
	          nameMap[name] = record;
	        }
	      }
	    }
	    function compileRouteRegex(path, pathToRegexpOptions) {
	      var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
	      return regex;
	    }
	    function normalizePath(path, parent, strict) {
	      if (!strict) {
	        path = path.replace(/\/$/, "");
	      }
	      if (path[0] === "/") {
	        return path;
	      }
	      if (parent == null) {
	        return path;
	      }
	      return cleanPath(parent.path + "/" + path);
	    }
	    function createMatcher(routes, router) {
	      var ref = createRouteMap(routes);
	      var pathList = ref.pathList;
	      var pathMap = ref.pathMap;
	      var nameMap = ref.nameMap;
	      function addRoutes(routes2) {
	        createRouteMap(routes2, pathList, pathMap, nameMap);
	      }
	      function addRoute(parentOrRoute, route) {
	        var parent = typeof parentOrRoute !== "object" ? nameMap[parentOrRoute] : void 0;
	        createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent);
	        if (parent && parent.alias.length) {
	          createRouteMap(parent.alias.map(function(alias2) {
	            return {
	              path: alias2,
	              children: [route]
	            };
	          }), pathList, pathMap, nameMap, parent);
	        }
	      }
	      function getRoutes() {
	        return pathList.map(function(path) {
	          return pathMap[path];
	        });
	      }
	      function match(raw, currentRoute, redirectedFrom) {
	        var location = normalizeLocation(raw, currentRoute, false, router);
	        var name = location.name;
	        if (name) {
	          var record = nameMap[name];
	          if (!record) {
	            return _createRoute(null, location);
	          }
	          var paramNames = record.regex.keys.filter(function(key2) {
	            return !key2.optional;
	          }).map(function(key2) {
	            return key2.name;
	          });
	          if (typeof location.params !== "object") {
	            location.params = {};
	          }
	          if (currentRoute && typeof currentRoute.params === "object") {
	            for (var key in currentRoute.params) {
	              if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	                location.params[key] = currentRoute.params[key];
	              }
	            }
	          }
	          location.path = fillParams(record.path, location.params);
	          return _createRoute(record, location, redirectedFrom);
	        } else if (location.path) {
	          location.params = {};
	          for (var i = 0; i < pathList.length; i++) {
	            var path = pathList[i];
	            var record$1 = pathMap[path];
	            if (matchRoute(record$1.regex, location.path, location.params)) {
	              return _createRoute(record$1, location, redirectedFrom);
	            }
	          }
	        }
	        return _createRoute(null, location);
	      }
	      function redirect(record, location) {
	        var originalRedirect = record.redirect;
	        var redirect2 = typeof originalRedirect === "function" ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;
	        if (typeof redirect2 === "string") {
	          redirect2 = {
	            path: redirect2
	          };
	        }
	        if (!redirect2 || typeof redirect2 !== "object") {
	          return _createRoute(null, location);
	        }
	        var re = redirect2;
	        var name = re.name;
	        var path = re.path;
	        var query = location.query;
	        var hash = location.hash;
	        var params = location.params;
	        query = re.hasOwnProperty("query") ? re.query : query;
	        hash = re.hasOwnProperty("hash") ? re.hash : hash;
	        params = re.hasOwnProperty("params") ? re.params : params;
	        if (name) {
	          nameMap[name];
	          return match({
	            _normalized: true,
	            name,
	            query,
	            hash,
	            params
	          }, void 0, location);
	        } else if (path) {
	          var rawPath = resolveRecordPath(path, record);
	          var resolvedPath = fillParams(rawPath, params);
	          return match({
	            _normalized: true,
	            path: resolvedPath,
	            query,
	            hash
	          }, void 0, location);
	        } else {
	          return _createRoute(null, location);
	        }
	      }
	      function alias(record, location, matchAs) {
	        var aliasedPath = fillParams(matchAs, location.params);
	        var aliasedMatch = match({
	          _normalized: true,
	          path: aliasedPath
	        });
	        if (aliasedMatch) {
	          var matched = aliasedMatch.matched;
	          var aliasedRecord = matched[matched.length - 1];
	          location.params = aliasedMatch.params;
	          return _createRoute(aliasedRecord, location);
	        }
	        return _createRoute(null, location);
	      }
	      function _createRoute(record, location, redirectedFrom) {
	        if (record && record.redirect) {
	          return redirect(record, redirectedFrom || location);
	        }
	        if (record && record.matchAs) {
	          return alias(record, location, record.matchAs);
	        }
	        return createRoute(record, location, redirectedFrom, router);
	      }
	      return {
	        match,
	        addRoute,
	        getRoutes,
	        addRoutes
	      };
	    }
	    function matchRoute(regex, path, params) {
	      var m = path.match(regex);
	      if (!m) {
	        return false;
	      } else if (!params) {
	        return true;
	      }
	      for (var i = 1, len = m.length; i < len; ++i) {
	        var key = regex.keys[i - 1];
	        if (key) {
	          params[key.name || "pathMatch"] = typeof m[i] === "string" ? decode(m[i]) : m[i];
	        }
	      }
	      return true;
	    }
	    function resolveRecordPath(path, record) {
	      return resolvePath(path, record.parent ? record.parent.path : "/", true);
	    }
	    var Time = Date;
	    function genStateKey() {
	      return Time.now().toFixed(3);
	    }
	    var _key = genStateKey();
	    function getStateKey() {
	      return _key;
	    }
	    function setStateKey(key) {
	      return _key = key;
	    }
	    var positionStore = /* @__PURE__ */ Object.create(null);
	    function handleScroll(router, to, from, isPop) {
	      if (!router.app) {
	        return;
	      }
	      var behavior = router.options.scrollBehavior;
	      if (!behavior) {
	        return;
	      }
	      router.app.$nextTick(function() {
	        var position = getScrollPosition();
	        var shouldScroll = behavior.call(router, to, from, isPop ? position : null);
	        if (!shouldScroll) {
	          return;
	        }
	        if (typeof shouldScroll.then === "function") {
	          shouldScroll.then(function(shouldScroll2) {
	            scrollToPosition(shouldScroll2, position);
	          }).catch(function(err) {
	          });
	        } else {
	          scrollToPosition(shouldScroll, position);
	        }
	      });
	    }
	    function saveScrollPosition() {
	      var key = getStateKey();
	      if (key) {
	        positionStore[key] = {
	          x: window.pageXOffset,
	          y: window.pageYOffset
	        };
	      }
	    }
	    function getScrollPosition() {
	      var key = getStateKey();
	      if (key) {
	        return positionStore[key];
	      }
	    }
	    function getElementPosition(el, offset) {
	      var docEl = document.documentElement;
	      var docRect = docEl.getBoundingClientRect();
	      var elRect = el.getBoundingClientRect();
	      return {
	        x: elRect.left - docRect.left - offset.x,
	        y: elRect.top - docRect.top - offset.y
	      };
	    }
	    function isValidPosition(obj) {
	      return isNumber(obj.x) || isNumber(obj.y);
	    }
	    function normalizePosition(obj) {
	      return {
	        x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	        y: isNumber(obj.y) ? obj.y : window.pageYOffset
	      };
	    }
	    function normalizeOffset(obj) {
	      return {
	        x: isNumber(obj.x) ? obj.x : 0,
	        y: isNumber(obj.y) ? obj.y : 0
	      };
	    }
	    function isNumber(v) {
	      return typeof v === "number";
	    }
	    var hashStartsWithNumberRE = /^#\d/;
	    function scrollToPosition(shouldScroll, position) {
	      var isObject2 = typeof shouldScroll === "object";
	      if (isObject2 && typeof shouldScroll.selector === "string") {
	        var el = hashStartsWithNumberRE.test(shouldScroll.selector) ? document.getElementById(shouldScroll.selector.slice(1)) : document.querySelector(shouldScroll.selector);
	        if (el) {
	          var offset = shouldScroll.offset && typeof shouldScroll.offset === "object" ? shouldScroll.offset : {};
	          offset = normalizeOffset(offset);
	          position = getElementPosition(el, offset);
	        } else if (isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll);
	        }
	      } else if (isObject2 && isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	      if (position) {
	        if ("scrollBehavior" in document.documentElement.style) {
	          window.scrollTo({
	            left: position.x,
	            top: position.y,
	            behavior: shouldScroll.behavior
	          });
	        } else {
	          window.scrollTo(position.x, position.y);
	        }
	      }
	    }
	    var supportsPushState = inBrowser ;
	    function pushState(url, replace) {
	      saveScrollPosition();
	      var history = window.history;
	      try {
	        if (replace) {
	          var stateCopy = extend({}, history.state);
	          stateCopy.key = getStateKey();
	          history.replaceState(stateCopy, "", url);
	        } else {
	          history.pushState({
	            key: setStateKey(genStateKey())
	          }, "", url);
	        }
	      } catch (e) {
	        window.location[replace ? "replace" : "assign"](url);
	      }
	    }
	    function replaceState(url) {
	      pushState(url, true);
	    }
	    function runQueue(queue, fn, cb) {
	      var step = function(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          if (queue[index]) {
	            fn(queue[index], function() {
	              step(index + 1);
	            });
	          } else {
	            step(index + 1);
	          }
	        }
	      };
	      step(0);
	    }
	    var NavigationFailureType = {
	      redirected: 2,
	      aborted: 4,
	      cancelled: 8,
	      duplicated: 16
	    };
	    function createNavigationRedirectedError(from, to) {
	      return createRouterError(from, to, NavigationFailureType.redirected, 'Redirected when going from "' + from.fullPath + '" to "' + stringifyRoute(to) + '" via a navigation guard.');
	    }
	    function createNavigationDuplicatedError(from, to) {
	      var error = createRouterError(from, to, NavigationFailureType.duplicated, 'Avoided redundant navigation to current location: "' + from.fullPath + '".');
	      error.name = "NavigationDuplicated";
	      return error;
	    }
	    function createNavigationCancelledError(from, to) {
	      return createRouterError(from, to, NavigationFailureType.cancelled, 'Navigation cancelled from "' + from.fullPath + '" to "' + to.fullPath + '" with a new navigation.');
	    }
	    function createNavigationAbortedError(from, to) {
	      return createRouterError(from, to, NavigationFailureType.aborted, 'Navigation aborted from "' + from.fullPath + '" to "' + to.fullPath + '" via a navigation guard.');
	    }
	    function createRouterError(from, to, type, message) {
	      var error = new Error(message);
	      error._isRouter = true;
	      error.from = from;
	      error.to = to;
	      error.type = type;
	      return error;
	    }
	    var propertiesToLog = ["params", "query", "hash"];
	    function stringifyRoute(to) {
	      if (typeof to === "string") {
	        return to;
	      }
	      if ("path" in to) {
	        return to.path;
	      }
	      var location = {};
	      propertiesToLog.forEach(function(key) {
	        if (key in to) {
	          location[key] = to[key];
	        }
	      });
	      return JSON.stringify(location, null, 2);
	    }
	    function isError(err) {
	      return Object.prototype.toString.call(err).indexOf("Error") > -1;
	    }
	    function isNavigationFailure(err, errorType) {
	      return isError(err) && err._isRouter && (errorType == null || err.type === errorType);
	    }
	    function resolveAsyncComponents(matched) {
	      return function(to, from, next) {
	        var hasAsync = false;
	        var pending = 0;
	        var error = null;
	        vue_router_esm_flatMapComponents(matched, function(def, _, match, key) {
	          if (typeof def === "function" && def.cid === void 0) {
	            hasAsync = true;
	            pending++;
	            var resolve = once(function(resolvedDef) {
	              if (isESModule(resolvedDef)) {
	                resolvedDef = resolvedDef.default;
	              }
	              def.resolved = typeof resolvedDef === "function" ? resolvedDef : _Vue.extend(resolvedDef);
	              match.components[key] = resolvedDef;
	              pending--;
	              if (pending <= 0) {
	                next();
	              }
	            });
	            var reject = once(function(reason) {
	              var msg = "Failed to resolve async component " + key + ": " + reason;
	              if (!error) {
	                error = isError(reason) ? reason : new Error(msg);
	                next(error);
	              }
	            });
	            var res;
	            try {
	              res = def(resolve, reject);
	            } catch (e) {
	              reject(e);
	            }
	            if (res) {
	              if (typeof res.then === "function") {
	                res.then(resolve, reject);
	              } else {
	                var comp = res.component;
	                if (comp && typeof comp.then === "function") {
	                  comp.then(resolve, reject);
	                }
	              }
	            }
	          }
	        });
	        if (!hasAsync) {
	          next();
	        }
	      };
	    }
	    function vue_router_esm_flatMapComponents(matched, fn) {
	      return flatten(matched.map(function(m) {
	        return Object.keys(m.components).map(function(key) {
	          return fn(m.components[key], m.instances[key], m, key);
	        });
	      }));
	    }
	    function flatten(arr) {
	      return Array.prototype.concat.apply([], arr);
	    }
	    var hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
	    function isESModule(obj) {
	      return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
	    }
	    function once(fn) {
	      var called = false;
	      return function() {
	        var args = [], len = arguments.length;
	        while (len--)
	          args[len] = arguments[len];
	        if (called) {
	          return;
	        }
	        called = true;
	        return fn.apply(this, args);
	      };
	    }
	    var History = function History2(router, base) {
	      this.router = router;
	      this.base = normalizeBase(base);
	      this.current = START;
	      this.pending = null;
	      this.ready = false;
	      this.readyCbs = [];
	      this.readyErrorCbs = [];
	      this.errorCbs = [];
	      this.listeners = [];
	    };
	    History.prototype.listen = function listen(cb) {
	      this.cb = cb;
	    };
	    History.prototype.onReady = function onReady(cb, errorCb) {
	      if (this.ready) {
	        cb();
	      } else {
	        this.readyCbs.push(cb);
	        if (errorCb) {
	          this.readyErrorCbs.push(errorCb);
	        }
	      }
	    };
	    History.prototype.onError = function onError(errorCb) {
	      this.errorCbs.push(errorCb);
	    };
	    History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
	      var this$1$1 = this;
	      var route;
	      try {
	        route = this.router.match(location, this.current);
	      } catch (e) {
	        this.errorCbs.forEach(function(cb) {
	          cb(e);
	        });
	        throw e;
	      }
	      var prev = this.current;
	      this.confirmTransition(route, function() {
	        this$1$1.updateRoute(route);
	        onComplete && onComplete(route);
	        this$1$1.ensureURL();
	        this$1$1.router.afterHooks.forEach(function(hook) {
	          hook && hook(route, prev);
	        });
	        if (!this$1$1.ready) {
	          this$1$1.ready = true;
	          this$1$1.readyCbs.forEach(function(cb) {
	            cb(route);
	          });
	        }
	      }, function(err) {
	        if (onAbort) {
	          onAbort(err);
	        }
	        if (err && !this$1$1.ready) {
	          if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
	            this$1$1.ready = true;
	            this$1$1.readyErrorCbs.forEach(function(cb) {
	              cb(err);
	            });
	          }
	        }
	      });
	    };
	    History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
	      var this$1$1 = this;
	      var current = this.current;
	      this.pending = route;
	      var abort = function(err) {
	        if (!isNavigationFailure(err) && isError(err)) {
	          if (this$1$1.errorCbs.length) {
	            this$1$1.errorCbs.forEach(function(cb) {
	              cb(err);
	            });
	          } else {
	            console.error(err);
	          }
	        }
	        onAbort && onAbort(err);
	      };
	      var lastRouteIndex = route.matched.length - 1;
	      var lastCurrentIndex = current.matched.length - 1;
	      if (isSameRoute(route, current) && lastRouteIndex === lastCurrentIndex && route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]) {
	        this.ensureURL();
	        if (route.hash) {
	          handleScroll(this.router, current, route, false);
	        }
	        return abort(createNavigationDuplicatedError(current, route));
	      }
	      var ref = resolveQueue(this.current.matched, route.matched);
	      var updated = ref.updated;
	      var deactivated = ref.deactivated;
	      var activated = ref.activated;
	      var queue = [].concat(extractLeaveGuards(deactivated), this.router.beforeHooks, extractUpdateHooks(updated), activated.map(function(m) {
	        return m.beforeEnter;
	      }), resolveAsyncComponents(activated));
	      var iterator = function(hook, next) {
	        if (this$1$1.pending !== route) {
	          return abort(createNavigationCancelledError(current, route));
	        }
	        try {
	          hook(route, current, function(to) {
	            if (to === false) {
	              this$1$1.ensureURL(true);
	              abort(createNavigationAbortedError(current, route));
	            } else if (isError(to)) {
	              this$1$1.ensureURL(true);
	              abort(to);
	            } else if (typeof to === "string" || typeof to === "object" && (typeof to.path === "string" || typeof to.name === "string")) {
	              abort(createNavigationRedirectedError(current, route));
	              if (typeof to === "object" && to.replace) {
	                this$1$1.replace(to);
	              } else {
	                this$1$1.push(to);
	              }
	            } else {
	              next(to);
	            }
	          });
	        } catch (e) {
	          abort(e);
	        }
	      };
	      runQueue(queue, iterator, function() {
	        var enterGuards = extractEnterGuards(activated);
	        var queue2 = enterGuards.concat(this$1$1.router.resolveHooks);
	        runQueue(queue2, iterator, function() {
	          if (this$1$1.pending !== route) {
	            return abort(createNavigationCancelledError(current, route));
	          }
	          this$1$1.pending = null;
	          onComplete(route);
	          if (this$1$1.router.app) {
	            this$1$1.router.app.$nextTick(function() {
	              handleRouteEntered(route);
	            });
	          }
	        });
	      });
	    };
	    History.prototype.updateRoute = function updateRoute(route) {
	      this.current = route;
	      this.cb && this.cb(route);
	    };
	    History.prototype.setupListeners = function setupListeners() {
	    };
	    History.prototype.teardown = function teardown() {
	      this.listeners.forEach(function(cleanupListener) {
	        cleanupListener();
	      });
	      this.listeners = [];
	      this.current = START;
	      this.pending = null;
	    };
	    function normalizeBase(base) {
	      if (!base) {
	        {
	          base = "/";
	        }
	      }
	      if (base.charAt(0) !== "/") {
	        base = "/" + base;
	      }
	      return base.replace(/\/$/, "");
	    }
	    function resolveQueue(current, next) {
	      var i;
	      var max = Math.max(current.length, next.length);
	      for (i = 0; i < max; i++) {
	        if (current[i] !== next[i]) {
	          break;
	        }
	      }
	      return {
	        updated: next.slice(0, i),
	        activated: next.slice(i),
	        deactivated: current.slice(i)
	      };
	    }
	    function extractGuards(records, name, bind, reverse) {
	      var guards = vue_router_esm_flatMapComponents(records, function(def, instance, match, key) {
	        var guard = extractGuard(def, name);
	        if (guard) {
	          return Array.isArray(guard) ? guard.map(function(guard2) {
	            return bind(guard2, instance, match, key);
	          }) : bind(guard, instance, match, key);
	        }
	      });
	      return flatten(reverse ? guards.reverse() : guards);
	    }
	    function extractGuard(def, key) {
	      if (typeof def !== "function") {
	        def = _Vue.extend(def);
	      }
	      return def.options[key];
	    }
	    function extractLeaveGuards(deactivated) {
	      return extractGuards(deactivated, "beforeRouteLeave", bindGuard, true);
	    }
	    function extractUpdateHooks(updated) {
	      return extractGuards(updated, "beforeRouteUpdate", bindGuard);
	    }
	    function bindGuard(guard, instance) {
	      if (instance) {
	        return function boundRouteGuard() {
	          return guard.apply(instance, arguments);
	        };
	      }
	    }
	    function extractEnterGuards(activated) {
	      return extractGuards(activated, "beforeRouteEnter", function(guard, _, match, key) {
	        return bindEnterGuard(guard, match, key);
	      });
	    }
	    function bindEnterGuard(guard, match, key) {
	      return function routeEnterGuard(to, from, next) {
	        return guard(to, from, function(cb) {
	          if (typeof cb === "function") {
	            if (!match.enteredCbs[key]) {
	              match.enteredCbs[key] = [];
	            }
	            match.enteredCbs[key].push(cb);
	          }
	          next(cb);
	        });
	      };
	    }
	    var HTML5History = /* @__PURE__ */ function(History2) {
	      function HTML5History2(router, base) {
	        History2.call(this, router, base);
	        this._startLocation = vue_router_esm_getLocation(this.base);
	      }
	      if (History2)
	        HTML5History2.__proto__ = History2;
	      HTML5History2.prototype = Object.create(History2 && History2.prototype);
	      HTML5History2.prototype.constructor = HTML5History2;
	      HTML5History2.prototype.setupListeners = function setupListeners() {
	        var this$1$1 = this;
	        if (this.listeners.length > 0) {
	          return;
	        }
	        var router = this.router;
	        router.options.scrollBehavior;
	        var handleRoutingEvent = function() {
	          this$1$1.current;
	          var location = vue_router_esm_getLocation(this$1$1.base);
	          if (this$1$1.current === START && location === this$1$1._startLocation) {
	            return;
	          }
	          this$1$1.transitionTo(location, function(route) {
	          });
	        };
	        window.addEventListener("popstate", handleRoutingEvent);
	        this.listeners.push(function() {
	          window.removeEventListener("popstate", handleRoutingEvent);
	        });
	      };
	      HTML5History2.prototype.go = function go(n) {
	        window.history.go(n);
	      };
	      HTML5History2.prototype.push = function push(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        var ref = this;
	        var fromRoute = ref.current;
	        this.transitionTo(location, function(route) {
	          pushState(cleanPath(this$1$1.base + route.fullPath));
	          handleScroll(this$1$1.router, route, fromRoute, false);
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      HTML5History2.prototype.replace = function replace(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        var ref = this;
	        var fromRoute = ref.current;
	        this.transitionTo(location, function(route) {
	          replaceState(cleanPath(this$1$1.base + route.fullPath));
	          handleScroll(this$1$1.router, route, fromRoute, false);
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      HTML5History2.prototype.ensureURL = function ensureURL(push) {
	        if (vue_router_esm_getLocation(this.base) !== this.current.fullPath) {
	          var current = cleanPath(this.base + this.current.fullPath);
	          push ? pushState(current) : replaceState(current);
	        }
	      };
	      HTML5History2.prototype.getCurrentLocation = function getCurrentLocation() {
	        return vue_router_esm_getLocation(this.base);
	      };
	      return HTML5History2;
	    }(History);
	    function vue_router_esm_getLocation(base) {
	      var path = window.location.pathname;
	      var pathLowerCase = path.toLowerCase();
	      var baseLowerCase = base.toLowerCase();
	      if (base && (pathLowerCase === baseLowerCase || pathLowerCase.indexOf(cleanPath(baseLowerCase + "/")) === 0)) {
	        path = path.slice(base.length);
	      }
	      return (path || "/") + window.location.search + window.location.hash;
	    }
	    var HashHistory = /* @__PURE__ */ function(History2) {
	      function HashHistory2(router, base, fallback) {
	        History2.call(this, router, base);
	        if (fallback && checkFallback(this.base)) {
	          return;
	        }
	        ensureSlash();
	      }
	      if (History2)
	        HashHistory2.__proto__ = History2;
	      HashHistory2.prototype = Object.create(History2 && History2.prototype);
	      HashHistory2.prototype.constructor = HashHistory2;
	      HashHistory2.prototype.setupListeners = function setupListeners() {
	        var this$1$1 = this;
	        if (this.listeners.length > 0) {
	          return;
	        }
	        var router = this.router;
	        router.options.scrollBehavior;
	        var handleRoutingEvent = function() {
	          this$1$1.current;
	          if (!ensureSlash()) {
	            return;
	          }
	          this$1$1.transitionTo(getHash(), function(route) {
	            {
	              replaceHash(route.fullPath);
	            }
	          });
	        };
	        var eventType = "hashchange";
	        window.addEventListener(eventType, handleRoutingEvent);
	        this.listeners.push(function() {
	          window.removeEventListener(eventType, handleRoutingEvent);
	        });
	      };
	      HashHistory2.prototype.push = function push(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        var ref = this;
	        var fromRoute = ref.current;
	        this.transitionTo(location, function(route) {
	          pushHash(route.fullPath);
	          handleScroll(this$1$1.router, route, fromRoute, false);
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      HashHistory2.prototype.replace = function replace(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        var ref = this;
	        var fromRoute = ref.current;
	        this.transitionTo(location, function(route) {
	          replaceHash(route.fullPath);
	          handleScroll(this$1$1.router, route, fromRoute, false);
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      HashHistory2.prototype.go = function go(n) {
	        window.history.go(n);
	      };
	      HashHistory2.prototype.ensureURL = function ensureURL(push) {
	        var current = this.current.fullPath;
	        if (getHash() !== current) {
	          push ? pushHash(current) : replaceHash(current);
	        }
	      };
	      HashHistory2.prototype.getCurrentLocation = function getCurrentLocation() {
	        return getHash();
	      };
	      return HashHistory2;
	    }(History);
	    function checkFallback(base) {
	      var location = vue_router_esm_getLocation(base);
	      if (!/^\/#/.test(location)) {
	        window.location.replace(cleanPath(base + "/#" + location));
	        return true;
	      }
	    }
	    function ensureSlash() {
	      var path = getHash();
	      if (path.charAt(0) === "/") {
	        return true;
	      }
	      replaceHash("/" + path);
	      return false;
	    }
	    function getHash() {
	      var href = window.location.href;
	      var index = href.indexOf("#");
	      if (index < 0) {
	        return "";
	      }
	      href = href.slice(index + 1);
	      return href;
	    }
	    function getUrl(path) {
	      var href = window.location.href;
	      var i = href.indexOf("#");
	      var base = i >= 0 ? href.slice(0, i) : href;
	      return base + "#" + path;
	    }
	    function pushHash(path) {
	      {
	        window.location.hash = path;
	      }
	    }
	    function replaceHash(path) {
	      {
	        window.location.replace(getUrl(path));
	      }
	    }
	    var AbstractHistory = /* @__PURE__ */ function(History2) {
	      function AbstractHistory2(router, base) {
	        History2.call(this, router, base);
	        this.stack = [];
	        this.index = -1;
	      }
	      if (History2)
	        AbstractHistory2.__proto__ = History2;
	      AbstractHistory2.prototype = Object.create(History2 && History2.prototype);
	      AbstractHistory2.prototype.constructor = AbstractHistory2;
	      AbstractHistory2.prototype.push = function push(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        this.transitionTo(location, function(route) {
	          this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index + 1).concat(route);
	          this$1$1.index++;
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      AbstractHistory2.prototype.replace = function replace(location, onComplete, onAbort) {
	        var this$1$1 = this;
	        this.transitionTo(location, function(route) {
	          this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index).concat(route);
	          onComplete && onComplete(route);
	        }, onAbort);
	      };
	      AbstractHistory2.prototype.go = function go(n) {
	        var this$1$1 = this;
	        var targetIndex = this.index + n;
	        if (targetIndex < 0 || targetIndex >= this.stack.length) {
	          return;
	        }
	        var route = this.stack[targetIndex];
	        this.confirmTransition(route, function() {
	          var prev = this$1$1.current;
	          this$1$1.index = targetIndex;
	          this$1$1.updateRoute(route);
	          this$1$1.router.afterHooks.forEach(function(hook) {
	            hook && hook(route, prev);
	          });
	        }, function(err) {
	          if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
	            this$1$1.index = targetIndex;
	          }
	        });
	      };
	      AbstractHistory2.prototype.getCurrentLocation = function getCurrentLocation() {
	        var current = this.stack[this.stack.length - 1];
	        return current ? current.fullPath : "/";
	      };
	      AbstractHistory2.prototype.ensureURL = function ensureURL() {
	      };
	      return AbstractHistory2;
	    }(History);
	    var VueRouter = function VueRouter2(options) {
	      if (options === void 0)
	        options = {};
	      this.app = null;
	      this.apps = [];
	      this.options = options;
	      this.beforeHooks = [];
	      this.resolveHooks = [];
	      this.afterHooks = [];
	      this.matcher = createMatcher(options.routes || [], this);
	      var mode = options.mode || "hash";
	      this.fallback = mode === "history" && !supportsPushState && options.fallback !== false;
	      if (this.fallback) {
	        mode = "hash";
	      }
	      {
	        mode = "abstract";
	      }
	      this.mode = mode;
	      switch (mode) {
	        case "history":
	          this.history = new HTML5History(this, options.base);
	          break;
	        case "hash":
	          this.history = new HashHistory(this, options.base, this.fallback);
	          break;
	        case "abstract":
	          this.history = new AbstractHistory(this, options.base);
	          break;
	      }
	    };
	    var prototypeAccessors = {
	      currentRoute: {
	        configurable: true
	      }
	    };
	    VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
	      return this.matcher.match(raw, current, redirectedFrom);
	    };
	    prototypeAccessors.currentRoute.get = function() {
	      return this.history && this.history.current;
	    };
	    VueRouter.prototype.init = function init(app) {
	      var this$1$1 = this;
	      this.apps.push(app);
	      app.$once("hook:destroyed", function() {
	        var index = this$1$1.apps.indexOf(app);
	        if (index > -1) {
	          this$1$1.apps.splice(index, 1);
	        }
	        if (this$1$1.app === app) {
	          this$1$1.app = this$1$1.apps[0] || null;
	        }
	        if (!this$1$1.app) {
	          this$1$1.history.teardown();
	        }
	      });
	      if (this.app) {
	        return;
	      }
	      this.app = app;
	      var history = this.history;
	      if (history instanceof HTML5History || history instanceof HashHistory) {
	        var handleInitialScroll = function(routeOrError) {
	          history.current;
	          this$1$1.options.scrollBehavior;
	        };
	        var setupListeners = function(routeOrError) {
	          history.setupListeners();
	          handleInitialScroll(routeOrError);
	        };
	        history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
	      }
	      history.listen(function(route) {
	        this$1$1.apps.forEach(function(app2) {
	          app2._route = route;
	        });
	      });
	    };
	    VueRouter.prototype.beforeEach = function beforeEach(fn) {
	      return registerHook(this.beforeHooks, fn);
	    };
	    VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
	      return registerHook(this.resolveHooks, fn);
	    };
	    VueRouter.prototype.afterEach = function afterEach(fn) {
	      return registerHook(this.afterHooks, fn);
	    };
	    VueRouter.prototype.onReady = function onReady(cb, errorCb) {
	      this.history.onReady(cb, errorCb);
	    };
	    VueRouter.prototype.onError = function onError(errorCb) {
	      this.history.onError(errorCb);
	    };
	    VueRouter.prototype.push = function push(location, onComplete, onAbort) {
	      var this$1$1 = this;
	      if (!onComplete && !onAbort && typeof Promise !== "undefined") {
	        return new Promise(function(resolve, reject) {
	          this$1$1.history.push(location, resolve, reject);
	        });
	      } else {
	        this.history.push(location, onComplete, onAbort);
	      }
	    };
	    VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
	      var this$1$1 = this;
	      if (!onComplete && !onAbort && typeof Promise !== "undefined") {
	        return new Promise(function(resolve, reject) {
	          this$1$1.history.replace(location, resolve, reject);
	        });
	      } else {
	        this.history.replace(location, onComplete, onAbort);
	      }
	    };
	    VueRouter.prototype.go = function go(n) {
	      this.history.go(n);
	    };
	    VueRouter.prototype.back = function back() {
	      this.go(-1);
	    };
	    VueRouter.prototype.forward = function forward() {
	      this.go(1);
	    };
	    VueRouter.prototype.getMatchedComponents = function getMatchedComponents2(to) {
	      var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
	      if (!route) {
	        return [];
	      }
	      return [].concat.apply([], route.matched.map(function(m) {
	        return Object.keys(m.components).map(function(key) {
	          return m.components[key];
	        });
	      }));
	    };
	    VueRouter.prototype.resolve = function resolve(to, current, append) {
	      current = current || this.history.current;
	      var location = normalizeLocation(to, current, append, this);
	      var route = this.match(location, current);
	      var fullPath = route.redirectedFrom || route.fullPath;
	      var base = this.history.base;
	      var href = createHref(base, fullPath, this.mode);
	      return {
	        location,
	        route,
	        href,
	        normalizedTo: location,
	        resolved: route
	      };
	    };
	    VueRouter.prototype.getRoutes = function getRoutes() {
	      return this.matcher.getRoutes();
	    };
	    VueRouter.prototype.addRoute = function addRoute(parentOrRoute, route) {
	      this.matcher.addRoute(parentOrRoute, route);
	      if (this.history.current !== START) {
	        this.history.transitionTo(this.history.getCurrentLocation());
	      }
	    };
	    VueRouter.prototype.addRoutes = function addRoutes(routes) {
	      this.matcher.addRoutes(routes);
	      if (this.history.current !== START) {
	        this.history.transitionTo(this.history.getCurrentLocation());
	      }
	    };
	    Object.defineProperties(VueRouter.prototype, prototypeAccessors);
	    function registerHook(list, fn) {
	      list.push(fn);
	      return function() {
	        var i = list.indexOf(fn);
	        if (i > -1) {
	          list.splice(i, 1);
	        }
	      };
	    }
	    function createHref(base, fullPath, mode) {
	      var path = mode === "hash" ? "#" + fullPath : fullPath;
	      return base ? cleanPath(base + "/" + path) : path;
	    }
	    VueRouter.install = install;
	    VueRouter.version = "3.5.4";
	    VueRouter.isNavigationFailure = isNavigationFailure;
	    VueRouter.NavigationFailureType = NavigationFailureType;
	    VueRouter.START_LOCATION = START;
	    var vue_router_esm = VueRouter;
	    function shouldScrollToTop(route) {
	      const Pages = getMatchedComponents(route);
	      if (Pages.length === 1) {
	        const {
	          options = {}
	        } = Pages[0];
	        return options.scrollToTop !== false;
	      }
	      return Pages.some(({
	        options
	      }) => options && options.scrollToTop);
	    }
	    var router_scrollBehavior = function(to, from, savedPosition) {
	      let position = false;
	      const isRouteChanged = to !== from;
	      if (savedPosition) {
	        position = savedPosition;
	      } else if (isRouteChanged && shouldScrollToTop(to)) {
	        position = {
	          x: 0,
	          y: 0
	        };
	      }
	      const nuxt = window.$nuxt;
	      if (!isRouteChanged || to.path === from.path && to.hash !== from.hash) {
	        nuxt.$nextTick(() => nuxt.$emit("triggerScroll"));
	      }
	      return new Promise((resolve) => {
	        nuxt.$once("triggerScroll", () => {
	          if (to.hash) {
	            let hash = to.hash;
	            if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
	              hash = "#" + window.CSS.escape(hash.substr(1));
	            }
	            try {
	              const el = document.querySelector(hash);
	              if (el) {
	                var _getComputedStyle$scr;
	                position = {
	                  selector: hash
	                };
	                const y = Number((_getComputedStyle$scr = getComputedStyle(el)["scroll-margin-top"]) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace("px", ""));
	                if (y) {
	                  position.offset = {
	                    y
	                  };
	                }
	              }
	            } catch (e) {
	              console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).");
	            }
	          }
	          resolve(position);
	        });
	      });
	    };
	    const _3366e2e6 = () => interopDefault(__webpack_require__.e(2).then(__webpack_require__.bind(null, 161)));
	    const _5d5621b7 = () => interopDefault(__webpack_require__.e(3).then(__webpack_require__.bind(null, 158)));
	    const _15be9a6a = () => interopDefault(__webpack_require__.e(4).then(__webpack_require__.bind(null, 159)));
	    const _0edfc548 = () => interopDefault(__webpack_require__.e(6).then(__webpack_require__.bind(null, 156)));
	    const _081cf9a4 = () => interopDefault(__webpack_require__.e(7).then(__webpack_require__.bind(null, 157)));
	    const _dc1f3dc0 = () => interopDefault(__webpack_require__.e(8).then(__webpack_require__.bind(null, 160)));
	    const _cb896546 = () => interopDefault(__webpack_require__.e(5).then(__webpack_require__.bind(null, 155)));
	    const _1d30b6a5 = () => interopDefault(__webpack_require__.e(1).then(__webpack_require__.bind(null, 162)));
	    const emptyFn = () => {
	    };
	    vue_runtime["c"].use(vue_router_esm);
	    const routerOptions = {
	      mode: "history",
	      base: "/",
	      linkActiveClass: "nuxt-link-active",
	      linkExactActiveClass: "nuxt-link-exact-active",
	      scrollBehavior: router_scrollBehavior,
	      routes: [{
	        path: "/multiple",
	        component: _3366e2e6,
	        name: "multiple",
	        children: [{
	          path: ":region?/:names?",
	          component: _5d5621b7,
	          name: "multiple-region-names"
	        }]
	      }, {
	        path: "/summoner",
	        component: _15be9a6a,
	        name: "summoner",
	        children: [{
	          path: ":region?/:name?/champions",
	          component: _0edfc548,
	          name: "summoner-region-name-champions"
	        }, {
	          path: ":region?/:name?/live",
	          component: _081cf9a4,
	          name: "summoner-region-name-live"
	        }, {
	          path: ":region?/:name?/records",
	          component: _dc1f3dc0,
	          name: "summoner-region-name-records"
	        }, {
	          path: ":region?/:name?/:mode?",
	          component: _cb896546,
	          name: "summoner-region-name-mode"
	        }]
	      }, {
	        path: "/",
	        component: _1d30b6a5,
	        name: "index"
	      }],
	      fallback: false
	    };
	    function createRouter(ssrContext, config) {
	      const base = config._app && config._app.basePath || routerOptions.base;
	      const router = new vue_router_esm({
	        ...routerOptions,
	        base
	      });
	      const originalPush = router.push;
	      router.push = function push(location, onComplete = emptyFn, onAbort) {
	        return originalPush.call(this, location, onComplete, onAbort);
	      };
	      const resolve = router.resolve.bind(router);
	      router.resolve = (to, current, append) => {
	        if (typeof to === "string") {
	          to = Object(dist["g"])(to);
	        }
	        return resolve(to, current, append);
	      };
	      return router;
	    }
	    var nuxt_child = {
	      name: "NuxtChild",
	      functional: true,
	      props: {
	        nuxtChildKey: {
	          type: String,
	          default: ""
	        },
	        keepAlive: Boolean,
	        keepAliveProps: {
	          type: Object,
	          default: void 0
	        }
	      },
	      render(_, {
	        parent,
	        data,
	        props
	      }) {
	        const h = parent.$createElement;
	        data.nuxtChild = true;
	        const _parent = parent;
	        const transitions = parent.$nuxt.nuxt.transitions;
	        const defaultTransition2 = parent.$nuxt.nuxt.defaultTransition;
	        let depth = 0;
	        while (parent) {
	          if (parent.$vnode && parent.$vnode.data.nuxtChild) {
	            depth++;
	          }
	          parent = parent.$parent;
	        }
	        data.nuxtChildDepth = depth;
	        const transition = transitions[depth] || defaultTransition2;
	        const transitionProps = {};
	        transitionsKeys.forEach((key) => {
	          if (typeof transition[key] !== "undefined") {
	            transitionProps[key] = transition[key];
	          }
	        });
	        const listeners = {};
	        listenersKeys.forEach((key) => {
	          if (typeof transition[key] === "function") {
	            listeners[key] = transition[key].bind(_parent);
	          }
	        });
	        if (transition.css === false) {
	          const leave = listeners.leave;
	          if (!leave || leave.length < 2) {
	            listeners.leave = (el, done) => {
	              if (leave) {
	                leave.call(_parent, el);
	              }
	              _parent.$nextTick(done);
	            };
	          }
	        }
	        let routerView = h("routerView", data);
	        if (props.keepAlive) {
	          routerView = h("keep-alive", {
	            props: props.keepAliveProps
	          }, [routerView]);
	        }
	        return h("transition", {
	          props: transitionProps,
	          on: listeners
	        }, [routerView]);
	      }
	    };
	    const transitionsKeys = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"];
	    const listenersKeys = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"];
	    var render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "__nuxt-error-page"
	      }, [_vm._ssrNode('<div class="error">', "</div>", [_vm._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">' + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode('<p class="description">', "</p>", [typeof _vm.$route === "undefined" ? _vm._ssrNode('<a href="/" class="error-link">', "</a>") : _c("NuxtLink", {
	        staticClass: "error-link",
	        attrs: {
	          "to": "/"
	        }
	      }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt</a></div>')], 2)]);
	    };
	    var staticRenderFns = [];
	    var nuxt_errorvue_type_script_lang_js_ = {
	      name: "NuxtError",
	      props: {
	        error: {
	          type: Object,
	          default: null
	        }
	      },
	      computed: {
	        statusCode() {
	          return this.error && this.error.statusCode || 500;
	        },
	        message() {
	          return this.error.message || "Error";
	        }
	      },
	      head() {
	        return {
	          title: this.message,
	          meta: [{
	            name: "viewport",
	            content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
	          }]
	        };
	      }
	    };
	    var components_nuxt_errorvue_type_script_lang_js_ = nuxt_errorvue_type_script_lang_js_;
	    var componentNormalizer = __webpack_require__(1);
	    function injectStyles(context) {
	      var style0 = __webpack_require__(59);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var nuxt_error_component = Object(componentNormalizer["a"])(components_nuxt_errorvue_type_script_lang_js_, render, staticRenderFns, false, injectStyles, null, "6772d49e");
	    var nuxt_error = nuxt_error_component.exports;
	    var components_nuxt = {
	      name: "Nuxt",
	      components: {
	        NuxtChild: nuxt_child,
	        NuxtError: nuxt_error
	      },
	      props: {
	        nuxtChildKey: {
	          type: String,
	          default: void 0
	        },
	        keepAlive: Boolean,
	        keepAliveProps: {
	          type: Object,
	          default: void 0
	        },
	        name: {
	          type: String,
	          default: "default"
	        }
	      },
	      errorCaptured(error) {
	        if (this.displayingNuxtError) {
	          this.errorFromNuxtError = error;
	          this.$forceUpdate();
	        }
	      },
	      computed: {
	        routerViewKey() {
	          if (typeof this.nuxtChildKey !== "undefined" || this.$route.matched.length > 1) {
	            return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
	          }
	          const [matchedRoute] = this.$route.matched;
	          if (!matchedRoute) {
	            return this.$route.path;
	          }
	          const Component = matchedRoute.components.default;
	          if (Component && Component.options) {
	            const {
	              options
	            } = Component;
	            if (options.key) {
	              return typeof options.key === "function" ? options.key(this.$route) : options.key;
	            }
	          }
	          const strict = /\/$/.test(matchedRoute.path);
	          return strict ? this.$route.path : this.$route.path.replace(/\/$/, "");
	        }
	      },
	      beforeCreate() {
	        vue_runtime["c"].util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
	      },
	      render(h) {
	        if (!this.nuxt.err) {
	          return h("NuxtChild", {
	            key: this.routerViewKey,
	            props: this.$props
	          });
	        }
	        if (this.errorFromNuxtError) {
	          this.$nextTick(() => this.errorFromNuxtError = false);
	          return h("div", {}, [h("h2", "An error occurred while showing the error page"), h("p", "Unfortunately an error occurred and while showing the error page another error occurred"), h("p", `Error details: ${this.errorFromNuxtError.toString()}`), h("nuxt-link", {
	            props: {
	              to: "/"
	            }
	          }, "Go back to home")]);
	        }
	        this.displayingNuxtError = true;
	        this.$nextTick(() => this.displayingNuxtError = false);
	        return h(nuxt_error, {
	          props: {
	            error: this.nuxt.err
	          }
	        });
	      }
	    };
	    var nuxt_loadingvue_type_script_lang_js_ = {
	      name: "NuxtLoading",
	      data() {
	        return {
	          percent: 0,
	          show: false,
	          canSucceed: true,
	          reversed: false,
	          skipTimerCount: 0,
	          rtl: false,
	          throttle: 200,
	          duration: 5e3,
	          continuous: false
	        };
	      },
	      computed: {
	        left() {
	          if (!this.continuous && !this.rtl) {
	            return false;
	          }
	          return this.rtl ? this.reversed ? "0px" : "auto" : !this.reversed ? "0px" : "auto";
	        }
	      },
	      beforeDestroy() {
	        this.clear();
	      },
	      methods: {
	        clear() {
	          clearInterval(this._timer);
	          clearTimeout(this._throttle);
	          this._timer = null;
	        },
	        start() {
	          this.clear();
	          this.percent = 0;
	          this.reversed = false;
	          this.skipTimerCount = 0;
	          this.canSucceed = true;
	          if (this.throttle) {
	            this._throttle = setTimeout(() => this.startTimer(), this.throttle);
	          } else {
	            this.startTimer();
	          }
	          return this;
	        },
	        set(num) {
	          this.show = true;
	          this.canSucceed = true;
	          this.percent = Math.min(100, Math.max(0, Math.floor(num)));
	          return this;
	        },
	        get() {
	          return this.percent;
	        },
	        increase(num) {
	          this.percent = Math.min(100, Math.floor(this.percent + num));
	          return this;
	        },
	        decrease(num) {
	          this.percent = Math.max(0, Math.floor(this.percent - num));
	          return this;
	        },
	        pause() {
	          clearInterval(this._timer);
	          return this;
	        },
	        resume() {
	          this.startTimer();
	          return this;
	        },
	        finish() {
	          this.percent = this.reversed ? 0 : 100;
	          this.hide();
	          return this;
	        },
	        hide() {
	          this.clear();
	          setTimeout(() => {
	            this.show = false;
	            this.$nextTick(() => {
	              this.percent = 0;
	              this.reversed = false;
	            });
	          }, 500);
	          return this;
	        },
	        fail(error) {
	          this.canSucceed = false;
	          return this;
	        },
	        startTimer() {
	          if (!this.show) {
	            this.show = true;
	          }
	          if (typeof this._cut === "undefined") {
	            this._cut = 1e4 / Math.floor(this.duration);
	          }
	          this._timer = setInterval(() => {
	            if (this.skipTimerCount > 0) {
	              this.skipTimerCount--;
	              return;
	            }
	            if (this.reversed) {
	              this.decrease(this._cut);
	            } else {
	              this.increase(this._cut);
	            }
	            if (this.continuous) {
	              if (this.percent >= 100) {
	                this.skipTimerCount = 1;
	                this.reversed = !this.reversed;
	              } else if (this.percent <= 0) {
	                this.skipTimerCount = 1;
	                this.reversed = !this.reversed;
	              }
	            }
	          }, 100);
	        }
	      },
	      render(h) {
	        let el = h(false);
	        if (this.show) {
	          el = h("div", {
	            staticClass: "nuxt-progress",
	            class: {
	              "nuxt-progress-notransition": this.skipTimerCount > 0,
	              "nuxt-progress-failed": !this.canSucceed
	            },
	            style: {
	              width: this.percent + "%",
	              left: this.left
	            }
	          });
	        }
	        return el;
	      }
	    };
	    var components_nuxt_loadingvue_type_script_lang_js_ = nuxt_loadingvue_type_script_lang_js_;
	    var nuxt_loading_render, nuxt_loading_staticRenderFns;
	    function nuxt_loading_injectStyles(context) {
	      var style0 = __webpack_require__(61);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var nuxt_loading_component = Object(componentNormalizer["a"])(components_nuxt_loadingvue_type_script_lang_js_, nuxt_loading_render, nuxt_loading_staticRenderFns, false, nuxt_loading_injectStyles, null, "6731bb5c");
	    var nuxt_loading = nuxt_loading_component.exports;
	    __webpack_require__(25);
	    var default_mvue_type_template_id_557c66b2_scoped_true_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "relative z-20"
	      }, [_c("client-only", [_c("SVGContainer"), _vm._v(" "), _c("NotificationsContainer"), _vm._v(" "), _c("RunesContainer")], 1), _vm._ssrNode(" "), _vm._ssrNode('<header class="fixed w-full z-20 px-4 text-gray-100 transition-colors duration-100 ease-in-out bg-c-0" data-v-557c66b2>', "</header>", [_vm._ssrNode('<div class="flex flex-col items-center" data-v-557c66b2>', "</div>", [_vm._ssrNode('<h1 class="relative w-full" data-v-557c66b2>', "</h1>", [_vm._ssrNode('<a href="/" class="flex flex-col items-center justify-center text-c-3 py-2 px-3 rounded-sm" data-v-557c66b2><span class="h-0 text-z" data-v-557c66b2>' + _vm._ssrEscape(_vm._s(_vm.title)) + '</span> <div class="logo text-c-1" data-v-557c66b2>\n            ZEM\n          </div> <span class="text-xs text-c-2" data-v-557c66b2>zem.gg</span></a> '), _vm._ssrNode('<div class="absolute right-0 top-0 flex justify-between mt-2" data-v-557c66b2>', "</div>", [_vm._ssrNode('<a href="https://discord.gg/W76QeWsPCM" target="_blank" class="z-20 flex items-center justify-center text-sm font-bold gap-2 h-full" data-v-557c66b2>', "</a>", [_vm._ssrNode('<div class="flex items-center justify-center" data-v-557c66b2>', "</div>", [_c("nuxt-img", {
	        staticClass: "w-8 h-6",
	        attrs: {
	          "src": `https://zem.gg/img/Discord.png`,
	          "format": "webp",
	          "width": "32",
	          "height": "28"
	        }
	      })], 1), _vm._ssrNode("\n            \uB514\uCF54 \uCC38\uC5EC\n          ")], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="flex justify-between" data-v-557c66b2>', "</div>", [_vm._ssrNode('<div class="flex" data-v-557c66b2>', "</div>", [_vm.$route.params.name ? _c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 py-2 text-xs font-bold gap-2 menu h-full",
	        attrs: {
	          "to": {
	            name: "summoner-region-name-mode",
	            params: {
	              region: _vm.$route.params.region,
	              name: _vm.$route.params.name
	            }
	          },
	          "exact": ""
	        }
	      }, [_c("span", [_vm._v("\uC18C\uD658\uC0AC \uC815\uBCF4")])]) : _vm._e(), _vm._ssrNode(" "), _c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 py-2 text-xs font-bold gap-2 menu h-full",
	        attrs: {
	          "to": {
	            name: "multiple-region-names",
	            params: {
	              region: _vm.selectedRegion
	            }
	          }
	        }
	      }, [_c("span", [_vm._v("AI \uBA40\uD2F0\uC11C\uCE58")])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="w-full" data-v-557c66b2>', "</div>", [_c("SearchForm", {
	        staticClass: "py-4",
	        attrs: {
	          "homepage": false
	        },
	        on: {
	          "formSubmit": _vm.redirect
	        }
	      })], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="relative w-full bg-c-2 pt-40" data-v-557c66b2>', "</div>", [_c("nuxt"), _vm._ssrNode(" "), _c("MainFooter")], 2)], 2);
	    };
	    var default_mvue_type_template_id_557c66b2_scoped_true_staticRenderFns = [];
	    var NotificationsContainervue_type_template_id_06e30314_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "fixed bottom-0 right-0 z-50 pb-2 pr-2"
	      }, _vm._l(_vm.notifications, function(notification) {
	        return _c("PopupNotification", {
	          key: notification.id,
	          attrs: {
	            "notification": notification
	          }
	        });
	      }), 1);
	    };
	    var NotificationsContainervue_type_template_id_06e30314_staticRenderFns = [];
	    var PopupNotificationvue_type_template_id_6b10a586_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("transition", {
	        attrs: {
	          "name": "slide-fade"
	        }
	      }, [_c("div", {
	        staticClass: "relative p-6 pr-10 mt-2 text-white rounded-lg shadow-md",
	        class: {
	          "bg-red-500": _vm.notification.type === "error",
	          "bg-green-500": _vm.notification.type === "success"
	        },
	        staticStyle: {
	          "min-width": "240px"
	        }
	      }, [_c("button", {
	        staticClass: "absolute top-0 right-0 block px-1 py-1 mx-1 my-1 border border-transparent rounded-full cursor-pointer focus:outline-none hover:border-white",
	        on: {
	          "click": _vm.deleteNotification
	        }
	      }, [_c("svg", {
	        staticClass: "w-3 h-3 fill-current",
	        attrs: {
	          "viewBox": "0 0 20 20"
	        }
	      }, [_c("path", {
	        attrs: {
	          "d": "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
	        }
	      })])]), _vm._v(" "), _c("div", {
	        staticClass: "flex items-center text-white"
	      }, [_vm.notification.type === "success" ? _c("svg", {
	        staticClass: "w-6 fill-current",
	        attrs: {
	          "viewBox": "0 0 20 20"
	        }
	      }, [_c("path", {
	        attrs: {
	          "d": "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"
	        }
	      })]) : _vm._e(), _vm._v(" "), _vm.notification.type === "error" ? _c("svg", {
	        staticClass: "w-6 fill-current",
	        attrs: {
	          "viewBox": "0 0 20 20"
	        }
	      }, [_c("path", {
	        attrs: {
	          "d": "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
	        }
	      })]) : _vm._e(), _vm._v(" "), _c("span", {
	        staticClass: "ml-3"
	      }, [_vm._v(_vm._s(_vm.notification.message))])])])]);
	    };
	    var PopupNotificationvue_type_template_id_6b10a586_staticRenderFns = [];
	    var PopupNotificationvue_type_script_lang_js_ = {
	      props: {
	        notification: {
	          type: Object,
	          required: true
	        }
	      },
	      data() {
	        return {
	          timeout: null
	        };
	      },
	      beforeDestroy() {
	        clearTimeout(this.timeout);
	      },
	      mounted() {
	        this.timeout = setTimeout(() => this.deleteNotification(), 3e3);
	      },
	      methods: {
	        deleteNotification() {
	          this.remove(this.notification);
	        },
	        ...Object(vuex["b"])("notification", ["remove"])
	      }
	    };
	    var Global_PopupNotificationvue_type_script_lang_js_ = PopupNotificationvue_type_script_lang_js_;
	    var PopupNotification_component = Object(componentNormalizer["a"])(Global_PopupNotificationvue_type_script_lang_js_, PopupNotificationvue_type_template_id_6b10a586_render, PopupNotificationvue_type_template_id_6b10a586_staticRenderFns, false, null, null, "22d9716e");
	    var PopupNotification = PopupNotification_component.exports;
	    var NotificationsContainervue_type_script_lang_js_ = {
	      components: {
	        PopupNotification
	      },
	      computed: {
	        ...Object(vuex["d"])("notification", ["notifications"])
	      }
	    };
	    var Global_NotificationsContainervue_type_script_lang_js_ = NotificationsContainervue_type_script_lang_js_;
	    var NotificationsContainer_component = Object(componentNormalizer["a"])(Global_NotificationsContainervue_type_script_lang_js_, NotificationsContainervue_type_template_id_06e30314_render, NotificationsContainervue_type_template_id_06e30314_staticRenderFns, false, null, null, "2e81ca57");
	    var NotificationsContainer = NotificationsContainer_component.exports;
	    var RunesContainervue_type_template_id_d05730a8_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("transition", {
	        attrs: {
	          "leave-active-class": "duration-300"
	        }
	      }, [_c("div", {
	        directives: [{
	          name: "show",
	          rawName: "v-show",
	          value: _vm.runesOpen,
	          expression: "runesOpen"
	        }],
	        staticClass: "fixed inset-0 z-50 flex items-center justify-center"
	      }, [_c("transition", {
	        attrs: {
	          "enter-active-class": "transition duration-300 ease-out",
	          "enter-class": "transform opacity-0",
	          "enter-to-class": "transform opacity-100",
	          "leave-active-class": "transition duration-200 ease-in",
	          "leave-class": "transform opacity-100",
	          "leave-to-class": "transform opacity-0"
	        }
	      }, [_vm.runesOpen ? _c("div", {
	        staticClass: "fixed inset-0 bg-teal-900 bg-opacity-75",
	        on: {
	          "click": _vm.close
	        }
	      }) : _vm._e()]), _vm._v(" "), _c("transition", {
	        attrs: {
	          "enter-active-class": "transition duration-300 ease-out",
	          "enter-class": "transform scale-95 opacity-0",
	          "enter-to-class": "transform scale-100 opacity-100",
	          "leave-active-class": "transition duration-200 ease-in",
	          "leave-class": "transform scale-100 opacity-100",
	          "leave-to-class": "transform scale-95 opacity-0"
	        }
	      }, [_vm.runesOpen ? _c("div", {
	        staticClass: "relative overflow-hidden bg-teal-900 rounded-md shadow-lg",
	        staticStyle: {
	          "width": "800px",
	          "height": "500px"
	        }
	      }, [_c("LazyBackground", {
	        staticStyle: {
	          "filter": "blur(2px)"
	        },
	        attrs: {
	          "image-source": `/img/runes/${_vm.primaryStyle.name.toLowerCase()}.jpg`,
	          "image-class": "absolute inset-0",
	          "more-backgrounds": "linear-gradient(rgba(26, 32, 44, 0.6), rgba(26, 32, 44, 0.8)),",
	          "transition-name": "fade-fast"
	        }
	      }), _vm._v(" "), _c("div", {
	        staticClass: "relative flex items-start h-full px-4 py-2"
	      }, [_c("div", {
	        staticClass: "w-1/2"
	      }, [_c("RuneStyle", {
	        attrs: {
	          "primary": true,
	          "rune-style": _vm.primaryStyle
	        }
	      })], 1), _vm._v(" "), _c("div", {
	        staticClass: "w-1/2"
	      }, [_c("RuneStyle", {
	        attrs: {
	          "primary": false,
	          "rune-style": _vm.secondaryStyle
	        }
	      })], 1)])], 1) : _vm._e()])], 1)]);
	    };
	    var RunesContainervue_type_template_id_d05730a8_staticRenderFns = [];
	    var functions = __webpack_require__(4);
	    var LazyBackgroundImagevue_type_template_id_f8dfd0a4_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("transition", {
	        attrs: {
	          "name": _vm.transitionName
	        }
	      }, [_c("div", {
	        directives: [{
	          name: "show",
	          rawName: "v-show",
	          value: _vm.imageState === "loaded",
	          expression: "imageState === 'loaded'"
	        }],
	        class: [_vm.imageClass, _vm.imageState],
	        style: _vm.computedStyle,
	        attrs: {
	          "data-state": _vm.imageState
	        }
	      })]);
	    };
	    var LazyBackgroundImagevue_type_template_id_f8dfd0a4_staticRenderFns = [];
	    var LazyBackgroundImagevue_type_script_lang_js_ = {
	      props: {
	        imageSource: {
	          type: String,
	          required: true
	        },
	        imageClass: {
	          type: String,
	          required: false,
	          default: ""
	        },
	        backgroundSize: {
	          type: String,
	          required: false,
	          default: "cover"
	        },
	        moreBackgrounds: {
	          type: String,
	          required: false,
	          default: ""
	        },
	        transitionName: {
	          type: String,
	          required: false,
	          default: ""
	        }
	      },
	      data() {
	        return {
	          imageState: "loading",
	          asyncImage: new Image()
	        };
	      },
	      computed: {
	        computedStyle() {
	          if (this.imageState === "loaded") {
	            return `background-image: ${this.moreBackgrounds} url(${this.asyncImage.src}); background-size: ${this.backgroundSize}`;
	          }
	          return "";
	        }
	      },
	      mounted() {
	        this.$nextTick(() => {
	          this.fetchImage();
	        });
	      },
	      methods: {
	        fetchImage() {
	          this.asyncImage.onload = this.imageOnLoad;
	          this.imageState = "loading";
	          this.asyncImage.src = this.imageSource;
	        },
	        imageOnLoad() {
	          this.imageState = "loaded";
	        }
	      }
	    };
	    var Common_LazyBackgroundImagevue_type_script_lang_js_ = LazyBackgroundImagevue_type_script_lang_js_;
	    var LazyBackgroundImage_component = Object(componentNormalizer["a"])(Common_LazyBackgroundImagevue_type_script_lang_js_, LazyBackgroundImagevue_type_template_id_f8dfd0a4_render, LazyBackgroundImagevue_type_template_id_f8dfd0a4_staticRenderFns, false, null, null, "198cbdda");
	    var LazyBackgroundImage = LazyBackgroundImage_component.exports;
	    var RuneStylevue_type_template_id_b1ca2680_scoped_true_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "flex"
	      }, [_vm._ssrNode('<div class="flex items-center justify-center w-24 h-24 bg-cover"' + _vm._ssrStyle(null, {
	        backgroundImage: `url('${_vm.createCategoryBorderUrl(_vm.runeStyle.name)}')`
	      }, null) + ' data-v-b1ca2680><div class="w-56 h-56 mt-4 bg-center bg-no-repeat bg-contain"' + _vm._ssrStyle({
	        "filter": "brightness(1.2)"
	      }, {
	        backgroundImage: `url('${_vm.createCategoryUrl(_vm.runeStyle.name)}')`
	      }, null) + " data-v-b1ca2680></div></div> "), _vm._ssrNode('<div class="mt-24 space-y-4" data-v-b1ca2680>', "</div>", [_vm._l(_vm.slots, function(category, index) {
	        return _vm._ssrNode("<div data-v-b1ca2680>", "</div>", [_vm._ssrNode('<div class="flex space-x-4" data-v-b1ca2680>', "</div>", _vm._l(category, function(runeId) {
	          return _vm._ssrNode("<ul data-v-b1ca2680>", "</ul>", [_c("Tooltip", {
	            scopedSlots: _vm._u([{
	              key: "trigger",
	              fn: function() {
	                return [_c("li", {
	                  staticClass: "w-12 h-12 bg-center bg-cover border-2 border-teal-600 rounded-full cursor-pointer",
	                  class: _vm.selectedRunes.selected.includes(runeId) ? "used-rune" : "not-used-rune",
	                  style: {
	                    backgroundImage: `url('${_vm.createCDragonAssetUrl(_vm.runes.perks[runeId].icon)}')`
	                  }
	                })];
	              },
	              proxy: true
	            }, {
	              key: "default",
	              fn: function() {
	                return [_c("div", {
	                  staticClass: "flex max-w-md p-2 text-sm text-left text-white select-none"
	                }, [_c("div", {
	                  staticClass: "flex-shrink-0 w-12 h-12 ml-1 bg-center bg-cover rounded-md bg-white0",
	                  style: {
	                    backgroundImage: `url('${_vm.createCDragonAssetUrl(_vm.runes.perks[runeId].icon)}')`
	                  }
	                }), _vm._v(" "), _c("div", {
	                  staticClass: "ml-2 leading-none"
	                }, [_c("div", {
	                  staticClass: "text-base"
	                }, [_vm._v(_vm._s(_vm.runes.perks[runeId].name))]), _vm._v(" "), _c("div", {
	                  staticClass: "mt-3 font-light leading-tight text-teal-200 rune-description",
	                  domProps: {
	                    "innerHTML": _vm._s(_vm.runes.perks[runeId].desc)
	                  }
	                })])])];
	              },
	              proxy: true
	            }], null, true)
	          })], 1);
	        }), 0), _vm._ssrNode(" " + (_vm.primary && index == 0 ? '<div class="w-full mt-4 bg-teal-500 bg-opacity-25 h-2px" data-v-b1ca2680></div>' : "<!---->"))], 2);
	      }), _vm._ssrNode(" "), !_vm.primary ? _vm._ssrNode("<div data-v-b1ca2680>", "</div>", [_vm._ssrNode('<div class="mt-8 space-y-4" data-v-b1ca2680>', "</div>", _vm._l(_vm.kStats, function(row, index) {
	        return _vm._ssrNode('<div class="flex px-3 space-x-8" data-v-b1ca2680>', "</div>", _vm._l(row, function(kStat, i) {
	          return _vm._ssrNode("<ul data-v-b1ca2680>", "</ul>", [_c("Tooltip", {
	            scopedSlots: _vm._u([{
	              key: "trigger",
	              fn: function() {
	                return [_c("li", {
	                  staticClass: "w-8 h-8 bg-teal-900 bg-center bg-cover border-2 border-teal-600 rounded-full cursor-pointer",
	                  class: _vm.selectedRunes.selected[index + 6] === kStat ? "used-rune" : "not-used-rune",
	                  style: {
	                    backgroundImage: `url('${_vm.createCDragonAssetUrl(_vm.runes.perks[kStat].icon)}')`
	                  }
	                })];
	              },
	              proxy: true
	            }, {
	              key: "default",
	              fn: function() {
	                return [_c("div", {
	                  staticClass: "flex max-w-md p-2 text-sm text-left text-white select-none"
	                }, [_c("div", {
	                  staticClass: "flex-shrink-0 w-8 h-8 ml-1 bg-center bg-cover rounded-md bg-white0",
	                  style: {
	                    backgroundImage: `url('${_vm.createCDragonAssetUrl(_vm.runes.perks[kStat].icon)}')`
	                  }
	                }), _vm._v(" "), _c("div", {
	                  staticClass: "ml-2 leading-none"
	                }, [_c("div", {
	                  staticClass: "text-base"
	                }, [_vm._v(_vm._s(_vm.runes.perks[kStat].name))]), _vm._v(" "), _c("div", {
	                  staticClass: "mt-3 font-light leading-tight text-teal-200 rune-description",
	                  domProps: {
	                    "innerHTML": _vm._s(_vm.runes.perks[kStat].desc)
	                  }
	                })])])];
	              },
	              proxy: true
	            }], null, true)
	          })], 1);
	        }), 0);
	      }), 0)]) : _vm._e()], 2)], 2);
	    };
	    var RuneStylevue_type_template_id_b1ca2680_scoped_true_staticRenderFns = [];
	    var Tooltip = __webpack_require__(21);
	    var RuneStylevue_type_script_lang_js_ = {
	      components: {
	        Tooltip: Tooltip["a"]
	      },
	      props: {
	        primary: {
	          type: Boolean,
	          default: false
	        },
	        runeStyle: {
	          type: Object,
	          required: true
	        }
	      },
	      computed: {
	        slots() {
	          return this.primary ? this.runeStyle.slots : this.runeStyle.slots.slice(1);
	        },
	        ...Object(vuex["d"])({
	          kStats: (state) => state.cdragon.kStats,
	          runes: (state) => state.cdragon.runes,
	          runesOpen: (state) => state.cdragon.runesOpen,
	          selectedRunes: (state) => state.cdragon.selectedRunes
	        })
	      },
	      methods: {
	        createCategoryBorderUrl(name) {
	          const lower = name.toLowerCase();
	          return `https://raw.communitydragon.org/pbe/plugins/rcp-fe-lol-collections/global/default/perks/images/${lower}/vfx-${lower[0]}.png`;
	        },
	        createCategoryUrl(name) {
	          const lower = name.toLowerCase();
	          return `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-collections/global/default/perks/images/${lower}/icon-${lower[0]}.png`;
	        },
	        createCDragonAssetUrl: functions["a"]
	      }
	    };
	    var Runes_RuneStylevue_type_script_lang_js_ = RuneStylevue_type_script_lang_js_;
	    function RuneStyle_injectStyles(context) {
	      var style0 = __webpack_require__(64);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var RuneStyle_component = Object(componentNormalizer["a"])(Runes_RuneStylevue_type_script_lang_js_, RuneStylevue_type_template_id_b1ca2680_scoped_true_render, RuneStylevue_type_template_id_b1ca2680_scoped_true_staticRenderFns, false, RuneStyle_injectStyles, "b1ca2680", "27fbbac9");
	    var RuneStyle = RuneStyle_component.exports;
	    var RunesContainervue_type_script_lang_js_ = {
	      components: {
	        LazyBackground: LazyBackgroundImage,
	        RuneStyle
	      },
	      computed: {
	        primaryStyle() {
	          return this.runes.perkstyles[this.selectedRunes.primaryStyle];
	        },
	        secondaryStyle() {
	          return this.runes.perkstyles[this.selectedRunes.secondaryStyle];
	        },
	        ...Object(vuex["d"])({
	          runes: (state) => state.cdragon.runes,
	          runesOpen: (state) => state.cdragon.runesOpen,
	          selectedRunes: (state) => state.cdragon.selectedRunes
	        })
	      },
	      created() {
	        document.addEventListener("keydown", this.handleEscape);
	      },
	      beforeDestroy() {
	        document.removeEventListener("keydown", this.handleEscape);
	      },
	      methods: {
	        close() {
	          this.displayOrHideRunes({});
	        },
	        handleEscape(e) {
	          if (e.key === "Esc" || e.key === "Escape") {
	            this.displayOrHideRunes({});
	          }
	        },
	        createCDragonAssetUrl: functions["a"],
	        ...Object(vuex["b"])("cdragon", ["displayOrHideRunes"])
	      }
	    };
	    var Runes_RunesContainervue_type_script_lang_js_ = RunesContainervue_type_script_lang_js_;
	    var RunesContainer_component = Object(componentNormalizer["a"])(Runes_RunesContainervue_type_script_lang_js_, RunesContainervue_type_template_id_d05730a8_render, RunesContainervue_type_template_id_d05730a8_staticRenderFns, false, null, null, "1b52fc74");
	    var RunesContainer = RunesContainer_component.exports;
	    var SVGContainervue_type_template_id_2820f89e_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("svg", {
	        staticClass: "hidden",
	        attrs: {
	          "xmlns": "http://www.w3.org/2000/svg"
	        }
	      }, [_vm._ssrNode('<symbol id="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></symbol> <symbol id="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="fill-current"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></symbol> <symbol id="time" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></symbol> <symbol id="times" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="fill-current"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></symbol> <symbol id="caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="fill-current"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></symbol> <symbol id="caret-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="fill-current"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></symbol>')]);
	    };
	    var SVGContainervue_type_template_id_2820f89e_staticRenderFns = [];
	    var script = {};
	    var SVGContainer_component = Object(componentNormalizer["a"])(script, SVGContainervue_type_template_id_2820f89e_render, SVGContainervue_type_template_id_2820f89e_staticRenderFns, false, null, null, "441b644a");
	    var SVGContainer = SVGContainer_component.exports;
	    var MainFootervue_type_template_id_4130642e_scoped_true_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("footer", {
	        staticClass: "py-16 text-c-0"
	      }, [_vm._ssrNode('<p class="leading-tight text-center pointer-events-none horizontal-center text-xxs" data-v-4130642e>\n    \xA9 2012-2022 ZEM.GG. ZEM.GG isn\u2019t endorsed by Riot Games and doesn\u2019t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.<br data-v-4130642e>\n    League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends \xA9 Riot Games, Inc.\n  </p>')]);
	    };
	    var MainFootervue_type_template_id_4130642e_scoped_true_staticRenderFns = [];
	    var MainFooter_script = {};
	    function MainFooter_injectStyles(context) {
	    }
	    var MainFooter_component = Object(componentNormalizer["a"])(MainFooter_script, MainFootervue_type_template_id_4130642e_scoped_true_render, MainFootervue_type_template_id_4130642e_scoped_true_staticRenderFns, false, MainFooter_injectStyles, "4130642e", "8f4998aa");
	    var MainFooter = MainFooter_component.exports;
	    var SearchForm = __webpack_require__(10);
	    var default_mvue_type_script_lang_js_ = {
	      components: {
	        NotificationsContainer,
	        SearchForm: SearchForm["a"],
	        RunesContainer,
	        SVGContainer,
	        MainFooter
	      },
	      computed: {
	        title() {
	          return "\uB864 \uC804\uC801 \uAC80\uC0C9 ZEM.GG | \uC18C\uD658\uC0AC \uC778\uBD84, \uC18C\uD658\uC0AC \uB4F1\uAE09 \uD655\uC778";
	        },
	        ...Object(vuex["d"])({
	          basic: (state) => state.summoner.basic,
	          current: (state) => state.summoner.live.match,
	          favorites: (state) => state.settings.favorites,
	          selectedRegion: (state) => state.settings.region
	        })
	      },
	      beforeMount() {
	        this.updateSettings({
	          name: "region"
	        });
	        this.updateSettings({
	          name: "recentSearches",
	          isJson: true
	        });
	        this.updateSettings({
	          name: "favorites",
	          isJson: true
	        });
	      },
	      methods: {
	        redirect(summoner, region) {
	          this.$router.push(`/summoner/${region}/${summoner}`);
	        },
	        ...Object(vuex["b"])("settings", ["updatePercent", "updateSettings"])
	      }
	    };
	    var layouts_default_mvue_type_script_lang_js_ = default_mvue_type_script_lang_js_;
	    function default_m_injectStyles(context) {
	      var style0 = __webpack_require__(70);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var default_m_component = Object(componentNormalizer["a"])(layouts_default_mvue_type_script_lang_js_, default_mvue_type_template_id_557c66b2_scoped_true_render, default_mvue_type_template_id_557c66b2_scoped_true_staticRenderFns, false, default_m_injectStyles, "557c66b2", "ba44d742");
	    var default_m = default_m_component.exports;
	    var defaultvue_type_template_id_246b49a7_scoped_true_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "flex flex-col min-h-screen bg-c-2"
	      }, [_c("client-only", [_c("SVGContainer"), _vm._v(" "), _c("NotificationsContainer"), _vm._v(" "), _c("RunesContainer")], 1), _vm._ssrNode(" "), _vm._ssrNode('<header class="fixed w-full px-10 z-20 text-gray-100 transition-colors duration-100 ease-in-out bg-c-0" data-v-246b49a7>', "</header>", [_vm._ssrNode('<div class="flex items-center h-16 gap-8" data-v-246b49a7>', "</div>", [_vm._ssrNode('<h1 data-v-246b49a7><a href="/" class="flex flex-col items-center justify-center text-c-3 py-2 px-3 rounded-sm" data-v-246b49a7><span class="h-0 text-z" data-v-246b49a7>' + _vm._ssrEscape(_vm._s(_vm.title)) + '</span> <div class="logo text-c-1" data-v-246b49a7>\n            ZEM\n          </div> <span class="text-xs text-c-2" data-v-246b49a7>zem.gg</span></a></h1> '), _vm._ssrNode('<div class="flex justify-between flex-1 h-full" data-v-246b49a7>', "</div>", [_vm._ssrNode('<div class="flex" data-v-246b49a7>', "</div>", [_vm.$route.params.name ? _c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 text-xs font-bold gap-2 menu h-full",
	        attrs: {
	          "to": {
	            name: "summoner-region-name-mode",
	            params: {
	              region: _vm.$route.params.region,
	              name: _vm.$route.params.name
	            }
	          },
	          "exact": ""
	        }
	      }, [_c("span", [_vm._v("\uC18C\uD658\uC0AC \uC815\uBCF4")])]) : _vm._e(), _vm._ssrNode(" "), _c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 text-xs font-bold gap-2 menu h-full",
	        attrs: {
	          "to": {
	            name: "multiple-region-names",
	            params: {
	              region: _vm.$route.params.region
	            }
	          }
	        }
	      }, [_c("span", [_vm._v("AI \uBA40\uD2F0\uC11C\uCE58")])])], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="flex flex-1 items-center justify-center" data-v-246b49a7>', "</div>", [_c("SearchForm", {
	        attrs: {
	          "homepage": false
	        },
	        on: {
	          "formSubmit": _vm.redirect
	        }
	      })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div data-v-246b49a7>", "</div>", [_vm._ssrNode('<a href="https://discord.gg/W76QeWsPCM" target="_blank" class="z-20 flex items-center justify-center text-sm font-bold gap-2 h-full" data-v-246b49a7>', "</a>", [_vm._ssrNode('<div class="flex items-center justify-center" data-v-246b49a7>', "</div>", [_c("nuxt-img", {
	        staticClass: "w-8 h-6",
	        attrs: {
	          "src": `https://zem.gg/img/Discord.png`,
	          "format": "webp",
	          "width": "32",
	          "height": "28"
	        }
	      })], 1), _vm._ssrNode("\n            \uB514\uCF54 \uCC38\uC5EC\n          ")], 2)])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="pt-20" data-v-246b49a7>', "</div>", [_c("nuxt"), _vm._ssrNode(" "), _c("MainFooter")], 2)], 2);
	    };
	    var defaultvue_type_template_id_246b49a7_scoped_true_staticRenderFns = [];
	    var defaultvue_type_script_lang_js_ = {
	      components: {
	        MainFooter,
	        SearchForm: SearchForm["a"],
	        NotificationsContainer,
	        RunesContainer,
	        SVGContainer
	      },
	      data() {
	        return {
	          bgHeader: false
	        };
	      },
	      computed: {
	        title() {
	          return this.summonerFound ? `${this.basic.account.name} | \uC18C\uD658\uC0AC \uC804\uC801 \uAC80\uC0C9, \uC778\uBD84 \uAC80\uC0C9, \uB4F1\uAE09 \uAC80\uC0C9 ZEM.GG` : `${this.$route.params.name} |  \uC18C\uD658\uC0AC \uC804\uC801 \uAC80\uC0C9, \uC778\uBD84 \uAC80\uC0C9, \uB4F1\uAE09 \uAC80\uC0C9 ZEM.GG`;
	        },
	        tabTransition() {
	          return this.summonerFound && this.overviewLoaded ? "tab" : "none";
	        },
	        ...Object(vuex["d"])({
	          basic: (state) => state.summoner.basic,
	          current: (state) => state.summoner.live.match,
	          favorites: (state) => state.settings.favorites,
	          selectedRegion: (state) => state.settings.region
	        }),
	        ...Object(vuex["c"])("summoner", ["playing", "overviewLoaded", "summonerFound", "summonerNotFound", "summonerLoading"])
	      },
	      beforeMount() {
	        this.updateSettings({
	          name: "region"
	        });
	        this.updateSettings({
	          name: "recentSearches",
	          isJson: true
	        });
	        this.updateSettings({
	          name: "favorites",
	          isJson: true
	        });
	      },
	      methods: {
	        redirect(summoner, region) {
	          this.$router.push(`/summoner/${region}/${summoner}`);
	        },
	        ...Object(vuex["b"])("settings", ["updatePercent", "updateSettings"]),
	        ...Object(vuex["b"])("summoner", ["basicRequest"])
	      }
	    };
	    var layouts_defaultvue_type_script_lang_js_ = defaultvue_type_script_lang_js_;
	    function default_injectStyles(context) {
	      var style0 = __webpack_require__(72);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var default_component = Object(componentNormalizer["a"])(layouts_defaultvue_type_script_lang_js_, defaultvue_type_template_id_246b49a7_scoped_true_render, defaultvue_type_template_id_246b49a7_scoped_true_staticRenderFns, false, default_injectStyles, "246b49a7", "e65a5040");
	    var layouts_default = default_component.exports;
	    var home_mvue_type_template_id_6c10702b_scoped_true_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "relative z-20"
	      }, [_c("client-only", [_c("SVGContainer"), _vm._v(" "), _c("NotificationsContainer"), _vm._v(" "), _c("RunesContainer")], 1), _vm._ssrNode(" "), _vm._ssrNode('<header class="fixed w-full z-20 px-4 text-gray-100 transition-colors duration-100 ease-in-out bg-c-0" data-v-6c10702b>', "</header>", [_vm._ssrNode('<div class="flex flex-col items-center" data-v-6c10702b>', "</div>", [_vm._ssrNode('<h1 class="relative w-full" data-v-6c10702b>', "</h1>", [_vm._ssrNode('<a href="/" class="flex flex-col items-center justify-center text-c-3 py-2 px-3 rounded-sm" data-v-6c10702b><span class="h-0 text-z" data-v-6c10702b>' + _vm._ssrEscape(_vm._s(_vm.title)) + '</span> <div class="logo text-c-1" data-v-6c10702b>\n            ZEM\n          </div> <span class="text-xs text-c-2" data-v-6c10702b>zem.gg</span></a> '), _vm._ssrNode('<div class="absolute right-0 top-0 flex justify-between mt-2" data-v-6c10702b>', "</div>", [_vm._ssrNode('<a href="https://discord.gg/W76QeWsPCM" target="_blank" class="z-20 flex items-center justify-center text-sm font-bold gap-2 h-full" data-v-6c10702b>', "</a>", [_vm._ssrNode('<div class="flex items-center justify-center" data-v-6c10702b>', "</div>", [_c("nuxt-img", {
	        staticClass: "w-8 h-6",
	        attrs: {
	          "src": `https://zem.gg/img/Discord.png`,
	          "format": "webp",
	          "width": "32",
	          "height": "28"
	        }
	      })], 1), _vm._ssrNode("\n            \uB514\uCF54 \uCC38\uC5EC\n          ")], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="flex justify-between" data-v-6c10702b>', "</div>", [_vm._ssrNode('<div class="flex" data-v-6c10702b>', "</div>", [_c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 py-2 text-sm font-bold gap-2 menu h-full",
	        attrs: {
	          "to": "/",
	          "exact": ""
	        }
	      }, [_c("span", [_vm._v("\uD648")])]), _vm._ssrNode(" "), _c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 py-2 text-xs font-bold gap-2 menu h-full",
	        attrs: {
	          "to": {
	            name: "multiple-region-names",
	            params: {
	              region: _vm.selectedRegion
	            }
	          }
	        }
	      }, [_c("span", [_vm._v("AI \uBA40\uD2F0\uC11C\uCE58")])])], 2)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="relative w-full bg-c-2 pt-12" data-v-6c10702b>', "</div>", [_c("nuxt"), _vm._ssrNode(" "), _c("MainFooter")], 2)], 2);
	    };
	    var home_mvue_type_template_id_6c10702b_scoped_true_staticRenderFns = [];
	    var home_mvue_type_script_lang_js_ = {
	      components: {
	        NotificationsContainer,
	        RunesContainer,
	        SVGContainer,
	        MainFooter
	      },
	      computed: {
	        title() {
	          return "\uB864 \uC804\uC801 \uAC80\uC0C9 ZEM.GG | \uC18C\uD658\uC0AC \uC778\uBD84, \uC18C\uD658\uC0AC \uB4F1\uAE09 \uD655\uC778";
	        },
	        ...Object(vuex["d"])({
	          basic: (state) => state.summoner.basic,
	          current: (state) => state.summoner.live.match,
	          favorites: (state) => state.settings.favorites,
	          selectedRegion: (state) => state.settings.region
	        })
	      },
	      beforeMount() {
	        this.updateSettings({
	          name: "region"
	        });
	        this.updateSettings({
	          name: "recentSearches",
	          isJson: true
	        });
	        this.updateSettings({
	          name: "favorites",
	          isJson: true
	        });
	      },
	      methods: {
	        ...Object(vuex["b"])("settings", ["updatePercent", "updateSettings"])
	      }
	    };
	    var layouts_home_mvue_type_script_lang_js_ = home_mvue_type_script_lang_js_;
	    function home_m_injectStyles(context) {
	      var style0 = __webpack_require__(74);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var home_m_component = Object(componentNormalizer["a"])(layouts_home_mvue_type_script_lang_js_, home_mvue_type_template_id_6c10702b_scoped_true_render, home_mvue_type_template_id_6c10702b_scoped_true_staticRenderFns, false, home_m_injectStyles, "6c10702b", "7d3d6362");
	    var home_m = home_m_component.exports;
	    var homevue_type_template_id_568b82f0_scoped_true_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "relative flex flex-col z-20 bg-c-2"
	      }, [_c("client-only", [_c("SVGContainer"), _vm._v(" "), _c("NotificationsContainer"), _vm._v(" "), _c("RunesContainer")], 1), _vm._ssrNode(" "), _vm._ssrNode('<header class="fixed w-full z-20 px-10 text-gray-100 transition-colors duration-100 ease-in-out bg-c-0" data-v-568b82f0>', "</header>", [_vm._ssrNode('<div class="flex items-center h-16 gap-8" data-v-568b82f0>', "</div>", [_vm._ssrNode('<h1 data-v-568b82f0><a href="/" class="flex flex-col items-center justify-center text-c-3 py-2 px-3 rounded-sm" data-v-568b82f0><span class="h-0 text-z" data-v-568b82f0>' + _vm._ssrEscape(_vm._s(_vm.title)) + '</span> <div class="logo text-c-1" data-v-568b82f0>\n            ZEM\n          </div> <span class="text-xs text-c-2" data-v-568b82f0>zem.gg</span></a></h1> '), _vm._ssrNode('<div class="flex justify-between flex-1 h-full" data-v-568b82f0>', "</div>", [_vm._ssrNode('<div class="flex" data-v-568b82f0>', "</div>", [_c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 text-sm font-bold gap-2 menu h-full",
	        attrs: {
	          "to": "/",
	          "exact": ""
	        }
	      }, [_c("span", [_vm._v("\uD648")])]), _vm._ssrNode(" "), _c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 text-xs font-bold gap-2 menu h-full",
	        attrs: {
	          "to": {
	            name: "multiple-region-names",
	            params: {
	              region: _vm.selectedRegion
	            }
	          }
	        }
	      }, [_c("span", [_vm._v("AI \uBA40\uD2F0\uC11C\uCE58")])])], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="flex justify-between h-full" data-v-568b82f0>', "</div>", [_vm._ssrNode('<a href="https://discord.gg/W76QeWsPCM" target="_blank" class="z-20 flex items-center justify-center text-sm font-bold gap-2 h-full" data-v-568b82f0>', "</a>", [_vm._ssrNode('<div class="flex items-center justify-center" data-v-568b82f0>', "</div>", [_c("nuxt-img", {
	        staticClass: "w-8 h-6",
	        attrs: {
	          "src": `https://zem.gg/img/Discord.png`,
	          "format": "webp",
	          "width": "32",
	          "height": "28"
	        }
	      })], 1), _vm._ssrNode("\n            \uB514\uCF54 \uCC38\uC5EC\n          ")], 2)])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="relative w-full pt-16" data-v-568b82f0>', "</div>", [_c("nuxt"), _vm._ssrNode(" "), _c("MainFooter")], 2)], 2);
	    };
	    var homevue_type_template_id_568b82f0_scoped_true_staticRenderFns = [];
	    var homevue_type_script_lang_js_ = {
	      components: {
	        NotificationsContainer,
	        RunesContainer,
	        SVGContainer,
	        MainFooter
	      },
	      computed: {
	        title() {
	          return "\uB864 \uC804\uC801 \uAC80\uC0C9 ZEM.GG | \uC18C\uD658\uC0AC \uC778\uBD84, \uC18C\uD658\uC0AC \uB4F1\uAE09 \uD655\uC778";
	        },
	        ...Object(vuex["d"])({
	          basic: (state) => state.summoner.basic,
	          current: (state) => state.summoner.live.match,
	          favorites: (state) => state.settings.favorites,
	          selectedRegion: (state) => state.settings.region
	        })
	      },
	      beforeMount() {
	        this.updateSettings({
	          name: "region"
	        });
	        this.updateSettings({
	          name: "recentSearches",
	          isJson: true
	        });
	        this.updateSettings({
	          name: "favorites",
	          isJson: true
	        });
	      },
	      methods: {
	        ...Object(vuex["b"])("settings", ["updatePercent", "updateSettings"])
	      }
	    };
	    var layouts_homevue_type_script_lang_js_ = homevue_type_script_lang_js_;
	    function home_injectStyles(context) {
	      var style0 = __webpack_require__(76);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var home_component = Object(componentNormalizer["a"])(layouts_homevue_type_script_lang_js_, homevue_type_template_id_568b82f0_scoped_true_render, homevue_type_template_id_568b82f0_scoped_true_staticRenderFns, false, home_injectStyles, "568b82f0", "47dc4dd0");
	    var home = home_component.exports;
	    var multiple_mvue_type_template_id_111e11af_scoped_true_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "relative z-20"
	      }, [_c("client-only", [_c("SVGContainer"), _vm._v(" "), _c("NotificationsContainer"), _vm._v(" "), _c("RunesContainer")], 1), _vm._ssrNode(" "), _vm._ssrNode('<header class="fixed w-full z-20 px-4 text-gray-100 transition-colors duration-100 ease-in-out bg-c-0" data-v-111e11af>', "</header>", [_vm._ssrNode('<div class="flex flex-col items-center" data-v-111e11af>', "</div>", [_vm._ssrNode('<h1 class="relative w-full" data-v-111e11af>', "</h1>", [_vm._ssrNode('<a href="/" class="flex flex-col items-center justify-center text-c-3 py-2 px-3 rounded-sm" data-v-111e11af><span class="h-0 text-z" data-v-111e11af>' + _vm._ssrEscape(_vm._s(_vm.title)) + '</span> <div class="logo text-c-1" data-v-111e11af>\n            ZEM\n          </div> <span class="text-xs text-c-2" data-v-111e11af>zem.gg</span></a> '), _vm._ssrNode('<div class="absolute right-0 top-0 flex justify-between mt-2" data-v-111e11af>', "</div>", [_vm._ssrNode('<a href="https://discord.gg/W76QeWsPCM" target="_blank" class="z-20 flex items-center justify-center text-sm font-bold gap-2 h-full" data-v-111e11af>', "</a>", [_vm._ssrNode('<div class="flex items-center justify-center" data-v-111e11af>', "</div>", [_c("nuxt-img", {
	        staticClass: "w-8 h-6",
	        attrs: {
	          "src": `https://zem.gg/img/Discord.png`,
	          "format": "webp",
	          "width": "32",
	          "height": "28"
	        }
	      })], 1), _vm._ssrNode("\n            \uB514\uCF54 \uCC38\uC5EC\n          ")], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="flex justify-between" data-v-111e11af>', "</div>", [_vm._ssrNode('<div class="flex" data-v-111e11af>', "</div>", [_c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 py-2 text-xs font-bold gap-2 menu h-full",
	        attrs: {
	          "to": {
	            name: "multiple-region-names",
	            params: {
	              region: _vm.selectedRegion
	            }
	          },
	          "exact": ""
	        }
	      }, [_c("span", [_vm._v("AI \uBA40\uD2F0\uC11C\uCE58")])])], 1)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="w-full" data-v-111e11af>', "</div>", [_c("SearchForm", {
	        staticClass: "py-4",
	        attrs: {
	          "homepage": false
	        },
	        on: {
	          "formSubmit": _vm.redirect
	        }
	      })], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="relative w-full bg-c-2 pt-40" data-v-111e11af>', "</div>", [_c("nuxt"), _vm._ssrNode(" "), _c("MainFooter")], 2)], 2);
	    };
	    var multiple_mvue_type_template_id_111e11af_scoped_true_staticRenderFns = [];
	    var multiple_mvue_type_script_lang_js_ = {
	      components: {
	        NotificationsContainer,
	        RunesContainer,
	        SVGContainer,
	        MainFooter
	      },
	      computed: {
	        title() {
	          return "\uB864 \uC804\uC801 \uAC80\uC0C9 ZEM.GG | \uC18C\uD658\uC0AC \uC778\uBD84, \uC18C\uD658\uC0AC \uB4F1\uAE09 \uD655\uC778";
	        },
	        ...Object(vuex["d"])({
	          basic: (state) => state.summoner.basic,
	          current: (state) => state.summoner.live.match,
	          favorites: (state) => state.settings.favorites,
	          selectedRegion: (state) => state.settings.region
	        })
	      },
	      beforeMount() {
	        this.updateSettings({
	          name: "region"
	        });
	        this.updateSettings({
	          name: "recentSearches",
	          isJson: true
	        });
	        this.updateSettings({
	          name: "favorites",
	          isJson: true
	        });
	      },
	      methods: {
	        ...Object(vuex["b"])("settings", ["updatePercent", "updateSettings"])
	      }
	    };
	    var layouts_multiple_mvue_type_script_lang_js_ = multiple_mvue_type_script_lang_js_;
	    function multiple_m_injectStyles(context) {
	      var style0 = __webpack_require__(78);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var multiple_m_component = Object(componentNormalizer["a"])(layouts_multiple_mvue_type_script_lang_js_, multiple_mvue_type_template_id_111e11af_scoped_true_render, multiple_mvue_type_template_id_111e11af_scoped_true_staticRenderFns, false, multiple_m_injectStyles, "111e11af", "60d82240");
	    var multiple_m = multiple_m_component.exports;
	    var multiplevue_type_template_id_6ed1acf7_scoped_true_render = function render2() {
	      var _vm = this, _c = _vm._self._c;
	      return _c("div", {
	        staticClass: "relative flex flex-col z-20 bg-c-2"
	      }, [_c("client-only", [_c("SVGContainer"), _vm._v(" "), _c("NotificationsContainer"), _vm._v(" "), _c("RunesContainer")], 1), _vm._ssrNode(" "), _vm._ssrNode('<header class="fixed w-full z-20 px-10 text-gray-100 transition-colors duration-100 ease-in-out bg-c-0" data-v-6ed1acf7>', "</header>", [_vm._ssrNode('<div class="flex items-center h-16 gap-8" data-v-6ed1acf7>', "</div>", [_vm._ssrNode('<h1 data-v-6ed1acf7><a href="/" class="flex flex-col items-center justify-center py-2 px-3 rounded-sm" data-v-6ed1acf7><span class="h-0 text-z" data-v-6ed1acf7>' + _vm._ssrEscape(_vm._s(_vm.title)) + '</span> <div class="logo text-c-1" data-v-6ed1acf7>\n            ZEM\n          </div> <span class="text-xs text-c-2" data-v-6ed1acf7>zem.gg</span></a></h1> '), _vm._ssrNode('<div class="flex justify-between flex-1 h-full" data-v-6ed1acf7>', "</div>", [_vm._ssrNode('<div class="flex" data-v-6ed1acf7>', "</div>", [_c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 text-sm font-bold gap-2 menu h-full",
	        attrs: {
	          "to": "/",
	          "exact": ""
	        }
	      }, [_c("span", [_vm._v("\uD648")])]), _vm._ssrNode(" "), _c("nuxt-link", {
	        staticClass: "z-20 flex items-center justify-center px-4 text-xs font-bold gap-2 menu h-full",
	        attrs: {
	          "to": {
	            name: "multiple-region-names",
	            params: {
	              region: _vm.selectedRegion
	            }
	          }
	        }
	      }, [_c("span", [_vm._v("AI \uBA40\uD2F0\uC11C\uCE58")])])], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="flex flex-1 items-center justify-center" data-v-6ed1acf7>', "</div>", [_c("SearchForm", {
	        attrs: {
	          "homepage": false
	        },
	        on: {
	          "formSubmit": _vm.redirect
	        }
	      })], 1), _vm._ssrNode(" "), _vm._ssrNode('<div class="flex justify-between h-full" data-v-6ed1acf7>', "</div>", [_vm._ssrNode('<a href="https://discord.gg/W76QeWsPCM" target="_blank" class="z-20 flex items-center justify-center text-sm font-bold gap-2 h-full" data-v-6ed1acf7>', "</a>", [_vm._ssrNode('<div class="flex items-center justify-center" data-v-6ed1acf7>', "</div>", [_c("nuxt-img", {
	        staticClass: "w-8 h-6",
	        attrs: {
	          "src": `https://zem.gg/img/Discord.png`,
	          "format": "webp",
	          "width": "32",
	          "height": "28"
	        }
	      })], 1), _vm._ssrNode("\n            \uB514\uCF54 \uCC38\uC5EC\n          ")], 2)])], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="relative w-full pt-20" data-v-6ed1acf7>', "</div>", [_c("nuxt"), _vm._ssrNode(" "), _c("MainFooter")], 2)], 2);
	    };
	    var multiplevue_type_template_id_6ed1acf7_scoped_true_staticRenderFns = [];
	    var multiplevue_type_script_lang_js_ = {
	      components: {
	        NotificationsContainer,
	        RunesContainer,
	        SVGContainer,
	        MainFooter,
	        SearchForm: SearchForm["a"]
	      },
	      computed: {
	        title() {
	          return "\uB864 \uC804\uC801 \uAC80\uC0C9 ZEM.GG | \uC18C\uD658\uC0AC \uC778\uBD84, \uC18C\uD658\uC0AC \uB4F1\uAE09 \uD655\uC778";
	        },
	        ...Object(vuex["d"])({
	          basic: (state) => state.summoner.basic,
	          current: (state) => state.summoner.live.match,
	          favorites: (state) => state.settings.favorites,
	          selectedRegion: (state) => state.settings.region
	        })
	      },
	      beforeMount() {
	        this.updateSettings({
	          name: "region"
	        });
	        this.updateSettings({
	          name: "recentSearches",
	          isJson: true
	        });
	        this.updateSettings({
	          name: "favorites",
	          isJson: true
	        });
	      },
	      methods: {
	        redirect(summoner, region) {
	          this.$router.push(`/summoner/${region}/${summoner}`);
	        },
	        ...Object(vuex["b"])("settings", ["updatePercent", "updateSettings"])
	      }
	    };
	    var layouts_multiplevue_type_script_lang_js_ = multiplevue_type_script_lang_js_;
	    function multiple_injectStyles(context) {
	      var style0 = __webpack_require__(80);
	      if (style0.__inject__)
	        style0.__inject__(context);
	    }
	    var multiple_component = Object(componentNormalizer["a"])(layouts_multiplevue_type_script_lang_js_, multiplevue_type_template_id_6ed1acf7_scoped_true_render, multiplevue_type_template_id_6ed1acf7_scoped_true_staticRenderFns, false, multiple_injectStyles, "6ed1acf7", "46296a01");
	    var multiple = multiple_component.exports;
	    const layouts = {
	      "_default.m": sanitizeComponent(default_m),
	      "_default": sanitizeComponent(layouts_default),
	      "_home.m": sanitizeComponent(home_m),
	      "_home": sanitizeComponent(home),
	      "_multiple.m": sanitizeComponent(multiple_m),
	      "_multiple": sanitizeComponent(multiple)
	    };
	    var App = {
	      render(h, props) {
	        const loadingEl = h("NuxtLoading", {
	          ref: "loading"
	        });
	        const layoutEl = h(this.layout || "nuxt");
	        const templateEl = h("div", {
	          domProps: {
	            id: "__layout"
	          },
	          key: this.layoutName
	        }, [layoutEl]);
	        const transitionEl = h("transition", {
	          props: {
	            name: "layout",
	            mode: "out-in"
	          },
	          on: {
	            beforeEnter(el) {
	              window.$nuxt.$nextTick(() => {
	                window.$nuxt.$emit("triggerScroll");
	              });
	            }
	          }
	        }, [templateEl]);
	        return h("div", {
	          domProps: {
	            id: "__nuxt"
	          }
	        }, [loadingEl, transitionEl]);
	      },
	      data: () => ({
	        isOnline: true,
	        layout: null,
	        layoutName: "",
	        nbFetching: 0
	      }),
	      beforeCreate() {
	        vue_runtime["c"].util.defineReactive(this, "nuxt", this.$options.nuxt);
	      },
	      created() {
	        this.$root.$options.$nuxt = this;
	        this.error = this.nuxt.error;
	        this.context = this.$options.context;
	      },
	      async mounted() {
	        this.$loading = this.$refs.loading;
	      },
	      watch: {
	        "nuxt.err": "errorChanged"
	      },
	      computed: {
	        isOffline() {
	          return !this.isOnline;
	        },
	        isFetching() {
	          return this.nbFetching > 0;
	        }
	      },
	      methods: {
	        refreshOnlineStatus() {
	        },
	        async refresh() {
	          const pages = getMatchedComponentsInstances(this.$route);
	          if (!pages.length) {
	            return;
	          }
	          this.$loading.start();
	          const promises = pages.map(async (page) => {
	            let p = [];
	            if (page.$options.fetch && page.$options.fetch.length) {
	              p.push(promisify(page.$options.fetch, this.context));
	            }
	            if (page.$options.asyncData) {
	              p.push(promisify(page.$options.asyncData, this.context).then((newData) => {
	                for (const key in newData) {
	                  vue_runtime["c"].set(page.$data, key, newData[key]);
	                }
	              }));
	            }
	            await Promise.all(p);
	            p = [];
	            if (page.$fetch) {
	              p.push(page.$fetch());
	            }
	            for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
	              p.push(component.$fetch());
	            }
	            return Promise.all(p);
	          });
	          try {
	            await Promise.all(promises);
	          } catch (error) {
	            this.$loading.fail(error);
	            globalHandleError(error);
	            this.error(error);
	          }
	          this.$loading.finish();
	        },
	        errorChanged() {
	          if (this.nuxt.err) {
	            if (this.$loading) {
	              if (this.$loading.fail) {
	                this.$loading.fail(this.nuxt.err);
	              }
	              if (this.$loading.finish) {
	                this.$loading.finish();
	              }
	            }
	            let errorLayout = (nuxt_error.options || nuxt_error).layout;
	            if (typeof errorLayout === "function") {
	              errorLayout = errorLayout(this.context);
	            }
	            this.setLayout(errorLayout);
	          }
	        },
	        setLayout(layout) {
	          if (!layout || !layouts["_" + layout]) {
	            layout = "default";
	          }
	          this.layoutName = layout;
	          this.layout = layouts["_" + layout];
	          return this.layout;
	        },
	        loadLayout(layout) {
	          if (!layout || !layouts["_" + layout]) {
	            layout = "default";
	          }
	          return Promise.resolve(layouts["_" + layout]);
	        }
	      },
	      components: {
	        NuxtLoading: nuxt_loading
	      }
	    };
	    vue_runtime["c"].use(vuex["a"]);
	    const VUEX_PROPERTIES = ["state", "getters", "actions", "mutations"];
	    let store_store = {};
	    (function updateModules() {
	      store_store = normalizeRoot(__webpack_require__(82), "store/index.js");
	      store_store.modules = store_store.modules || {};
	      resolveStoreModules(__webpack_require__(83), "cdragon.js");
	      resolveStoreModules(__webpack_require__(84), "detailedMatch.js");
	      resolveStoreModules(__webpack_require__(85), "multiple.js");
	      resolveStoreModules(__webpack_require__(86), "notification.js");
	      resolveStoreModules(__webpack_require__(87), "settings.js");
	      resolveStoreModules(__webpack_require__(88), "summoner.js");
	    })();
	    const createStore = store_store instanceof Function ? store_store : () => {
	      return new vuex["a"].Store(Object.assign({
	        strict: false
	      }, store_store));
	    };
	    function normalizeRoot(moduleData, filePath) {
	      moduleData = moduleData.default || moduleData;
	      if (moduleData.commit) {
	        throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
	      }
	      if (typeof moduleData !== "function") {
	        moduleData = Object.assign({}, moduleData);
	      }
	      return normalizeModule(moduleData, filePath);
	    }
	    function normalizeModule(moduleData, filePath) {
	      if (moduleData.state && typeof moduleData.state !== "function") {
	        console.warn(`'state' should be a method that returns an object in ${filePath}`);
	        const state = Object.assign({}, moduleData.state);
	        moduleData = Object.assign({}, moduleData, {
	          state: () => state
	        });
	      }
	      return moduleData;
	    }
	    function resolveStoreModules(moduleData, filename) {
	      moduleData = moduleData.default || moduleData;
	      const namespace = filename.replace(/\.(js|mjs|ts|tsx|cts|mts|ts)$/, "");
	      const namespaces = namespace.split("/");
	      let moduleName = namespaces[namespaces.length - 1];
	      const filePath = `store/${filename}`;
	      moduleData = moduleName === "state" ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath);
	      if (VUEX_PROPERTIES.includes(moduleName)) {
	        const property = moduleName;
	        const propertyStoreModule = getStoreModule(store_store, namespaces, {
	          isProperty: true
	        });
	        mergeProperty(propertyStoreModule, moduleData, property);
	        return;
	      }
	      const isIndexModule = moduleName === "index";
	      if (isIndexModule) {
	        namespaces.pop();
	        moduleName = namespaces[namespaces.length - 1];
	      }
	      const storeModule = getStoreModule(store_store, namespaces);
	      for (const property of VUEX_PROPERTIES) {
	        mergeProperty(storeModule, moduleData[property], property);
	      }
	      if (moduleData.namespaced === false) {
	        delete storeModule.namespaced;
	      }
	    }
	    function normalizeState(moduleData, filePath) {
	      if (typeof moduleData !== "function") {
	        console.warn(`${filePath} should export a method that returns an object`);
	        const state = Object.assign({}, moduleData);
	        return () => state;
	      }
	      return normalizeModule(moduleData, filePath);
	    }
	    function getStoreModule(storeModule, namespaces, {
	      isProperty = false
	    } = {}) {
	      if (!namespaces.length || isProperty && namespaces.length === 1) {
	        return storeModule;
	      }
	      const namespace = namespaces.shift();
	      storeModule.modules[namespace] = storeModule.modules[namespace] || {};
	      storeModule.modules[namespace].namespaced = true;
	      storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
	      return getStoreModule(storeModule.modules[namespace], namespaces, {
	        isProperty
	      });
	    }
	    function mergeProperty(storeModule, moduleData, property) {
	      if (!moduleData) {
	        return;
	      }
	      if (property === "state") {
	        storeModule.state = moduleData || storeModule.state;
	      } else {
	        storeModule[property] = Object.assign({}, storeModule[property], moduleData);
	      }
	    }
	    var external_hookable_ = __webpack_require__(36);
	    __webpack_require__(13);
	    function isObject(val) {
	      return val !== null && typeof val === "object";
	    }
	    function _defu(baseObj, defaults, namespace = ".", merger) {
	      if (!isObject(defaults)) {
	        return _defu(baseObj, {}, namespace, merger);
	      }
	      const obj = Object.assign({}, defaults);
	      for (const key in baseObj) {
	        if (key === "__proto__" || key === "constructor") {
	          continue;
	        }
	        const val = baseObj[key];
	        if (val === null || val === void 0) {
	          continue;
	        }
	        if (merger && merger(obj, key, val, namespace)) {
	          continue;
	        }
	        if (Array.isArray(val) && Array.isArray(obj[key])) {
	          obj[key] = val.concat(obj[key]);
	        } else if (isObject(val) && isObject(obj[key])) {
	          obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
	        } else {
	          obj[key] = val;
	        }
	      }
	      return obj;
	    }
	    function createDefu(merger) {
	      return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
	    }
	    const defu = createDefu();
	    __webpack_require__(38);
	    __webpack_require__(9);
	    __webpack_require__(14);
	    vue_runtime["d"];
	    function callWithNuxt(nuxt, setup, args) {
	      const p = args ? setup(...args) : setup();
	      return p;
	    }
	    function defineNuxtPlugin(plugin) {
	      return async (ctx, inject) => {
	        const result = await callWithNuxt(ctx.$_nuxtApp, plugin, [ctx.$_nuxtApp]);
	        if (result && result.provide) {
	          for (const key in result.provide) {
	            inject(key, result.provide[key]);
	          }
	        }
	        return result;
	      };
	    }
	    function proxiedState(state) {
	      state._asyncData = state._asyncData || {};
	      state._errors = state._errors || {};
	      return new Proxy(state, {
	        get(target, prop) {
	          if (prop === "data") {
	            return target._asyncData;
	          }
	          if (prop === "_data") {
	            return target.state;
	          }
	          return Reflect.get(target, prop);
	        }
	      });
	    }
	    const runOnceWith = (obj, fn) => {
	      if (!obj || !["function", "object"].includes(typeof obj)) {
	        return fn();
	      }
	      if (obj.__nuxt_installed) {
	        return;
	      }
	      obj.__nuxt_installed = true;
	      return fn();
	    };
	    var app_plugin = async (ctx, inject) => {
	      const nuxtApp = {
	        vueApp: {
	          component: (id, definition) => runOnceWith(definition, () => vue_runtime["c"].component(id, definition)),
	          config: {
	            globalProperties: {}
	          },
	          directive: (id, definition) => runOnceWith(definition, () => vue_runtime["c"].directive(id, definition)),
	          mixin: (mixin) => runOnceWith(mixin, () => vue_runtime["c"].mixin(mixin)),
	          mount: () => {
	          },
	          provide: inject,
	          unmount: () => {
	          },
	          use(vuePlugin) {
	            runOnceWith(vuePlugin, () => vuePlugin.install(this));
	          },
	          version: vue_runtime["c"].version
	        },
	        provide: inject,
	        globalName: "nuxt",
	        payload: proxiedState(ctx.ssrContext.nuxt),
	        _asyncDataPromises: [],
	        isHydrating: true,
	        nuxt2Context: ctx
	      };
	      nuxtApp.hooks = Object(external_hookable_["createHooks"])();
	      nuxtApp.hook = nuxtApp.hooks.hook;
	      nuxtApp.callHook = nuxtApp.hooks.callHook;
	      const middleware = await Promise.resolve().then(__webpack_require__.bind(null, 11)).then((r) => r.default);
	      nuxtApp._middleware = nuxtApp._middleware || {
	        global: [],
	        named: middleware
	      };
	      ctx.app.router.beforeEach(async (to, from, next) => {
	        nuxtApp._processingMiddleware = true;
	        for (const middleware2 of nuxtApp._middleware.global) {
	          const result = await callWithNuxt(nuxtApp, middleware2, [to, from]);
	          if (result || result === false) {
	            return next(result);
	          }
	        }
	        next();
	      });
	      ctx.app.router.afterEach(() => {
	        delete nuxtApp._processingMiddleware;
	      });
	      if (!Array.isArray(ctx.app.created)) {
	        ctx.app.created = [ctx.app.created].filter(Boolean);
	      }
	      if (!Array.isArray(ctx.app.mounted)) {
	        ctx.app.mounted = [ctx.app.mounted].filter(Boolean);
	      }
	      {
	        nuxtApp.ssrContext = ctx.ssrContext;
	      }
	      ctx.app.created.push(function() {
	        nuxtApp.vue2App = this;
	      });
	      ctx.app.mounted.push(() => {
	        nuxtApp.isHydrating = false;
	      });
	      const proxiedApp = new Proxy(nuxtApp, {
	        get(target, prop) {
	          if (prop[0] === "$") {
	            var _target$vue2App;
	            return target.nuxt2Context[prop] || ((_target$vue2App = target.vue2App) === null || _target$vue2App === void 0 ? void 0 : _target$vue2App[prop]);
	          }
	          return Reflect.get(target, prop);
	        }
	      });
	      inject("_nuxtApp", proxiedApp);
	    };
	    const vueMetaRenderer = (nuxt) => {
	      const meta = nuxt.ssrContext.meta.inject({
	        isSSR: nuxt.ssrContext.nuxt.serverRendered,
	        ln: false
	      });
	      return {
	        htmlAttrs: meta.htmlAttrs.text(),
	        headAttrs: meta.headAttrs.text(),
	        headTags: meta.title.text() + meta.base.text() + meta.meta.text() + meta.link.text() + meta.style.text() + meta.script.text() + meta.noscript.text(),
	        bodyAttrs: meta.bodyAttrs.text(),
	        bodyScriptsPrepend: meta.meta.text({
	          pbody: true
	        }) + meta.link.text({
	          pbody: true
	        }) + meta.style.text({
	          pbody: true
	        }) + meta.script.text({
	          pbody: true
	        }) + meta.noscript.text({
	          pbody: true
	        }),
	        bodyScripts: meta.meta.text({
	          body: true
	        }) + meta.link.text({
	          body: true
	        }) + meta.style.text({
	          body: true
	        }) + meta.script.text({
	          body: true
	        }) + meta.noscript.text({
	          body: true
	        })
	      };
	    };
	    var nitro_bridge_server = defineNuxtPlugin((nuxtApp) => {
	      const metaRenderers = [vueMetaRenderer];
	      nuxtApp.callHook("meta:register", metaRenderers);
	      nuxtApp.ssrContext.renderMeta = async () => {
	        const metadata = {
	          htmlAttrs: "",
	          headAttrs: "",
	          headTags: "",
	          bodyAttrs: "",
	          bodyScriptsPrepend: "",
	          bodyScripts: ""
	        };
	        for await (const renderer of metaRenderers) {
	          const result = await renderer(nuxtApp);
	          for (const key in result) {
	            metadata[key] += result[key];
	          }
	        }
	        return metadata;
	      };
	    });
	    __webpack_require__(17);
	    async function imageMeta(ctx, url) {
	      const cache = getCache(ctx);
	      const cacheKey = "image:meta:" + url;
	      if (cache.has(cacheKey)) {
	        return cache.get(cacheKey);
	      }
	      const meta = await _imageMeta(url).catch((err) => {
	        console.error("Failed to get image meta for " + url, err + "");
	        return {
	          width: 0,
	          height: 0,
	          ratio: 0
	        };
	      });
	      cache.set(cacheKey, meta);
	      return meta;
	    }
	    async function _imageMeta(url) {
	      {
	        const imageMeta2 = await Promise.resolve().then(__webpack_require__.t.bind(null, 96, 7)).then((r) => r.default || r);
	        const data = await fetch(url).then((res) => res.buffer());
	        const metadata = imageMeta2(data);
	        if (!metadata) {
	          throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
	        }
	        const {
	          width,
	          height
	        } = metadata;
	        const meta = {
	          width,
	          height,
	          ratio: width && height ? width / height : void 0
	        };
	        return meta;
	      }
	    }
	    function getCache(ctx) {
	      if (!ctx.nuxtContext.cache) {
	        if (ctx.nuxtContext.ssrContext && ctx.nuxtContext.ssrContext.cache) {
	          ctx.nuxtContext.cache = ctx.nuxtContext.ssrContext.cache;
	        } else {
	          const _cache = {};
	          ctx.nuxtContext.cache = {
	            get: (id) => _cache[id],
	            set: (id, value) => {
	              _cache[id] = value;
	            },
	            has: (id) => typeof _cache[id] !== "undefined"
	          };
	        }
	      }
	      return ctx.nuxtContext.cache;
	    }
	    function getFileExtension(url = "") {
	      const extension = url.split(/[?#]/).shift().split("/").pop().split(".").pop();
	      return extension;
	    }
	    function createMapper(map) {
	      return (key) => {
	        return key ? map[key] || key : map.missingValue;
	      };
	    }
	    function createOperationsGenerator({
	      formatter,
	      keyMap,
	      joinWith = "/",
	      valueMap
	    } = {}) {
	      if (!formatter) {
	        formatter = (key, value) => `${key}=${value}`;
	      }
	      if (keyMap && typeof keyMap !== "function") {
	        keyMap = createMapper(keyMap);
	      }
	      const map = valueMap || {};
	      Object.keys(map).forEach((valueKey) => {
	        if (typeof map[valueKey] !== "function") {
	          map[valueKey] = createMapper(map[valueKey]);
	        }
	      });
	      return (modifiers = {}) => {
	        const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
	          const mapper = map[key];
	          if (typeof mapper === "function") {
	            value = mapper(modifiers[key]);
	          }
	          key = typeof keyMap === "function" ? keyMap(key) : key;
	          return formatter(key, value);
	        });
	        return operations.join(joinWith);
	      };
	    }
	    function parseSize(input = "") {
	      if (typeof input === "number") {
	        return input;
	      }
	      if (typeof input === "string") {
	        if (input.replace("px", "").match(/^\d+$/g)) {
	          return parseInt(input, 10);
	        }
	      }
	    }
	    function createImage(globalOptions, nuxtContext) {
	      const ctx = {
	        options: globalOptions,
	        nuxtContext
	      };
	      const getImage = function(input, options = {}) {
	        const image = resolveImage(ctx, input, options);
	        if (image.isStatic) {
	          handleStaticImage(image, input);
	        }
	        return image;
	      };
	      const $img = function $img2(input, modifiers = {}, options = {}) {
	        return getImage(input, {
	          ...options,
	          modifiers: defu(modifiers, options.modifiers || {})
	        }).url;
	      };
	      function handleStaticImage(image, input) {
	        {
	          image.url = input;
	        }
	      }
	      for (const presetName in globalOptions.presets) {
	        $img[presetName] = (source, modifiers, options) => $img(source, modifiers, {
	          ...globalOptions.presets[presetName],
	          ...options
	        });
	      }
	      $img.options = globalOptions;
	      $img.getImage = getImage;
	      $img.getMeta = (input, options) => getMeta(ctx, input, options);
	      $img.getSizes = (input, options) => getSizes(ctx, input, options);
	      ctx.$img = $img;
	      return $img;
	    }
	    async function getMeta(ctx, input, options) {
	      const image = resolveImage(ctx, input, {
	        ...options
	      });
	      if (typeof image.getMeta === "function") {
	        return await image.getMeta();
	      } else {
	        return await imageMeta(ctx, image.url);
	      }
	    }
	    function resolveImage(ctx, input, options) {
	      var _options$modifiers, _options$modifiers2;
	      if (typeof input !== "string" || input === "") {
	        throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
	      }
	      if (input.startsWith("data:")) {
	        return {
	          url: input
	        };
	      }
	      const {
	        provider,
	        defaults
	      } = getProvider(ctx, options.provider || ctx.options.provider);
	      const preset = getPreset(ctx, options.preset);
	      input = Object(dist["d"])(input) ? input : Object(dist["i"])(input);
	      if (!provider.supportsAlias) {
	        for (const base in ctx.options.alias) {
	          if (input.startsWith(base)) {
	            input = Object(dist["f"])(ctx.options.alias[base], input.substr(base.length));
	          }
	        }
	      }
	      if (provider.validateDomains && Object(dist["d"])(input)) {
	        const inputHost = Object(dist["h"])(input).host;
	        if (!ctx.options.domains.find((d) => d === inputHost)) {
	          return {
	            url: input
	          };
	        }
	      }
	      const _options = defu(options, preset, defaults);
	      _options.modifiers = {
	        ..._options.modifiers
	      };
	      const expectedFormat = _options.modifiers.format;
	      if ((_options$modifiers = _options.modifiers) !== null && _options$modifiers !== void 0 && _options$modifiers.width) {
	        _options.modifiers.width = parseSize(_options.modifiers.width);
	      }
	      if ((_options$modifiers2 = _options.modifiers) !== null && _options$modifiers2 !== void 0 && _options$modifiers2.height) {
	        _options.modifiers.height = parseSize(_options.modifiers.height);
	      }
	      const image = provider.getImage(input, _options, ctx);
	      image.format = image.format || expectedFormat || "";
	      return image;
	    }
	    function getProvider(ctx, name) {
	      const provider = ctx.options.providers[name];
	      if (!provider) {
	        throw new Error("Unknown provider: " + name);
	      }
	      return provider;
	    }
	    function getPreset(ctx, name) {
	      if (!name) {
	        return {};
	      }
	      if (!ctx.options.presets[name]) {
	        throw new Error("Unknown preset: " + name);
	      }
	      return ctx.options.presets[name];
	    }
	    function getSizes(ctx, input, opts) {
	      var _opts$modifiers, _opts$modifiers2;
	      const width = parseSize((_opts$modifiers = opts.modifiers) === null || _opts$modifiers === void 0 ? void 0 : _opts$modifiers.width);
	      const height = parseSize((_opts$modifiers2 = opts.modifiers) === null || _opts$modifiers2 === void 0 ? void 0 : _opts$modifiers2.height);
	      const hwRatio = width && height ? height / width : 0;
	      const variants = [];
	      const sizes = {};
	      if (typeof opts.sizes === "string") {
	        for (const entry of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
	          const s = entry.split(":");
	          if (s.length !== 2) {
	            continue;
	          }
	          sizes[s[0].trim()] = s[1].trim();
	        }
	      } else {
	        Object.assign(sizes, opts.sizes);
	      }
	      for (const key in sizes) {
	        const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
	        let size = String(sizes[key]);
	        const isFluid = size.endsWith("vw");
	        if (!isFluid && /^\d+$/.test(size)) {
	          size = size + "px";
	        }
	        if (!isFluid && !size.endsWith("px")) {
	          continue;
	        }
	        let _cWidth = parseInt(size);
	        if (!screenMaxWidth || !_cWidth) {
	          continue;
	        }
	        if (isFluid) {
	          _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
	        }
	        const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
	        variants.push({
	          width: _cWidth,
	          size,
	          screenMaxWidth,
	          media: `(max-width: ${screenMaxWidth}px)`,
	          src: ctx.$img(input, {
	            ...opts.modifiers,
	            width: _cWidth,
	            height: _cHeight
	          }, opts)
	        });
	      }
	      variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
	      const defaultVar = variants[variants.length - 1];
	      if (defaultVar) {
	        defaultVar.media = "";
	      }
	      return {
	        sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
	        srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
	        src: defaultVar === null || defaultVar === void 0 ? void 0 : defaultVar.src
	      };
	    }
	    var nuxt_imgvue_type_template_id_4c03b41d_render = function render2() {
	      var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
	      return _c("img", _vm._g(_vm._b({
	        key: _vm.nSrc,
	        ref: "img",
	        attrs: {
	          "src": _vm.nSrc
	        }
	      }, "img", _vm.nAttrs, false), _vm.$listeners), []);
	    };
	    var nuxt_imgvue_type_template_id_4c03b41d_staticRenderFns = [];
	    const defineMixin = (opts) => opts;
	    const imageMixin = defineMixin({
	      props: {
	        src: {
	          type: String,
	          required: true
	        },
	        format: {
	          type: String,
	          default: void 0
	        },
	        quality: {
	          type: [Number, String],
	          default: void 0
	        },
	        background: {
	          type: String,
	          default: void 0
	        },
	        fit: {
	          type: String,
	          default: void 0
	        },
	        modifiers: {
	          type: Object,
	          default: void 0
	        },
	        preset: {
	          type: String,
	          default: void 0
	        },
	        provider: {
	          type: String,
	          default: void 0
	        },
	        sizes: {
	          type: [Object, String],
	          default: void 0
	        },
	        preload: {
	          type: Boolean,
	          default: void 0
	        },
	        width: {
	          type: [String, Number],
	          default: void 0
	        },
	        height: {
	          type: [String, Number],
	          default: void 0
	        },
	        alt: {
	          type: String,
	          default: void 0
	        },
	        referrerpolicy: {
	          type: String,
	          default: void 0
	        },
	        usemap: {
	          type: String,
	          default: void 0
	        },
	        longdesc: {
	          type: String,
	          default: void 0
	        },
	        ismap: {
	          type: Boolean,
	          default: void 0
	        },
	        crossorigin: {
	          type: [Boolean, String],
	          default: void 0,
	          validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
	        },
	        loading: {
	          type: String,
	          default: void 0
	        },
	        decoding: {
	          type: String,
	          default: void 0,
	          validator: (val) => ["async", "auto", "sync"].includes(val)
	        }
	      },
	      computed: {
	        nImgAttrs() {
	          return {
	            width: parseSize(this.width),
	            height: parseSize(this.height),
	            alt: this.alt,
	            referrerpolicy: this.referrerpolicy,
	            usemap: this.usemap,
	            longdesc: this.longdesc,
	            ismap: this.ismap,
	            crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
	            loading: this.loading,
	            decoding: this.decoding
	          };
	        },
	        nModifiers() {
	          return {
	            ...this.modifiers,
	            width: parseSize(this.width),
	            height: parseSize(this.height),
	            format: this.format,
	            quality: this.quality,
	            background: this.background,
	            fit: this.fit
	          };
	        },
	        nOptions() {
	          return {
	            provider: this.provider,
	            preset: this.preset
	          };
	        }
	      }
	    });
	    const defineComponent = (opts) => opts;
	    var nuxt_imgvue_type_script_lang_js_ = defineComponent({
	      name: "NuxtImg",
	      mixins: [imageMixin],
	      props: {
	        placeholder: {
	          type: [Boolean, String, Number, Array],
	          default: void 0
	        }
	      },
	      head() {
	        if (this.preload === true) {
	          return {
	            link: [{
	              rel: "preload",
	              as: "image",
	              href: this.nSrc
	            }]
	          };
	        }
	        return {};
	      },
	      computed: {
	        nAttrs() {
	          const attrs = this.nImgAttrs;
	          if (this.sizes) {
	            const {
	              sizes,
	              srcset
	            } = this.nSizes;
	            attrs.sizes = sizes;
	            attrs.srcset = srcset;
	          }
	          return attrs;
	        },
	        nMainSrc() {
	          return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
	        },
	        nSizes() {
	          return this.$img.getSizes(this.src, {
	            ...this.nOptions,
	            sizes: this.sizes,
	            modifiers: {
	              ...this.nModifiers,
	              width: parseSize(this.width),
	              height: parseSize(this.height)
	            }
	          });
	        },
	        nSrc() {
	          return this.nPlaceholder ? this.nPlaceholder : this.nMainSrc;
	        },
	        nPlaceholder() {
	          let placeholder = this.placeholder;
	          if (placeholder === "") {
	            placeholder = true;
	          }
	          if (!placeholder || this.placeholderLoaded) {
	            return false;
	          }
	          if (typeof placeholder === "string") {
	            return placeholder;
	          }
	          const size = Array.isArray(placeholder) ? placeholder : typeof placeholder === "number" ? [placeholder, placeholder] : [10, 10];
	          return this.$img(this.src, {
	            ...this.nModifiers,
	            width: size[0],
	            height: size[1],
	            quality: size[2] || 50
	          }, this.nOptions);
	        }
	      },
	      mounted() {
	        if (this.nPlaceholder) {
	          const img = new Image();
	          img.src = this.nMainSrc;
	          img.onload = () => {
	            this.$refs.img.src = this.nMainSrc;
	            this.placeholderLoaded = true;
	          };
	        }
	      }
	    });
	    var components_nuxt_imgvue_type_script_lang_js_ = nuxt_imgvue_type_script_lang_js_;
	    var nuxt_img_component = Object(componentNormalizer["a"])(components_nuxt_imgvue_type_script_lang_js_, nuxt_imgvue_type_template_id_4c03b41d_render, nuxt_imgvue_type_template_id_4c03b41d_staticRenderFns, false, null, null, "7a097e1d");
	    var nuxt_img = nuxt_img_component.exports;
	    var nuxt_picturevue_type_template_id_310bdcc2_render = function render2() {
	      var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
	      return _c("picture", {
	        key: _vm.nSources[0].src
	      }, [_vm._ssrNode((_vm.nSources[1] ? "<source" + _vm._ssrAttr("type", _vm.nSources[1].type) + _vm._ssrAttr("srcset", _vm.nSources[1].srcset) + _vm._ssrAttr("sizes", _vm.nSources[1].sizes) + ">" : "<!---->") + " <img" + _vm._ssrAttr("src", _vm.nSources[0].src) + _vm._ssrAttr("srcset", _vm.nSources[0].srcset) + _vm._ssrAttr("sizes", _vm.nSources[0].sizes) + _vm._ssrAttrs({
	        ..._vm.nImgAttrs,
	        ..._vm.imgAttrs
	      }) + ">")]);
	    };
	    var nuxt_picturevue_type_template_id_310bdcc2_staticRenderFns = [];
	    const nuxt_picturevue_type_script_lang_js_defineComponent = (opts) => opts;
	    var nuxt_picturevue_type_script_lang_js_ = nuxt_picturevue_type_script_lang_js_defineComponent({
	      name: "NuxtPicture",
	      mixins: [imageMixin],
	      props: {
	        legacyFormat: {
	          type: String,
	          default: null
	        },
	        imgAttrs: {
	          type: Object,
	          default: null
	        }
	      },
	      head() {
	        if (this.preload === true) {
	          const srcKey = typeof this.nSources[1] !== "undefined" ? 1 : 0;
	          const link = {
	            rel: "preload",
	            as: "image",
	            imagesrcset: this.nSources[srcKey].srcset
	          };
	          if (typeof this.nSources[srcKey].sizes !== "undefined") {
	            link.imagesizes = this.nSources[srcKey].sizes;
	          }
	          return {
	            link: [link]
	          };
	        }
	        return {};
	      },
	      computed: {
	        isTransparent() {
	          return ["png", "webp", "gif"].includes(this.originalFormat);
	        },
	        originalFormat() {
	          return getFileExtension(this.src);
	        },
	        nFormat() {
	          if (this.format) {
	            return this.format;
	          }
	          if (this.originalFormat === "svg") {
	            return "svg";
	          }
	          return "webp";
	        },
	        nLegacyFormat() {
	          if (this.legacyFormat) {
	            return this.legacyFormat;
	          }
	          const formats = {
	            webp: this.isTransparent ? "png" : "jpeg",
	            svg: "png"
	          };
	          return formats[this.nFormat] || this.originalFormat;
	        },
	        nSources() {
	          if (this.nFormat === "svg") {
	            return [{
	              srcset: this.src
	            }];
	          }
	          const formats = this.nLegacyFormat !== this.nFormat ? [this.nLegacyFormat, this.nFormat] : [this.nFormat];
	          const sources = formats.map((format) => {
	            const {
	              srcset,
	              sizes,
	              src
	            } = this.$img.getSizes(this.src, {
	              ...this.nOptions,
	              sizes: this.sizes || this.$img.options.screens,
	              modifiers: {
	                ...this.nModifiers,
	                format
	              }
	            });
	            return {
	              src,
	              type: `image/${format}`,
	              sizes,
	              srcset
	            };
	          });
	          return sources;
	        }
	      },
	      created() {
	      }
	    });
	    var components_nuxt_picturevue_type_script_lang_js_ = nuxt_picturevue_type_script_lang_js_;
	    var nuxt_picture_component = Object(componentNormalizer["a"])(components_nuxt_picturevue_type_script_lang_js_, nuxt_picturevue_type_template_id_310bdcc2_render, nuxt_picturevue_type_template_id_310bdcc2_staticRenderFns, false, null, null, "5c60bcd8");
	    var nuxt_picture = nuxt_picture_component.exports;
	    const operationsGenerator = createOperationsGenerator({
	      keyMap: {
	        format: "f",
	        fit: "fit",
	        width: "w",
	        height: "h",
	        resize: "s",
	        quality: "q",
	        background: "b"
	      },
	      joinWith: ",",
	      formatter: (key, val) => Object(dist["a"])(key) + "_" + Object(dist["a"])(val)
	    });
	    const ipx_getImage = (src, {
	      modifiers = {},
	      baseURL
	    } = {}, ctx) => {
	      if (modifiers.width && modifiers.height) {
	        modifiers.resize = `${modifiers.width}x${modifiers.height}`;
	        delete modifiers.width;
	        delete modifiers.height;
	      }
	      const params = operationsGenerator(modifiers) || "_";
	      if (!baseURL) {
	        var _ctx$nuxtContext;
	        baseURL = Object(dist["f"])(((_ctx$nuxtContext = ctx.nuxtContext) === null || _ctx$nuxtContext === void 0 ? void 0 : _ctx$nuxtContext.base) || "/", "/_ipx");
	      }
	      return {
	        url: Object(dist["f"])(baseURL, params, Object(dist["b"])(src))
	      };
	    };
	    const static_getImage = (src, options, ctx) => ({
	      ...ipx_getImage(src, options, ctx),
	      isStatic: true
	    });
	    const static_supportsAlias = true;
	    const convertHextoRGBFormat = (value) => value.startsWith("#") ? value.replace("#", "rgb_") : value;
	    const removePathExtension = (value) => value.replace(/\.[^/.]+$/, "");
	    const cloudinary_operationsGenerator = createOperationsGenerator({
	      keyMap: {
	        fit: "c",
	        width: "w",
	        height: "h",
	        format: "f",
	        quality: "q",
	        background: "b",
	        rotate: "a",
	        roundCorner: "r",
	        gravity: "g",
	        effect: "e",
	        color: "co",
	        flags: "fl",
	        dpr: "dpr",
	        opacity: "o",
	        overlay: "l",
	        underlay: "u",
	        transformation: "t",
	        zoom: "z",
	        colorSpace: "cs",
	        customFunc: "fn",
	        density: "dpi"
	      },
	      valueMap: {
	        fit: {
	          fill: "fill",
	          inside: "pad",
	          outside: "lpad",
	          cover: "fit",
	          contain: "scale",
	          minCover: "mfit",
	          minInside: "mpad",
	          thumbnail: "thumb",
	          cropping: "crop",
	          coverLimit: "limit"
	        },
	        format: {
	          jpeg: "jpg"
	        },
	        background(value) {
	          return convertHextoRGBFormat(value);
	        },
	        color(value) {
	          return convertHextoRGBFormat(value);
	        },
	        gravity: {
	          auto: "auto",
	          subject: "auto:subject",
	          face: "face",
	          sink: "sink",
	          faceCenter: "face:center",
	          multipleFaces: "faces",
	          multipleFacesCenter: "faces:center",
	          north: "north",
	          northEast: "north_east",
	          northWest: "north_west",
	          west: "west",
	          southWest: "south_west",
	          south: "south",
	          southEast: "south_east",
	          east: "east",
	          center: "center"
	        }
	      },
	      joinWith: ",",
	      formatter: (key, value) => `${key}_${value}`
	    });
	    const defaultModifiers = {
	      format: "auto",
	      quality: "auto"
	    };
	    const cloudinary_getImage = (src, {
	      modifiers = {},
	      baseURL = "/"
	    } = {}) => {
	      const mergeModifiers = defu(modifiers, defaultModifiers);
	      const operations = cloudinary_operationsGenerator(mergeModifiers);
	      const remoteFolderMapping = baseURL.match(/\/image\/upload\/(.*)/);
	      if ((remoteFolderMapping === null || remoteFolderMapping === void 0 ? void 0 : remoteFolderMapping.length) >= 1) {
	        const remoteFolder = remoteFolderMapping[1];
	        const baseURLWithoutRemoteFolder = baseURL.replace(remoteFolder, "");
	        return {
	          url: Object(dist["f"])(baseURLWithoutRemoteFolder, operations, remoteFolder, src)
	        };
	      } else if (/\/image\/fetch\/?/.test(baseURL)) {
	        src = Object(dist["b"])(src);
	      } else {
	        src = removePathExtension(src);
	      }
	      return {
	        url: Object(dist["f"])(baseURL, operations, src)
	      };
	    };
	    const imageOptions = {
	      "screens": {
	        "xs": 320,
	        "sm": 640,
	        "md": 768,
	        "lg": 1024,
	        "xl": 1280,
	        "xxl": 1536,
	        "2xl": 1536
	      },
	      "presets": {},
	      "provider": "cloudinary",
	      "domains": ["raw.communitydragon.org"],
	      "alias": {}
	    };
	    imageOptions.providers = {
	      ["static"]: {
	        provider: static_namespaceObject,
	        defaults: {}
	      },
	      ["cloudinary"]: {
	        provider: cloudinary_namespaceObject,
	        defaults: {
	          "baseURL": "https://res.cloudinary.com/zemgg/image/fetch/"
	        }
	      }
	    };
	    vue_runtime["c"].component(nuxt_img.name, nuxt_img);
	    vue_runtime["c"].component(nuxt_picture.name, nuxt_picture);
	    vue_runtime["c"].component("NImg", nuxt_img);
	    vue_runtime["c"].component("NPicture", nuxt_picture);
	    var _nuxt_image = function(nuxtContext, inject) {
	      const $img = createImage(imageOptions, nuxtContext);
	      inject("img", $img);
	    };
	    var external_axios_ = __webpack_require__(12);
	    var external_axios_default = /* @__PURE__ */ __webpack_require__.n(external_axios_);
	    const axiosExtra = {
	      setBaseURL(baseURL) {
	        this.defaults.baseURL = baseURL;
	      },
	      setHeader(name, value, scopes = "common") {
	        for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
	          if (!value) {
	            delete this.defaults.headers[scope][name];
	            continue;
	          }
	          this.defaults.headers[scope][name] = value;
	        }
	      },
	      setToken(token, type, scopes = "common") {
	        const value = !token ? null : (type ? type + " " : "") + token;
	        this.setHeader("Authorization", value, scopes);
	      },
	      onRequest(fn) {
	        this.interceptors.request.use((config) => fn(config) || config);
	      },
	      onResponse(fn) {
	        this.interceptors.response.use((response) => fn(response) || response);
	      },
	      onRequestError(fn) {
	        this.interceptors.request.use(void 0, (error) => fn(error) || Promise.reject(error));
	      },
	      onResponseError(fn) {
	        this.interceptors.response.use(void 0, (error) => fn(error) || Promise.reject(error));
	      },
	      onError(fn) {
	        this.onRequestError(fn);
	        this.onResponseError(fn);
	      },
	      create(options) {
	        return createAxiosInstance(defu(options, this.defaults));
	      }
	    };
	    for (const method of ["request", "delete", "get", "head", "options", "post", "put", "patch"]) {
	      axiosExtra["$" + method] = function() {
	        return this[method].apply(this, arguments).then((res) => res && res.data);
	      };
	    }
	    const extendAxiosInstance = (axios) => {
	      for (const key in axiosExtra) {
	        axios[key] = axiosExtra[key].bind(axios);
	      }
	    };
	    const createAxiosInstance = (axiosOptions) => {
	      const axios = external_axios_default.a.create(axiosOptions);
	      axios.CancelToken = external_axios_default.a.CancelToken;
	      axios.isCancel = external_axios_default.a.isCancel;
	      extendAxiosInstance(axios);
	      axios.onRequest((config) => {
	        config.headers = {
	          ...axios.defaults.headers.common,
	          ...config.headers
	        };
	      });
	      return axios;
	    };
	    var _nuxt_axios = (ctx, inject) => {
	      const runtimeConfig = ctx.$config && ctx.$config.axios || {};
	      const baseURL = runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || "https://api.zem.gg";
	      const headers = {
	        "common": {
	          "Accept": "application/json, text/plain, */*"
	        },
	        "delete": {},
	        "get": {},
	        "head": {},
	        "post": {},
	        "put": {},
	        "patch": {}
	      };
	      const axiosOptions = {
	        baseURL,
	        headers
	      };
	      if (ctx.req && ctx.req.headers) {
	        const reqHeaders = {
	          ...ctx.req.headers
	        };
	        for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
	          delete reqHeaders[h];
	        }
	        axiosOptions.headers.common = {
	          ...reqHeaders,
	          ...axiosOptions.headers.common
	        };
	      }
	      {
	        axiosOptions.headers.common["accept-encoding"] = "gzip, deflate";
	      }
	      const axios = createAxiosInstance(axiosOptions);
	      ctx.$axios = axios;
	      inject("axios", axios);
	    };
	    function mergeMeta(to, from) {
	      if (typeof to === "function") {
	        console.warn("Cannot merge meta. Avoid using head as a function!");
	        return;
	      }
	      for (const key in from) {
	        const value = from[key];
	        if (Array.isArray(value)) {
	          to[key] = to[key] || [];
	          for (const item of value) {
	            if (item.hid && hasMeta(to[key], "hid", item.hid) || item.name && hasMeta(to[key], "name", item.name)) {
	              continue;
	            }
	            to[key].push(item);
	          }
	        } else if (typeof value === "object") {
	          to[key] = to[key] || {};
	          for (const attr in value) {
	            to[key][attr] = value[attr];
	          }
	        } else if (to[key] === void 0) {
	          to[key] = value;
	        }
	      }
	    }
	    function hasMeta(arr, key, val) {
	      return arr.find((obj) => val ? obj[key] === val : obj[key]);
	    }
	    var pwa_meta = __webpack_require__(39);
	    var meta_plugin = function({
	      app
	    }) {
	      mergeMeta(app.head, pwa_meta);
	    };
	    var capi_plugin = defineNuxtPlugin((nuxtApp) => {
	      const _originalSetup = nuxtApp.nuxt2Context.app.setup;
	      nuxtApp.nuxt2Context.app.setup = function(...args) {
	        const result = _originalSetup instanceof Function ? _originalSetup(...args) : {};
	        nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
	        return result;
	      };
	    });
	    var error_plugin_server = (ctx) => {
	      if (ctx.ssrContext.error) {
	        ctx.error(ctx.ssrContext.error);
	      }
	    };
	    const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
	    const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
	    function isMobile(a) {
	      return REGEX_MOBILE1.test(a) || REGEX_MOBILE2.test(a.substr(0, 4));
	    }
	    const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
	    const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
	    const REGEX_CRAWLER = /Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|pingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|Curebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge/;
	    function isMobileOrTablet(a) {
	      return REGEX_MOBILE_OR_TABLET1.test(a) || REGEX_MOBILE_OR_TABLET2.test(a.substr(0, 4));
	    }
	    function isIos(a) {
	      return /iPad|iPhone|iPod/.test(a);
	    }
	    function isAndroid(a) {
	      return /android/i.test(a);
	    }
	    function isWindows(a) {
	      return /Windows/.test(a);
	    }
	    function isMacOS(a) {
	      return /Mac OS X/.test(a);
	    }
	    const browsers = [{
	      name: "Samsung",
	      test: /SamsungBrowser/i
	    }, {
	      name: "Edge",
	      test: /edg([ea]|ios|)\//i
	    }, {
	      name: "Firefox",
	      test: /firefox|iceweasel|fxios/i
	    }, {
	      name: "Chrome",
	      test: /chrome|crios|crmo/i
	    }, {
	      name: "Safari",
	      test: /safari|applewebkit/i
	    }];
	    function getBrowserName(a) {
	      for (let b of browsers) {
	        if (b.test.test(a)) {
	          return b.name;
	        }
	      }
	      return null;
	    }
	    const DEFAULT_USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36";
	    function extractDevices(ctx, userAgent = DEFAULT_USER_AGENT) {
	      let mobile = null;
	      let mobileOrTablet = null;
	      let ios = null;
	      let android = null;
	      if (userAgent === "Amazon CloudFront") {
	        if (ctx.req.headers["cloudfront-is-mobile-viewer"] === "true") {
	          mobile = true;
	          mobileOrTablet = true;
	        }
	        if (ctx.req.headers["cloudfront-is-tablet-viewer"] === "true") {
	          mobile = false;
	          mobileOrTablet = true;
	        }
	      } else if (ctx.req && ctx.req.headers["cf-device-type"]) {
	        switch (ctx.req.headers["cf-device-type"]) {
	          case "mobile":
	            mobile = true;
	            mobileOrTablet = true;
	            break;
	          case "tablet":
	            mobile = false;
	            mobileOrTablet = true;
	            break;
	          case "desktop":
	            mobile = false;
	            mobileOrTablet = false;
	            break;
	        }
	      } else {
	        mobile = isMobile(userAgent);
	        mobileOrTablet = isMobileOrTablet(userAgent);
	        ios = isIos(userAgent);
	        android = isAndroid(userAgent);
	      }
	      const windows = isWindows(userAgent);
	      const macOS = isMacOS(userAgent);
	      const browserName = getBrowserName(userAgent);
	      const isSafari = browserName === "Safari";
	      const isFirefox = browserName === "Firefox";
	      const isEdge = browserName === "Edge";
	      const isChrome = browserName === "Chrome";
	      const isSamsung = browserName === "Samsung";
	      const isCrawler = REGEX_CRAWLER.test(userAgent);
	      return {
	        mobile,
	        mobileOrTablet,
	        ios,
	        android,
	        windows,
	        macOS,
	        isSafari,
	        isFirefox,
	        isEdge,
	        isChrome,
	        isSamsung,
	        isCrawler
	      };
	    }
	    var device_plugin = async function(ctx, inject) {
	      const makeFlags = () => {
	        let userAgent = "";
	        if (typeof ctx.req !== "undefined") {
	          userAgent = ctx.req.headers["user-agent"];
	        } else if (typeof navigator !== "undefined") {
	          userAgent = navigator.userAgent;
	        }
	        const {
	          mobile,
	          mobileOrTablet,
	          ios,
	          android,
	          windows,
	          macOS,
	          isSafari,
	          isFirefox,
	          isEdge,
	          isChrome,
	          isSamsung,
	          isCrawler
	        } = extractDevices(ctx, userAgent);
	        return {
	          userAgent,
	          isMobile: mobile,
	          isMobileOrTablet: mobileOrTablet,
	          isTablet: !mobile && mobileOrTablet,
	          isDesktop: !mobileOrTablet,
	          isIos: ios,
	          isAndroid: android,
	          isWindows: windows,
	          isMacOS: macOS,
	          isDesktopOrTablet: !mobile,
	          isSafari,
	          isFirefox,
	          isEdge,
	          isChrome,
	          isSamsung,
	          isCrawler
	        };
	      };
	      const flags = makeFlags();
	      {
	        inject("device", flags);
	      }
	    };
	    vue_runtime["c"].filter("capitalize", (value) => {
	      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
	    });
	    vue_runtime["c"].filter("kilo", (value) => {
	      return `${+(value / 1e3).toFixed(1)}k`;
	    });
	    vue_runtime["c"].filter("secToTime", (sec, dotNotation = false) => {
	      if (isNaN(sec))
	        return 0;
	      const min = Math.floor(sec / 60);
	      let newSec = Math.floor(sec - min * 60);
	      newSec = newSec < 10 ? "0" + newSec : newSec;
	      return dotNotation ? `${min}:${newSec}` : `${min}\uBD84 ${newSec}\uCD08`;
	    });
	    vue_runtime["c"].filter("percent", (value) => {
	      return `${+value.toFixed(1)}%`;
	    });
	    vue_runtime["c"].filter("round", (value, decimals = 2) => {
	      if (isNaN(value))
	        return 0;
	      return parseFloat(value.toFixed(decimals));
	    });
	    vue_runtime["c"].filter("number", (value) => {
	      if (isNaN(value))
	        return 0;
	      return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
	    });
	    vue_runtime["c"].filter("percentage", (value, total) => {
	      return (value / total * 100).toFixed(1);
	    });
	    vue_runtime["c"].component(vue_client_only_common_default.a.name, vue_client_only_common_default.a);
	    vue_runtime["c"].component(vue_no_ssr_common_default.a.name, {
	      ...vue_no_ssr_common_default.a,
	      render(h, ctx) {
	        return vue_no_ssr_common_default.a.render(h, ctx);
	      }
	    });
	    vue_runtime["c"].component(nuxt_child.name, nuxt_child);
	    vue_runtime["c"].component("NChild", nuxt_child);
	    vue_runtime["c"].component(components_nuxt.name, components_nuxt);
	    Object.defineProperty(vue_runtime["c"].prototype, "$nuxt", {
	      get() {
	        const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
	        return globalNuxt;
	      },
	      configurable: true
	    });
	    vue_runtime["c"].use(vue_meta_common_default.a, {
	      "keyName": "head",
	      "attribute": "data-n-head",
	      "ssrAttribute": "data-n-head-ssr",
	      "tagIDKeyName": "hid"
	    });
	    const defaultTransition = {
	      "name": "page",
	      "mode": "out-in",
	      "appear": false,
	      "appearClass": "appear",
	      "appearActiveClass": "appear-active",
	      "appearToClass": "appear-to"
	    };
	    const originalRegisterModule = vuex["a"].Store.prototype.registerModule;
	    function registerModule(path, rawModule, options = {}) {
	      const preserveState = false;
	      return originalRegisterModule.call(this, path, rawModule, {
	        preserveState,
	        ...options
	      });
	    }
	    async function createApp(ssrContext, config = {}) {
	      const store = createStore(ssrContext);
	      const router = await createRouter(ssrContext, config);
	      store.$router = router;
	      store.registerModule = registerModule;
	      const app = {
	        head: {
	          "title": "\uB864 \uC804\uC801 \uAC80\uC0C9 ZEM.GG | \uC18C\uD658\uC0AC \uC778\uBD84, \uC18C\uD658\uC0AC \uB4F1\uAE09 \uD655\uC778",
	          "htmlAttrs": {
	            "lang": "kr"
	          },
	          "meta": [{
	            "charset": "utf-8"
	          }, {
	            "name": "viewport",
	            "content": "width=device-width, initial-scale=1"
	          }, {
	            "hid": "title",
	            "name": "title",
	            "content": "\uB864 \uC804\uC801 \uAC80\uC0C9 ZEM.GG | \uC18C\uD658\uC0AC \uC778\uBD84, \uC18C\uD658\uC0AC \uB4F1\uAE09 \uD655\uC778"
	          }, {
	            "hid": "description",
	            "name": "description",
	            "content": "\uB864 \uC18C\uD658\uC0AC \uC804\uC801, \uBAA8\uB4E0 \uAC8C\uC784\uC758 \uC804\uC801, KDA, \uC2B9\uB960 \uC778\uBD84 \uB4F1\uAE09 \uD655\uC778 \uD558\uC2E4\uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uBC14\uB85C \uB2F9\uC2E0\uC758 \uC18C\uD658\uC0AC\uBA85\uC744 \uAC80\uC0C9\uD574\uBCF4\uC138\uC694!"
	          }, {
	            "name": "format-detection",
	            "content": "telephone=no"
	          }, {
	            "hid": "og:title",
	            "name": "og:title",
	            "content": "\uB864 \uC804\uC801 \uAC80\uC0C9 ZEM.GG | \uC18C\uD658\uC0AC \uC778\uBD84, \uC18C\uD658\uC0AC \uB4F1\uAE09 \uD655\uC778"
	          }, {
	            "hid": "og:description",
	            "name": "og:description",
	            "content": "\uB864 \uC18C\uD658\uC0AC \uC804\uC801, \uBAA8\uB4E0 \uAC8C\uC784\uC758 \uC804\uC801, KDA, \uC2B9\uB960 \uC778\uBD84 \uB4F1\uAE09 \uD655\uC778 \uD558\uC2E4\uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uBC14\uB85C \uB2F9\uC2E0\uC758 \uC18C\uD658\uC0AC\uBA85\uC744 \uAC80\uC0C9\uD574\uBCF4\uC138\uC694!"
	          }, {
	            "hid": "og:locale",
	            "property": "og:locale",
	            "content": "ko_KR"
	          }, {
	            "hid": "og:type",
	            "property": "og:type",
	            "content": "website"
	          }, {
	            "hid": "og:site_name",
	            "property": "og:site_name",
	            "content": "ZEM.GG"
	          }, {
	            "hid": "og:url",
	            "property": "og:url",
	            "content": "https://zem.gg"
	          }],
	          "link": [{
	            "rel": "icon",
	            "type": "image/x-icon",
	            "href": "/favicon.ico"
	          }],
	          "style": [],
	          "script": []
	        },
	        store,
	        router,
	        nuxt: {
	          defaultTransition,
	          transitions: [defaultTransition],
	          setTransitions(transitions) {
	            if (!Array.isArray(transitions)) {
	              transitions = [transitions];
	            }
	            transitions = transitions.map((transition) => {
	              if (!transition) {
	                transition = defaultTransition;
	              } else if (typeof transition === "string") {
	                transition = Object.assign({}, defaultTransition, {
	                  name: transition
	                });
	              } else {
	                transition = Object.assign({}, defaultTransition, transition);
	              }
	              return transition;
	            });
	            this.$options.nuxt.transitions = transitions;
	            return transitions;
	          },
	          err: null,
	          dateErr: null,
	          error(err) {
	            err = err || null;
	            app.context._errored = Boolean(err);
	            err = err ? normalizeError(err) : null;
	            let nuxt = app.nuxt;
	            if (this) {
	              nuxt = this.nuxt || this.$options.nuxt;
	            }
	            nuxt.dateErr = Date.now();
	            nuxt.err = err;
	            if (ssrContext) {
	              ssrContext.nuxt.error = err;
	            }
	            return err;
	          }
	        },
	        ...App
	      };
	      store.app = app;
	      const next = ssrContext ? ssrContext.next : (location) => app.router.push(location);
	      let route;
	      if (ssrContext) {
	        route = router.resolve(ssrContext.url).route;
	      } else {
	        const path = getLocation(router.options.base, router.options.mode);
	        route = router.resolve(path).route;
	      }
	      await setContext(app, {
	        store,
	        route,
	        next,
	        error: app.nuxt.error.bind(app),
	        payload: ssrContext ? ssrContext.payload : void 0,
	        req: ssrContext ? ssrContext.req : void 0,
	        res: ssrContext ? ssrContext.res : void 0,
	        beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : void 0,
	        beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : void 0,
	        ssrContext
	      });
	      function inject(key, value) {
	        if (!key) {
	          throw new Error("inject(key, value) has no key provided");
	        }
	        if (value === void 0) {
	          throw new Error(`inject('${key}', value) has no value provided`);
	        }
	        key = "$" + key;
	        app[key] = value;
	        if (!app.context[key]) {
	          app.context[key] = value;
	        }
	        store[key] = app[key];
	        const installKey = "__nuxt_" + key + "_installed__";
	        if (vue_runtime["c"][installKey]) {
	          return;
	        }
	        vue_runtime["c"][installKey] = true;
	        vue_runtime["c"].use(() => {
	          if (!Object.prototype.hasOwnProperty.call(vue_runtime["c"].prototype, key)) {
	            Object.defineProperty(vue_runtime["c"].prototype, key, {
	              get() {
	                return this.$root.$options[key];
	              }
	            });
	          }
	        });
	      }
	      inject("config", config);
	      if (typeof app_plugin === "function") {
	        await app_plugin(app.context, inject);
	      }
	      if (typeof nitro_bridge_server === "function") {
	        await nitro_bridge_server(app.context, inject);
	      }
	      if (typeof _nuxt_image === "function") {
	        await _nuxt_image(app.context, inject);
	      }
	      if (typeof _nuxt_axios === "function") {
	        await _nuxt_axios(app.context, inject);
	      }
	      if (typeof meta_plugin === "function") {
	        await meta_plugin(app.context);
	      }
	      if (typeof capi_plugin === "function") {
	        await capi_plugin(app.context, inject);
	      }
	      if (typeof error_plugin_server === "function") {
	        await error_plugin_server(app.context);
	      }
	      if (typeof device_plugin === "function") {
	        await device_plugin(app.context, inject);
	      }
	      await new Promise((resolve, reject) => {
	        router.replace(app.context.route.fullPath, resolve, (err) => {
	          if (!err._isRouter)
	            return reject(err);
	          if (err.type !== 2)
	            return resolve();
	          const unregister = router.afterEach(async (to, from) => {
	            if (ssrContext && ssrContext.url) {
	              ssrContext.url = to.fullPath;
	            }
	            app.context.route = await getRouteData(to);
	            app.context.params = to.params || {};
	            app.context.query = to.query || {};
	            unregister();
	            resolve();
	          });
	        });
	      });
	      return {
	        store,
	        app,
	        router
	      };
	    }
	    var nuxt_link_server = {
	      name: "NuxtLink",
	      extends: vue_runtime["c"].component("RouterLink"),
	      props: {
	        prefetch: {
	          type: Boolean,
	          default: true
	        },
	        noPrefetch: {
	          type: Boolean,
	          default: false
	        }
	      }
	    };
	    vue_runtime["c"].config.optionMergeStrategies.serverPrefetch = vue_runtime["c"].config.optionMergeStrategies.created;
	    if (!vue_runtime["c"].__nuxt__fetch__mixin__) {
	      vue_runtime["c"].mixin(fetch_server);
	      vue_runtime["c"].__nuxt__fetch__mixin__ = true;
	    }
	    vue_runtime["c"].component(nuxt_link_server.name, nuxt_link_server);
	    vue_runtime["c"].component("NLink", nuxt_link_server);
	    const noopApp = () => new vue_runtime["c"]({
	      render: (h) => h("div", {
	        domProps: {
	          id: "__nuxt"
	        }
	      })
	    });
	    const createNext = (ssrContext) => (opts) => {
	      ssrContext.redirected = opts;
	      if (ssrContext.target === "static" || !ssrContext.res) {
	        ssrContext.nuxt.serverRendered = false;
	        return;
	      }
	      let fullPath = Object(dist["j"])(opts.path, opts.query);
	      const $config = ssrContext.nuxt.config || {};
	      const routerBase = $config._app && $config._app.basePath || "/";
	      if (!fullPath.startsWith("http") && routerBase !== "/" && !fullPath.startsWith(routerBase)) {
	        fullPath = Object(dist["f"])(routerBase, fullPath);
	      }
	      if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
	        ssrContext.redirected = false;
	        return;
	      }
	      ssrContext.res.writeHead(opts.status, {
	        Location: Object(dist["g"])(fullPath)
	      });
	      ssrContext.res.end();
	    };
	    __webpack_exports__["default"] = async (ssrContext) => {
	      ssrContext.redirected = false;
	      ssrContext.next = createNext(ssrContext);
	      ssrContext.beforeRenderFns = [];
	      ssrContext.beforeSerializeFns = [];
	      ssrContext.nuxt = {
	        layout: "default",
	        data: [],
	        fetch: {},
	        error: null,
	        state: null,
	        serverRendered: true,
	        routePath: ""
	      };
	      ssrContext.fetchCounters = {};
	      ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
	      if (ssrContext.nuxt.config._app) {
	        __webpack_require__.p = Object(dist["f"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
	      }
	      const {
	        app,
	        router,
	        store
	      } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
	      const _app = new vue_runtime["c"](app);
	      ssrContext.nuxt.routePath = app.context.route.path;
	      ssrContext.meta = _app.$meta();
	      ssrContext.asyncData = {};
	      const beforeRender = async () => {
	        await Promise.all(ssrContext.beforeRenderFns.map((fn) => promisify(fn, {
	          Components,
	          nuxtState: ssrContext.nuxt
	        })));
	        ssrContext.rendered = () => {
	          ssrContext.beforeSerializeFns.forEach((fn) => fn(ssrContext.nuxt));
	          ssrContext.nuxt.state = store.state;
	        };
	      };
	      const renderErrorPage = async () => {
	        if (ssrContext.target === "static") {
	          ssrContext.nuxt.serverRendered = false;
	        }
	        const layout2 = (nuxt_error.options || nuxt_error).layout;
	        const errLayout = typeof layout2 === "function" ? layout2.call(nuxt_error, app.context) : layout2;
	        ssrContext.nuxt.layout = errLayout || "default";
	        await _app.loadLayout(errLayout);
	        _app.setLayout(errLayout);
	        await beforeRender();
	        return _app;
	      };
	      const render404Page = () => {
	        app.context.error({
	          statusCode: 404,
	          path: ssrContext.url,
	          message: "This page could not be found"
	        });
	        return renderErrorPage();
	      };
	      const Components = getMatchedComponents(app.context.route);
	      if (store._actions && store._actions.nuxtServerInit) {
	        try {
	          await store.dispatch("nuxtServerInit", app.context);
	        } catch (err) {
	          console.debug("Error occurred when calling nuxtServerInit: ", err.message);
	          throw err;
	        }
	      }
	      if (ssrContext.redirected) {
	        return noopApp();
	      }
	      if (ssrContext.nuxt.error) {
	        return renderErrorPage();
	      }
	      let midd = [];
	      midd = midd.map((name) => {
	        if (typeof name === "function") {
	          return name;
	        }
	        if (typeof _nuxt_middleware["default"][name] !== "function") {
	          app.context.error({
	            statusCode: 500,
	            message: "Unknown middleware " + name
	          });
	        }
	        return _nuxt_middleware["default"][name];
	      });
	      await middlewareSeries(midd, app.context);
	      if (ssrContext.redirected) {
	        return noopApp();
	      }
	      if (ssrContext.nuxt.error) {
	        return renderErrorPage();
	      }
	      let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
	      if (typeof layout === "function") {
	        layout = layout(app.context);
	      }
	      await _app.loadLayout(layout);
	      if (ssrContext.nuxt.error) {
	        return renderErrorPage();
	      }
	      layout = _app.setLayout(layout);
	      ssrContext.nuxt.layout = _app.layoutName;
	      midd = [];
	      layout = sanitizeComponent(layout);
	      if (layout.options.middleware) {
	        midd = midd.concat(layout.options.middleware);
	      }
	      Components.forEach((Component) => {
	        if (Component.options.middleware) {
	          midd = midd.concat(Component.options.middleware);
	        }
	      });
	      midd = midd.map((name) => {
	        if (typeof name === "function") {
	          return name;
	        }
	        if (typeof _nuxt_middleware["default"][name] !== "function") {
	          app.context.error({
	            statusCode: 500,
	            message: "Unknown middleware " + name
	          });
	        }
	        return _nuxt_middleware["default"][name];
	      });
	      await middlewareSeries(midd, app.context);
	      if (ssrContext.redirected) {
	        return noopApp();
	      }
	      if (ssrContext.nuxt.error) {
	        return renderErrorPage();
	      }
	      let isValid = true;
	      try {
	        for (const Component of Components) {
	          if (typeof Component.options.validate !== "function") {
	            continue;
	          }
	          isValid = await Component.options.validate(app.context);
	          if (!isValid) {
	            break;
	          }
	        }
	      } catch (validationError) {
	        app.context.error({
	          statusCode: validationError.statusCode || "500",
	          message: validationError.message
	        });
	        return renderErrorPage();
	      }
	      if (!isValid) {
	        return render404Page();
	      }
	      if (!Components.length) {
	        return render404Page();
	      }
	      const asyncDatas = await Promise.all(Components.map((Component) => {
	        const promises = [];
	        if (Component.options.asyncData && typeof Component.options.asyncData === "function") {
	          const promise = promisify(Component.options.asyncData, app.context);
	          promise.then((asyncDataResult) => {
	            ssrContext.asyncData[Component.cid] = asyncDataResult;
	            applyAsyncData(Component);
	            return asyncDataResult;
	          });
	          promises.push(promise);
	        } else {
	          promises.push(null);
	        }
	        if (Component.options.fetch && Component.options.fetch.length) {
	          promises.push(Component.options.fetch(app.context));
	        } else {
	          promises.push(null);
	        }
	        return Promise.all(promises);
	      }));
	      ssrContext.nuxt.data = asyncDatas.map((r) => r[0] || {});
	      if (ssrContext.redirected) {
	        return noopApp();
	      }
	      if (ssrContext.nuxt.error) {
	        return renderErrorPage();
	      }
	      await beforeRender();
	      return _app;
	    };
	  },
	  function(module2, exports) {
	    module2.exports = require$$25;
	  },
	  function(module2, exports) {
	    module2.exports = require$$26;
	  },
	  function(module2, exports) {
	    module2.exports = require$$27;
	  },
	  ,
	  ,
	  ,
	  function(module2, exports) {
	    module2.exports = require$$28;
	  }
	]);
} (server$1));

(function (module) {
	module.exports = server$1.exports;
} (server$2));

const server = /*@__PURE__*/getDefaultExportFromCjs(server$2.exports);

export { server as default };
//# sourceMappingURL=server.mjs.map
