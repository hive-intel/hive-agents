#!/usr/bin/env node

/**
 * Hive Agents Post-Install Script
 * Automatically runs after npm install
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

console.log(`
${colors.cyan}${colors.bright}🐝 Hive Intelligence Agents${colors.reset}
${colors.yellow}Post-install setup...${colors.reset}
`);

// Check if we're in a global install
const isGlobal = process.env.npm_config_global === 'true' || 
                 process.env.npm_config_global === true ||
                 /[/\\]npm[/\\]/.test(__dirname);

if (isGlobal) {
  console.log(`${colors.green}✅ Hive Intelligence Agents installed globally${colors.reset}`);
  console.log(`
${colors.bright}Next steps:${colors.reset}
1. Run: ${colors.cyan}hive-agents install${colors.reset} to install agents to Claude Code
2. Run: ${colors.cyan}hive-agents list${colors.reset} to see all available agents
3. Run: ${colors.cyan}hive-agents help${colors.reset} for more commands

${colors.bright}Quick Start:${colors.reset}
After running ${colors.cyan}hive-agents install${colors.reset}, use agents in Claude Code:
${colors.cyan}/task "Analyze BTC market" --subagent_type crypto-quant${colors.reset}

${colors.yellow}No Python required!${colors.reset} Pure Node.js installation.
`);
} else {
  console.log(`${colors.green}✅ Hive Intelligence Agents installed locally${colors.reset}`);
  console.log(`
${colors.bright}Usage:${colors.reset}
const HiveIntelligence = require('hive-agents');
const hive = new HiveIntelligence();

// Get all agents
const agents = hive.getAllAgents();

// Install to Claude Code
await hive.install();
`);
}

// Create a simple version check
try {
  const packageJson = require('../package.json');
  console.log(`${colors.yellow}Version: ${packageJson.version}${colors.reset}`);
  
  // Check for updates
  const https = require('https');
  https.get('https://registry.npmjs.org/hive-agents/latest', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const latest = JSON.parse(data);
        if (latest.version && latest.version !== packageJson.version) {
          console.log(`${colors.yellow}📦 Update available: ${latest.version}${colors.reset}`);
          console.log(`   Run: ${colors.cyan}npm update -g hive-agents${colors.reset}`);
        }
      } catch (e) {
        // Ignore version check errors
      }
    });
  }).on('error', () => {
    // Ignore network errors
  });
} catch (error) {
  // Ignore errors
}

console.log(`
${colors.bright}Documentation:${colors.reset}
${colors.cyan}https://github.com/hive-intel/hive-agents${colors.reset}
`);