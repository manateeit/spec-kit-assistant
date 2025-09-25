# Spec Kit Assistant Prompt Templates

## Overview

This comprehensive template library provides ready-to-use prompt patterns for all phases of the Spec Kit Assistant workflow. Templates are organized by phase and project type, enabling rapid deployment of high-quality, specification-driven development processes.

## Template Classification System

### By Development Phase
- **Specification Templates**: Requirements gathering and documentation
- **Planning Templates**: Technical architecture and implementation strategy
- **Task Templates**: Work breakdown and execution planning
- **Analysis Templates**: Quality assessment and validation

### By Project Complexity
- **Simple**: Single-component projects, straightforward requirements
- **Moderate**: Multi-component systems with standard integration
- **Complex**: Enterprise-scale systems with multiple stakeholders

### By Domain Type
- **Dashboard/Analytics**: Data visualization and reporting systems
- **API/Backend**: Service architecture and data processing
- **Frontend/Mobile**: User interface and interaction systems
- **Integration**: System connectivity and data synchronization
- **Infrastructure**: Deployment, monitoring, and operational systems

## Phase 1: Specification Templates

### Universal Specification Template
```markdown
# [PROJECT_NAME] Specification

You are creating a comprehensive specification for [PROJECT_TYPE] using the GitHub Spec Kit methodology. Please develop a detailed requirements document that covers:

## 1. CORE FUNCTIONALITY
- **Primary Purpose**: What core problem does this solve?
- **Target Users**: Who will use this system and what are their roles?
- **Key Features**: What are the essential capabilities users need?
- **Success Criteria**: How will we measure successful implementation?

## 2. USER EXPERIENCE REQUIREMENTS
- **User Journeys**: Map the complete user workflow from start to finish
- **Interface Requirements**: Describe the interaction patterns and UI needs
- **Accessibility**: Specify compliance requirements (WCAG, mobile, etc.)
- **Performance Expectations**: Define response times, load requirements

## 3. TECHNICAL REQUIREMENTS
- **Integration Points**: What systems need to connect to this?
- **Data Requirements**: What information needs to be stored, processed, or displayed?
- **Security Requirements**: Authentication, authorization, data protection needs
- **Scalability Requirements**: Expected growth and capacity planning

## 4. BUSINESS CONTEXT
- **Business Objectives**: How does this support organizational goals?
- **Stakeholder Impact**: Who benefits and what value do they receive?
- **Constraints**: Budget, timeline, regulatory, or technical limitations
- **Dependencies**: What other projects or systems does this rely on?

## 5. QUALITY AND VALIDATION
- **Acceptance Criteria**: Specific, measurable success conditions
- **Testing Strategy**: How will functionality be validated?
- **Edge Cases**: Unusual scenarios and error handling requirements
- **Maintenance Requirements**: Ongoing support and update needs

PROJECT CONTEXT:
- Industry: [INDUSTRY_SECTOR]
- Organization Size: [SMALL/MEDIUM/LARGE/ENTERPRISE]
- Technical Environment: [TECH_STACK_PREFERENCES]
- Timeline: [PROJECT_DURATION]
- Budget Range: [BUDGET_CONSTRAINTS]
- Compliance Requirements: [REGULATORY_NEEDS]

Please create a comprehensive specification that addresses each section with specific, actionable requirements. Focus on clarity, completeness, and implementability.
```

