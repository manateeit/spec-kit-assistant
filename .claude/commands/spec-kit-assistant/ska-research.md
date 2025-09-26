---
description: Research existing codebase and recommend features for Spec Kit development (Spec Kit Assistant)
argument-hint: [analysis-depth]
allowed-tools: TodoWrite, Read, Write, Bash, Grep, Glob
---

# Spec Kit Assistant - Codebase Research

I'm now in **Codebase Research** mode, analyzing your existing project to understand its architecture, identify improvement opportunities, and recommend features for the Spec Kit development process.

## 🔍 Research Objectives

I'll systematically analyze your codebase to provide:

### Architecture Discovery
- **Technology Stack**: Identify frameworks, libraries, and development patterns
- **Project Structure**: Understand component organization and data flow
- **Dependencies**: Map internal and external system relationships
- **Design Patterns**: Recognize architectural approaches and conventions

### Feature Analysis
- **Existing Features**: Catalog current functionality and user capabilities
- **Code Quality**: Assess maintainability, test coverage, and technical debt
- **Performance Patterns**: Identify bottlenecks and optimization opportunities
- **Security Posture**: Evaluate authentication, authorization, and data protection

### Enhancement Opportunities
- **Missing Features**: Identify gaps in user experience or functionality
- **Modernization Candidates**: Legacy code suitable for refactoring
- **Integration Possibilities**: External system connection opportunities
- **User Experience Improvements**: UI/UX enhancement recommendations

## 📊 Analysis Depth

${1 ? `Analysis Depth: **${1}**` : 'I\'ll determine optimal analysis depth based on codebase size and complexity.'}

**Available Depth Levels:**
- **quick** - High-level overview and immediate opportunities (15-20 minutes)
- **standard** - Comprehensive analysis with detailed recommendations (30-45 minutes)
- **deep** - Thorough investigation including dependency analysis (1-2 hours)
- **audit** - Complete codebase audit with security and performance assessment (2-4 hours)

## 🔧 Research Process

### Phase 1: Codebase Discovery
I'll systematically explore your project structure:

1. **Project Overview**
   - Examine package.json, requirements.txt, or similar configuration files
   - Identify main entry points and application structure
   - Map directory organization and naming conventions

2. **Technology Assessment**
   - Catalog frameworks, libraries, and development tools
   - Analyze version currency and compatibility
   - Identify architectural patterns and design approaches

3. **Code Quality Analysis**
   - Assess test coverage and testing strategies
   - Review documentation completeness
   - Identify technical debt and maintenance issues

### Phase 2: Feature Mapping
I'll catalog existing functionality and identify opportunities:

1. **Current Feature Inventory**
   - Map user-facing features and capabilities
   - Document API endpoints and data models
   - Identify business logic and workflow patterns

2. **Gap Analysis**
   - Compare features against modern application standards
   - Identify user experience pain points
   - Find missing integrations or automation opportunities

3. **Enhancement Prioritization**
   - Rank improvement opportunities by impact and effort
   - Identify quick wins and strategic initiatives
   - Map features suitable for spec-driven development

### Phase 3: Spec Kit Recommendations
I'll provide actionable recommendations for your development roadmap:

1. **High-Priority Features**
   - Features that would significantly improve user experience
   - Technical improvements that reduce maintenance burden
   - Security or performance enhancements

2. **Spec Kit Candidates**
   - Complex features that benefit from systematic specification
   - Features requiring cross-team coordination
   - User-facing improvements needing stakeholder alignment

3. **Development Roadmap**
   - Suggested implementation order based on dependencies
   - Resource requirements and timeline estimates
   - Risk assessment and mitigation strategies

## 📋 Research Deliverables

I'll provide comprehensive documentation including:

### Executive Summary
- Key findings and strategic recommendations
- Technology stack assessment and modernization opportunities
- Priority feature recommendations with business impact

### Technical Analysis Report
- Architecture overview with visual diagrams
- Code quality metrics and improvement areas
- Security and performance assessment findings

### Feature Recommendation Matrix
- Prioritized list of enhancement opportunities
- Effort/impact analysis for each recommendation  
- Detailed specifications for high-priority items

### Spec Kit Development Plan
- Features ready for `/ska-start` specification development
- Suggested development phases and dependencies
- Integration with existing development workflows

## 🚀 Getting Started

I'll begin by examining your project structure and configuration files to understand the current state.

**Let me start the research process:**

1. **Project Structure Analysis** - Understanding your codebase organization
2. **Technology Stack Discovery** - Identifying frameworks and dependencies
3. **Feature Mapping** - Cataloging existing functionality
4. **Opportunity Identification** - Finding enhancement possibilities
5. **Recommendation Synthesis** - Prioritizing improvements for spec-driven development

## 📁 What I'll Examine

- Configuration files (package.json, requirements.txt, etc.)
- Source code structure and organization
- Database schemas and data models
- API endpoints and service interfaces
- User interface components and workflows
- Testing strategies and coverage
- Documentation and README files
- Deployment and infrastructure configuration

## 📁 Research Output Location

I'll automatically save all research findings to structured markdown files in your project:

```
specs/
└── research/
    ├── codebase-analysis-[timestamp].md
    ├── architecture-overview.md  
    ├── feature-recommendations.md
    └── spec-kit-development-plan.md
```

### Output Files Created:
- **📊 Codebase Analysis**: Complete technical assessment with findings
- **🏗️ Architecture Overview**: System design and component relationships  
- **🎯 Feature Recommendations**: Prioritized improvement opportunities
- **📋 Spec Kit Development Plan**: Roadmap for spec-driven development

All files will be timestamped and organized for easy reference and team sharing.

## 🔄 Incremental Research Process

I'll first check for existing research files and build upon previous findings:

### Smart Research Workflow:
1. **🔍 Check Existing Research** - Look for previous analysis in `specs/research/`
2. **📊 Load Previous Findings** - Read existing recommendations and assessments  
3. **🔄 Incremental Analysis** - Focus on changes since last research
4. **📝 Update Documentation** - Enhance existing files with new insights
5. **🎯 Refresh Recommendations** - Update priority matrix based on new findings

### File Management Strategy:
- **Main Research File**: `specs/research/codebase-analysis-latest.md` (always current)
- **Historical Archive**: `specs/research/archive/codebase-analysis-[timestamp].md`
- **Change Tracking**: `specs/research/research-changelog.md` (incremental updates)
- **Recommendations Index**: `specs/research/recommendations-index.md` (quick reference)

## 🚀 Let's Begin Research

I'll start by:
1. Creating the research directory structure (`specs/research/`)
2. Checking for existing research files
3. Loading previous findings (if any) to build upon
4. Performing systematic analysis (incremental or comprehensive)
5. Saving all findings to organized markdown files

**If this is your first research run, I'll perform a comprehensive analysis. If previous research exists, I'll do an incremental update focusing on changes and new opportunities.**

Ready to dive deep into your codebase! What aspects would you like me to focus on first, or shall I begin with the intelligent analysis process?