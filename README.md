# Spec Kit Assistant

> AI-assisted specification development slash commands for Claude Code, compatible with GitHub Spec Kit methodology

## Overview

Spec Kit Assistant transforms Claude Code into your personal GitHub Spec Kit prompt generator. It analyzes existing codebases, understands your project requirements, and creates comprehensive, professional prompts that maximize the effectiveness of GitHub Spec Kit commands (`/specify`, `/plan`, `/constitution`).

## Features

- **🔍 Codebase Research**: Analyze existing projects and identify improvement opportunities
- **🎯 Prompt Generation**: Create optimized prompts for GitHub Spec Kit commands
- **📋 Research-Driven**: Use codebase analysis to inform specification development
- **⚖️ Constitution Development**: Generate governance and team standards prompts
- **🔗 GitHub Spec Kit Enhanced**: Maximize effectiveness of existing Spec Kit workflows
- **🎫 Jira MCP Integration**: **NEW!** Direct Jira epic/story creation from GitHub Spec Kit tasks
- **📤 Professional Outputs**: Export to Markdown, Jira, GitHub Issues, and more
- **🏗️ Architecture Analysis**: Understand and improve existing system designs
- **📊 Feature Prioritization**: Data-driven recommendations for development roadmaps

## Installation

### 🚀 Quick Install (Recommended)
```bash
# Install commands in your current directory
npx spec-kit-assistant install

# Check installation status
npx spec-kit-assistant status
```

### 📁 Install to Specific Directory
```bash
# Install to a specific project
npx spec-kit-assistant install /path/to/your/project

# Or navigate first, then install
cd ~/my-project && npx spec-kit-assistant install
```

### 🌐 Global Installation
```bash
# Install globally for all projects
npx spec-kit-assistant install --global

# Check global status
npx spec-kit-assistant status --global
```

### 🔄 Update Existing Installation
```bash
# Update commands in current directory (recommended)
npx spec-kit-assistant update

# Update commands in specific directory
npx spec-kit-assistant update /path/to/your/project

# Alternative: Force reinstall (overwrites existing)
npx spec-kit-assistant install --force
```

**What the update does:**
- Automatically detects existing installations (project and/or global)
- Updates all command files with latest features
- Shows you what's new in the latest version
- Preserves your installation preferences (project vs global)

## Available Commands

Once installed, use these slash commands in Claude Code:

| Command | Description | Best For |
|---------|-------------|----------|
| `/ska-research [depth]` | **NEW!** Research existing codebase and recommend features | Legacy projects, new team members, feature planning |
| `/ska-start [project-type]` | Generate optimized prompts for GitHub Spec Kit `/specify` | Requirements gathering, specification development |
| `/ska-plan [focus-area]` | Generate optimized prompts for GitHub Spec Kit `/plan` | Technical architecture, system design |
| `/ska-constitution [type]` | **NEW!** Generate prompts for GitHub Spec Kit `/constitution` | Development governance, team standards |
| `/ska-resume [phase]` | Resume interrupted workflow from any phase | Continuing work, team handoffs |
| `/ska-export [format]` | Export artifacts to various formats | Documentation, project management |

### Command Arguments

#### `/ska-research` - Analysis Depths
- `quick` - 15-20 min high-level overview
- `standard` - 30-45 min comprehensive analysis (recommended)
- `deep` - 1-2 hours thorough investigation  
- `audit` - 2-4 hours complete security & performance assessment

#### `/ska-start` - Project Types  
- `web-app` - Web applications and SaaS platforms
- `api` - REST APIs and microservices
- `mobile` - Mobile applications (iOS/Android)
- `dashboard` - Analytics and reporting dashboards
- `integration` - System integrations and data pipelines
- `data-pipeline` - ETL and data processing systems

#### `/ska-plan` - Focus Areas
- `architecture` - System design and patterns
- `technology` - Stack selection and tooling
- `performance` - Scalability and optimization
- `security` - Authentication, authorization, compliance
- `integration` - External systems and APIs

