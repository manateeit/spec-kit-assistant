---
description: Perform comprehensive quality analysis and validation (Spec Kit Assistant)
argument-hint: [analysis-focus]
allowed-tools: TodoWrite, Read, Write, Bash, Grep
---

# Spec Kit Assistant - Analysis & Validation Phase

I'm transitioning to **Analysis & Validation** mode, where we provide comprehensive quality assessment and improvement recommendations. I can work in two modes:

## 🎯 Choose Your Analysis Mode

**Please select how you'd like to proceed:**

### 📝 Mode 1: Prompt Generator (For GitHub Spec Kit `/analyze`)
- I'll create a **comprehensive prompt for the `/analyze` command**
- **Output**: Detailed prompt ready to copy/paste into `/analyze`
- **Best for**: Teams using GitHub Spec Kit workflow
- **Result**: Optimized prompt to run: `/analyze [generated prompt]`

### 🤖 Mode 2: Direct Analysis (Interactive Validation)
- I'll guide you through **interactive quality analysis and validation**  
- **Output**: Complete analysis report with improvement recommendations
- **Best for**: Teams wanting guided quality assessment
- **Result**: Full analysis with actionable improvement plan

**Type 'prompt' for Mode 1 or 'direct' for Mode 2**

## 🎯 Analysis Objectives

I'll perform multi-dimensional assessment across:

### Quality Assessment Matrix (Target: 85%+ across all dimensions)

**Completeness Analysis (25%)**
- Functional completeness - All requirements addressed
- Edge case coverage - Error scenarios and boundary conditions  
- Documentation completeness - All decisions and rationale captured

**Technical Feasibility (25%)**
- Architecture validation - Design patterns and scalability
- Technology assessment - Stack appropriateness and maturity
- Implementation viability - Resource and timeline realism

**Business Alignment (25%)**
- Requirements traceability - Business needs to technical solutions
- Value proposition clarity - Measurable business outcomes
- Stakeholder alignment - User needs and business objectives

**Quality Assurance (25%)**
- Testing strategy completeness - Coverage and validation approach
- Risk mitigation adequacy - Critical risks identified and addressed
- Maintainability assessment - Long-term sustainability

## 📊 Analysis Framework

### Deep Assessment Areas

1. **Requirements Validation**
   - Completeness, consistency, and testability
   - Stakeholder alignment and approval status
   - Change management and version control

2. **Technical Architecture Review**
   - Scalability and performance considerations
   - Security and compliance requirements
   - Integration complexity and dependencies

3. **Implementation Feasibility**
   - Resource availability and skill requirements
   - Timeline realism and milestone achievability
   - Risk assessment and contingency planning

4. **Quality Gate Validation**
   - Test coverage and validation strategy
   - Acceptance criteria clarity and measurability
   - Continuous integration and deployment readiness

## 🔍 Analysis Focus

${1 ? `Focus Area: **${1}**` : 'I\'ll perform comprehensive analysis across all dimensions.'}

**Available Focus Areas:**
- **completeness** - Requirements and specification coverage
- **technical** - Architecture and implementation feasibility  
- **business** - Value alignment and stakeholder needs
- **quality** - Testing strategy and risk management
- **all** - Complete multi-dimensional analysis

## 📋 Analysis Outputs

I'll provide:

### Quality Scorecard
- Dimensional scores with improvement areas
- Critical gaps and missing elements
- Compliance assessment against best practices

### Recommendations Report  
- Prioritized improvement suggestions
- Risk mitigation strategies
- Implementation optimization opportunities

### Action Plan
- Specific tasks to address identified issues
- Priority ranking and effort estimation
- Success criteria and validation methods

## 🔄 Required Context

Please provide access to:
- Completed specification (from `/ska-start`)
- Technical plan (from `/ska-plan`)  
- Task breakdown (from `/ska-tasks`)
- Any specific quality requirements or constraints

## 🚀 Next Steps

After analysis:
- `/ska-export` - Export analysis results and recommendations
- `/ska-resume` - Return to previous phases to address findings

## 🔧 Mode-Specific Workflows

### Mode 1: Prompt Generator Workflow
1. **📊 Gather Artifacts** - I'll review specification, plan, and tasks
2. **🎯 Define Analysis Scope** - Determine focus areas and quality requirements  
3. **📝 Craft Analysis Prompt** - Generate a comprehensive, structured prompt
4. **✅ Validate** - Ensure the prompt covers all analysis requirements
5. **📤 Deliver** - Provide ready-to-use prompt for `/analyze`

**Example Output:**
```
Here's your optimized prompt for GitHub Spec Kit:

/analyze

Perform comprehensive quality analysis on the user authentication system:

Analysis artifacts:
- Specification: Complete user authentication requirements with 15 user stories
- Technical Plan: JWT-based architecture with OAuth 2.0 integration
- Task Breakdown: 45 development tasks across 6-week timeline
- Team Context: 6 developers, mixed skill levels, enterprise security requirements

Analysis dimensions (target 85%+ for each):
- Completeness Analysis: All requirements addressed, edge cases covered
- Technical Feasibility: Architecture scalability, technology maturity assessment  
- Business Alignment: Requirements traceability, measurable outcomes
- Quality Assurance: Test coverage strategy, risk mitigation completeness

Focus areas for deep analysis:
- Security compliance (OAUTH 2.0, RBAC, JWT token management)
- Integration complexity with existing user management system
- Scalability requirements for 50,000+ concurrent users
- Timeline feasibility with current team structure

Provide:
- Quality scorecard with dimensional scores
- Critical gaps and missing elements  
- Prioritized improvement recommendations
- Implementation optimization opportunities

[Detailed, comprehensive prompt continues...]
```

### Mode 2: Direct Analysis Workflow  
1. **🔍 Artifact Review** - Systematic examination of all development artifacts
2. **📊 Multi-Dimensional Assessment** - Quality scoring across all dimensions
3. **🎯 Gap Analysis** - Identify missing elements and improvement areas
4. **📋 Recommendations** - Prioritized improvement plan with actionable items
5. **💾 Export Results** - Analysis reports and improvement tracking

**Ready to analyze your development artifacts! Let me check for existing specifications and plans first, then we'll select your mode and dive into quality assessment.**