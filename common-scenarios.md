# Common Scenarios and Templates

## Overview

This guide provides scenario-specific templates and workflows for common development situations encountered when using the Spec Kit Assistant. Each scenario includes context identification, appropriate template selection, and customized workflow guidance to ensure optimal outcomes.

## Scenario Classification Framework

### By Project Origin
- **Greenfield Projects**: New development from scratch
- **Legacy Modernization**: Updating or replacing existing systems
- **Feature Enhancement**: Adding capabilities to existing systems
- **System Integration**: Connecting disparate systems
- **Performance Optimization**: Improving existing system performance

### By Stakeholder Complexity
- **Single Stakeholder**: Clear ownership and decision-making
- **Multiple Internal Stakeholders**: Cross-departmental coordination
- **External Stakeholder Integration**: Client or partner involvement
- **End-User Driven**: Heavy user experience focus

### By Technical Complexity
- **Simple CRUD Applications**: Basic data management systems
- **Complex Business Logic**: Multi-step workflows and rules
- **High-Performance Systems**: Scalability and speed requirements
- **Highly Regulated Environments**: Compliance and audit requirements

## Primary Development Scenarios

### Scenario 1: Executive Dashboard Development
**Context**: C-suite executives need real-time business intelligence dashboard

**Stakeholder Profile**:
- Primary: CEO, CFO, COO
- Secondary: Department heads, analysts
- End Users: Executive assistants, board members

**Common Characteristics**:
- High-level metrics focus
- Mobile accessibility critical
- Real-time or near real-time data
- Visual appeal and simplicity essential
- Security and access control important

**Spec Kit Workflow Customization**:
```
Phase 1 - Specification Focus Areas:
- Business KPI identification and prioritization
- Executive user journey mapping (mobile-first)
- Data source integration requirements
- Visual design and branding requirements
- Security and access control specifications

Phase 2 - Planning Emphasis:
- Real-time data pipeline architecture
- Mobile-responsive design strategy
- Performance optimization for quick loading
- Role-based access control implementation
- Data refresh and caching strategies

Phase 3 - Task Prioritization:
- Data integration and ETL development
- Responsive dashboard UI implementation
- Authentication and authorization system
- Performance optimization and caching
- User acceptance testing with executives

Phase 4 - Analysis Criteria:
- Executive usability validation
- Mobile performance assessment
- Data accuracy and reliability verification
- Security audit and penetration testing
```

**Specification Template Adaptation**:
```markdown
# Executive Dashboard Specification

## BUSINESS INTELLIGENCE REQUIREMENTS
- **Key Performance Indicators**: Revenue, profit margins, customer metrics, operational efficiency
- **Decision Support**: Trend analysis, comparative performance, predictive insights
- **Reporting Frequency**: Real-time updates, daily/weekly/monthly aggregations
- **Historical Analysis**: Year-over-year comparisons, seasonal trends, growth projections

## EXECUTIVE USER EXPERIENCE
- **Access Patterns**: Mobile-first during travel, desktop in office, quick morning briefings
- **Interaction Style**: Minimal clicks, drill-down capability, export for presentations
- **Customization Needs**: Personal KPI preferences, department filtering, alert thresholds
- **Time Constraints**: 30-second overview capability, 2-minute deep dive maximum

## DATA INTEGRATION COMPLEXITY
- **Source Systems**: ERP, CRM, financial systems, marketing platforms, operational databases
- **Data Quality Requirements**: 99.9% accuracy for financial data, real-time operational metrics
- **Integration Patterns**: API polling, webhook notifications, batch processing for historical data
- **Data Governance**: Audit trails, data lineage, compliance with financial regulations

## TECHNICAL PERFORMANCE REQUIREMENTS
- **Load Time**: Under 2 seconds on mobile, under 1 second on desktop
- **Concurrent Users**: 50+ executives potentially accessing simultaneously
- **Uptime Requirements**: 99.95% availability during business hours
- **Scalability**: Support for additional data sources and metrics over time
```

### Scenario 2: Customer-Facing API Development
**Context**: External API for third-party integrations and mobile applications