#### `/ska-constitution` - Constitution Types
- `development` - Development workflow, coding standards, quality processes
- `collaboration` - Team communication, decision-making, coordination
- `quality` - Testing strategies, code review, quality assurance
- `architecture` - System design principles, patterns, technical decisions
- `security` - Security practices, compliance, risk management
- `custom` - Tailored constitution for specific organizational needs

#### `/ska-export` - Output Formats
- `markdown` - Comprehensive markdown documentation
- `jira` - JIRA-compatible epics, stories, and tasks (file export)
- `jira [space] [project-id]` - **NEW!** Direct JIRA integration via MCP (creates actual epics/stories)
- `github-issues` - GitHub Issues and project templates
- `confluence` - Confluence-compatible markup
- `notion` - Notion-ready structured content

## Usage Examples

### 🔍 For Existing Projects (Research-First Approach)
```bash
# 1. Analyze your existing codebase
/ska-research standard

# 2. Generate specification prompts based on research findings  
/ska-start web-app
# Result: Optimized prompt for /specify command

# 3. Generate technical planning prompts
/ska-plan architecture
# Result: Optimized prompt for /plan command

# 4. Create development governance standards
/ska-constitution development
# Result: Optimized prompt for /constitution command

# 5. Export professional documentation
/ska-export markdown
```

### 🆕 For New Projects (Prompt Generation Approach)
```bash
# 1. Start with your concept - generate specification prompt
/ska-start mobile-app
# Copy the generated prompt and run: /specify [generated prompt]

# 2. Generate technical architecture prompt
/ska-plan technology
# Copy the generated prompt and run: /plan [generated prompt]

# 3. Create team governance standards
/ska-constitution collaboration
# Copy the generated prompt and run: /constitution [generated prompt]

# 4. Export to project management tools
/ska-export jira
```

### 🔄 For Ongoing Projects (Resume Workflow)
```bash
# Resume from any phase
/ska-resume planning

# Continue with next phase
/ska-tasks moderate

# Export current progress
/ska-export github-issues
```

## Prompt Generation Focus

**NEW!** Spec Kit Assistant is now optimized as a **prompt generator** for GitHub Spec Kit commands, creating professional, comprehensive prompts that maximize the effectiveness of Spec Kit workflows:

### 🎯 Optimized Prompt Creation
Spec Kit Assistant transforms your ideas into detailed, structured prompts for:

**📋 `/specify` Enhancement**
- Use `/ska-start` to generate comprehensive specification prompts
- Incorporates research findings, user stories, and technical requirements
- Result: Professional prompts ready for GitHub Spec Kit `/specify`

**🏗️ `/plan` Enhancement**  
- Use `/ska-plan` to generate detailed technical planning prompts
- Includes architecture decisions, technology stack, and implementation strategy
- Result: Comprehensive prompts ready for GitHub Spec Kit `/plan`

**⚖️ `/constitution` Enhancement**
- Use `/ska-constitution` to generate governance and standards prompts  
- Covers development workflow, quality processes, and team collaboration
- Result: Complete prompts ready for GitHub Spec Kit `/constitution`

### Example Prompt Generation

```bash
/ska-research standard    # Analyze existing codebase
/ska-start web-app        # Generate specification prompt
# Result: "Here's your optimized prompt for GitHub Spec Kit: /specify [detailed prompt]"

/ska-plan architecture    # Generate planning prompt  
# Result: "Here's your optimized prompt for GitHub Spec Kit: /plan [detailed prompt]"

/ska-constitution development # Generate constitution prompt
# Result: "Here's your optimized prompt for GitHub Spec Kit: /constitution [detailed prompt]"
```

### Jira MCP Integration - NEW!

**Direct Jira Integration**: Create epics and stories directly in Jira from GitHub Spec Kit tasks

```bash
# After running GitHub Spec Kit workflow:
/specify [your requirements]  # Creates spec.md
/plan [your architecture]     # Creates plan.md  
/tasks [your complexity]      # Creates tasks.md

# Export directly to Jira (requires Jira MCP):
/ska-export jira DEV PROJ-123
# Result: Creates epics and stories in Jira project PROJ-123 in DEV space
```

