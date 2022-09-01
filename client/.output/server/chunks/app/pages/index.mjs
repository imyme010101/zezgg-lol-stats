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

var pages = {};

var ids = pages.ids = [1];
var modules = pages.modules = {
  118: function(module, exports2, __webpack_require__) {
    var content = __webpack_require__(154);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module.i, content, ""]];
    if (content.locals)
      module.exports = content.locals;
    var add = __webpack_require__(6).default;
    module.exports.__inject__ = function(context) {
      add("89becefe", content, true, context);
    };
  },
  153: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_index_vue_vue_type_style_index_0_id_d87391a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_index_vue_vue_type_style_index_0_id_d87391a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_36_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_35_0_index_vue_vue_type_style_index_0_id_d87391a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  154: function(module, exports2, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module.i, '/*purgecss start ignore*/\n.home-character[data-v-d87391a6]{\n  width:315px;\n  top:65px\n}\n.home-character[data-v-d87391a6],.home-character-m[data-v-d87391a6]{\n  position:absolute;\n  left:50%;\n  transform:translate(-50%)\n}\n.home-character-m[data-v-d87391a6]{\n  top:20px\n}\n.logo[data-v-d87391a6]{\n  font-size:5em\n}\n.logo[data-v-d87391a6],.logo-m[data-v-d87391a6]{\n  width:97%;\n  text-align:center;\n  letter-spacing:23px;\n  display:inline;\n  margin-bottom:30px;\n  font-weight:700;\n  font-family:"GongGothicBold"\n}\n.logo-m[data-v-d87391a6]{\n  font-size:3em\n}\n\n/*purgecss end ignore*/', ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module.exports = ___CSS_LOADER_EXPORT___;
  },
  162: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm.$device.isDesktop ? [_vm._ssrNode('<div class="relative h-screen" data-v-d87391a6>', "</div>", [_vm._ssrNode('<div class="home-character" data-v-d87391a6>', "</div>", [_c("nuxt-img", {
        attrs: {
          "src": `https://zem.gg/img/home_bg/${_vm.bgNumber}.png`,
          "format": "webp",
          "height": "345"
        }
      })], 1), _vm._ssrNode(" "), _vm._ssrNode('<div class="relative flex flex-col items-center justify-center h-full" data-v-d87391a6>', "</div>", [_vm._ssrNode('<div class="relative flex flex-col items-center w-full" data-v-d87391a6>', "</div>", [_vm._ssrNode('<div class="logo text-c-0" data-v-d87391a6>\n            ZEM.GG\n          </div> '), _c("SearchForm", {
        attrs: {
          "homepage": true
        },
        on: {
          "formSubmit": _vm.redirect
        }
      })], 2)])], 2)] : _vm._e(), _vm._ssrNode(" "), _vm.$device.isMobile ? [_vm._ssrNode('<div class="relative overflow-hidden h-screen" data-v-d87391a6>', "</div>", [_vm._ssrNode('<div class="home-character-m" data-v-d87391a6>', "</div>", [_c("nuxt-img", {
        attrs: {
          "src": `https://zem.gg/img/home_bg/${_vm.bgNumber}.png`,
          "format": "webp",
          "height": "329"
        }
      })], 1), _vm._ssrNode(" "), _vm._ssrNode('<div class="relative flex flex-col items-center justify-center px-4 -mt-36 md:mt-0 h-full" data-v-d87391a6>', "</div>", [_vm._ssrNode('<div class="relative flex flex-col items-center w-full max-w-lg" data-v-d87391a6>', "</div>", [_vm._ssrNode('<div class="logo-m text-c-0" data-v-d87391a6>\n            ZEM.GG\n          </div> '), _c("SearchForm", {
        attrs: {
          "homepage": true,
          "isOpen": true
        },
        on: {
          "formSubmit": _vm.redirect
        }
      })], 2)])], 2)] : _vm._e()], 2);
    };
    var staticRenderFns = [];
    var external_mathjs_ = __webpack_require__(8);
    var SearchForm = __webpack_require__(10);
    var transform_ref_35_0_pagesvue_type_script_lang_js_ = {
      layout: (ctx) => ctx.$device.isDesktop ? "home" : "home.m",
      components: {
        SearchForm: SearchForm["a"]
      },
      computed: {
        bgNumber() {
          return Object(external_mathjs_["randomInt"])(1, 5);
        }
      },
      methods: {
        toggleRegion() {
        },
        redirect(summoner, region) {
          this.$router.push(`/summoner/${region}/${summoner}`);
        }
      }
    };
    var pagesvue_type_script_lang_js_ = transform_ref_35_0_pagesvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(1);
    function injectStyles(context) {
      var style0 = __webpack_require__(153);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(pagesvue_type_script_lang_js_, render, staticRenderFns, false, injectStyles, "d87391a6", "256fd328");
    __webpack_exports__["default"] = component.exports;
  }
};

const index = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': pages
}, [pages]);

export { index as i };
//# sourceMappingURL=index.mjs.map
