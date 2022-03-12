import {defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import purgeIcons from "vite-plugin-purge-icons";

import Components from "unplugin-vue-components/vite";
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers";

import mars3d from 'vite-plugin-mars3d';

import importToCDN from 'vite-plugin-cdn-import'

export default ({mode}) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    console.log('process.env ', process.env)

    const plugins = [
        vue(),
        purgeIcons(),
        /* ... */
        Components({
            resolvers: [AntDesignVueResolver()],
        }),
        importToCDN({
            modules: [
                {
                    name: 'mars3d-cesium',
                    var: 'Cesium',
                    path: 'https://unpkg.com/mars3d-cesium/Build/Cesium/Cesium.js',
                    css: 'https://unpkg.com/mars3d-cesium/Build/Cesium/Widgets/widgets.css'
                },
                {
                    name: 'mars3d',
                    var: 'mars3d',
                    path: 'https://unpkg.com/mars3d/dist/mars3d.js',
                    css: 'https://unpkg.com/mars3d/dist/mars3d.css'
                },
            ]
        })
    ]

    // 开发模式使用vite-plugin-mars3d插件，生产打包使用cdn方式
    if (process.env.npm_lifecycle_event === 'dev') {
        plugins.push(mars3d())
    }

    return defineConfig({
        plugins: plugins,
    });
}



