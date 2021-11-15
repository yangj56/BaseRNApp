module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    testing: {
      presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    },
  },
};
