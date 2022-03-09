<template>
   <ice-number-flop :number="numberFlop" :digits="6"></ice-number-flop>
</template>

<script setup lang='ts'>
import { IceNumberFlop } from "saturn-ui";
import "saturn-ui/lib/theme-default/IceNumberFlop.css";
import { ref } from "vue";

const numberFlop = ref(22)
setTimeout(() => {
  numberFlop.value = 59
}, 2000)
</script>