**How it works**:
1. **Detects Epic**: Uses current git branch name (set by `/specify`)
2. **Reads Tasks**: Parses `specs/[branch-name]/tasks.md` created by `/tasks`
3. **Creates in Jira**: Uses Jira MCP to create actual epics and stories
4. **Stores Mapping**: Saves epic/story relationships in memory for AI implementation tracking

## Integration with GitHub Spec Kit

Spec Kit Assistant is designed as the perfect companion to GitHub's Spec Kit:

- **🎯 Prompt Enhancement**: Transforms basic ideas into comprehensive Spec Kit prompts
- **🔍 Research Integration**: Uses codebase analysis to inform prompt generation
- **📁 Preserves Workflow**: Maintains existing `.specify/` directory structure  
- **➕ Extends Capabilities**: Adds research, constitution development, and export features
- **🔄 Seamless Integration**: Generated prompts work directly with existing Spec Kit commands
- **⚖️ Constitution Support**: Adds governance capabilities not in basic Spec Kit

### Spec Kit Enhancement Workflow
The installer automatically detects existing GitHub Spec Kit installations:
- **Enhanced Prompts**: Creates detailed, structured prompts for better Spec Kit results
- **Research-Driven**: Uses codebase analysis to inform specification development
- **Constitution Development**: Adds governance and standards development capabilities
- **Full Compatibility**: Works perfectly alongside existing Spec Kit workflows

## Project Structure

After installation, commands are added to your `.claude/commands/spec-kit-assistant/` directory:

```
.claude/
└── commands/
    └── spec-kit-assistant/
        ├── ska-research.md      # Codebase analysis and feature recommendations
        ├── ska-start.md         # Generate `/specify` prompts for specifications
        ├── ska-plan.md          # Generate `/plan` prompts for technical planning
        ├── ska-constitution.md  # NEW! Generate `/constitution` prompts for governance
        ├── ska-resume.md        # Workflow resumption and context recovery
        └── ska-export.md        # Artifact export and documentation
```

## CLI Commands Reference

The spec-kit-assistant CLI provides comprehensive installation and management:

### Installation Commands
```bash
# Basic installation
npx spec-kit-assistant install

# Installation options
npx spec-kit-assistant install [directory] [options]

# Available options:
--force         # Overwrite existing installations
--global        # Install to global ~/.claude directory  
--project       # Install to project .claude directory (default)
```

### Management Commands
```bash
# Check installation status
npx spec-kit-assistant status [directory]

# Update existing installation (detects project/global automatically)
npx spec-kit-assistant update [directory]

# Remove installation
npx spec-kit-assistant uninstall [directory] [options]

# Get help
npx spec-kit-assistant --help
```

### Status Information
The status command provides detailed information:
- ✅ Installation status (project vs global)
- 📊 Number of available commands
- 🔗 GitHub Spec Kit compatibility detection  
- 📁 Installation directory paths

## Methodology Deep Dive

### Phase 0: Research (`/ska-research`) - NEW!
Perfect for existing codebases and legacy projects:

**🔍 Architecture Discovery**
- Technology stack identification and version analysis
- Component relationships and data flow mapping
- Design pattern recognition and architectural assessment
- Dependency analysis (internal and external)

**📊 Feature Analysis** 
- Current functionality cataloging and capability mapping
- Code quality assessment (maintainability, test coverage)
- Performance bottleneck identification
- Security posture evaluation (auth, data protection)

**🎯 Enhancement Opportunities**
- Missing feature identification and user experience gaps
- Legacy modernization candidates and refactoring opportunities  
- Integration possibilities with external systems
- User experience improvement recommendations

**📋 Deliverables**
- Executive summary with strategic recommendations
- Technical analysis report with visual diagrams
- Feature recommendation matrix (effort vs impact)
- Spec Kit development plan with prioritized roadmap

### Phase 1: Specification (`/ska-start`)
Systematic requirements development through AI guidance:

**🎯 Core Concept Exploration**
- Problem definition and solution validation
- Target user identification and persona development
- Key capability requirements and feature scoping
- Success criteria definition and measurable outcomes

