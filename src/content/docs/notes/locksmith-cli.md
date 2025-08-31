---
title: Locksmith CLI
description: A developer first CLI for incorporating auth infrastructure to your AI applications
sidebar:
  label: Locksmith CLI
---

A developer first CLI for incorporating auth infrastructure to your AI applications

### What is Locksmith?


[![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)](https://github.com/Saif-Shines/locksmith)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Locksmith is a powerful CLI tool that helps developers quickly integrate enterprise-grade authentication into their AI applications. It supports modern auth providers, generates secure configurations, and integrates with popular LLM tools for seamless development.

## Blazing Fast

```sh
# should have node latest table
# should have either of claude or cursor-agent or gemini
npx locksmith generate
```

## 🚀 Installation

### Prerequisites

- Node.js 16+ and npm/pnpm
- Access to authentication provider (ScaleKit recommended)

### Install Globally

```bash
npm install -g locksmith-cli
# or
pnpm add -g locksmith-cli
```

### Verify Installation

```bash
locksmith --version
locksmith --help
```

## ⚡ Quick Start

1. **Initialize your project:**

   ```bash
   locksmith init
   ```

2. **Configure LLM broker:**

   ```bash
   locksmith configure llm
   ```

3. **Add authentication modules:**

   ```bash
   locksmith add
   ```

4. **Generate configurations:**
   ```bash
   locksmith generate
   ```

## 📖 Commands

### `locksmith init`

Initialize authentication in your project with an interactive setup wizard.

```bash
# Interactive setup (recommended)
locksmith init

# Non-interactive setup (ScaleKit only)
locksmith init --provider=scalekit --environment-id=your-env-id --client-id=your-client-id --client-secret=your-secret --environment-url=https://your-env.scalekit.cloud
```

**Flags:**

- `--provider, -p` - Authentication provider (scalekit, auth0, fusionauth)
- `--environment-id, -e` - ScaleKit environment ID
- `--client-id, -c` - ScaleKit client ID
- `--client-secret, -s` - ScaleKit client secret
- `--environment-url, -u` - ScaleKit environment URL
- `--interactive, -i` - Force interactive mode
- `--no-interactive, -I` - Skip interactive prompts

### `locksmith configure`

Configure authentication settings, LLM brokers, and preferences.

```bash
# Configure LLM broker
locksmith configure llm --broker=claude

# Configure authentication provider
locksmith configure auth --provider=scalekit

# Interactive configuration
locksmith configure
```

**Subcommands:**

- `llm` - Configure preferred LLM broker (claude, gemini, cursor-agent)
- `auth` - Configure authentication provider settings

**Flags:**

- `--broker, -b` - LLM broker (claude, gemini, cursor-agent)
- `--provider, -p` - Authentication provider
- `--interactive, -i` - Force interactive mode

### `locksmith add`

Add authentication providers and modules to your project.

```bash
# Interactive module selection
locksmith add

# Add specific module
locksmith add --module=full-stack-auth

# Add multiple modules
locksmith add --module=full-stack-auth --module=sso
```

**Available Modules:**

- `full-stack-auth` - Complete authentication system
- `sso` - Enterprise SSO integration
- `mcp` - Model Context Protocol authentication

**Flags:**

- `--module` - Authentication module to add
- `--interactive, -i` - Force interactive mode

### `locksmith generate`

Generate secure authentication configurations and integrate with LLM tools.

```bash
# Generate with all configured modules
locksmith generate

# Generate specific module
locksmith generate --module=full-stack-auth

# Generate with custom output
locksmith generate --format=yaml --output=./config/auth.yaml

# Save prompt for review
locksmith generate --prompt-out=./prompt.txt
```

**Flags:**

- `--module` - Specific module to generate
- `--format, -F` - Output format (json, yaml, env)
- `--output, -o` - Output file path
- `--count, -n` - Number of configurations to generate
- `--prompt-out` - Save generation prompt to file
- `--verbose, -v` - Show detailed output
- `--dry-run, -d` - Show what would be done

### Global Flags

- `--help, -h` - Show help message
- `--version, -v` - Show version number
- `--verbose, -v` - Enable verbose output
- `--dry-run, -d` - Show what would be done without making changes
- `--force, -f` - Skip confirmation prompts
- `--interactive, -i` - Force interactive mode
- `--no-interactive, -I` - Skip interactive prompts

## 🔐 Authentication Providers

### ScaleKit (Recommended)

Enterprise-grade authentication for AI applications with full support for:

- SSO and multi-tenant authentication
- Custom auth flows
- Production-ready security

**Setup:**

```bash
locksmith init --provider=scalekit
```

### Auth0 & FusionAuth

Support for Auth0 and FusionAuth is planned for future releases.

## 🤖 LLM Brokers

Locksmith integrates with popular LLM tools to generate authentication code:

### Claude CLI

```bash
locksmith configure llm --broker=claude
locksmith generate --module=full-stack-auth
```

### Gemini CLI

```bash
locksmith configure llm --broker=gemini
locksmith generate --module=sso
```

### Cursor Agent

```bash
locksmith configure llm --broker=cursor-agent
locksmith generate --module=mcp
```

## ⚙️ Configuration

### Credential Storage

Credentials are securely stored in `~/.locksmith/credentials.json`:

```json
{
  "provider": "scalekit",
  "environmentId": "your-env-id",
  "clientId": "your-client-id",
  "clientSecret": "your-client-secret",
  "environmentUrl": "https://your-env.scalekit.cloud"
}
```

### Configuration Files

- `~/.locksmith/credentials.json` - Authentication credentials
- `~/.locksmith/config.json` - CLI preferences and settings
- `~/.locksmith/llm-brokers.json` - LLM broker configurations

## 💡 Examples

### Complete Setup Flow

```bash
# 1. Initialize with ScaleKit
locksmith init

# 2. Configure Claude as LLM broker
locksmith configure llm --broker=claude

# 3. Add authentication modules
locksmith add --module=full-stack-auth --module=sso

# 4. Generate configurations
locksmith generate --format=json --output=./auth-config.json
```

### CI/CD Integration

```bash
# Non-interactive setup for CI
locksmith init \
  --provider=scalekit \
  --environment-id=$SCALEKIT_ENV_ID \
  --client-id=$SCALEKIT_CLIENT_ID \
  --client-secret=$SCALEKIT_CLIENT_SECRET \
  --environment-url=$SCALEKIT_ENV_URL \
  --no-interactive

# Generate configs in CI
locksmith generate --format=env --output=.env.auth
```

### Development Workflow

```bash
# Quick setup for development
locksmith init --interactive

# Generate and review prompt
locksmith generate --prompt-out=./auth-prompt.txt --dry-run

# Generate with verbose output
locksmith generate --verbose --module=full-stack-auth
```

## 🗺️ Roadmap

### ✅ Completed

- ScaleKit authentication provider integration
- Interactive CLI setup wizard
- LLM broker integration (Claude, Gemini, Cursor Agent)
- Multiple authentication modules
- Secure credential management
- JSON/YAML/ENV output formats

### 🚧 In Progress

- Auth0 provider integration
- FusionAuth provider integration
- Advanced SSO configurations

### 📋 Planned

- Docker container support
- Web dashboard for configuration
- Plugin system for custom providers
- Multi-environment support
- Audit logging
- Backup/restore functionality

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Saif-Shines/locksmith.git
cd locksmith

# Install dependencies
pnpm install

# Run in development
pnpm start --help

# Run tests
pnpm test
```

### Issues and Feature Requests

- 🐛 [Bug Reports](https://github.com/Saif-Shines/locksmith/issues)
- 💡 [Feature Requests](https://github.com/Saif-Shines/locksmith/issues)
- 📖 [Documentation Issues](https://github.com/Saif-Shines/locksmith/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ScaleKit](https://scalekit.com) for enterprise authentication infrastructure
- [Anthropic Claude](https://claude.ai) for AI-powered code generation
- [Google Gemini](https://gemini.google.com) for intelligent assistance
- [Cursor](https://cursor.sh) for the Agent integration

## 📞 Support

- 📧 **Email**: [saif@saifshines.dev](mailto:saif@saifshines.dev)
- 🐙 **GitHub Issues**: [Create an issue](https://github.com/Saif-Shines/locksmith/issues)
- 📖 **Documentation**: [saifshines.dev/notes/locksmith-cli/](https://saifshines.dev/notes/locksmith-cli/)

---

<p align="center">
  Made with ❤️ by <a href="https://saifshines.dev">Saif Ali Shaik</a>
</p>
