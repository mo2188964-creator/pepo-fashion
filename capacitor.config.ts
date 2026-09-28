import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pepofashion.app',
  appName: 'Pepo Fashion',
  webDir: 'dist',
  backgroundColor: '#ffffff',
  android: {
    backgroundColor: '#ffffff',
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
  server: {
    androidScheme: 'https',
  },
};

export default config;
