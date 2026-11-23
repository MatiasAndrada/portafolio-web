// Genera public/cv/Matias_Andrada_CV.pdf a partir de cv/cv.html usando
// Chrome o Edge en modo headless (sin dependencias extra).
//   pnpm cv
// Si el navegador no está en una ruta conocida: CHROME_PATH=/ruta/al/chrome pnpm cv
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const input = resolve(here, 'cv.html')
const output = resolve(here, '../public/cv/Matias_Andrada_CV.pdf')

const browser = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].find((path) => path && existsSync(path))

if (!browser) {
  console.error('No se encontró Chrome ni Edge. Definí CHROME_PATH.')
  process.exit(1)
}

mkdirSync(dirname(output), { recursive: true })

const result = spawnSync(
  browser,
  [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${output}`,
    pathToFileURL(input).href
  ],
  { stdio: 'inherit' }
)

if (result.status !== 0 || !existsSync(output)) {
  console.error('Falló la generación del PDF.')
  process.exit(1)
}

const pages = (
  readFileSync(output, 'latin1').match(/\/Type\s*\/Page(?!s)/g) || []
).length
console.log(`CV generado: ${output} (${pages} página${pages === 1 ? '' : 's'})`)
if (pages !== 1) {
  console.warn('⚠ El CV ya no entra en una página: recortá contenido en cv/cv.html.')
  process.exit(1)
}
