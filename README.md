<div align="center">

# Hive Intelligence Agents

### **Professional Crypto Intelligence Agents for Claude Code**

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

### **Pure Node.js Installation**

| Method | Command | Best For |
|:------:|---------|----------|
| **🌐 npm** | `npm install -g hive-agents && hive-agents install` | **✅ Recommended** - All platforms |
| **📦 npx** | `npx hive-agents install` | One-time use without global install |
| **🔧 Local** | `npm install hive-agents` | Project-specific installation |

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
<summary><b>💡 System Requirements</b></summary>

**Prerequisites:**
- Node.js 16 or higher
- Claude Code installed

**No Python Required!** This package runs entirely on Node.js.

```bash
# Check Node.js version
node --version  # Should be v16 or higher

# Install if needed
# Windows: winget install OpenJS.NodeJS
# macOS: brew install node
# Linux: sudo apt install nodejs npm
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

## ⚖️ **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?" alt="MIT License">
</p>

</div>

---

<div align="center">

### **🚀 Built with passion by [Hive Intelligence](https://hiveintelligence.xyz) team **

<p align="center">
  <sub>Made with ❤️ for developers who push boundaries</sub>
</p>

<p align="center">
  <a href="#-hive-intelligence-agents">Back to Top ↑</a>
</p>

</div>
