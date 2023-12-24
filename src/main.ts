import { createSSRApp } from "vue";
import App from "./App.vue";
import CONFIGURATION from './utils/Configuration'
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}



CONFIGURATION.AxiosChange()





 

