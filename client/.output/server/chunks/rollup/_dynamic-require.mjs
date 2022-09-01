const dynamicChunks = {
 ['pages/index.js']: () => import('../app/pages/index.mjs').then(function (n) { return n.i; }),
 ['pages/multiple.js']: () => import('../app/pages/multiple.mjs').then(function (n) { return n.m; }),
 ['pages/summoner.js']: () => import('../app/pages/summoner.mjs').then(function (n) { return n.s; }),
 ['pages/multiple/_region/_names.js']: () => import('../app/pages/multiple/_region/_names.mjs').then(function (n) { return n._; }),
 ['pages/summoner/_region/_name/_mode.js']: () => import('../app/pages/summoner/_region/_name/_mode.mjs').then(function (n) { return n._; }),
 ['pages/summoner/_region/_name/champions/index.js']: () => import('../app/pages/summoner/_region/_name/champions/index.mjs').then(function (n) { return n.i; }),
 ['pages/summoner/_region/_name/live/index.js']: () => import('../app/pages/summoner/_region/_name/live/index.mjs').then(function (n) { return n.i; }),
 ['pages/summoner/_region/_name/records/index.js']: () => import('../app/pages/summoner/_region/_name/records/index.mjs').then(function (n) { return n.i; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
//# sourceMappingURL=_dynamic-require.mjs.map
