/**
 * Hive Intelligence Agents
 * Main module for programmatic access
 */

const fs = require('fs');
const path = require('path');

class HiveIntelligence {
  constructor() {
    this.version = require('./package.json').version;
    this.agentsPath = path.join(__dirname, 'agents');
    this.agents = this.loadAgents();
  }

  /**
   * Load all agent configurations
   */
  loadAgents() {
    const agents = {
      crypto: [],
      base: []
    };

    // Load crypto agents
    const cryptoAgentFiles = fs.readdirSync(this.agentsPath)
      .filter(file => file.startsWith('crypto-') && file.endsWith('.md'));

    cryptoAgentFiles.forEach(file => {
      const content = fs.readFileSync(path.join(this.agentsPath, file), 'utf8');
      const name = file.replace('.md', '');
      
      // Parse YAML frontmatter
      const match = content.match(/^---\n([\s\S]*?)\n---/);
      if (match) {
        const yaml = match[1];
        const description = yaml.match(/description:\s*(.+)/)?.[1] || '';
        agents.crypto.push({
          name,
          description,
          file
        });
      }
    });

    // Base agents (from SuperClaude)
    agents.base = [
      { name: 'backend-architect', description: 'Backend system architecture and design' },
      { name: 'frontend-architect', description: 'Frontend architecture and UI/UX design' },
      { name: 'devops-architect', description: 'DevOps and infrastructure automation' },
      { name: 'quality-engineer', description: 'Testing and quality assurance' },
      { name: 'security-engineer', description: 'Security analysis and implementation' },
      { name: 'performance-engineer', description: 'Performance optimization and analysis' },
      { name: 'python-expert', description: 'Python development expertise' },
      { name: 'refactoring-expert', description: 'Code refactoring and optimization' },
      { name: 'requirements-analyst', description: 'Requirements analysis and documentation' },
      { name: 'root-cause-analyst', description: 'Root cause analysis and debugging' },
      { name: 'socratic-mentor', description: 'Socratic teaching and mentoring' },
      { name: 'system-architect', description: 'System design and architecture' },
      { name: 'technical-writer', description: 'Technical documentation and writing' },
      { name: 'learning-guide', description: 'Learning and educational guidance' }
    ];

    return agents;
  }

  /**
   * Get all agents
   */
  getAllAgents() {
    return [...this.agents.crypto, ...this.agents.base];
  }

  /**
   * Get crypto agents only
   */
  getCryptoAgents() {
    return this.agents.crypto;
  }

  /**
   * Get base agents only
   */
  getBaseAgents() {
    return this.agents.base;
  }

  /**
   * Find agent by name
   */
  findAgent(name) {
    return this.getAllAgents().find(agent => agent.name === name);
  }

  /**
   * Get agent categories
   */
  getCategories() {
    return {
      'Market & Trading': [
        'crypto-quant',
        'crypto-analyst',
        'crypto-market-researcher',
        'crypto-derivatives-trader',
        'crypto-dex-arbitrageur'
      ],
      'DeFi & Liquidity': [
        'crypto-defi-strategist',
        'crypto-liquidity-manager',
        'crypto-stablecoin-analyst'
      ],
      'Security & Risk': [
        'crypto-security-researcher',
        'crypto-security-engineer',
        'crypto-risk-manager',
        'crypto-mev-researcher'
      ],
      'On-chain Analysis': [
        'crypto-onchain-analyst',
        'crypto-wallet-detective',
        'crypto-bridge-analyst'
      ],
      'Specialized': [
        'crypto-governance-analyst',
        'crypto-nft-specialist',
        'crypto-social-sentiment'
      ],
      'Development': this.agents.base.map(a => a.name)
    };
  }

  /**
   * Get agent content
   */
  getAgentContent(name) {
    const agent = this.findAgent(name);
    if (!agent || !agent.file) return null;
    
    const filePath = path.join(this.agentsPath, agent.file);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf8');
    }
    return null;
  }

  /**
   * Install agents to Claude Code
   */
  async install(targetPath) {
    console.log('Installing Hive Intelligence Agents to Claude Code...');
    
    // Default Claude Code path
    if (!targetPath) {
      targetPath = process.platform === 'win32' 
        ? path.join(process.env.USERPROFILE, '.claude')
        : path.join(process.env.HOME, '.claude');
    }

    // Copy agents
    const agentsTarget = path.join(targetPath, 'agents');
    if (!fs.existsSync(agentsTarget)) {
      fs.mkdirSync(agentsTarget, { recursive: true });
    }

    // Copy each agent file
    this.agents.crypto.forEach(agent => {
      if (agent.file) {
        const source = path.join(this.agentsPath, agent.file);
        const dest = path.join(agentsTarget, agent.file);
        fs.copyFileSync(source, dest);
        console.log(`  ✓ Installed ${agent.name}`);
      }
    });

    console.log(`\n✅ Installed ${this.agents.crypto.length} crypto agents`);
    console.log('🐝 Hive Intelligence Agents ready to use with Claude Code!');
  }
}

// Export for programmatic use
module.exports = HiveIntelligence;

// CLI support
if (require.main === module) {
  const hive = new HiveIntelligence();
  console.log(`Hive Intelligence Agents v${hive.version}`);
  console.log(`Loaded ${hive.getAllAgents().length} agents`);
}