import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caminho = path.join(__dirname, 'arquivo.json');

// Sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

const readFilePromise = promisify(fs.readFile);
const configP = await readFilePromise(caminho, 'utf-8');
console.log(configP);

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta:', arquivos);
})