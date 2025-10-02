
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Building',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/Building/building",
    "route": "/Building"
  },
  {
    "renderMode": 0,
    "route": "/Building/building"
  },
  {
    "renderMode": 0,
    "route": "/Building/building/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10842, hash: '7728814845e7bf9b9df3dfa34e13e2ac066e33932dd2a335e53189c892a880b3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: '7162dc8007b5ba40a7e4a6667a5ddae2dce411cfba435c1a425740c7c39f8ff0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HBXRCSL3.css': {size: 10205, hash: 'BDdJnu47IXo', text: () => import('./assets-chunks/styles-HBXRCSL3_css.mjs').then(m => m.default)}
  },
};