### Dashboard Specification Template
```markdown
# [DASHBOARD_NAME] Analytics Specification

Create a comprehensive specification for a business intelligence dashboard with the following focus areas:

## DATA FOUNDATION
- **Data Sources**: Identify all source systems, databases, APIs, files
- **Data Types**: Quantitative metrics, categorical dimensions, temporal data
- **Data Quality**: Validation rules, cleansing requirements, accuracy standards
- **Data Refresh**: Real-time, batch, scheduled update requirements
- **Historical Data**: Retention periods, trending, and historical comparison needs

## VISUALIZATION REQUIREMENTS
- **Chart Types**: Specific visualization needs (bar, line, pie, heat map, etc.)
- **Interactive Features**: Filtering, drilling down, cross-filtering capabilities
- **Responsive Design**: Mobile, tablet, desktop optimization requirements
- **Customization**: User personalization, saved views, custom report generation

## USER ACCESS AND PERMISSIONS
- **User Roles**: Executive, manager, analyst, end-user permission levels
- **Data Security**: Row-level security, column masking, sensitive data protection
- **Authentication**: SSO, LDAP, or custom authentication requirements
- **Audit Requirements**: User activity tracking, data access logging

## PERFORMANCE AND SCALABILITY
- **Load Time Requirements**: Dashboard load time, query response time expectations
- **Concurrent Users**: Expected peak usage, performance under load
- **Data Volume**: Current and projected data sizes, query optimization needs
- **Caching Strategy**: Static data caching, query result optimization

## BUSINESS INTELLIGENCE FEATURES
- **KPI Monitoring**: Key performance indicators and threshold alerting
- **Trend Analysis**: Time-series analysis, forecasting capabilities
- **Comparative Analysis**: Period-over-period, benchmark comparisons
- **Export Capabilities**: PDF reports, Excel exports, scheduled delivery

Current Business Context:
- Primary Business Function: [FUNCTION]
- Key Stakeholders: [STAKEHOLDER_ROLES]
- Decision-Making Level: [OPERATIONAL/TACTICAL/STRATEGIC]
- Existing BI Tools: [CURRENT_TOOLS]
- Data Infrastructure: [DATA_ENVIRONMENT]
```

### API Specification Template  
```markdown
# [API_NAME] Service Specification

Develop a comprehensive API specification following RESTful principles:

## SERVICE ARCHITECTURE
- **Service Purpose**: Core business capability this API provides
- **Resource Model**: Primary entities, relationships, and data structures
- **API Style**: RESTful patterns, resource naming conventions
- **Versioning Strategy**: API version management and backward compatibility

## ENDPOINT SPECIFICATIONS
- **Resource Endpoints**: CRUD operations for each entity type
- **Search and Filtering**: Query parameters, sorting, pagination
- **Bulk Operations**: Batch processing capabilities for efficiency
- **Custom Operations**: Business-specific actions beyond standard CRUD

## DATA CONTRACTS
- **Request/Response Models**: JSON schemas, field validation rules
- **Error Response Standards**: Consistent error codes, message formats
- **Pagination Patterns**: Cursor-based or offset pagination
- **Content Negotiation**: Response formats (JSON, XML, CSV)

## SECURITY AND AUTHENTICATION
- **Authentication Method**: API keys, OAuth 2.0, JWT tokens
- **Authorization Model**: Role-based, resource-based permissions
- **Rate Limiting**: Request throttling, usage quotas
- **Input Validation**: SQL injection prevention, data sanitization

## INTEGRATION REQUIREMENTS
- **External Dependencies**: Third-party services, databases, message queues
- **Webhook Support**: Event-driven notifications, callback mechanisms
- **Monitoring and Logging**: Request tracing, performance metrics
- **Documentation**: OpenAPI/Swagger specification generation

Technical Environment:
- Preferred Framework: [FRAMEWORK_CHOICE]
- Database Technology: [DATABASE_TYPE]
- Authentication Provider: [AUTH_SYSTEM]
- Deployment Platform: [CLOUD_PLATFORM]
- Performance Requirements: [SLA_EXPECTATIONS]
```

## Phase 2: Planning Templates

