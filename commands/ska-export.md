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
- **jira** - JIRA-compatible epics, stories, and tasks (file export)
- **jira [space] [project-id]** - **NEW!** Direct JIRA integration via MCP (creates epics/stories)
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

## 🎯 Jira MCP Integration - NEW!

### Direct Jira Export with MCP
**Usage**: `/ska-export jira [space] [project-id]`

**Example**: `/ska-export jira DEV PROJ-123`

This powerful integration:

1. **Detects Current Epic** - Uses current git branch name as epic identifier
2. **Locates Tasks File** - Reads `specs/[branch-name]/tasks.md` (created by GitHub Spec Kit `/tasks`)
3. **Epic/Story Breakdown** - Intelligently organizes tasks into epics and stories
4. **Creates in Jira** - Uses Jira MCP to create actual epics and stories in your project

### Epic/Story Organization Logic

**Single Epic Approach** (Default)
- Creates one epic named after the current branch/spec
- All tasks become stories within that epic
- Maintains clear traceability from spec to implementation

**Multi-Epic Approach** (For Large Specs)
- Analyzes task complexity and groupings
- Creates multiple related epics based on functional areas
- Distributes stories across epics logically
- Maintains epic relationships and dependencies

### Jira Story Enhancement

Each created story includes:
- **Clear Acceptance Criteria** - Extracted from tasks.md
- **Implementation Notes** - Technical details and requirements
- **Effort Estimates** - If present in original tasks
- **Dependencies** - Task dependencies mapped to story relationships
- **AI Integration Comments** - Placeholders for AI implementation updates

### Memory Integration

After successful Jira export:
- **Epic/Story Mapping** - Stored in session memory for future reference
- **Implementation Tracking** - Ready for AI task completion updates
- **Status Synchronization** - Foundation for bi-directional Jira sync

### MCP Requirements

**Prerequisites**:
- Jira MCP must be installed and configured
- Valid Jira space and project access
- Current directory must contain GitHub Spec Kit structure

**Error Handling**:
- Missing Jira MCP: Clear installation instructions
- Invalid space/project: Detailed error messages
- Missing tasks.md: Guidance on running `/tasks` first

### File Structure Detection

The command automatically detects:
```
specs/
└── [current-branch-name]/
    ├── spec.md          # Created by /specify
    ├── plan.md          # Created by /plan  
    └── tasks.md         # Created by /tasks ← THIS FILE
```

## 🚀 Export Process

1. **Artifact Discovery** - Scan for all workflow artifacts
2. **Format Conversion** - Transform to target format
3. **Quality Validation** - Ensure completeness and consistency
4. **Structure Organization** - Apply templates and formatting
5. **Output Generation** - Create final export files
6. **Jira Integration** - (If MCP detected) Create epics and stories directly

## 🛠️ Implementation Workflow

### For Jira MCP Export (`/ska-export jira [space] [project-id]`)

I'll execute this step-by-step process:

1. **🔍 Detect Current Context**
   ```bash
   # Get current git branch (this is the epic name)
   git branch --show-current
   
   # Verify GitHub Spec Kit structure exists
   ls specs/[branch-name]/tasks.md
   ```

2. **🎯 Check Jira MCP Availability**
   - Detect if Jira MCP tools are available
   - If missing: Provide installation instructions and exit
   - If present: Validate space and project-id parameters

3. **📋 Parse Tasks File**
   - Read `specs/[branch-name]/tasks.md`
   - Extract task structure, acceptance criteria, estimates
   - Analyze for epic/story organization opportunities
   - Identify dependencies and relationships

4. **🏗️ Epic/Story Structure Planning**
   - **Default**: Single epic with all tasks as stories
   - **Advanced**: Multiple epics if >10 tasks or clear functional groupings
   - Map task dependencies to story relationships
   - Prepare Jira-compatible descriptions and acceptance criteria

5. **🚀 Jira Creation Process**
   - Create epic(s) using Jira MCP tools
   - Create stories within epics using Jira MCP tools
   - Set up story relationships and dependencies
   - Add AI implementation tracking comments
   - Store epic/story IDs in memory for future updates

6. **💾 Memory Storage**
   - Store epic-to-branch mapping
   - Store story-to-task relationships
   - Enable future AI implementation tracking
   - Prepare for status update workflows

### Error Scenarios & Guidance

**Missing Jira MCP**:
```
❌ Jira MCP not detected. Please install Jira MCP first:
   
   1. Install MCP Jira Server: https://github.com/manateeit/mcp-jira-server
   2. Follow setup instructions for Claude Code integration
   3. Configure Jira credentials and test connection
   
   Then retry: /ska-export jira [space] [project-id]
```

**Missing tasks.md**:
```
❌ No tasks.md found at specs/[branch-name]/tasks.md
   Please run the GitHub Spec Kit workflow first:
   1. /specify [your requirements]
   2. /plan [your architecture] 
   3. /tasks [your complexity]
   Then retry: /ska-export jira [space] [project-id]
```

**Invalid Jira Parameters**:
```
❌ Invalid Jira space or project ID
   Please verify:
   - Space exists and you have access
   - Project ID is correct (e.g., PROJ-123)
   - MCP has proper permissions
```

**What format would you like to export to, or shall I help you determine the best option for your workflow?**