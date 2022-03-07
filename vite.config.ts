import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import purgeIcons from "vite-plugin-purge-icons";

import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

import mars3d from 'vite-plugin-mars3d';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    purgeIcons(),
    mars3d(),
    /* ... */
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
});
