import fs from 'fs'
import path from 'path'

const envPath = path.resolve(process.cwd(), '.env')

if (!fs.existsSync(envPath)) {
  const defaultEnv = `# MinIO configuration
MINIO_ENDPOINT=
MINIO_USE_SSL=
MINIO_ACCESS_KEY=
MINIO_SECRET_KEY=
MINIO_BUCKET=
MINIO_PATH=
`

  fs.writeFileSync(envPath, defaultEnv)
  console.log('✅ Arquivo .env criado com variáveis vazias.')
} else {
  console.log('ℹ️ O arquivo .env já existe, nada foi feito.')
}
