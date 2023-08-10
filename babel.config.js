module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': ['./src/assets'],
          '@components': ['./src/components/index'],
          '@navigation': ['./src/navigation'],
          '@screens': ['./src/screens/index'],
          '@utils': ['./src/utils'],
          '@theme': ['./src/theme/index'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
