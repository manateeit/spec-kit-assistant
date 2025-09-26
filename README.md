# Spec Kit Assistant

> AI-assisted specification development slash commands for Claude Code, compatible with GitHub Spec Kit methodology

## Overview

Spec Kit Assistant transforms Claude Code into your personal specification development expert. It provides systematic, AI-guided workflows for both **new projects** and **existing codebases**, helping you create comprehensive specifications, technical plans, actionable tasks, and quality analysis through proven methodologies.

## Features

- **🔍 Codebase Research**: NEW! Analyze existing projects and identify improvement opportunities
- **📋 5-Phase Methodology**: Research → Specification → Planning → Tasks → Analysis
- **🤖 AI-Guided Exploration**: Structured questioning to develop comprehensive requirements
- **🔗 GitHub Spec Kit Compatible**: Works alongside existing spec-kit workflows
- **✅ Quality Assurance**: Built-in validation and analysis frameworks (85%+ quality targets)
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
# Update commands in current directory
npx spec-kit-assistant update

# Force reinstall (overwrites existing)
npx spec-kit-assistant install --force
```

## Available Commands

Once installed, use these slash commands in Claude Code:

| Command | Description | Best For |
|---------|-------------|----------|
| `/ska-research [depth]` | **NEW!** Research existing codebase and recommend features | Legacy projects, new team members, feature planning |
| `/ska-start [project-type]` | Initialize specification workflow with AI guidance | New features, requirements gathering |
| `/ska-plan [focus-area]` | Develop technical architecture and implementation strategy | System design, technology selection |
| `/ska-tasks [complexity]` | Break down plan into actionable development tasks | Sprint planning, work estimation |
| `/ska-analyze [focus]` | Perform quality analysis and validation | Quality assurance, risk assessment |
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

#### `/ska-tasks` - Complexity Levels
- `simple` - Straightforward implementations (1-3 components)
- `moderate` - Multi-component systems (standard complexity)
- `complex` - Enterprise systems with extensive dependencies
- `enterprise` - Large-scale systems with multiple stakeholders

#### `/ska-analyze` - Focus Areas
- `completeness` - Requirements coverage and gap analysis
- `technical` - Architecture and implementation feasibility
- `business` - Value alignment and stakeholder needs  
- `quality` - Testing strategy and risk management
- `all` - Complete multi-dimensional analysis

#### `/ska-export` - Output Formats
- `markdown` - Comprehensive markdown documentation
- `jira` - JIRA-compatible epics, stories, and tasks
- `github-issues` - GitHub Issues and project templates
- `confluence` - Confluence-compatible markup
- `notion` - Notion-ready structured content

## Usage Examples

### 🔍 For Existing Projects (Research-First Approach)
```bash
# 1. Analyze your existing codebase
/ska-research standard

# 2. Specify improvements found by research  
/ska-start web-app

# 3. Plan implementation strategy
/ska-plan architecture

# 4. Break down into actionable tasks
/ska-tasks moderate

# 5. Validate quality and completeness
/ska-analyze completeness

# 6. Export professional documentation
/ska-export markdown
```

### 🆕 For New Projects (Specification-First Approach)
```bash
# 1. Start with your concept
/ska-start mobile-app

# 2. Develop technical architecture
/ska-plan technology

# 3. Create implementation roadmap
/ska-tasks complex

# 4. Perform quality analysis
/ska-analyze all

# 5. Export to project management tools
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

## Integration with GitHub Spec Kit

Spec Kit Assistant is designed to work seamlessly with GitHub's Spec Kit:

- **✅ Compatible**: Works alongside `/specify`, `/plan`, `/tasks` commands
- **🚀 Enhanced**: Provides AI-guided exploration for better specifications
- **📁 Preserves**: Maintains existing `.specify/` directory structure  
- **➕ Extends**: Adds research, analysis, and export capabilities
- **🔄 Interoperable**: `/ska-resume` can integrate with existing spec-kit artifacts

### Spec Kit Detection
The installer automatically detects existing GitHub Spec Kit installations:
- **Standalone Mode**: Works independently in any project
- **Enhanced Mode**: Integrates with existing `.specify/` workflows
- **Constitution Compatibility**: Respects existing project methodologies

