// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
        },
        dynamicImport: { webpackChunkName: true },
        title: 'synway_umi',
        dll: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /utils\//,
            /components\//,
          ],
        },
      },
    ],
  ],
  base: 'synway_umi',
  outputPath: './dist/synway_umi',
  publicPath: '/synway_umi/',
  proxy: {
    '/api': {
      target: 'https://www.easy-mock.com/mock/5b2750e15164272f3a01ff7d/example/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
};
