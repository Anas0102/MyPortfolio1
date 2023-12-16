// config-overrides.js
module.exports = function override(config, env) {
    // Add file-loader configuration
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    });
  
    return config;
  };
  