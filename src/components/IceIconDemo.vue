<script setup lang="ts">
import { IceIcon } from "saturn-ui";
import "saturn-ui/lib/theme-default/IceHeader1.css";

import { ref } from 'vue'

const value = ref("gis:earth-america")

</script>

<template>
  <ice-icon :icon="value" :size="40"></ice-icon>

 <a-affix :style="{ position: 'absolute', bottom: 0, right: 0 }">
    <a-input
      v-model:value="value"
      placeholder="icon text"
      size="large"
      addon-before="IceIcon"
    />
  </a-affix>
  
</template>




