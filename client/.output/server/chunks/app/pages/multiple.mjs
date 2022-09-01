function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var multiple$1 = {};

var ids = multiple$1.ids = [2];
var modules = multiple$1.modules = {
  161: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm.$device.isDesktop ? [_vm._ssrNode('<div class="relative overflow-hidden h-screen">', "</div>", [_c("nuxt")], 1)] : _vm._e(), _vm._ssrNode(" "), _vm.$device.isMobile ? [_c("nuxt")] : _vm._e()], 2);
    };
    var staticRenderFns = [];
    var multiplevue_type_script_lang_js_ = {
      layout: (ctx) => ctx.$device.isDesktop ? "multiple" : "multiple.m",
      components: {},
      computed: {},
      methods: {}
    };
    var pages_multiplevue_type_script_lang_js_ = multiplevue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(1);
    var component = Object(componentNormalizer["a"])(pages_multiplevue_type_script_lang_js_, render, staticRenderFns, false, null, null, "93417534");
    __webpack_exports__["default"] = component.exports;
  }
};

const multiple = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': multiple$1
}, [multiple$1]);

export { multiple as m };
//# sourceMappingURL=multiple.mjs.map