**Stakeholder Profile**:
- Primary: External developers, integration partners
- Secondary: Internal product team, customer success
- End Users: Third-party applications, mobile app users

**Common Characteristics**:
- Public-facing with extensive documentation needs
- High availability and performance requirements
- Version management and backward compatibility
- Rate limiting and security controls
- Developer experience focus

**Spec Kit Workflow Customization**:
```
Phase 1 - Specification Focus Areas:
- API consumer use cases and integration patterns
- Resource modeling and data structures
- Authentication and authorization schemes
- Rate limiting and usage policies
- Error handling and response standards

Phase 2 - Planning Emphasis:
- RESTful API design principles
- Documentation and developer portal strategy
- Performance and scalability architecture
- Version management and deprecation strategy
- Monitoring and analytics implementation

Phase 3 - Task Prioritization:
- Core API endpoint implementation
- Authentication and rate limiting systems
- Comprehensive API documentation
- SDK development for popular languages
- Monitoring and alerting infrastructure

Phase 4 - Analysis Criteria:
- API design consistency and usability
- Performance under load testing
- Developer documentation completeness
- Security vulnerability assessment
```

**Specification Template Adaptation**:
```markdown
# Customer-Facing API Specification

## API CONSUMER ANALYSIS
- **Primary Use Cases**: Mobile app data synchronization, third-party service integration, webhook consumption
- **Integration Patterns**: Real-time data access, batch data export, event-driven notifications
- **Developer Personas**: Mobile developers, web developers, enterprise integration specialists
- **Technical Expertise Levels**: Junior developers need extensive documentation, senior developers need flexibility

## RESOURCE AND DATA MODEL
- **Core Resources**: Users, orders, products, analytics, configurations
- **Resource Relationships**: Parent-child relationships, many-to-many associations, hierarchical data
- **Data Formats**: JSON primary, XML optional, CSV for exports
- **Pagination Strategy**: Cursor-based for large datasets, offset for simple use cases

## SECURITY AND ACCESS CONTROL
- **Authentication Methods**: OAuth 2.0, API keys for simple integrations, JWT tokens for sessions
- **Authorization Levels**: Read-only, read-write, admin privileges, resource-specific permissions
- **Rate Limiting**: 1000 requests/hour for free tier, 10,000/hour for paid, burst capability
- **Data Privacy**: GDPR compliance, data anonymization options, user consent management

## DEVELOPER EXPERIENCE REQUIREMENTS
- **Documentation Standards**: OpenAPI 3.0 specification, interactive API explorer, code examples
- **SDK Support**: JavaScript, Python, PHP, Ruby, .NET libraries with comprehensive examples
- **Error Handling**: Consistent HTTP status codes, detailed error messages, recovery guidance
- **Testing Support**: Sandbox environment, test data sets, webhook testing tools
```

### Scenario 3: Legacy System Modernization
**Context**: Replacing or updating outdated systems while maintaining business continuity

**Stakeholder Profile**:
- Primary: IT leadership, system users, business process owners
- Secondary: Compliance, security, finance (budget approval)
- End Users: Existing system users requiring minimal disruption

**Common Characteristics**:
- Data migration complexity
- User training and change management
- Regulatory compliance maintenance
- Phased implementation requirements
- Risk mitigation focus

**Spec Kit Workflow Customization**:
```
Phase 1 - Specification Focus Areas:
- Current system functionality audit
- Business process impact assessment
- Data migration requirements and challenges
- User workflow preservation and improvement
- Compliance and regulatory requirement mapping

Phase 2 - Planning Emphasis:
- Phased migration strategy development
- Data conversion and validation approaches
- User training and change management planning
- Rollback and contingency planning
- Performance comparison with legacy system

Phase 3 - Task Prioritization:
- Data analysis and migration tooling
- Pilot implementation with limited users
- User training program development
- Parallel system testing and validation
- Go-live planning and cutover procedures

Phase 4 - Analysis Criteria:
- Data integrity and conversion accuracy
- User adoption and satisfaction metrics
- Business process continuity validation
- Performance improvement measurement
```

### Scenario 4: E-commerce Platform Development
**Context**: Online retail platform with complex business rules and integrations

