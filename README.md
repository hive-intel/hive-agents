<div align="center">

# 🐝 Hive Intelligence Agents

### **Professional Crypto Intelligence Agents for Claude Code**

<p align="center">
  <img src="https://img.shields.io/badge/version-4.0.8-blue" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
</p>

<p align="center">
  <a href="https://hiveintelligence.netlify.app/">
    <img src="https://img.shields.io/badge/🌐_Visit_Website-blue" alt="Website">
  </a>
  <a href="https://pypi.org/project/hive-agents/">
    <img src="https://img.shields.io/pypi/v/hive-agents.svg?" alt="PyPI">
  </a>
  <a href="https://www.npmjs.com/package/hive-agents">
    <img src="https://img.shields.io/npm/v/hive-agents.svg" alt="npm">
  </a>
</p>

<p align="center">
  <a href="README.md">
    <img src="https://img.shields.io/badge/🇺🇸_English-blue" alt="English">
  </a>
  <a href="README-zh.md">
    <img src="https://img.shields.io/badge/🇨🇳_中文-red" alt="中文">
  </a>
  <a href="README-ja.md">
    <img src="https://img.shields.io/badge/🇯🇵_日本語-green" alt="日本語">
  </a>
</p>

<p align="center">
  <a href="#-quick-installation">Quick Start</a> •
  <a href="#-support-the-project">Support</a> •
  <a href="#-whats-new-in-v4">Features</a> •
  <a href="#-documentation">Docs</a> •
  <a href="#-contributing">Contributing</a>
</p>

</div>

---

<div align="center">

## 📊 **Framework Statistics**

| **Total Agents** | **Crypto Agents** | **Base Agents** | **Focus** |
|:---------------:|:----------------:|:--------------:|:----------:|
| **31** | **17** | **14** | **Blockchain & DeFi** |
| Professional AI | Market & Security | Development | Real-time Data |

</div>

---

<div align="center">

## 🎯 **Overview**

Hive Intelligence Agents is a **specialized crypto intelligence framework** that extends Claude Code with 17 professional crypto agents for comprehensive blockchain analysis, DeFi strategies, and smart contract development. Works seamlessly alongside SuperClaude's 14 base development agents.

## ⚡ **Quick Installation**

### **Choose Your Installation Method**

| Method | Command | Best For |
|:------:|---------|----------|
| **🐍 pipx** | `pipx install hive-agents && hive-agents install` | **✅ Recommended** - Linux/macOS |
| **📦 pip** | `pip install hive-agents && hive-agents install` | Traditional Python environments |
| **🌐 npm** | `npm install -g hive-agents && hive-agents install` | Cross-platform, Node.js users |

</div>

<details>
<summary><b>⚠️ IMPORTANT: Upgrading from previous versions</b></summary>

**If you have SuperClaude installed, Hive Agents works alongside it:**

```bash
# Install Hive Agents (works with existing SuperClaude)
npm install -g hive-agents
hive-agents install
```

**✅ What Hive Agents adds:**
- ✓ 17 specialized crypto intelligence agents
- ✓ Hive Intelligence MCP integration for real-time blockchain data
- ✓ Works with Claude Code's Task tool
- ✓ Compatible with existing SuperClaude installation

**💡 Note:** Use agents via Task tool: `/task "Analyze BTC" --subagent_type crypto-quant`

</details>

<details>
<summary><b>💡 Troubleshooting PEP 668 Errors</b></summary>

```bash
# Option 1: Use pipx (Recommended)
pipx install hive-agents

# Option 2: User installation
pip install --user hive-agents

# Option 3: Force installation (use with caution)
pip install --break-system-packages hive-agents
```
</details>

---

<div align="center">

## 📖 **Usage After Installation**

### **Using Hive Agents with npm**

After installing with npm, you can use hive-agents in two ways:

