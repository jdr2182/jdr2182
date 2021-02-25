module.exports = {
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      navigateFallback: "/index.html",
      runtimeCaching: [
        {
          urlPattern: new RegExp("^https://api.zippopotam.us/us/"),
          handler: "networkFirst",
          options: {
            networkTimeoutSeconds: 20,
            cacheName: "api-cache",
            cacheabaleResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
};
