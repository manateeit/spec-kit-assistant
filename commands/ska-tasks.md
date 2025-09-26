---
description: Break down technical plan into actionable development tasks (Spec Kit Assistant) 
argument-hint: [complexity-level]
allowed-tools: TodoWrite, Read, Write, Bash
---

# Spec Kit Assistant - Task Breakdown Phase

I'm transitioning to **Task Breakdown** mode, where we transform your technical plan into specific, actionable development tasks. I can work in two modes:

## 🎯 Choose Your Task Mode

**Please select how you'd like to proceed:**

### 📝 Mode 1: Prompt Generator (For GitHub Spec Kit `/tasks`)
- I'll create a **comprehensive prompt for the `/tasks` command**
- **Output**: Detailed prompt ready to copy/paste into `/tasks`
- **Best for**: Teams using GitHub Spec Kit workflow
- **Result**: Optimized prompt to run: `/tasks [generated prompt]`

### 🤖 Mode 2: Direct Task Breakdown (Interactive Development)
- I'll guide you through **interactive task breakdown development**  
- **Output**: Complete task breakdown with TDD integration
- **Best for**: Teams wanting guided development task planning
- **Result**: Full task list ready for development execution

**Type 'prompt' for Mode 1 or 'direct' for Mode 2**

## 🎯 Task Breakdown Objectives

I'll help you create:

### Work Package Structure
- **Logical Groupings**: Related tasks organized by feature/component
- **Dependency Mapping**: Clear sequence and parallel execution opportunities
- **Scope Definition**: Right-sized tasks (typically 4-8 hours each)
- **Acceptance Criteria**: Clear completion definitions for each task

### Test-Driven Development Integration
- **Test-First Sequence**: Write tests before implementation
- **Coverage Planning**: Unit, integration, and end-to-end test strategy
- **Quality Gates**: Validation checkpoints throughout development
- **Continuous Integration**: Automated testing and validation

### Resource and Timeline Planning
- **Effort Estimation**: Time and complexity assessments  
- **Skill Requirements**: Technical expertise needed for each task
- **Risk Assessment**: High-risk tasks and mitigation strategies
- **Milestone Mapping**: Progress tracking and delivery milestones

## 📊 Task Analysis Framework

I'll systematically analyze:

1. **Work Package Definition** - Group related functionality
2. **Task Granularity** - Break down to implementable units
3. **Dependency Analysis** - Map prerequisites and parallelization
4. **TDD Integration** - Embed testing requirements in task structure
5. **Resource Allocation** - Estimate effort and assign priorities

## ⚙️ Complexity Level

${1 ? `Complexity Level: **${1}**` : 'I\'ll assess complexity based on your plan and adjust task granularity accordingly.'}

**Complexity Factors:**
- **Simple**: Single components, straightforward requirements
- **Moderate**: Multi-component systems with standard integrations  
- **Complex**: Enterprise systems with multiple stakeholders
- **Enterprise**: Large-scale systems with extensive dependencies

## 🔄 Required Context

Please provide:
- Your completed technical plan (from `/ska-plan`)
- Team size and skill levels
- Development timeline constraints
- Quality and testing requirements

## 📋 Task Categories I'll Create

- **Foundation Tasks**: Core architecture and setup
- **Feature Development**: User-facing functionality
- **Integration Tasks**: External system connections
- **Testing Tasks**: Quality assurance and validation
- **Deployment Tasks**: Infrastructure and release preparation

## 🚀 Next Steps

After task breakdown:
- `/ska-analyze` - Validate task structure and feasibility
- `/ska-export` - Export tasks to your preferred project management tool

## 🔧 Mode-Specific Workflows

### Mode 1: Prompt Generator Workflow
1. **📊 Gather Plan Information** - I'll review your technical plan and requirements
2. **🎯 Integrate Context** - Incorporate team structure, timeline, and constraints  
3. **📝 Craft Tasks Prompt** - Generate a comprehensive, structured prompt
4. **✅ Validate** - Ensure the prompt covers all task breakdown requirements
5. **📤 Deliver** - Provide ready-to-use prompt for `/tasks`

**Example Output:**
```
Here's your optimized prompt for GitHub Spec Kit:

/tasks

Break down the user authentication system plan into development tasks:

- 6-person team with 3 senior, 2 mid-level, 1 junior developers
- 6-week timeline with weekly milestones
- TDD approach with 90% test coverage requirement
- Integration with existing user management system
- Security compliance (OAuth 2.0, JWT, RBAC)

Tasks should include:
- Foundation tasks for JWT middleware and security setup
- Feature development for login, registration, password reset flows
- Integration tasks for existing user management system connection
- Testing tasks with unit, integration, and E2E coverage
- Deployment tasks for staging and production environments

Each task should specify:
- Clear acceptance criteria and definition of done
- Estimated effort (story points or hours)
- Dependencies and parallel execution opportunities
- Required skills and suggested developer assignments
- Test requirements and validation criteria

[Detailed, comprehensive prompt continues...]
```

### Mode 2: Direct Task Breakdown Workflow  
1. **🔍 Plan Analysis** - Review technical plan and extract task opportunities
2. **📋 Task Structure Creation** - Build comprehensive task breakdown
3. **🧪 TDD Integration** - Embed test-driven development requirements
4. **📊 Resource Planning** - Add effort estimates and skill requirements
5. **💾 Export Options** - Multiple formats for project management tools

**Ready to create your task breakdown! Let me check for existing plans first, then we'll select your mode and dive into your development tasks.**