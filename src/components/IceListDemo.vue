<template>
  <ice-list :listData="listData"></ice-list>
</template>

<script setup lang='ts'>
import { IceList } from "ice-datav-ui";
import "ice-datav-ui/lib/theme-default/IceList.css";
import { ref } from "vue";

const listData = ref([
      {
        name: '小明',
        age: 18,
        grade: '一年级',
        tset: '00000000000000000000000000000000000000000'
      },
      { name: '小明', age: 18, grade: '一年级', tset: '00' },
      { name: '小明', age: 18, grade: '一年级', tset: '00' },
      { name: '小明', age: 18, grade: '一年级', tset: '00' },
      { name: '小明', age: 18, grade: '一年级', tset: '00' },
      { name: '小明', age: 18, grade: '一年级', tset: '00' }
    ])

</script>