### Universal Planning Template
```markdown
# [PROJECT_NAME] Technical Planning

Create a comprehensive technical plan that transforms the specification into an implementable solution:

## 1. ARCHITECTURE FOUNDATION
- **System Architecture**: High-level component design and interactions
- **Technology Stack**: Framework, database, infrastructure choices with justifications
- **Design Patterns**: Architectural patterns, coding standards, best practices
- **Scalability Strategy**: Horizontal/vertical scaling approaches, load balancing

## 2. IMPLEMENTATION STRATEGY
- **Development Approach**: Agile methodology, development phases, iteration planning
- **Code Organization**: Project structure, module boundaries, dependency management
- **Database Design**: Schema design, relationships, indexing strategy, migrations
- **API Design**: Interface contracts, versioning, backwards compatibility

## 3. INTEGRATION PLANNING
- **External Systems**: Third-party services, legacy system integration points
- **Data Flow**: Information movement, transformation, synchronization strategies
- **Authentication/Authorization**: Security implementation, user management, permissions
- **Monitoring and Logging**: Observability, error tracking, performance monitoring

## 4. QUALITY ASSURANCE
- **Testing Strategy**: Unit, integration, end-to-end testing approaches
- **Code Quality**: Linting, formatting, code review processes
- **Security Measures**: Vulnerability scanning, penetration testing, compliance
- **Performance Optimization**: Caching, query optimization, resource management

## 5. DEPLOYMENT AND OPERATIONS
- **Environment Strategy**: Development, staging, production environment setup
- **CI/CD Pipeline**: Automated testing, building, deployment processes
- **Infrastructure**: Hosting, scaling, backup, disaster recovery planning
- **Maintenance Plan**: Updates, patches, technical debt management

## 6. RISK ASSESSMENT
- **Technical Risks**: Technology limitations, integration challenges, performance bottlenecks
- **Resource Risks**: Skill gaps, timeline constraints, dependency delays
- **Business Risks**: Requirement changes, stakeholder alignment, market factors
- **Mitigation Strategies**: Risk reduction approaches, contingency planning

PROJECT PARAMETERS:
- Team Size: [NUMBER_OF_DEVELOPERS]
- Timeline: [PROJECT_DURATION]
- Budget: [RESOURCE_CONSTRAINTS]
- Complexity Level: [SIMPLE/MODERATE/COMPLEX]
- Performance Requirements: [SPECIFIC_SLA_NEEDS]
- Security Level: [SECURITY_CLASSIFICATION]

Create a detailed plan that provides clear guidance for implementation while maintaining flexibility for iteration and improvement.
```

### Microservices Architecture Planning Template
```markdown
# [SYSTEM_NAME] Microservices Architecture Plan

Design a microservices-based solution with the following architectural considerations:

## SERVICE DECOMPOSITION STRATEGY
- **Domain Boundaries**: Business capability alignment, bounded contexts
- **Service Granularity**: Right-sizing services, avoiding nano-services
- **Data Ownership**: Database per service, data sovereignty principles
- **Communication Patterns**: Synchronous vs asynchronous, event-driven architecture

## TECHNOLOGY STACK SELECTION
- **Service Framework**: Spring Boot, Node.js, .NET Core framework selection
- **Database Strategy**: SQL vs NoSQL per service, polyglot persistence
- **Message Broker**: RabbitMQ, Apache Kafka, cloud-native messaging
- **API Gateway**: Kong, Ambassador, AWS API Gateway selection criteria

## CROSS-CUTTING CONCERNS
- **Service Discovery**: Consul, Eureka, Kubernetes service mesh
- **Configuration Management**: Centralized config, environment-specific settings
- **Distributed Tracing**: Jaeger, Zipkin, observability strategy
- **Circuit Breaker**: Hystrix, resilience patterns, fault tolerance

## DEPLOYMENT AND ORCHESTRATION
- **Containerization**: Docker, image management, registry strategy
- **Orchestration Platform**: Kubernetes, Docker Swarm, cloud container services
- **CI/CD Pipeline**: Per-service vs monorepo, deployment coordination
- **Environment Management**: Development, staging, production isolation

## DATA MANAGEMENT
- **Event Sourcing**: Event store design, replay capabilities, versioning
- **CQRS Implementation**: Command/query separation, read model optimization
- **Data Consistency**: Eventual consistency, saga pattern, distributed transactions
- **Backup and Recovery**: Service-specific backup strategies, disaster recovery

Organizational Context:
- Team Structure: [TEAM_ORGANIZATION]
- DevOps Maturity: [DEVOPS_LEVEL]
- Cloud Strategy: [CLOUD_PREFERENCE]
- Compliance Requirements: [REGULATORY_NEEDS]
- Legacy Integration: [EXISTING_SYSTEMS]
```

## Phase 3: Task Templates

