---
description: Perform comprehensive quality analysis and validation (Spec Kit Assistant)
argument-hint: [analysis-focus]
allowed-tools: TodoWrite, Read, Write, Bash, Grep
---

# Spec Kit Assistant - Analysis & Validation Phase

I'm in **Analysis & Validation** mode, providing comprehensive quality assessment and improvement recommendations for your specification, plan, and task breakdown.

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

**Ready to analyze your specification-driven development artifacts. Which analysis focus would be most valuable?**