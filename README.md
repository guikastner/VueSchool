# Vue School Lessons

## Notas Técnicas

### Sobre o vite

O vite está fazendo a "Hot Reload"

```node
npm run dev
```

### Sobre o script de upload de dados

Foi criado um script que é encarregado do upload de dados direto ao minio

> deploy-minio.js

Além disso foi inserido um novo comando de execução de projeto em tempo real com o Vite, onde o projeto é atualizado e sobe ao minio ao mesmo tempo.

```
```

### Para o env do deploy-minio

Precisa-se criar um arquivo .env na raiz do projeto com as seguintes variáveis

há um arquivo chamado "createenv.js" na raiz do projeto. Ele pode ser executado para criar o env para ser populado e utilizado no projeto, inclusive no deploy-minio.js


``` .env
MINIO_ENDPOINT=
MINIO_USE_SSL=
MINIO_ACCESS_KEY=
MINIO_SECRET_KEY=
MINIO_BUCKET=
MINIO_PATH=
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

## Lesson 2 - Manipulação de Strings

Pega-se uma string e se manipula métodos e processos

Exemplo, tornar todos os caracteres minúsculos

``` vue
<template>
  <h1>{{ header.toLocaleUpperCase() }}</h1>
</template>
```