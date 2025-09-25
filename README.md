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
| `/ska-plan [focus-area]` | Develop technical architecture and implementation strategy |
| `/ska-tasks [complexity]` | Break down plan into actionable development tasks |
| `/ska-analyze [focus]` | Perform quality analysis and validation |
| `/ska-resume [phase]` | Resume interrupted workflow from any phase |
| `/ska-export [format]` | Export artifacts to various formats |

## Usage Example

```bash
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

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

MIT License - see LICENSE file for details.