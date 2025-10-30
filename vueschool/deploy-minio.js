#!/usr/bin/env node
import 'dotenv/config'
import { readdirSync, statSync, readFileSync } from 'fs'
import path from 'path'
import { Client } from 'minio'
import mime from 'mime-types'
import open from 'open'

// ======== CONFIGURATION ======== //
const minioConfig = {
  endPoint: process.env.MINIO_ENDPOINT,
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
}

const bucketName = process.env.MINIO_BUCKET || 'widget3dx'
const distDir = './dist'
const subFolder = process.env.MINIO_PATH || 'vue3-app'
// =============================== //

const minioClient = new Client(minioConfig)

// Gerar URL pública
function getPublicUrl(objectName) {
  const protocol = minioConfig.useSSL ? 'https' : 'http'
  return `${protocol}://${minioConfig.endPoint}/${bucketName}/${objectName}`
}

// Upload recursivo com metadados nativos (como o `mc`)
async function uploadDirectory(directory, prefix = '') {
  const files = readdirSync(directory)

  for (const file of files) {
    const fullPath = path.join(directory, file)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) {
      await uploadDirectory(fullPath, path.join(prefix, file))
    } else {
      const objectName = path.join(subFolder, prefix, file).replace(/\\/g, '/')
      const contentType = mime.lookup(file) || 'application/octet-stream'

      // ⚙️ Aqui está a diferença importante:
      const metaData = {
        'Content-Type': contentType, // cabeçalho HTTP nativo
        'Cache-Control': file === 'index.html' ? 'no-cache' : 'max-age=31536000',
        'Content-Disposition': 'inline',
      }

      console.log(`⬆️ Enviando: ${objectName} (${contentType})`)

      // Passando metadata como quarto parâmetro
      await minioClient.putObject(
        bucketName,
        objectName,
        readFileSync(fullPath),
        stats.size,
        metaData,
      )

      const publicUrl = getPublicUrl(objectName)
      console.log(`✅ ${objectName}`)
      console.log(`🔗 ${publicUrl}\n`)
    }
  }
}

async function main() {
  try {
    console.log(`🚀 Upload de '${distDir}' → bucket '${bucketName}/${subFolder}'\n`)
    await uploadDirectory(distDir)
    console.log('🎉 Deploy concluído com sucesso!\n')

    if (process.argv.includes('--open')) {
      const indexUrl = getPublicUrl(`${subFolder}/index.html`)
      console.log(`🌐 Abrindo no navegador: ${indexUrl}`)
      await open(indexUrl)
    }
  } catch (err) {
    console.error('❌ Erro no upload:', err)
  }
}

main()