**Stakeholder Profile**:
- Primary: Business owners, product managers, marketing team
- Secondary: Fulfillment, customer service, finance
- End Users: Customers, administrators, vendor partners

**Specification Template Adaptation**:
```markdown
# E-commerce Platform Specification

## CUSTOMER EXPERIENCE REQUIREMENTS
- **Product Discovery**: Advanced search, filtering, recommendations, wishlist functionality
- **Shopping Experience**: Cart management, saved for later, quick reorder, guest checkout
- **Account Management**: Profile management, order history, address book, payment methods
- **Customer Support**: Live chat integration, FAQ system, return/refund request portal

## BUSINESS LOGIC COMPLEXITY
- **Inventory Management**: Real-time stock levels, backorder handling, vendor drop-shipping
- **Pricing Engine**: Dynamic pricing, discount rules, loyalty programs, bulk pricing
- **Order Processing**: Multi-step workflows, approval processes, fulfillment routing
- **Financial Integration**: Payment processing, tax calculation, accounting system sync

## INTEGRATION ECOSYSTEM
- **Payment Gateways**: Multiple providers, wallet support, buy-now-pay-later options
- **Shipping Providers**: Rate calculation, label printing, tracking integration
- **Marketing Tools**: Email campaigns, analytics, social media integration
- **ERP Systems**: Inventory sync, financial reporting, vendor management

## SCALABILITY AND PERFORMANCE
- **Peak Load Handling**: Black Friday traffic spikes, flash sale capacity
- **Global Deployment**: Multi-region hosting, CDN integration, localization support
- **Database Optimization**: Product catalog performance, search indexing, caching strategies
- **Mobile Performance**: Progressive web app, native app API support, offline capability
```

### Scenario 5: Microservices Architecture Implementation
**Context**: Breaking down monolithic applications into microservices

**Planning Template Adaptation**:
```markdown
# Microservices Architecture Planning

## SERVICE DECOMPOSITION STRATEGY
- **Domain Boundary Analysis**: Business capability mapping, data ownership identification
- **Service Granularity Decision**: Right-sizing services, avoiding distributed monolith
- **Communication Patterns**: Synchronous vs asynchronous, event-driven architecture
- **Data Management**: Database per service, eventual consistency, saga patterns

## TECHNOLOGY STACK STANDARDIZATION
- **Service Framework Selection**: Spring Boot vs Node.js vs .NET Core evaluation
- **Container Strategy**: Docker standardization, image registry, security scanning
- **Service Mesh Implementation**: Istio vs Linkerd vs AWS App Mesh comparison
- **Observability Stack**: Jaeger tracing, Prometheus metrics, centralized logging

## ORGANIZATIONAL READINESS
- **Team Structure**: Conway's Law considerations, cross-functional team formation
- **DevOps Capabilities**: CI/CD pipeline per service, infrastructure as code
- **Monitoring and Operations**: Service mesh observability, distributed tracing
- **Cultural Transformation**: Failure tolerance, autonomous team empowerment

## MIGRATION STRATEGY
- **Strangler Fig Pattern**: Gradual service extraction, traffic routing strategies
- **Database Decomposition**: Data migration approaches, transactional consistency
- **Testing Strategy**: Contract testing, service virtualization, end-to-end validation
- **Rollback Planning**: Service rollback procedures, data consistency recovery
```

## Specialized Industry Scenarios

### Healthcare Systems
**Regulatory Context**: HIPAA, FDA, state healthcare regulations
**Data Sensitivity**: PHI protection, audit trail requirements
**Integration Complexity**: HL7 FHIR, medical device integration
**User Safety**: Clinical decision support, medication management

**Specification Focus**:
```markdown
## HEALTHCARE-SPECIFIC REQUIREMENTS
- **Patient Data Privacy**: HIPAA compliance, consent management, data minimization
- **Clinical Workflow Integration**: EMR integration, clinical decision support, care coordination
- **Regulatory Compliance**: FDA medical device software, state licensing requirements
- **Interoperability Standards**: HL7 FHIR implementation, medical terminology standardization

## CLINICAL USER EXPERIENCE
- **Provider Workflows**: Seamless EMR integration, minimal click requirements, mobile accessibility
- **Patient Portal Features**: Appointment scheduling, test results, secure messaging
- **Emergency Access**: Critical patient information availability, system reliability
- **Clinical Decision Support**: Evidence-based recommendations, drug interaction warnings
```

