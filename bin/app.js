#! /usr/bin/env node
import chalk from 'chalk'
import clipboardy from 'clipboardy'
import { exec } from 'child_process'

exec('openssl rand -base64 12', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  clipboardy.writeSync(stdout.trim())

  console.log(chalk.green.bold('---------------------------------'))
  console.log(chalk.yellow.bold('⚡️⚡️✨  Generating Magic  🪄✨⚡️⚡️'))
  console.log(chalk.green.bold('---------------------------------'))
  console.log(chalk.blue.bold(`\n\n        ${stdout.trim()} \n\n`))
  console.log(chalk.green.bold('---------------------------------'))
  console.log(chalk.yellow.bold('⚡️⚡️✨ Copied to clipboard ✨⚡️⚡️'))
  console.log(chalk.green.bold('---------------------------------'))
})

