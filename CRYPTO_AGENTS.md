# CRYPTO_AGENTS.md - CryptoSuperClaude Agent Extensions

**17 specialized crypto agents extending SuperClaude's capabilities**

## Overview

CryptoSuperClaude adds 17 professional crypto intelligence agents to the existing SuperClaude framework. These agents integrate seamlessly with the Task tool and work alongside the original 14 SuperClaude agents.

## Crypto Agent List

### Market Analysis & Trading
1. **crypto-quant** - Quantitative analysis, algorithmic trading, statistical arbitrage
2. **crypto-analyst** - Market research, fundamental analysis, trend identification  
3. **crypto-market-researcher** - Deep market intelligence, competitive analysis
4. **crypto-derivatives-trader** - Options, futures, and derivatives strategies
5. **crypto-dex-arbitrageur** - DEX arbitrage opportunities and execution

### DeFi & Liquidity
6. **crypto-defi-strategist** - Yield optimization, liquidity provision strategies
7. **crypto-liquidity-manager** - LP position management, impermanent loss mitigation
8. **crypto-stablecoin-analyst** - Stablecoin stability, peg analysis, risk assessment

### Security & Risk
9. **crypto-security-researcher** - Smart contract audits, vulnerability detection
10. **crypto-security-engineer** - Secure contract development, vulnerability fixes, security patterns
11. **crypto-risk-manager** - Portfolio risk assessment, position sizing
12. **crypto-mev-researcher** - MEV detection, protection strategies

### On-Chain Analysis
13. **crypto-onchain-analyst** - Blockchain data analysis, wallet tracking
14. **crypto-wallet-detective** - Wallet investigation, transaction tracing
15. **crypto-bridge-analyst** - Cross-chain bridge analysis, security assessment

### Specialized Domains
16. **crypto-governance-analyst** - DAO analysis, governance token evaluation
17. **crypto-nft-specialist** - NFT valuation, collection analysis
18. **crypto-social-sentiment** - Social media sentiment, trend analysis

## Integration with SuperClaude

### Using Crypto Agents via Task Tool

```bash
# Spawn a crypto agent for analysis
/task "Analyze BTC market structure" --subagent_type crypto-quant

# Use multiple agents for comprehensive analysis
/task "Full security audit of 0x123..." --subagent_type crypto-security-researcher

# Combine with existing SuperClaude agents
/task "Build crypto dashboard" --subagent_type frontend-architect
/task "Add market data" --subagent_type crypto-analyst
```

### MCP Integration

All crypto agents have access to Hive Intelligence MCP for real-time blockchain data:

```bash
# Agents can use Hive Intelligence endpoints
mcp__hive-intelligence__get_market_and_price_endpoints
mcp__hive-intelligence__get_onchain_dex_pool_endpoints
mcp__hive-intelligence__get_security_risk_endpoints
```

### Auto-Activation

Crypto agents auto-activate based on context:
- Keywords: "crypto", "blockchain", "DeFi", "NFT", "trading"
- Contract addresses: "0x...", "bc1..."
- Token symbols: "BTC", "ETH", "USDT"
- DeFi protocols: "Uniswap", "Aave", "Compound"

## Command Integration

### COA Commands
Crypto agents work with COA (CryptoOnchainAgents) commands:

```bash
# Market analysis
/coa:analyze BTC --depth full

# DeFi operations
/coa:yield --min-apy 15 --protocol aave

# Security audit
/coa:audit 0x123... --deep

# Portfolio management
/coa:portfolio 0xwallet... --strategy balanced
```

### SuperClaude Commands
They also integrate with existing SuperClaude commands:

```bash
# Analyze crypto project
/sc:analyze --target "Uniswap protocol" --focus security

# Build crypto feature
/sc:build --type "DEX aggregator" --framework react

# Research crypto topic
/sc:research --topic "MEV protection strategies"
```

## Agent Capabilities

### Shared Capabilities
All crypto agents have access to:
- Hive Intelligence MCP for blockchain data
- Sequential thinking for complex analysis
- Context7 for documentation lookup
- Task coordination with other agents

### Specialized Capabilities

**Market Agents**: Technical analysis, price prediction, trading signals
**DeFi Agents**: Yield calculations, IL analysis, protocol comparison
**Security Agents**: Vulnerability scanning, honeypot detection, audit reports
**On-chain Agents**: Transaction analysis, wallet tracking, flow analysis
**NFT Agents**: Rarity scoring, floor price analysis, collection metrics

## Working with Original Agents

Crypto agents complement the 14 original SuperClaude agents:

### Collaboration Examples
- **crypto-analyst** + **data-analyst**: Enhanced market research
- **crypto-security-researcher** + **crypto-security-engineer**: Complete security coverage (audit + development)
- **crypto-security-engineer** + **backend-engineer**: Secure smart contract implementation
- **crypto-defi-strategist** + **backend-engineer**: DeFi integration
- **crypto-nft-specialist** + **frontend-architect**: NFT marketplace UI

## Configuration

Agents are configured in their individual .md files with YAML frontmatter:

```yaml
---
name: crypto-quant
description: Quantitative cryptocurrency analyst
model: opus
color: blue
capabilities: ["quantitative-analysis", "algorithmic-trading", "risk-modeling"]
mcp_servers: ["hive-intelligence", "sequential"]
auto_activate: ["crypto", "trading", "quant", "algorithm"]
---
```

## Testing Agents

To test if agents are working:

```bash
# Test individual agent
/task "What is the current BTC price?" --subagent_type crypto-analyst

# Test security engineering agent
/task "Implement secure ERC20 token with pausable functionality" --subagent_type crypto-security-engineer
/task "Fix reentrancy vulnerability in withdrawal function" --subagent_type crypto-security-engineer

# Test Hive Intelligence MCP
/task "Get Ethereum gas prices" --subagent_type crypto-onchain-analyst

# Test multi-agent coordination
/task "Comprehensive DeFi protocol analysis for Aave" --subagent_type crypto-defi-strategist

# Test security collaboration
/task "Audit smart contract at 0x123..." --subagent_type crypto-security-researcher
/task "Fix vulnerabilities found in audit" --subagent_type crypto-security-engineer
```

## Troubleshooting

### Agent Not Found
- Ensure agents are in `/Desktop/CryptoSuperClaude/agents/`
- Check agent file has proper YAML frontmatter
- Verify Task tool can access agents directory

### MCP Connection Issues
- Verify Hive Intelligence MCP is added: `claude mcp list`
- Check network connectivity to https://hiveintelligence.xyz/mcp
- Review MCP logs for errors

### Integration Problems
- Agents work alongside original SuperClaude agents
- No modifications to core SuperClaude functionality
- All original commands and agents remain intact

## Summary

CryptoSuperClaude successfully extends SuperClaude with:
- ✅ 17 specialized crypto agents
- ✅ Hive Intelligence MCP integration
- ✅ Full compatibility with original SuperClaude
- ✅ Seamless Task tool integration
- ✅ COA command support