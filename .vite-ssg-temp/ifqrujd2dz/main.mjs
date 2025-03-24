import { ViteSSG } from "vite-ssg";
import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { RouterLink, RouterView } from "vue-router";
import { MdiHomeOutline, MdiCubeOutline, MdiNewspaperVariantOutline, MdiEmailOutline } from "@maxle5/mdi-vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="display-flex justify-content-between align-items-center"><h1 class="mt-0">Max Lefebvre</h1><div class="display-flex gap-0_5-rem">`);
      _push(ssrRenderComponent(unref(RouterLink), { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MdiHomeOutline), { size: 32 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MdiHomeOutline), { size: 32 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), { to: "/projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MdiCubeOutline), { size: 32 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MdiCubeOutline), { size: 32 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), { to: "/blog" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MdiNewspaperVariantOutline), { size: 32 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MdiNewspaperVariantOutline), { size: 32 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(RouterLink), { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MdiEmailOutline), { size: 32 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MdiEmailOutline), { size: 32 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><main>`);
      _push(ssrRenderComponent(unref(RouterView), null, null, _parent));
      _push(`</main><footer></footer><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  {
    path: "/",
    name: "/",
    component: () => import("./assets/index-D8xpDGvv.js")
    /* no children */
  },
  {
    path: "/about",
    name: "/about",
    component: () => import("./assets/about-GMRVnj4P.js")
    /* no children */
  },
  {
    path: "/blog",
    /* internal name: '/blog' */
    /* no component */
    children: [
      {
        path: "",
        name: "/blog/",
        component: () => import("./assets/index-63BW8v3D.js")
        /* no children */
      }
    ]
  },
  {
    path: "/contact",
    name: "/contact",
    component: () => import("./assets/contact-D4P-0oJB.js")
    /* no children */
  },
  {
    path: "/projects",
    name: "/projects",
    component: () => import("./assets/projects-CF3cGGYK.js")
    /* no children */
  }
];
const createApp = ViteSSG(_sfc_main, { routes }, () => {
});
export {
  createApp
};
