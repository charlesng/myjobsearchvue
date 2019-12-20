module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://myjobsearch',
        secure: false,
      },
    },
  },
};
