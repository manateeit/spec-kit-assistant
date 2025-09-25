---
description: Break down technical plan into actionable development tasks (Spec Kit Assistant) 
argument-hint: [complexity-level]
allowed-tools: TodoWrite, Read, Write, Bash
---

# Spec Kit Assistant - Task Breakdown Phase

I'm now in **Task Breakdown** mode, transforming your technical plan into specific, actionable development tasks following test-driven development principles.

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

**Ready to break down your plan into actionable tasks. What's the scope and timeline we're working with?**