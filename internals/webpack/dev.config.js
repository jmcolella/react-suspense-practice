const path = require('path');
const fannypack = require('policygenius-fannypack');

const config = fannypack.devConfig({
  name: 'suspense-github',
  baseDirectoryPath: path.resolve('./src/'),
  buildDirectoryPath: path.resolve('./'),
  processEnvVariables: {
    'GITHUB_TOKEN': JSON.stringify(process.env.REACT_SUSPENSE_GITHUB_TOKEN)
  }
});

module.exports = {
  ...config,
  entry: {
    'suspense-beer': [
      'babel-polyfill',
      path.resolve('./src/index.js'),
    ]
  }
}