#### **1. Command Line Interface**
```bash
# Run the main installer
hive-agents install

# Check version
hive-agents --version

# Get help
hive-agents --help
```

#### **2. Using Crypto Agents in Claude Code**
Once installed, use the Task tool in Claude Code to invoke crypto agents:

```bash
# Examples of using crypto agents
/task "Analyze BTC price trends" --subagent_type crypto-quant
/task "Audit smart contract at 0x..." --subagent_type crypto-security-researcher
/task "Find yield opportunities on Ethereum" --subagent_type crypto-defi-strategist
/task "Investigate whale wallet activity" --subagent_type crypto-on-chain-detective
```

#### **3. Available Crypto Agents**
After installation, you'll have access to 17 specialized crypto agents:

| Category | Agents | Example Usage |
|----------|--------|---------------|
| **Market & Trading** | crypto-quant, crypto-market-maker, crypto-sentiment-analyst, crypto-technical-analyst, crypto-arbitrageur | Market analysis, trading strategies |
| **DeFi & Liquidity** | crypto-defi-strategist, crypto-liquidity-optimizer, crypto-yield-aggregator | Yield farming, liquidity provision |
| **Security & Risk** | crypto-security-researcher, crypto-risk-manager, crypto-portfolio-analyst, crypto-validator-specialist | Smart contract audits, risk assessment |
| **On-chain Analysis** | crypto-on-chain-detective, crypto-whale-tracker, crypto-forensics-expert | Blockchain investigation, wallet tracking |
| **Specialized** | crypto-nft-specialist, crypto-mev-researcher | NFT analysis, MEV strategies |

#### **4. Hive Intelligence MCP Integration**
The installation also adds the Hive Intelligence MCP server for real-time blockchain data:

```bash
# MCP tools available after installation:
hive__get_market_data       # Real-time prices and market data
hive__get_defi_data         # DeFi protocols, yields, TVL
hive__get_onchain_data      # Wallet balances, transactions
hive__get_nft_data          # NFT collections, floor prices
hive__get_social_data       # Social sentiment analysis
```

</div>

---

<div align="center">

## 🎉 **Key Features**

> *Professional crypto intelligence agents for Claude Code*

<table>
<tr>
<td width="50%">

### 🤖 **17 Crypto Agents**
**Specialized expertise** in every domain:
- Quantitative analysis & algo trading
- Smart contract security auditing
- DeFi yield optimization strategies
- On-chain data investigation

</td>
<td width="50%">

### 📊 **Market Intelligence**
**Real-time data & analysis**:
- Price movements & technical indicators
- DEX liquidity & arbitrage opportunities
- Social sentiment & trend analysis
- Risk metrics & portfolio management

</td>
</tr>
<tr>
<td width="50%">

### 🔧 **Hive Intelligence MCP**
**Blockchain data at your fingertips**:
- **Market** → Prices, OHLCV, trends
- **DeFi** → Yields, TVL, protocols
- **Security** → Audits, risk scores
- **NFT** → Collections, floor prices
- **Social** → Sentiment analysis
- **On-chain** → Wallets, transactions

</td>
<td width="50%">

### 🎯 **Task Tool Integration**
**Simple agent invocation**:
- `/task "Analyze BTC" --subagent_type crypto-quant`
- `/task "Audit contract" --subagent_type crypto-security-researcher`
- Works alongside SuperClaude agents
- No command conflicts

</td>
</tr>
<tr>
<td width="50%">

### ⚡ **Professional Tools**
**Enterprise-grade capabilities**:
- Statistical arbitrage models
- Vulnerability scanning engines
- Yield optimization algorithms
- MEV protection strategies

</td>
<td width="50%">

### 📚 **Agent Categories**
**Complete crypto coverage**:
- **Market & Trading** → 5 agents
- **DeFi & Liquidity** → 3 agents
- **Security & Risk** → 4 agents
- **On-chain Analysis** → 3 agents
- **Specialized** → 2 agents

