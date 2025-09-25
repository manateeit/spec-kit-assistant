---
description: Export Spec Kit Assistant workflow artifacts and documentation (Spec Kit Assistant)
argument-hint: [export-format]
allowed-tools: TodoWrite, Read, Write, Bash, Glob
---

# Spec Kit Assistant - Export Workflow Artifacts

I'm in **Export** mode, creating structured outputs of your specification-driven development workflow.

## 📤 Export Capabilities

I'll help you create professional documentation and integrate with various project management systems:

### Available Export Formats

**Documentation Exports**
- **markdown** - Comprehensive markdown documentation
- **pdf** - Professional PDF reports (requires pandoc)
- **html** - Web-ready HTML documentation
- **confluence** - Confluence-compatible markup
- **notion** - Notion-ready structured content

**Project Management Integration**
- **jira** - JIRA-compatible epics, stories, and tasks
- **github-issues** - GitHub Issues and project templates
- **trello** - Trello board and card structures
- **linear** - Linear requirements and task format
- **asana** - Asana project and task hierarchy

**Development Integration**
- **github-templates** - Issue and PR template generation
- **spec-kit** - GitHub Spec Kit compatible artifacts
- **readme** - Project README with specifications
- **api-docs** - API documentation templates

## 🎯 Export Format

${1 ? `Export Format: **${1}**` : 'I\'ll help you choose the optimal export format based on your needs.'}

## 📊 Workflow Artifact Collection

I'll gather and structure:

### Specification Artifacts
- **Requirements Documentation** - Complete feature specifications
- **User Stories** - Detailed user journeys and acceptance criteria
- **Business Context** - Value propositions and success metrics
- **Technical Requirements** - Integration points and constraints

### Planning Artifacts
- **Architecture Documentation** - System design and patterns
- **Technology Decisions** - Stack selections with rationale
- **Implementation Roadmap** - Development phases and dependencies
- **Risk Assessment** - Identified risks and mitigation strategies

### Task Artifacts
- **Work Breakdown Structure** - Hierarchical task organization
- **Development Tasks** - Actionable items with estimates
- **Testing Strategy** - TDD approach and quality gates
- **Timeline and Milestones** - Project scheduling and delivery

### Analysis Artifacts
- **Quality Assessment** - Multi-dimensional analysis results
- **Validation Reports** - Feasibility and compliance validation
- **Improvement Recommendations** - Optimization opportunities
- **Success Metrics** - KPIs and measurement criteria

## 🔧 Export Configuration

### GitHub Spec Kit Integration
- Maintain compatibility with existing spec-kit workflows
- Preserve `.specify/` directory structure
- Export to standard spec-kit artifact locations
- Generate spec-kit compatible command prompts

### Custom Templates
- Use project-specific templates and formatting
- Apply organizational branding and standards
- Include custom fields and metadata
- Maintain consistent documentation structure

## 📁 Output Organization

Exports will be organized as:

```
exports/
├── specifications/
│   ├── requirements.md
│   ├── user-stories.md
│   └── acceptance-criteria.md
├── technical-plans/
│   ├── architecture.md
│   ├── technology-stack.md
│   └── implementation-roadmap.md
├── task-breakdown/
│   ├── work-packages.md
│   ├── development-tasks.md
│   └── testing-strategy.md
└── analysis/
    ├── quality-assessment.md
    ├── feasibility-analysis.md
    └── recommendations.md
```

## 🚀 Export Process

1. **Artifact Discovery** - Scan for all workflow artifacts
2. **Format Conversion** - Transform to target format
3. **Quality Validation** - Ensure completeness and consistency
4. **Structure Organization** - Apply templates and formatting
5. **Output Generation** - Create final export files

**What format would you like to export to, or shall I help you determine the best option for your workflow?**