### Universal Task Breakdown Template
```markdown
# [PROJECT_NAME] Implementation Tasks

Break down the technical plan into specific, actionable tasks with clear deliverables:

## SETUP AND FOUNDATION TASKS
### Environment Setup
- **Task**: Configure development environment
  - **Deliverable**: Working local development setup for all team members
  - **Acceptance Criteria**: All developers can run, test, and debug locally
  - **Effort**: [TIME_ESTIMATE]
  - **Dependencies**: Tool selection, access provisioning

- **Task**: Establish CI/CD pipeline
  - **Deliverable**: Automated build, test, and deployment pipeline
  - **Acceptance Criteria**: Code changes automatically build and deploy to staging
  - **Effort**: [TIME_ESTIMATE]
  - **Dependencies**: Infrastructure access, security approval

### Database and Infrastructure
- **Task**: Design and implement database schema
  - **Deliverable**: Production-ready database with all required tables and relationships
  - **Acceptance Criteria**: Schema supports all specification requirements with proper indexing
  - **Effort**: [TIME_ESTIMATE]
  - **Dependencies**: Architecture decisions, data modeling completion

## CORE FEATURE IMPLEMENTATION
### [Feature 1 Name]
- **Task**: Implement [specific functionality]
  - **Deliverable**: Working feature with comprehensive test coverage
  - **Acceptance Criteria**: Feature meets all specification requirements and passes QA
  - **Test Requirements**: Unit tests (90%+ coverage), integration tests, E2E validation
  - **Effort**: [TIME_ESTIMATE]
  - **Dependencies**: [list dependencies]

### [Feature 2 Name]  
- **Task**: Build [specific capability]
  - **Deliverable**: Complete feature implementation with documentation
  - **Acceptance Criteria**: Stakeholder acceptance, performance benchmarks met
  - **Test Requirements**: Load testing, security testing, user acceptance testing
  - **Effort**: [TIME_ESTIMATE]
  - **Dependencies**: [list dependencies]

## INTEGRATION AND QUALITY TASKS
### System Integration
- **Task**: Integrate with [external system]
  - **Deliverable**: Reliable data exchange with error handling
  - **Acceptance Criteria**: Integration handles edge cases and failure scenarios
  - **Effort**: [TIME_ESTIMATE]
  - **Dependencies**: External system access, API documentation

### Testing and Validation
- **Task**: Comprehensive testing implementation  
  - **Deliverable**: Full test suite with automated execution
  - **Acceptance Criteria**: 95%+ test coverage, all critical paths tested
  - **Effort**: [TIME_ESTIMATE]
  - **Dependencies**: Feature completion, test data preparation

## DEPLOYMENT AND FINALIZATION
### Production Deployment
- **Task**: Deploy to production environment
  - **Deliverable**: Live system accessible to end users
  - **Acceptance Criteria**: Zero-downtime deployment, monitoring active
  - **Effort**: [TIME_ESTIMATE]
  - **Dependencies**: Infrastructure setup, security clearance

### Documentation and Training
- **Task**: Create user and technical documentation
  - **Deliverable**: Complete documentation suite for users and maintainers
  - **Acceptance Criteria**: Documentation enables independent system usage and maintenance
  - **Effort**: [TIME_ESTIMATE]
  - **Dependencies**: Feature completion, stakeholder review

TASK ORGANIZATION:
- Total Estimated Effort: [TOTAL_TIME]
- Critical Path: [KEY_DEPENDENCIES]
- Parallel Work Streams: [CONCURRENT_TASKS]
- Resource Requirements: [SKILL_NEEDS]
- Risk Mitigation: [RISK_STRATEGIES]

Each task should be sized for completion within one development iteration (1-2 weeks) and include specific, measurable acceptance criteria.
```

