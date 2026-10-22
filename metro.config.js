// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === 'web') {
    if (moduleName.includes('src/private/specs_DEPRECATED/modules/NativeSourceCode')) {
      return {
        type: 'empty',
      };
    }
    if (moduleName.includes('react-native/Libraries/Core/Devtools/getDevServer') || moduleName.includes('NativeModules/specs/NativeSourceCode')) {
      return {
        type: 'empty',
      };
    }
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
