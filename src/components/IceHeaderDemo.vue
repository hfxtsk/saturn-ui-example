<script setup lang="ts">
import { ref } from 'vue'
import { IceHeader ,IceHeader2,IceHeader3} from "ice-datav-ui";
import "ice-datav-ui/lib/theme-default/IceHeader1.css";
import "ice-datav-ui/lib/theme-default/IceHeader2.css";
import "ice-datav-ui/lib/theme-default/IceHeader3.css";

const value = ref(1)
</script>

<template>
  <ice-header v-if="value == 1"></ice-header>
  <ice-header2 v-if="value == 2"></ice-header2>
  <ice-header3 v-if="value == 3" logo="https://cdn.jsdelivr.net/gh/hfxtsk/cdn/hfxtsk.cn/logo/logo.svg"></ice-header3>

  <a-affix :style="{ position: 'absolute', bottom: 0, right: 0 }">
    <a-radio-group v-model:value="value" button-style="solid">
      <a-radio-button :value="1">IceHeader</a-radio-button>
      <a-radio-button :value="2">IceHeader2</a-radio-button>
      <a-radio-button :value="3">IceHeader3</a-radio-button>
    </a-radio-group>
  </a-affix>
</template>