### Frontend Development Task Template
```markdown
# [FRONTEND_PROJECT] UI Implementation Tasks

Organize frontend development into component-based, user-centered tasks:

## UI COMPONENT DEVELOPMENT
### Core Components
- **Task**: Build reusable UI component library
  - **Components**: Button, Input, Modal, Card, Table, Form components
  - **Deliverable**: Storybook with all components documented and interactive
  - **Acceptance Criteria**: Components follow design system, accessibility standards
  - **Testing**: Visual regression tests, accessibility audits, cross-browser validation
  - **Effort**: [TIME_ESTIMATE]

### Page Components  
- **Task**: Implement [specific page] interface
  - **Deliverable**: Responsive page component with full functionality
  - **Acceptance Criteria**: Matches design specifications, mobile-friendly, performant
  - **Testing**: E2E user journey tests, responsive design validation
  - **Effort**: [TIME_ESTIMATE]

## STATE MANAGEMENT AND DATA FLOW
### Data Layer Implementation
- **Task**: Implement state management solution
  - **Deliverable**: Redux/Context API setup with data persistence
  - **Acceptance Criteria**: Predictable state updates, optimistic UI updates
  - **Testing**: State transition tests, data synchronization validation
  - **Effort**: [TIME_ESTIMATE]

### API Integration
- **Task**: Connect frontend to backend services
  - **Deliverable**: Data fetching, error handling, loading states
  - **Acceptance Criteria**: Graceful error handling, offline capability consideration
  - **Testing**: API integration tests, error scenario validation
  - **Effort**: [TIME_ESTIMATE]

## USER EXPERIENCE OPTIMIZATION
### Performance Optimization
- **Task**: Implement performance best practices
  - **Deliverable**: Code splitting, lazy loading, optimized bundle sizes
  - **Acceptance Criteria**: Page load times under 3 seconds, 90+ Lighthouse scores
  - **Testing**: Performance audits, bundle analysis, load testing
  - **Effort**: [TIME_ESTIMATE]

### Accessibility Implementation
- **Task**: Ensure WCAG 2.1 AA compliance
  - **Deliverable**: Screen reader support, keyboard navigation, color contrast
  - **Acceptance Criteria**: Automated accessibility tests pass, manual testing verification
  - **Testing**: Screen reader testing, keyboard navigation validation
  - **Effort**: [TIME_ESTIMATE]

Technology Context:
- Frontend Framework: [REACT/VUE/ANGULAR]
- State Management: [REDUX/CONTEXT/VUEX]
- Styling Approach: [TAILWIND/STYLED_COMPONENTS/CSS_MODULES]
- Testing Framework: [JEST/VITEST/CYPRESS]
- Build Tool: [VITE/WEBPACK/PARCEL]
```

## Phase 4: Analysis Templates

