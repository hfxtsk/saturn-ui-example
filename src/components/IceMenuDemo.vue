<template>
  <ice-menu v-if="value == 1" :data="data"></ice-menu>
  <ice-header3 v-if="value == 2" logo="https://cdn.jsdelivr.net/gh/hfxtsk/cdn/hfxtsk.cn/logo/logo.svg">
    <ice-menu2>
      <ice-menu-item key="video">
        <ice-icon icon="ant-design:home-outlined" :size="20" />
        监控视频
      </ice-menu-item>
      <ice-sub-menu>
        <template #title>
          <ice-icon icon="icon-park-outline:abnormal" :size="20" />
          菜单3
        </template>
        <ice-menu-item-group>
          <template #title>Item 1</template>
          <ice-menu-item key="setting:1">
            <ice-icon icon="icon-park-outline:ad-product" />
            Option 1
          </ice-menu-item>
          <ice-menu-item key="setting:2">
            <ice-icon icon="icon-park-outline:adobe-illustrate" />
            Option 2
          </ice-menu-item>
        </ice-menu-item-group>
        <ice-menu-item-group>
          <template #title>Item 2</template>
          <ice-menu-item key="setting:3">
            <ice-icon icon="icon-park-outline:airplane-window" />
            Option 3
          </ice-menu-item>
          <ice-menu-item key="setting:4">
            <ice-icon icon="icon-park-outline:align-bottom-two" />
            Option 4
          </ice-menu-item>
        </ice-menu-item-group>
      </ice-sub-menu>
      <ice-sub-menu>
        <template #title>Navigation Three - Submenu</template>
        <ice-menu-item key="setting:5">
          <ice-icon icon="icon-park-outline:add-subtract" />
          Option 3
        </ice-menu-item>
        <ice-menu-item key="setting:6">
          <ice-icon icon="icon-park-outline:airplane-window-one" />
          Option 4
        </ice-menu-item>
      </ice-sub-menu>
    </ice-menu2>
  </ice-header3>

  <a-affix :style="{ position: 'absolute', bottom: 0, right: 0 }">
    <a-radio-group v-model:value="value" button-style="solid">
      <a-radio-button :value="1">IceMenu</a-radio-button>
      <a-radio-button :value="2">IceMenu2</a-radio-button>
    </a-radio-group>
  </a-affix>
</template>

<script setup lang="ts">
import {
  IceMenu,
  IceMenu2,
  IceSubMenu,
  IceMenuItem,
  IceIcon,
  IceMenuItemGroup,
  IceHeader3,
} from "saturn-ui";
import "saturn-ui/lib/theme-default/IceMenu1.css";
import "saturn-ui/lib/theme-default/IceMenu2.css";
import "saturn-ui/lib/theme-default/IceHeader3.css";
import { ref } from "vue";

const value = ref(1);

const data = ref([
  {
    title: "菜单",
    icon: "icon-park-outline:application-menu",
  },
  {
    title: "分类",
    icon: "icon-park-outline:activity-source",
  },
  {
    title: "统计",
    icon: "icon-park-outline:align-left-one",
  },
  {
    title: "数据存储",
    icon: "icon-park-outline:data",
  },
  {
    title: "文档",
    icon: "icon-park-outline:file-doc",
  },
]);
</script>