### Financial Services
**Regulatory Context**: SOX, PCI DSS, banking regulations
**Security Requirements**: Encryption, fraud detection, audit trails
**Performance Demands**: High-frequency trading, real-time processing
**Integration Complexity**: Banking systems, payment networks, regulatory reporting

### Educational Technology
**User Diversity**: Students, teachers, administrators, parents
**Accessibility Requirements**: WCAG compliance, assistive technology support
**Data Protection**: FERPA compliance, student privacy, parental consent
**Content Management**: Curriculum alignment, learning analytics, progress tracking

### Government Systems
**Regulatory Context**: Section 508 accessibility, security clearances
**Public Access Requirements**: Citizen-facing interfaces, transparency
**Integration Complexity**: Legacy system integration, inter-agency coordination
**Compliance Demands**: Security controls, audit requirements, data retention

## Scenario-Specific Prompt Modifications

### High-Security Environment Prompts
```markdown
Add the following security considerations to all phases:

SPECIFICATION PHASE ADDITIONS:
- Threat modeling and attack surface analysis
- Compliance framework mapping (SOC 2, ISO 27001, etc.)
- Data classification and handling requirements
- Identity and access management specifications

PLANNING PHASE ADDITIONS:
- Security architecture design patterns
- Encryption at rest and in transit strategies
- Vulnerability management and patch procedures
- Incident response and disaster recovery planning

TASK PHASE ADDITIONS:
- Security code review and SAST integration
- Penetration testing and vulnerability assessment
- Compliance audit preparation and evidence collection
- Security training and awareness program implementation
```

### Rapid Prototyping Scenarios
```markdown
Modify workflow for accelerated development cycles:

SPECIFICATION PHASE MODIFICATIONS:
- Focus on MVP requirements and core user journeys
- Defer complex integrations and edge cases
- Emphasize user feedback collection mechanisms
- Plan for iterative requirement evolution

PLANNING PHASE MODIFICATIONS:
- Select proven, rapid-development technologies
- Minimize custom development in favor of existing solutions
- Plan for technical debt and future refactoring
- Design for easy modification and feature addition

TASK PHASE MODIFICATIONS:
- Prioritize user-facing features over infrastructure
- Use automated testing to maintain quality with speed
- Plan for continuous deployment and feature flags
- Include user feedback integration tasks
```

## Template Selection Decision Matrix

### Project Type → Template Mapping
| Project Characteristics | Recommended Template Set | Key Customizations |
|------------------------|--------------------------|-------------------|
| B2B Dashboard + High Security | Executive Dashboard + High-Security | Enhanced compliance focus |
| Customer API + E-commerce | Customer API + E-commerce Platform | Payment and inventory integration |
| Legacy Migration + Healthcare | Legacy Modernization + Healthcare | HIPAA compliance, clinical workflows |
| Microservices + High Scale | Microservices Architecture + Performance | Load testing, auto-scaling |
| Rapid Prototype + Startup | Rapid Prototyping + MVP Focus | User feedback loops, iteration planning |

### Stakeholder Complexity → Workflow Modifications
- **Single Stakeholder**: Streamlined approval processes, direct communication
- **Multiple Internal**: Cross-functional workshops, stakeholder matrix, consensus building
- **External Partners**: Contract negotiations, SLA definitions, integration testing
- **End-User Heavy**: User research, usability testing, accessibility compliance

### Risk Level → Analysis Emphasis
- **Low Risk**: Standard quality gates, basic testing coverage
- **Medium Risk**: Enhanced validation, stakeholder reviews, pilot deployments
- **High Risk**: Comprehensive risk assessment, multiple validation phases, rollback planning
- **Critical Risk**: Formal approval processes, external audits, extensive contingency planning

This comprehensive scenario library enables rapid identification of appropriate workflows and templates for virtually any development situation, ensuring that the Spec Kit Assistant provides contextually relevant guidance for successful project outcomes.