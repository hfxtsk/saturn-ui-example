<template>
  <a-drawer :width="400" :mask="false" title="SaturnUI组件库" :visible="visible" @close="onClose">
    <a-tree
      v-model:selectedKeys="selectedKeys"
      v-model:expandedKeys="expandedKeys"
      :tree-data="treeData"
    ></a-tree>
  </a-drawer>
  <a-affix class="center" v-if="!visible">
    <ice-icon icon="icon-park-outline:indent-left" :size="30" @click="visible = true"></ice-icon>
  </a-affix>
</template>
<script lang="ts" setup>
import { watch, ref } from "vue";
import { useRouter } from "vue-router";
import { IceIcon } from "saturn-ui";
import "saturn-ui/lib/theme-default/IceHeader1.css";

const treeData = [
  {
    title: "大屏模块 saturn-ui",
    key: "1-0-0",
    children: [
      { title: "IceHeader 页头", key: "header" },
      { title: "IceMenu 菜单", key: "menu" },
      { title: "IceWrapper 包装", key: "wrapper" },
      { title: "IcePanel 面板", key: "panel" },
      { title: "IceIcon 图标", key: "icon" },
      { title: "IceDialog 弹窗", key: "dialog" },
      { title: "IceList 列表", key: "list" },
      { title: "IceScrollbar 滚动条", key: "scrollbar" },
      { title: "IceVirtualList 虚拟列表", key: "virtualList" },
      { title: "IceClock 时钟", key: "clock" },
      { title: "IceWeather 天气", key: "weather" },
      { title: "IceNumberFlip 数字翻转", key: "numberFlip" },
      { title: "IceImage 图片", key: "image" },
    ],
  },
  {
    title: "图表模块 @saturn-ui/chart",
    key: "2-0-0",
    children: [
      { title: "IceChart 图表", key: "chart" },
      { title: "IceChartBar 柱状图", key: "chartBar" },
      { title: "IceChartPie 饼状图", key: "chartPie" },
      { title: "IceChartLine 线形图", key: "chartLine" },
      { title: "IceChartMap 地图", key: "chartMap" },
    ],
  },
  {
    title: "GIS模块 @saturn-ui/mars3d",
    key: "3-0-0",
    children: [
      { title: "IceEarth 三维地球", key: "earth" },
      { title: "IceToolbar 工具栏", key: "toolbar" },
      { title: "IceBasemapMgr 底图管理", key: "basemapMgr" },
      { title: "IceLayerMgr 图层管理", key: "layerMgr" },
      { title: "IceMapCalc 图上量算", key: "mapCalc" },
      { title: "IceSelectPoint 图上选点", key: "selectPoint" },
      { title: "IceMarker 我的标记", key: "marker" },
      { title: "IceBookmark 我的书签", key: "bookmark" },
      { title: "IceDrawer 图上标绘", key: "drawer" },
      { title: "IceGraphicEditor 图形编辑器", key: "graphicEditor" },
      { title: "IceFlightRoam 飞行漫游", key: "flightRoam" },
      { title: "IceMapPrint 地图打印", key: "mapPrint" },
    ],
  },
  {
    title: "视频模块 @saturn-ui/media",
    key: "4-0-0",
    children: [
      { title: "IceMedia 音视频", key: "media" },
      { title: "IceSplitScreen 分屏", key: "splitScreen" },
    ],
  },
  {
    title: "后台模块 @saturn-ui/admin",
    key: "5-0-0",
    children: [
      { title: "IceLogin 登录页", key: "login" },
    ],
  },
];

const selectedKeys = ref<string[]>([]);
const expandedKeys = ref<string[]>(["1-0-0", "3-0-0"]);

const router = useRouter();

watch(expandedKeys, () => {
});

watch(selectedKeys, () => {
  const url = selectedKeys.value[0]
  if (url) {
    if (url.startsWith('0')) {
      return;
    }
    if (url.startsWith('http')) {
      window.open(url)
    } else {
      router.push(`/${url}`); // -> /user/eduardo
    }
  }
});

const visible = ref<boolean>(false);

const showDrawer = () => {
  visible.value = true;
};

const onClose = () => {
  visible.value = false;
};
</script>
<style>
.center {
  position: absolute;
  top: calc(50% - 32px);
  right: 0;
  z-index: 999;
  cursor: pointer;
  background-color: #fff;
  transform: translateX(-50%);
  opacity: 0.8;
  overflow: hidden;
}
</style>
