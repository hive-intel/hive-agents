#!/usr/bin/env node

/**
 * Hive Agents Update Script
 * Updates the framework to the latest version
 */

const { spawn } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

console.log(`
${colors.cyan}${colors.bright}🐝 Updating Hive Intelligence Agents...${colors.reset}
`);

// Update via npm
const npmUpdate = spawn('npm', ['update', '-g', 'hive-agents'], {
  stdio: 'inherit',
  shell: true
});

npmUpdate.on('close', (code) => {
  if (code === 0) {
    console.log(`
${colors.green}✅ Hive Intelligence Agents updated successfully!${colors.reset}

${colors.bright}What's New:${colors.reset}
Run ${colors.cyan}hive-agents info${colors.reset} to see the current version
Visit ${colors.cyan}https://github.com/hive-intel/hive-agents/releases${colors.reset} for changelog
`);
  } else {
    console.error(`
${colors.red}❌ Update failed${colors.reset}

Try manually updating with:
  ${colors.cyan}npm install -g hive-agents@latest${colors.reset}
`);
    process.exit(1);
  }
});