## Project Structure

After installation, commands are added to your `.claude/commands/spec-kit-assistant/` directory:

```
.claude/
└── commands/
    └── spec-kit-assistant/
        ├── ska-research.md    # NEW! Codebase analysis
        ├── ska-start.md       # Specification workflow
        ├── ska-plan.md        # Technical planning
        ├── ska-tasks.md       # Task breakdown
        ├── ska-analyze.md     # Quality analysis
        ├── ska-resume.md      # Workflow resumption
        └── ska-export.md      # Artifact export
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

# Update existing installation  
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

### Phase 3: Task Breakdown (`/ska-tasks`)  
Actionable development planning with TDD integration:

**📦 Work Package Definition**
- Feature grouping and logical task organization
- Dependency mapping and sequence optimization
- Task sizing (4-8 hour optimal size) and effort estimation
- Acceptance criteria definition and completion validation

**🧪 Test-Driven Development Integration**
- Test-first sequence planning and coverage strategy
- Quality gate establishment and validation checkpoints
- Continuous integration requirements and automation setup
- Performance testing and monitoring implementation

**👥 Resource and Timeline Planning**
- Skill requirement assessment and team capacity analysis
- Risk evaluation and mitigation strategy development
- Milestone definition and progress tracking setup
- Timeline estimation and delivery scheduling

### Phase 4: Analysis (`/ska-analyze`)
Comprehensive quality assessment and validation:

**📊 Multi-Dimensional Assessment (Target: 85%+ across all dimensions)**

*Completeness Analysis (25%)*
- Functional completeness and requirement coverage
- Edge case coverage and error scenario handling
- Documentation completeness and decision rationale

*Technical Feasibility (25%)*
- Architecture validation and scalability assessment
- Technology appropriateness and maturity evaluation
- Implementation viability and resource realism

*Business Alignment (25%)*
- Requirements traceability and business value validation
- Stakeholder alignment and user need satisfaction
- Value proposition clarity and outcome measurability

*Quality Assurance (25%)*
- Testing strategy completeness and coverage adequacy
- Risk mitigation effectiveness and contingency planning
- Maintainability assessment and long-term sustainability

**📋 Deliverables**
- Quality scorecard with dimensional analysis
- Gap identification and improvement recommendations
- Risk assessment and mitigation strategies
- Action plan with prioritized improvements

### Phase 5: Export (`/ska-export`)
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

## Advanced Usage

### 🔍 Research-Driven Development Workflow
Perfect for legacy modernization and existing codebase improvement:

```bash
# 1. Deep codebase analysis
/ska-research deep

# 2. Specify highest-impact improvements  
/ska-start web-app

# 3. Architect modernization approach
/ska-plan architecture

# 4. Phase implementation for minimal disruption
/ska-tasks complex

# 5. Validate approach and risk assessment
/ska-analyze all

# 6. Create implementation roadmap
/ska-export confluence
```

### 🚀 Rapid Prototyping Workflow
For quick validation and MVP development:

```bash
# 1. Quick concept specification
/ska-start mobile-app

# 2. Simple technical approach  
/ska-plan technology

# 3. Minimal viable tasks
/ska-tasks simple

# 4. Basic quality check
/ska-analyze completeness

# 5. Export for development
/ska-export github-issues
```

### 🏢 Enterprise Development Workflow
For large-scale, multi-team projects:

```bash
# 1. Comprehensive codebase audit
/ska-research audit

# 2. Detailed specification with stakeholders
/ska-start dashboard

# 3. Enterprise architecture planning
/ska-plan architecture

# 4. Complex task breakdown with dependencies
/ska-tasks enterprise

# 5. Complete quality and risk analysis
/ska-analyze all

# 6. Export to project management
/ska-export jira
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
2. **Research**: `/ska-research standard` (for existing projects)
3. **Specify**: `/ska-start web-app` (for new features)  
4. **Plan**: `/ska-plan architecture`
5. **Tasks**: `/ska-tasks moderate`
6. **Analyze**: `/ska-analyze completeness`
7. **Export**: `/ska-export markdown`

Transform Claude Code into your personal specification development expert! 🚀