**👥 User Journey Mapping**
- Complete workflow documentation from start to finish
- Edge case identification and error scenario planning
- Interface requirement specification and interaction patterns  
- Accessibility compliance and performance expectations

**🏢 Business Context Analysis**
- Value proposition articulation and business case development
- Stakeholder alignment and requirement validation
- Market analysis and competitive positioning
- Resource constraints and timeline considerations

**🔧 Technical Requirements**
- Integration point identification and API specifications
- Data requirements (storage, processing, display)
- Security specifications (authentication, authorization)
- Performance criteria and scalability requirements

### Phase 2: Planning (`/ska-plan`)
Technical architecture development with expert guidance:

**🏗️ Architecture Foundation**
- System boundary definition and component identification
- Design pattern selection and architectural style decisions
- Data flow design and state management approach
- Integration architecture and API design

**⚙️ Technology Stack Selection**
- Framework evaluation and technology recommendations
- Database strategy and storage architecture decisions
- Infrastructure requirements and deployment considerations
- Development tooling and workflow optimization

**🗺️ Implementation Roadmap**
- Development phase breakdown with logical progression
- Parallel workstream identification and resource optimization
- Risk mitigation planning and contingency strategies
- Quality assurance integration and testing approach

### Phase 3: Constitution (`/ska-constitution`) - NEW!
Development governance and team standards:

**⚖️ Governance Framework Development**
- Development workflow standards and coding practices
- Team collaboration protocols and decision-making processes
- Quality assurance requirements and review procedures
- Risk management and compliance frameworks

**📋 Constitution Types**
- Development constitutions for coding standards and practices
- Collaboration constitutions for team coordination
- Quality constitutions for testing and review processes
- Architecture constitutions for design principles
- Security constitutions for compliance and risk management

**🎯 Prompt Generation**
- Comprehensive constitution prompts for GitHub Spec Kit `/constitution`
- Tailored governance frameworks based on team needs
- Integration with existing project workflows and standards
- Measurable success criteria and implementation guidance

### Phase 4: Export (`/ska-export`)
Professional artifact creation and integration:

**📄 Documentation Formats**
- Comprehensive markdown with professional formatting
- Confluence-ready markup for enterprise wikis
- Notion-compatible structured content
- HTML documentation for web publishing

**🎯 Project Management Integration**  
- JIRA epics, stories, and tasks with estimates
- GitHub Issues and project board templates
- Linear requirements and development task format
- Asana project hierarchies and task dependencies

**🔧 Development Integration**
- GitHub PR and Issue templates for workflow optimization
- API documentation templates and specification formats
- README generation with project overview and setup
- Development environment and deployment guides

## Requirements

