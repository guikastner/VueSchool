# Vue School Lessons

## Notas Técnicas

### Install

Caso o projeto seja reaproveitado a partir do github ou de outro repositório

1. Clone o repositório
2. Realize o comando de instalação

```
npm install
```

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

### Erro de caminhos relativos

Uma vez que eu compilava o projeto e tinha erros na distribuição dos pacotes, realizei uma mudança no vite.config.js

``` javascript
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: './', // 👈 Garante que todos os caminhos sejam relativos (funciona em MinIO)
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
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