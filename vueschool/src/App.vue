<script setup>
import { ref } from 'vue'

const header = ref('Shopping list app')
const items = ref([
  { id: 1, text: 'Apples' },
  { id: 2, text: 'Oranges' },
  { id: 3, text: 'Bananas' },
  { id: 4, text: 'Grapes' },
])
// const items = ref(['Apples',
//         'Oranges',
//         'Bananas',
//         'Grapes'])
</script>

<template>
  <h1>{{ header.toLocaleUpperCase() }}</h1>
  <ul>
    <!-- visualização de array de objetos -->
    <li v-for="({id, text}, index) in items" :key="id">
      {{ index + 1 }} - {{text }}
    </li>
  </ul>
</template>
