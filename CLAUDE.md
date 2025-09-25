# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Spec Kit Assistant is a specialized AI system that implements the GitHub Spec Kit methodology for specification-driven development. This repository contains a comprehensive documentation framework that guides users through a systematic 4-phase development workflow: Specification, Planning, Task Breakdown, and Analysis/Validation.

## Architecture & Core Components

### Phase-Based Workflow System
The project follows a structured 4-phase methodology:

1. **Phase 1 - Specification** (`phase-1-specification.md`): AI-assisted requirement gathering with 6 stages (Core Idea → User Journey → Business Context → Technical Assessment → Success Criteria → Prompt Generation)

2. **Phase 2 - Planning** (`phase-2-planning.md`): Technical architecture development with 6 stages (Architecture Foundation → Technology Stack → Implementation Roadmap → Integration Strategy → Risk Assessment → Planning Prompt)

3. **Phase 3 - Task Breakdown** (`phase-3-tasks.md`): Implementation task creation with TDD integration and dependency mapping

4. **Phase 4 - Analysis** (`phase-4-analysis.md`): Quality assessment and validation with multi-dimensional analysis framework

### Core Documentation Components

- **Slash Command Specification** (`slash-command-spec.md`): Defines the `/spec-kit-assistant` command interface with actions: `start`, `plan`, `tasks`, `analyze`, `resume`, `export`

- **Workflow State Management** (`workflow-state-management.md`): JSON-based persistent state system for cross-session continuity with hierarchical state architecture

- **Prompt Templates** (`prompt-templates.md`): Reusable templates organized by phase, complexity, and domain type (dashboard, API, mobile, web-app, integration, data-pipeline)

- **Common Scenarios** (`common-scenarios.md`): Example workflows for different project types

- **Troubleshooting** (`troubleshooting.md`): Error handling and resolution guidance

## Key Methodology Concepts

### Specification-Driven Development
The system emphasizes comprehensive upfront specification before implementation, using AI-guided exploration to capture:
- User journeys with edge cases
- Business context and success metrics  
- Technical constraints and integration points
- Testable acceptance criteria

### GitHub Spec Kit Integration
All workflows are designed to integrate with GitHub's specification tools and practices, producing artifacts that align with standard software development lifecycles.

### State Persistence Architecture
The system maintains workflow state through a hierarchical JSON schema:
```
Workflow Session
├── Session Metadata
├── Current Phase State  
├── Phase Progression History
├── Generated Artifacts
├── Decision Log
└── Recovery Information
```

## Development Context

### File Organization
- All core methodology files are Markdown-based documentation
- No package.json or build system - this is a pure documentation/specification repository
- Files follow a consistent naming pattern: `phase-[number]-[name].md`

### Quality Standards
- Each phase includes learning objectives and success criteria
- Multi-dimensional assessment framework with quality thresholds (85%+ requirement)
- Systematic error handling and troubleshooting documentation

### Template System
- Universal templates with variable substitution for project types
- Complexity-based variations (simple/moderate/complex/enterprise)
- Domain-specific adaptations for different technical contexts

When working with this repository, focus on:
1. Maintaining consistency across phase documentation
2. Ensuring all workflow states are properly defined in the state management system
3. Keeping template variables and substitution patterns aligned
4. Following the established 4-phase methodology structure
5. Preserving the AI-assistant interaction patterns defined in each phase