</td>
</tr>
</table>

</div>

---

<div align="center">

## 📚 **Documentation**

### **Complete Guide to Hive Intelligence**

<table>
<tr>
<th align="center">🚀 Getting Started</th>
<th align="center">📖 User Guides</th>
<th align="center">🛠️ Developer Resources</th>
<th align="center">📋 Reference</th>
</tr>
<tr>
<td valign="top">

- 📝 [**Quick Start Guide**](Docs/Getting-Started/quick-start.md)  
  *Get up and running fast*

- 💾 [**Installation Guide**](Docs/Getting-Started/installation.md)  
  *Detailed setup instructions*

</td>
<td valign="top">

- 🤖 [**Crypto Agents Guide**](HIVE_AGENTS.md)  
  *17 crypto intelligence agents*

- 📚 [**Agent Documentation**](agents/)  
  *Individual agent capabilities*

- 🔧 [**Hive Intelligence MCP**](https://hiveintelligence.xyz/mcp)  
  *Real-time blockchain data*

- 📈 [**Market Analysis**](agents/crypto-quant.md)  
  *Quantitative trading strategies*

- 🔒 [**Security Auditing**](agents/crypto-security-researcher.md)  
  *Smart contract vulnerability detection*

- 💰 [**DeFi Strategies**](agents/crypto-defi-strategist.md)  
  *Yield optimization & liquidity*

</td>
<td valign="top">

- 🏗️ [**Technical Architecture**](Docs/Developer-Guide/technical-architecture.md)  
  *System design details*

- 💻 [**Contributing Code**](Docs/Developer-Guide/contributing-code.md)  
  *Development workflow*

- 🧪 [**Testing & Debugging**](Docs/Developer-Guide/testing-debugging.md)  
  *Quality assurance*

</td>
<td valign="top">

- ✨ [**Best Practices**](Docs/Reference/quick-start-practices.md)  
  *Pro tips & patterns*

- 📓 [**Examples Cookbook**](Docs/Reference/examples-cookbook.md)  
  *Real-world recipes*

- 🔍 [**Troubleshooting**](Docs/Reference/troubleshooting.md)  
  *Common issues & fixes*

</td>
</tr>
</table>

</div>

---

<div align="center">

## 🤝 **Contributing**

### **Join the Hive Intelligence Community**

We welcome contributions of all kinds! Here's how you can help:

| Priority | Area | Description |
|:--------:|------|-------------|
| 📝 **High** | Documentation | Improve guides, add examples, fix typos |
| 🔧 **High** | MCP Integration | Add server configs, test integrations |
| 🎯 **Medium** | Workflows | Create command patterns & recipes |
| 🧪 **Medium** | Testing | Add tests, validate features |
| 🌐 **Low** | i18n | Translate docs to other languages |

<p align="center">
  <a href="CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/📖_Read-Contributing_Guide-blue" alt="Contributing Guide">
  </a>
  <a href="https://github.com/hive-intel/hive-agents/graphs/contributors">
    <img src="https://img.shields.io/badge/👥_View-All_Contributors-green" alt="Contributors">
  </a>
</p>

</div>

---

<div align="center">

## ⚖️ **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?" alt="MIT License">
</p>

</div>

---

<div align="center">

## ⭐ **Star History**

<a href="https://www.star-history.com/#SuperClaude-Org/SuperClaude_Framework&Timeline">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=hive-intel/hive-agents&type=Timeline&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=hive-intel/hive-agents&type=Timeline" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=hive-intel/hive-agents&type=Timeline" />
 </picture>
</a>


</div>

---

<div align="center">

### **🚀 Built with passion by the Hive Intelligence community**

<p align="center">
  <sub>Made with ❤️ for developers who push boundaries</sub>
</p>

<p align="center">
  <a href="#-hive-intelligence-agents">Back to Top ↑</a>
</p>

</div>
