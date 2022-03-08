<template>
  <a-drawer
    :width="300"
    title="示例导航"
    :placement="placement"
    :visible="visible"
    @close="onClose"
  >
    <a-tree
      v-model:selectedKeys="selectedKeys"
      v-model:expandedKeys="expandedKeys"
      :tree-data="treeData"
    ></a-tree>
  </a-drawer>
  <a-affix class="center" v-if="!visible">
    <ice-icon
      icon="icon-park-outline:menu-unfold"
      :size="30"
      @click="visible = true"
    ></ice-icon>
  </a-affix>
</template>
<script lang="ts" setup>
import { watch, ref } from "vue";
import { useRouter } from "vue-router";
import type { DrawerProps } from "ant-design-vue";
import { IceIcon } from "ice-datav-ui";
import "ice-datav-ui/lib/theme-default/IceHeader1.css";

const treeData = [
  {
    title: "ice-datav-ui",
    key: "0-0",
    children: [
      {
        title: "大屏组件",
        key: "0-0-0",
        children: [
          { title: "IceHeader 页头", key: "header" },
          { title: "IceIcon 图标", key: "icon" },
          { title: "IceMenu 菜单", key: "menu" },
          { title: "IceWrapper 包装", key: "wrapper" },
          { title: "IcePanel 面板", key: "panel" },
          { title: "IceDialog 可拖动面板", key: "dialog" },
          { title: "IceList 列表", key: "list" },
          { title: "IceScrollbar 滚动条", key: "scrollbar" },
          { title: "IceClock 时钟", key: "clock" },
          { title: "IceWeather 天气", key: "weather" },
          { title: "IceNumberFlop 数字翻盘", key: "numberflop" },
          { title: "IceChart 图表", key: "chart" },
          { title: "IceChartBar 柱状图", key: "chartbar" },
          { title: "IceChartPie 饼状图", key: "chartpie" },
          { title: "IceChartLine 线形图", key: "chartline" },
        ],
      },
      {
        title: "GIS组件",
        key: "0-0-1",
        children: [
          { title: "IceEarth 三维地球", key: "earth" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" },
        ],
      },
      {
        title: "Admin组件",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" },
        ],
      },
    ],
  },
];

const selectedKeys = ref<string[]>([]);
const expandedKeys = ref<string[]>(["0-0-0", "0-0-1"]);

const router = useRouter();

watch(expandedKeys, () => {
  console.info("expandedKeys", expandedKeys);
});

watch(selectedKeys, () => {
  console.log("selectedKeys", selectedKeys.value[0]);

  router.push(`/${selectedKeys.value[0]}`); // -> /user/eduardo
});

const placement = ref<DrawerProps["placement"]>("left");
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
  top: 50%;
  left: 0;
  z-index: 999;
  cursor: pointer;
  background-color: #fff;
  transform: translateX(-50%);
  opacity: 0.8;
}
</style>
