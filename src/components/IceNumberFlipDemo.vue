<template>
   <ice-number-flip :number="numberFlip" :digits="6"></ice-number-flip>
</template>

<script setup lang='ts'>
import { IceNumberFlip } from "saturn-ui";
import "saturn-ui/lib/theme-default/IceAnimation.css";
import "saturn-ui/lib/theme-default/IceNumberFlip.css";
import { ref } from "vue";

const Random = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const numberFlip = ref(22)
setInterval(() => {
  numberFlip.value = Random(1000,100001)
}, 2000)
</script>