### Universal Analysis Template
```markdown
# [PROJECT_NAME] Comprehensive Analysis

Conduct a thorough analysis of the specification, plan, and task breakdown:

## ANALYSIS FRAMEWORK
Evaluate across four key dimensions with specific scoring criteria:

### 1. COMPLETENESS ASSESSMENT (Weight: 25%)
**Functional Completeness Review**
- Are all user stories fully defined with acceptance criteria?
- Have edge cases and error scenarios been addressed?
- Are integration points and dependencies clearly mapped?
- Is the testing strategy comprehensive and achievable?

**Technical Completeness Review**
- Are architecture decisions justified and documented?
- Has the technology stack been validated for requirements?
- Are performance and scalability requirements achievable?
- Have security and compliance measures been specified?

**Documentation Completeness Review**  
- Are API contracts and interface specifications complete?
- Have deployment and operational procedures been documented?
- Is the maintenance and support approach clearly defined?
- Are quality gates and validation checkpoints established?

**Scoring Criteria**: Award 0-100 points based on coverage completeness

### 2. FEASIBILITY ANALYSIS (Weight: 30%)
**Technical Feasibility Assessment**
- Is the proposed technology stack mature and appropriate?
- Are the team skills aligned with technology requirements?
- Can the architecture support projected growth and load?
- Are external dependencies reliable and well-documented?

**Timeline and Resource Feasibility**
- Are development effort estimates realistic and justified?
- Have critical path dependencies been identified and managed?
- Is team capacity sufficient for the proposed timeline?
- Are external coordination requirements manageable?

**Risk and Mitigation Evaluation**
- Have major technical risks been identified and addressed?
- Are business continuity and rollback plans adequate?
- Has regulatory and compliance risk been properly assessed?
- Do mitigation strategies reduce risks to acceptable levels?

**Scoring Criteria**: Evaluate likelihood of successful implementation

### 3. BUSINESS ALIGNMENT (Weight: 20%)
**Strategic Alignment Validation**
- How well does the solution address the core business problem?
- Are business objectives clearly linked to technical features?
- Does the approach align with organizational technology strategy?
- Will the solution provide measurable competitive advantage?

**Stakeholder Value Assessment**
- What specific improvements will end users experience?
- How will operational efficiency be enhanced?
- Are success metrics clearly defined and measurable?
- Is the return on investment timeframe acceptable?

**Market and Competitive Analysis**
- Does the solution meet current market expectations?
- How does it compare to competitive alternatives?
- Will it position the organization advantageously?
- Are emerging trends and technologies considered?

**Scoring Criteria**: Assess business value delivery potential

### 4. QUALITY VALIDATION (Weight: 25%)
**Architecture Quality Review**
- Are design patterns appropriate and consistently applied?
- Will the architecture support long-term maintainability?
- Have scalability and performance characteristics been validated?
- Is the security architecture robust and comprehensive?

**Code Quality Standards**
- Are coding standards and style guides clearly defined?
- Is the code review process adequate for quality assurance?
- Are automated testing requirements comprehensive?
- Has technical debt management been planned?

**Process Quality Assessment**
- Does the development methodology fit the project characteristics?
- Are quality assurance processes integrated throughout?
- Is change management adequately planned?
- Are documentation standards appropriate and enforceable?

**Scoring Criteria**: Evaluate long-term sustainability and maintainability

## ANALYSIS EXECUTION METHODOLOGY

### Pre-Analysis Preparation
1. **Artifact Collection**: Gather all specification, planning, and task documentation
2. **Stakeholder Input**: Collect feedback from key stakeholders and SMEs
3. **Baseline Establishment**: Define quality standards and success criteria
4. **Analysis Scope**: Determine focus areas and depth requirements

### Systematic Evaluation Process
1. **Independent Assessment**: Evaluate each dimension separately
2. **Cross-Validation**: Check for consistency across all dimensions
3. **Risk Correlation**: Identify relationships between risks and feasibility
4. **Improvement Identification**: Pinpoint specific enhancement opportunities

### Scoring and Recommendation Generation
1. **Dimensional Scoring**: Apply 0-100 scale to each major dimension
2. **Weighted Composite**: Calculate overall score using dimension weights
3. **Threshold Evaluation**: Compare against organizational quality standards
4. **Recommendation Formulation**: Generate specific, actionable improvements

## ANALYSIS DELIVERABLES

### Executive Summary
- Overall Quality Score: [X]/100
- Implementation Recommendation: [Proceed/Revise/Redesign]
- Critical Success Factors: [Top 3 factors for success]
- Immediate Action Items: [Priority 1 tasks requiring attention]

### Detailed Assessment Report
- Completeness Score: [X]/100 with specific gap identification
- Feasibility Score: [X]/100 with risk assessment details
- Business Alignment Score: [X]/100 with value proposition validation
- Quality Score: [X]/100 with sustainability evaluation

### Risk Assessment Matrix
- High-Risk Areas: [Identification + mitigation requirements]
- Medium-Risk Areas: [Monitoring strategies + contingency planning]
- Low-Risk Areas: [Acknowledgment + periodic review requirements]

### Improvement Roadmap
- Critical Improvements: [Must address before implementation]
- Important Enhancements: [Should address in next iteration]
- Optional Optimizations: [Consider for future improvements]

PROJECT ANALYSIS CONTEXT:
- Analysis Focus: [COMPLETENESS/FEASIBILITY/ALIGNMENT/QUALITY]
- Stakeholder Priorities: [SPEED/QUALITY/COST/FUNCTIONALITY]
- Risk Tolerance: [LOW/MEDIUM/HIGH]
- Quality Standards: [ORGANIZATIONAL_REQUIREMENTS]
- Success Criteria: [SPECIFIC_MEASURABLE_OUTCOMES]

Provide specific, evidence-based recommendations with clear rationale for each assessment and improvement suggestion.
```

## Specialized Domain Templates

