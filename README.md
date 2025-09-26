# Spec Kit Assistant

> AI-assisted specification development slash commands for Claude Code, compatible with GitHub Spec Kit methodology

## Overview

Spec Kit Assistant enhances your Claude Code experience with systematic, AI-guided specification-driven development. It provides slash commands that guide you through creating comprehensive specifications, technical plans, actionable tasks, and quality analysis.

## Features

- **4-Phase Methodology**: Specification → Planning → Tasks → Analysis
- **AI-Guided Exploration**: Structured questioning to develop comprehensive requirements
- **GitHub Spec Kit Compatible**: Works alongside existing spec-kit workflows
- **Quality Assurance**: Built-in validation and analysis frameworks
- **Professional Outputs**: Export to various formats and project management tools

## Installation

### Quick Install
```bash
npx spec-kit-assistant install
```

### Install to Specific Directory
```bash
npx spec-kit-assistant install /path/to/your/project
```

### Global Installation
```bash
npx spec-kit-assistant install --global
```

## Available Commands

Once installed, use these slash commands in Claude Code:

| Command | Description |
|---------|-------------|
| `/ska-start [project-type]` | Initialize specification workflow with AI guidance |
| `/ska-research [depth]` | Research existing codebase and recommend features for spec development |
| `/ska-plan [focus-area]` | Develop technical architecture and implementation strategy |
| `/ska-tasks [complexity]` | Break down plan into actionable development tasks |
| `/ska-analyze [focus]` | Perform quality analysis and validation |
| `/ska-resume [phase]` | Resume interrupted workflow from any phase |
| `/ska-export [format]` | Export artifacts to various formats |

## Usage Example

```bash
# Research existing codebase (great for existing projects!)
/ska-research standard

# Start a new specification workflow  
/ska-start web-app

# Develop technical plan
/ska-plan architecture

# Break down into tasks
/ska-tasks moderate

# Analyze quality
/ska-analyze completeness

# Export results
/ska-export markdown
```

## Integration with GitHub Spec Kit

Spec Kit Assistant is designed to work seamlessly with GitHub's Spec Kit:

- **Compatible**: Works alongside `/specify`, `/plan`, `/tasks` commands
- **Enhanced**: Provides AI-guided exploration for better specifications
- **Preserves**: Maintains existing `.specify/` directory structure
- **Extends**: Adds analysis and export capabilities

## Project Structure

After installation, commands are added to your `.claude/commands/spec-kit-assistant/` directory:

```
.claude/
└── commands/
    └── spec-kit-assistant/
        ├── ska-start.md
        ├── ska-plan.md
        ├── ska-tasks.md
        ├── ska-analyze.md
        ├── ska-resume.md
        └── ska-export.md
```

## CLI Commands

The spec-kit-assistant CLI provides installation and management utilities:

```bash
# Install commands
npx spec-kit-assistant install [directory] [options]

# Check installation status
npx spec-kit-assistant status [directory]

# Update existing commands
npx spec-kit-assistant update [directory]

# Remove commands
npx spec-kit-assistant uninstall [directory] [options]
```

### Options
- `--force`: Overwrite existing installations
- `--global`: Install to global ~/.claude directory
- `--project`: Install to project .claude directory (default)

## Methodology

### Phase 1: Specification (`/ska-start`)
- AI-guided requirements exploration
- User journey mapping with edge cases
- Business context and success criteria
- Technical requirements and constraints

### Phase 2: Planning (`/ska-plan`)
- Architecture foundation and design patterns
- Technology stack selection with justification
- Implementation roadmap with dependencies
- Risk assessment and mitigation strategies

### Phase 3: Task Breakdown (`/ska-tasks`)
- Work package definition and scope
- Test-driven development integration
- Dependency analysis and sequencing
- Resource allocation and timeline estimation

### Phase 4: Analysis (`/ska-analyze`)
- Multi-dimensional quality assessment (85%+ target)
- Completeness, feasibility, and alignment validation
- Risk mitigation and improvement recommendations
- Success criteria and measurement planning

## Requirements

- Node.js 14.0.0 or higher
- Claude Code with slash command support
- Optional: GitHub Spec Kit for enhanced integration

## Publishing & Distribution

### NPM Package
This package is published to NPM as `spec-kit-assistant`. Install globally or use with npx:

```bash
# Direct installation via npx (recommended)
npx spec-kit-assistant install

# Or install globally first
npm install -g spec-kit-assistant
spec-kit-assistant install
```

### Publishing Process
For maintainers publishing updates:

```bash
# 1. Update version in package.json
npm version patch|minor|major

# 2. Run validation
npm run prepublishOnly

# 3. Publish to NPM
npm publish

# 4. Push tags to git
git push --tags
```

### Package Registry
- **NPM**: https://www.npmjs.com/package/spec-kit-assistant
- **GitHub**: https://github.com/chrismckenna/spec-kit-assistant
- **Documentation**: Available in this README and included templates

## Development

### Local Testing
```bash
# Link package locally for testing
npm link
spec-kit-assistant install

# Test CLI commands
spec-kit-assistant --help
spec-kit-assistant status
```

### Validation
All commands are validated before publishing:
```bash
npm run prepublishOnly  # Runs scripts/validate-commands.js
```

## Troubleshooting

### Installation Issues
- Ensure Node.js 14+ is installed
- Check that `.claude` directory is writable
- Use `--force` flag to overwrite existing installations

### Command Not Found
- Verify installation with `spec-kit-assistant status`
- Check Claude Code configuration for custom slash commands
- Restart Claude Code after installation

### GitHub Spec Kit Integration
- Install in projects that already have `.specify/` directories
- Commands work independently but enhance existing workflows
- Use `/ska-resume` to integrate with existing spec-kit artifacts

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/spec-kit-assistant.git`
3. Install dependencies: `npm install`
4. Make your changes
5. Test locally: `npm link && spec-kit-assistant install --force`
6. Submit a pull request

## License

MIT License - see LICENSE file for details.