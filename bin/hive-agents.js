#!/usr/bin/env node

/**
 * Hive Agents CLI
 * Main executable for the Hive Agents framework
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

// CLI Colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0];

// Display help
function showHelp() {
  console.log(`
${colors.cyan}${colors.bright}🐝 Hive Intelligence Agents${colors.reset}
${colors.yellow}Specialized crypto intelligence agents for Claude Code${colors.reset}

${colors.bright}Usage:${colors.reset}
  hive-agents <command> [options]

${colors.bright}Commands:${colors.reset}
  ${colors.green}install${colors.reset}     Install Hive Agents into Claude Code
  ${colors.green}update${colors.reset}      Update to the latest version
  ${colors.green}list${colors.reset}        List all available agents
  ${colors.green}info${colors.reset}        Show framework information
  ${colors.green}help${colors.reset}        Show this help message

${colors.bright}Examples:${colors.reset}
  hive-agents install       # Install the framework
  hive-agents list          # List all 31 agents
  hive-agents info          # Show version and details

${colors.bright}Documentation:${colors.reset}
  GitHub: ${colors.blue}https://github.com/hive-intel/hive-agents${colors.reset}
  NPM: ${colors.blue}https://www.npmjs.com/package/hive-agents${colors.reset}
`);
}

// Show framework info
function showInfo() {
  const packageJson = require('../package.json');
  console.log(`
${colors.cyan}${colors.bright}🐝 Hive Intelligence Agents${colors.reset}
${colors.yellow}Version: ${packageJson.version}${colors.reset}

${colors.bright}Agents:${colors.reset}
  • 14 Base Development Agents
  • 17 Crypto Intelligence Agents
  • Total: 31 Specialized Agents

${colors.bright}Features:${colors.reset}
  ✓ Hive Intelligence MCP Integration
  ✓ Real-time Blockchain Data
  ✓ DeFi Strategy Analysis
  ✓ Smart Contract Security
  ✓ Market Research & Trading
  ✓ On-chain Analysis

${colors.bright}Repository:${colors.reset}
  ${colors.blue}${packageJson.homepage}${colors.reset}
`);
}

// List all agents
function listAgents() {
  console.log(`
${colors.cyan}${colors.bright}🐝 Hive Intelligence - Available Agents${colors.reset}

${colors.yellow}${colors.bright}Crypto Intelligence Agents (17):${colors.reset}

${colors.bright}Market & Trading:${colors.reset}
  • crypto-quant             - Quantitative analysis & algorithmic trading
  • crypto-analyst           - Market research & fundamental analysis
  • crypto-market-researcher - Deep market intelligence
  • crypto-derivatives-trader - Options, futures & derivatives
  • crypto-dex-arbitrageur   - DEX arbitrage opportunities

${colors.bright}DeFi & Liquidity:${colors.reset}
  • crypto-defi-strategist   - Yield optimization strategies
  • crypto-liquidity-manager - LP position management
  • crypto-stablecoin-analyst - Stablecoin stability analysis

${colors.bright}Security & Risk:${colors.reset}
  • crypto-security-researcher - Smart contract audits
  • crypto-security-engineer  - Secure contract development
  • crypto-risk-manager      - Portfolio risk assessment
  • crypto-mev-researcher    - MEV detection & protection

${colors.bright}On-chain Analysis:${colors.reset}
  • crypto-onchain-analyst   - Blockchain data analysis
  • crypto-wallet-detective  - Wallet investigation
  • crypto-bridge-analyst    - Cross-chain bridge analysis

${colors.bright}Specialized:${colors.reset}
  • crypto-governance-analyst - DAO & governance analysis
  • crypto-nft-specialist    - NFT valuation & analysis
  • crypto-social-sentiment  - Social media sentiment

${colors.green}${colors.bright}Base Development Agents (14):${colors.reset}
  • backend-architect        • frontend-architect
  • devops-architect        • quality-engineer
  • security-engineer       • performance-engineer
  • python-expert          • refactoring-expert
  • requirements-analyst   • root-cause-analyst
  • socratic-mentor        • system-architect
  • technical-writer       • learning-guide

${colors.bright}Usage:${colors.reset}
  Use with Claude Code's Task tool:
  ${colors.blue}/task "Your request" --subagent_type [agent-name]${colors.reset}
`);
}

// Install function
async function install() {
  console.log(`${colors.cyan}${colors.bright}🐝 Installing Hive Intelligence Agents...${colors.reset}\n`);
  
  try {
    // Check if Python is available
    const pythonCmd = process.platform === 'win32' ? 'py' : 'python3';
    
    // Try to install via pip
    console.log(`${colors.yellow}Installing Python package...${colors.reset}`);
    const pipInstall = spawn(pythonCmd, ['-m', 'pip', 'install', '-e', '.'], {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit',
      shell: true
    });
    
    pipInstall.on('close', (code) => {
      if (code === 0) {
        console.log(`\n${colors.green}✅ Hive Intelligence Agents installed successfully!${colors.reset}`);
        console.log(`${colors.yellow}Run 'hive-agents install' to complete setup${colors.reset}`);
      } else {
        console.error(`${colors.red}Installation failed. Make sure Python and pip are installed.${colors.reset}`);
        console.log(`\n${colors.yellow}To install Python:${colors.reset}`);
        console.log(`  Windows: ${colors.blue}winget install Python.Python.3.12${colors.reset}`);
        console.log(`  macOS/Linux: ${colors.blue}Visit python.org/downloads${colors.reset}`);
      }
    });
  } catch (error) {
    console.error(`${colors.red}Error during installation: ${error.message}${colors.reset}`);
  }
}

// Update function
async function update() {
  console.log(`${colors.cyan}${colors.bright}🐝 Updating Hive Intelligence Agents...${colors.reset}\n`);
  
  const npmUpdate = spawn('npm', ['update', '-g', 'hive-agents'], {
    stdio: 'inherit',
    shell: true
  });
  
  npmUpdate.on('close', (code) => {
    if (code === 0) {
      console.log(`\n${colors.green}✅ Hive Intelligence Agents updated successfully!${colors.reset}`);
    } else {
      console.error(`${colors.red}Update failed. Try: npm install -g hive-agents@latest${colors.reset}`);
    }
  });
}

// Main command handler
switch (command) {
  case 'install':
    install();
    break;
  case 'update':
    update();
    break;
  case 'list':
    listAgents();
    break;
  case 'info':
    showInfo();
    break;
  case 'help':
  case '--help':
  case '-h':
  case undefined:
    showHelp();
    break;
  default:
    console.log(`${colors.red}Unknown command: ${command}${colors.reset}`);
    showHelp();
    process.exit(1);
}