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
    // Determine Claude Code directory
    const homeDir = process.platform === 'win32' ? process.env.USERPROFILE : process.env.HOME;
    const claudeDir = path.join(homeDir, '.claude');
    const agentsDir = path.join(claudeDir, 'agents');
    
    // Check if Claude Code directory exists
    if (!fs.existsSync(claudeDir)) {
      console.log(`${colors.yellow}Creating Claude Code directory at: ${claudeDir}${colors.reset}`);
      fs.mkdirSync(claudeDir, { recursive: true });
    }
    
    // Create agents directory if it doesn't exist
    if (!fs.existsSync(agentsDir)) {
      console.log(`${colors.yellow}Creating agents directory...${colors.reset}`);
      fs.mkdirSync(agentsDir, { recursive: true });
    }
    
    // Copy agent files
    const sourceAgentsDir = path.join(__dirname, '..', 'agents');
    const agentFiles = fs.readdirSync(sourceAgentsDir).filter(file => file.endsWith('.md'));
    
    console.log(`${colors.yellow}Installing ${agentFiles.length} agents...${colors.reset}`);
    
    let installedCount = 0;
    agentFiles.forEach(file => {
      const sourcePath = path.join(sourceAgentsDir, file);
      const destPath = path.join(agentsDir, file);
      
      try {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`  ${colors.green}✓${colors.reset} ${file.replace('.md', '')}`);
        installedCount++;
      } catch (err) {
        console.error(`  ${colors.red}✗${colors.reset} Failed to install ${file}: ${err.message}`);
      }
    });
    
    // Copy base agents from SuperClaude if available
    const superClaudeAgentsDir = path.join(__dirname, '..', 'SuperClaude', 'Agents');
    if (fs.existsSync(superClaudeAgentsDir)) {
      console.log(`\n${colors.yellow}Installing base development agents...${colors.reset}`);
      const baseAgentFiles = fs.readdirSync(superClaudeAgentsDir).filter(file => file.endsWith('.md'));
      
      baseAgentFiles.forEach(file => {
        const sourcePath = path.join(superClaudeAgentsDir, file);
        const destPath = path.join(agentsDir, file);
        
        try {
          fs.copyFileSync(sourcePath, destPath);
          console.log(`  ${colors.green}✓${colors.reset} ${file.replace('.md', '')}`);
          installedCount++;
        } catch (err) {
          console.error(`  ${colors.red}✗${colors.reset} Failed to install ${file}: ${err.message}`);
        }
      });
    }
    
    console.log(`\n${colors.green}✅ Successfully installed ${installedCount} agents to Claude Code!${colors.reset}`);
    console.log(`${colors.cyan}Location: ${agentsDir}${colors.reset}`);
    console.log(`\n${colors.bright}Usage:${colors.reset}`);
    console.log(`  In Claude Code, use the Task tool:`);
    console.log(`  ${colors.blue}/task "Your request" --subagent_type [agent-name]${colors.reset}`);
    console.log(`\nRun ${colors.cyan}hive-agents list${colors.reset} to see all available agents`);
    
  } catch (error) {
    console.error(`${colors.red}Error during installation: ${error.message}${colors.reset}`);
    process.exit(1);
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