### E-commerce Platform Templates
```markdown
# E-commerce Specification Template

## PRODUCT AND CATALOG MANAGEMENT
- Product information architecture, variant management, inventory tracking
- Category and taxonomy structure, search and filtering capabilities
- Pricing strategies, promotional capabilities, discount management
- Product lifecycle management, availability and stock control

## CUSTOMER EXPERIENCE
- User registration and profile management, account self-service
- Shopping cart functionality, wishlist and favorites management  
- Checkout process optimization, guest checkout capabilities
- Order tracking and history, return and refund processes

## PAYMENT AND FINANCIAL INTEGRATION
- Payment gateway integration, multiple payment method support
- Tax calculation and compliance, international pricing support
- Fraud prevention and risk management, PCI compliance requirements
- Financial reporting and reconciliation, accounting system integration

## OPERATIONAL REQUIREMENTS  
- Order management and fulfillment workflows
- Inventory management and supplier integration
- Customer service and support tools integration
- Analytics and reporting for business intelligence

Technical Considerations:
- Platform: [SHOPIFY/MAGENTO/CUSTOM]
- Traffic Expectations: [CONCURRENT_USERS]
- Geographic Scope: [MARKETS_SERVED]
- Integration Requirements: [ERP/CRM/SYSTEMS]
```

### Healthcare System Templates
```markdown
# Healthcare Application Specification Template

## PATIENT DATA MANAGEMENT
- Electronic health records (EHR) structure and accessibility
- Patient privacy and HIPAA compliance requirements
- Medical history tracking and clinical documentation
- Patient portal features and self-service capabilities

## CLINICAL WORKFLOW SUPPORT  
- Appointment scheduling and calendar management
- Clinical decision support tools and alerts
- Prescription management and e-prescribing capabilities
- Laboratory and diagnostic result integration

## REGULATORY AND COMPLIANCE
- HIPAA Privacy Rule and Security Rule compliance
- FDA regulations for medical device software (if applicable)
- State and federal healthcare regulations adherence
- Audit trail and compliance reporting requirements

## INTEROPERABILITY REQUIREMENTS
- HL7 FHIR standard implementation for data exchange
- Integration with existing hospital information systems
- Medical device integration and data aggregation
- Health information exchange (HIE) participation

Security and Privacy Context:
- Data Classification: [PHI/SENSITIVE]
- Access Controls: [RBAC_REQUIREMENTS]
- Encryption Standards: [AT_REST/IN_TRANSIT]
- Audit Requirements: [COMPLIANCE_LEVEL]
```

## Template Usage Guidelines

### Template Selection Criteria
1. **Project Type Matching**: Choose templates that align with the primary domain
2. **Complexity Alignment**: Select complexity level appropriate for project scope
3. **Customization Requirements**: Adapt templates for organization-specific needs
4. **Stakeholder Preferences**: Modify based on stakeholder communication preferences

### Template Customization Best Practices
1. **Industry-Specific Additions**: Add domain-specific requirements and constraints
2. **Organizational Standards**: Incorporate company-specific quality gates and processes
3. **Technology Preferences**: Adapt for preferred technology stacks and frameworks
4. **Compliance Requirements**: Include relevant regulatory and legal considerations

### Template Quality Assurance
1. **Regular Updates**: Keep templates current with industry best practices
2. **Feedback Integration**: Improve templates based on project outcome analysis
3. **Validation Testing**: Verify template effectiveness through pilot projects
4. **Version Management**: Maintain template versions and change documentation

## Advanced Template Features

### Dynamic Template Generation
Templates can be programmatically customized based on:
- Project type and complexity analysis
- Team skill assessment and preferences
- Organizational maturity and process requirements
- Industry-specific regulatory and compliance needs

### Template Composition
Complex projects may require template combination:
- **Multi-Domain Projects**: Blend API + Frontend + Infrastructure templates
- **Phased Development**: Use different templates for different project phases
- **Integration Projects**: Combine multiple system-specific templates

### Template Metrics and Optimization
Track template effectiveness through:
- Project success rate correlation with template usage
- Time-to-completion improvements with template adoption
- Quality score improvements from template-driven specifications
- Stakeholder satisfaction with template-guided processes

This comprehensive template library enables rapid deployment of high-quality, specification-driven development processes while maintaining flexibility for project-specific customization and organizational adaptation.