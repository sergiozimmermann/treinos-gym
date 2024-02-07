import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'treinos-gym',
  webDir: 'dist/treinos-gym/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
