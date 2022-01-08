const { execSync } = require('child_process')
const exec = (commands) => {
  execSync(commands, { stdio: 'inherit', shell: true })
}

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Folder name should have strict convention so we don't need big fat slugify library
const slugify = str =>
  str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text

rl.question('ABI file name (without .json extension):\n', (abi) => {
  rl.question('Module name (inside /src, ex: whitelist-claim):\n', (module) => {
    console.log(`Generating types for ${abi}`)
    const outDir = `src/${module}/services/contract/${slugify(abi)}`
    const abiPath = `abi/${abi}.json`
    const command = `typechain --target=ethers-v5 --out-dir ${outDir} '${abiPath}'`
    console.log(`CMD: ${command}`)
    exec(command)
    rl.close()
  })
})
