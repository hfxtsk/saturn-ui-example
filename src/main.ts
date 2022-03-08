import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import '@purge-icons/generated';
import IceHeaderDemo from './components/IceHeaderDemo.vue'
import IceIconDemo from './components/IceIconDemo.vue'
import IceEarthDemo from './components/IceEarthDemo.vue'
import IceMenuDemo from './components/IceMenuDemo.vue'
import IceWrapperDemo from './components/IceWrapperDemo.vue'
import IcePanelDemo from './components/IcePanelDemo.vue'
import IceDialogDemo from './components/IceDialogDemo.vue'
import IceListDemo from './components/IceListDemo.vue'
import IceScrollbarDemo from './components/IceScrollbarDemo.vue'
import IceClockDemo from './components/IceClockDemo.vue'
import IceWeatherDemo from './components/IceWeatherDemo.vue'
import IceNumberFlopDemo from './components/IceNumberFlopDemo.vue'
import IceChartDemo from './components/IceChartDemo.vue'
import IceChartBarDemo from './components/IceChartBarDemo.vue'
import IceChartPieDemo from './components/IceChartPieDemo.vue'
import IceChartLineDemo from './components/IceChartLineDemo.vue'

// import IceDataV from "ice-datav-ui";
// import "ice-datav-ui/lib/theme-default/index.css";

import App from './App.vue'
// 1. 定义路由组件.
// 也可以从其他文件导入

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: IceHeaderDemo },
  { path: '/header', component: IceHeaderDemo },
  { path: '/icon', component: IceIconDemo },
  { path: '/earth', component: IceEarthDemo },
  { path: '/menu', component: IceMenuDemo },
  { path: '/wrapper', component: IceWrapperDemo },
  { path: '/panel', component: IcePanelDemo },
  { path: '/dialog', component: IceDialogDemo },
  { path: '/list', component: IceListDemo },
  { path: '/scrollbar', component: IceScrollbarDemo },
  { path: '/clock', component: IceClockDemo },
  { path: '/weather', component: IceWeatherDemo },
  { path: '/numberflop', component: IceNumberFlopDemo },
  { path: '/chart', component: IceChartDemo },
  { path: '/chartbar', component: IceChartBarDemo },
  { path: '/chartpie', component: IceChartPieDemo },
  { path: '/chartline', component: IceChartLineDemo },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例
const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
// app.use(IceDataV)

app.mount('#app')
