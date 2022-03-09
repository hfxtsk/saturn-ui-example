<template>
  <ice-list :listData="listData" style="width: 60%"></ice-list>
</template>

<script setup lang='ts'>
import { IceList } from "saturn-ui";
import "saturn-ui/lib/theme-default/IceList.css";
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