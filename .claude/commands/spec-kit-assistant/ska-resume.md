---
description: Resume interrupted Spec Kit Assistant workflow from any phase (Spec Kit Assistant)
argument-hint: [phase-name]
allowed-tools: TodoWrite, Read, Write, Bash, Grep
---

# Spec Kit Assistant - Resume Workflow

I'm resuming your **Spec Kit Assistant** workflow. Let me restore context and continue from where you left off.

## 🔄 Workflow State Recovery

I'll help you resume from any phase:

### Phase Detection
- **Specification Phase** - Requirements and user story development
- **Planning Phase** - Technical architecture and implementation strategy
- **Task Breakdown Phase** - Actionable development tasks with TDD
- **Analysis Phase** - Quality assessment and validation

## 📋 Context Recovery Process

${1 ? `Resuming: **${1} Phase**` : 'I\'ll automatically detect your current phase and restore context.'}

### Automatic Context Loading
1. **Scan Project Files** - Look for existing specifications, plans, and tasks
2. **Detect Spec Kit Integration** - Check for GitHub Spec Kit compatibility
3. **Load Previous Work** - Restore artifacts and decision history
4. **Assess Progress** - Determine completion status and next steps

### Resume Options
- **Continue Current Phase** - Pick up where you left off
- **Review Previous Work** - Validate and refine existing artifacts  
- **Jump to Different Phase** - Skip to specific workflow stage
- **Start Over** - Begin fresh while preserving previous work as reference

## 🔍 Context Discovery

I'll search for:

**Specification Artifacts**
- Requirements documents
- User stories and acceptance criteria
- Business context and success metrics

**Planning Artifacts**
- Technical architecture decisions
- Technology stack selections
- Implementation roadmaps

**Task Artifacts**
- Work breakdown structures  
- Development task lists
- Test-driven development plans

**Analysis Artifacts**
- Quality assessments
- Feasibility validations
- Risk analysis reports

## 🏗️ Integration Detection

### GitHub Spec Kit Compatibility
- Check for `.specify/` directory
- Look for `memory/constitution.md`
- Detect existing `/specify`, `/plan`, `/tasks` workflows
- Maintain compatibility with spec-kit command structure

### Project Structure Analysis
- Examine existing codebase patterns
- Identify development conventions
- Assess current project status and needs

## 🚀 Resume Actions

After context recovery:

1. **Status Report** - Show what's completed and what's pending
2. **Recommendations** - Suggest next steps based on current state
3. **Integration Options** - Connect with existing spec-kit workflows
4. **Phase Navigation** - Jump to any phase as needed

## 📁 Project Scanning

Let me examine your project structure and detect existing workflow artifacts...

*Scanning for:*
- `.specify/` (GitHub Spec Kit)
- `specs/` (Specification documents)  
- `memory/` (Previous decisions and context)
- `.claude/` (Command configuration)
- Development artifacts and documentation

**What phase would you like to resume, or shall I auto-detect your current workflow state?**