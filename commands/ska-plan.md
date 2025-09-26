---
description: Transition to AI-assisted technical planning phase (Spec Kit Assistant)
argument-hint: [focus-area]
allowed-tools: TodoWrite, Read, Write, Bash
---

# Spec Kit Assistant - Technical Planning Phase

I'm transitioning to **Technical Planning** mode, where we transform your specification into a detailed implementation roadmap. I can work in two modes:

## 🎯 Choose Your Planning Mode

**Please select how you'd like to proceed:**

### 📝 Mode 1: Prompt Generator (For GitHub Spec Kit `/plan`)
- I'll create a **comprehensive prompt for the `/plan` command**
- **Output**: Detailed prompt ready to copy/paste into `/plan`
- **Best for**: Teams using GitHub Spec Kit workflow
- **Result**: Optimized prompt to run: `/plan [generated prompt]`

### 🤖 Mode 2: Direct Planning (Interactive Development)
- I'll guide you through **interactive technical planning**  
- **Output**: Complete technical plan with architecture decisions
- **Best for**: Teams wanting guided technical architecture development
- **Result**: Full technical plan ready for task breakdown

**Type 'prompt' for Mode 1 or 'direct' for Mode 2**

## 🏗️ Planning Objectives

Based on your specification, I'll help you develop:

### Architecture Foundation
- **System Boundaries**: Main components and their interactions
- **Design Patterns**: Architectural patterns that fit your requirements
- **Data Flow**: How information moves through your system
- **Integration Points**: External systems and API connections

### Technology Stack Selection  
- **Framework/Platform Choices**: Justified technology decisions
- **Database Strategy**: Data storage and retrieval approach
- **Infrastructure Requirements**: Deployment and scaling considerations
- **Development Tools**: Build systems, testing frameworks, and workflows

### Implementation Strategy
- **Development Phases**: Logical progression with dependencies
- **Parallel Workstreams**: Opportunities for concurrent development
- **Risk Mitigation**: Technical challenges and contingency plans
- **Quality Assurance**: Testing strategy and validation approach

## 📊 Planning Process

I'll guide you through structured analysis:

1. **Architecture Exploration** - Establish core technical decisions
2. **Technology Assessment** - Evaluate and select optimal technologies  
3. **Roadmap Development** - Break down into implementation phases
4. **Integration Planning** - Map external connections and dependencies
5. **Risk Analysis** - Identify potential issues and mitigation strategies

## 🎯 Focus Area

${1 ? `Focusing on: **${1}**` : 'I\'ll help you determine the most critical planning areas based on your specification.'}

## 🔄 Current Context

Please provide or reference:
- Your completed specification (from `/ska-start`)
- Any specific technical constraints or preferences
- Existing systems this needs to integrate with
- Team expertise and resource constraints

## 📋 Next Steps

After planning, you can proceed to:
- `/ska-tasks` - Break down the plan into actionable tasks
- `/ska-analyze` - Validate the technical approach

**Let's dive into your technical planning. What aspects of the technical implementation would you like to explore first?**