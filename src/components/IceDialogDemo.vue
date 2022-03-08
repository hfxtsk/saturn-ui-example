<template>
  <ice-dialog
    title="编辑"
    :width="500"
    :top="300"
    :right="650"
    v-model:visible="visible"
  >
    这是一个可以拖动的面板
  </ice-dialog>
</template>

<script setup lang="ts">
import { IceDialog } from "ice-datav-ui";
import { ref } from "vue";
import "ice-datav-ui/lib/theme-default/IceDialog.css";

const visible = ref(true);
</script>
