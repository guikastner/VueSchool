<script setup>
import { ref } from 'vue'

const header = ref('Shopping list app')
</script>

<template>
  <h1>{{ header.toLocaleUpperCase() }}</h1>
  <!-- <input v-model="header" /> -->
</template>
