<script setup>
import { ref } from 'vue'

const header = ref('Shopping list app')
const items = ref([
  { id: 1, text: 'Apples' },
  { id: 2, text: 'Oranges' },
  { id: 3, text: 'Bananas' },
  { id: 4, text: 'Grapes' },
])

const newItem = ref('')

const newItemPriority = ref('low')

</script>

<template>
  <h1>{{ header.toLocaleUpperCase() }}</h1>
  <form 
    class="add-item-form"
    v-on:submit="items.push({ id: items.length + 1,text: newItem })"
  >
    <input 
      v-model.lazy="newItem"
      type="text" placeholder="add an item..." /> {{ newItem }}
    <input type="radio" v-model="newItemPriority" value="low" /> Low
    <input type="radio" v-model="newItemPriority" value="high" /> High
    <p>New item priority: {{ newItemPriority.toLocaleUpperCase() }}</p>
    <button
      class="btn btn-primary">
      Save item
    </button>
  </form>

  <ul>
    <!-- visualizavção de array de objetos -->
    <li v-for="({id, text}, index) in items" :key="id">
      {{ index + 1 }} - {{text }}
    </li>
  </ul>
</template>
