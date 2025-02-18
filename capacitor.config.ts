import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.app.vestapp',
  appName: 'VestApp',
  webDir: 'www',
  bundledWebRuntime: true,
  cordova: {},
  android: {
    overrideUserAgent: "Mozilla/5.0 Google",
  },
};

export default config;
