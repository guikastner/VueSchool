# Vue School Lessons

O vite está fazendo a "Hot Reload"

```node
npm run dev
```

## Lesson1 - Foundations

Troca da Mensagem ao trocar o texto

``` vue
<script setup>
import { ref } from 'vue'

const msg = ref('Kastner')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```