- **Node.js**: Version 14.0.0 or higher
- **Claude Code**: Latest version with slash command support
- **Optional**: GitHub Spec Kit for enhanced integration and compatibility
- **Optional**: [Jira MCP Server](https://github.com/manateeit/mcp-jira-server) for direct Jira epic/story creation (`/ska-export jira [space] [project-id]`)

## Troubleshooting & FAQ

### 🚨 Installation Issues

**Problem**: `Command not found: spec-kit-assistant`
```bash
# Solution: Install or re-link the package
npm install -g spec-kit-assistant
# OR for local testing:
npm link
```

**Problem**: `Permission denied` when installing
```bash
# Solution: Check directory permissions
ls -la .claude/
# Create directory if needed:
mkdir -p .claude/commands
# Try force installation:
npx spec-kit-assistant install --force
```

**Problem**: Commands not appearing in Claude Code
```bash
# Solution 1: Restart Claude Code after installation
# Solution 2: Verify installation
npx spec-kit-assistant status
# Solution 3: Check file contents
ls -la .claude/commands/spec-kit-assistant/
head .claude/commands/spec-kit-assistant/ska-start.md
```

**Problem**: Missing new features (Jira integration, ska-constitution, etc.)
```bash
# Solution: Update to latest version
npx spec-kit-assistant update
# This automatically detects your installation and updates all commands
```

**Problem**: Update command not working
```bash
# Alternative solution: Force reinstall
npx spec-kit-assistant install --force
# Or check what's installed first:
npx spec-kit-assistant status
```

### 💬 Command Usage Issues

**Problem**: Command loads but doesn't follow methodology
- **Solution**: Make sure you're using the exact command names (e.g., `/ska-start` not `/spec-kit-start`)
- **Check**: Verify command files have proper frontmatter and content

**Problem**: Arguments not working (e.g., `/ska-research standard`)
- **Solution**: Arguments are optional - the command will work without them
- **Tip**: Try the command without arguments first, then with specific options

**Problem**: Getting generic Claude responses instead of Spec Kit Assistant behavior
- **Solution**: Commands transform Claude into the Spec Kit Assistant - expect specialized responses
- **Check**: Look for "Spec Kit Assistant" branding in the response

### 🔗 GitHub Spec Kit Integration

**Problem**: Spec Kit compatibility warnings
- **Expected**: In projects without `.specify/` directory (standalone mode)
- **Enhanced**: Install GitHub Spec Kit for full integration
- **Works**: Commands function perfectly in both modes

**Problem**: Conflicts with existing spec-kit commands
- **Solution**: Spec Kit Assistant uses `ska-` prefix to avoid conflicts
- **Compatible**: Works alongside `/specify`, `/plan`, `/tasks` commands
- **Integration**: Use `/ska-resume` to integrate with existing workflows

### 🔄 Workflow Continuation

**Problem**: Lost context between sessions
- **Solution**: Use `/ska-resume [phase]` to restore context
- **Tip**: Export your work regularly with `/ska-export markdown`
- **Best Practice**: Keep session notes and previous outputs available

**Problem**: Switching between phases
- **Solution**: Each command is independent - you can jump to any phase
- **Recommended**: Follow the sequence for best results
- **Flexible**: Use `/ska-resume` to return to previous phases

### 🎫 Jira Integration Issues

**Problem**: `Jira MCP not detected` when running `/ska-export jira [space] [project-id]`
```bash
# Solution: Install Jira MCP Server
1. Visit: https://github.com/manateeit/mcp-jira-server
2. Follow installation instructions for Claude Code
3. Configure Jira credentials and test connection
4. Retry: /ska-export jira [space] [project-id]
```

**Problem**: `No tasks.md found` error
```bash
# Solution: Complete GitHub Spec Kit workflow first
1. /specify [your requirements]  # Sets git branch, creates spec.md
2. /plan [your architecture]     # Creates plan.md  
3. /tasks [your complexity]      # Creates tasks.md ← Required file
4. /ska-export jira DEV PROJ-123 # Now works
```

**Problem**: `Invalid Jira space or project ID` 
- **Solution**: Verify Jira space name and project ID format (e.g., DEV, PROJ-123)
- **Check**: Ensure MCP has proper permissions to create epics/stories
- **Test**: Try creating a simple issue manually to verify access

## Advanced Usage

### 🔍 Research-Driven Prompt Generation
Perfect for legacy modernization and existing codebase improvement:

```bash
# 1. Deep codebase analysis
/ska-research deep

# 2. Generate specification prompts for highest-impact improvements  
/ska-start web-app
# Result: Copy generated prompt → /specify [prompt]

# 3. Generate technical planning prompts for modernization
/ska-plan architecture
# Result: Copy generated prompt → /plan [prompt]

# 4. Create governance standards for team alignment
/ska-constitution development
# Result: Copy generated prompt → /constitution [prompt]

# 5. Export implementation documentation
/ska-export confluence
```

### 🚀 Rapid Specification Workflow
For quick validation and MVP development:

```bash
# 1. Generate concept specification prompts
/ska-start mobile-app
# Result: Copy generated prompt → /specify [prompt]

# 2. Generate simple technical planning prompts
/ska-plan technology
# Result: Copy generated prompt → /plan [prompt]

# 3. Create basic team collaboration standards
/ska-constitution collaboration
# Result: Copy generated prompt → /constitution [prompt]

# 4. Export for development teams
/ska-export github-issues
```

### 🏢 Enterprise Governance Workflow with Jira Integration
For large-scale, multi-team projects with direct Jira integration:

```bash
# 1. Comprehensive codebase audit
/ska-research audit

# 2. Generate detailed specification prompts with stakeholder input
/ska-start dashboard
# Copy prompt → /specify [prompt] (this sets git branch and creates specs/[branch]/spec.md)

# 3. Generate enterprise architecture planning prompts
/ska-plan architecture
# Copy prompt → /plan [prompt] (this creates specs/[branch]/plan.md)

# 4. Create comprehensive governance framework
/ska-constitution enterprise
# Copy prompt → /constitution [prompt]

# 5. Generate implementation tasks
# Copy prompt → /tasks [complexity] (this creates specs/[branch]/tasks.md)

# 6. Export directly to Jira (creates actual epics and stories)
/ska-export jira DEV ENTERPRISE-2024
# Result: Epics and stories created in Jira, ready for AI implementation tracking

# 7. Export additional documentation
/ska-export confluence
```

## Publishing & Distribution

### NPM Package
This package is published to NPM as `spec-kit-assistant`. 

```bash
# Direct installation via npx (recommended)
npx spec-kit-assistant install

# Global installation for repeated use
npm install -g spec-kit-assistant
spec-kit-assistant install

# Check package version
npx spec-kit-assistant --version
```

### Package Registry Links
- **NPM**: https://www.npmjs.com/package/spec-kit-assistant
- **GitHub**: https://github.com/chrismckenna/spec-kit-assistant
- **Issues**: https://github.com/chrismckenna/spec-kit-assistant/issues
- **Documentation**: This README and included command templates

### Publishing Process (For Maintainers)
```bash
# 1. Update version
npm version patch|minor|major

# 2. Validate commands
npm run prepublishOnly

# 3. Publish to NPM
npm publish

# 4. Push tags
git push --tags
```

## Development & Contributing

### Local Development Setup
```bash
# 1. Clone the repository
git clone https://github.com/chrismckenna/spec-kit-assistant.git
cd spec-kit-assistant

# 2. Install dependencies
npm install

# 3. Link for local testing
npm link

# 4. Test installation
spec-kit-assistant install --force
spec-kit-assistant status

# 5. Test commands in Claude Code
# Try: /ska-start, /ska-research, etc.
```

### Testing Your Changes
```bash
# Validate command files
npm run prepublishOnly

# Test CLI functionality
spec-kit-assistant --help
spec-kit-assistant status

# Test installation in different scenarios
mkdir test-project && cd test-project
spec-kit-assistant install
spec-kit-assistant status
```

### Contributing Guidelines
1. **Fork** the repository on GitHub
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Test** your changes thoroughly using local installation
4. **Validate** command files: `npm run prepublishOnly`
5. **Commit** with descriptive messages: `git commit -m "Add amazing feature"`
6. **Push** to your fork: `git push origin feature/amazing-feature`
7. **Submit** a pull request with detailed description

### Command Development
When creating new commands:

```markdown
---
description: Your command description (Spec Kit Assistant)
argument-hint: [optional-argument]  
allowed-tools: TodoWrite, Read, Write, Bash, Grep, Glob
---

# Spec Kit Assistant - Your Command Name

Your command content that transforms Claude into a specialized assistant...
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Quick Start Summary

1. **Install**: `npx spec-kit-assistant install`
2. **Research**: `/ska-research standard` (analyze existing codebase)
3. **Generate Spec Prompt**: `/ska-start web-app` → Copy to `/specify [prompt]`
4. **Generate Plan Prompt**: `/ska-plan architecture` → Copy to `/plan [prompt]`
5. **Generate Constitution Prompt**: `/ska-constitution development` → Copy to `/constitution [prompt]`
6. **Export**: `/ska-export markdown` (document results) OR `/ska-export jira DEV PROJ-123` (direct Jira integration)

Transform Claude Code into your personal GitHub Spec Kit prompt generator with Jira integration! 🚀