# Administrators/Client Admins (Platform Setup & Management)

*   **Initiation/Engagement:**
    *   Logs into the administration portal.
*   **Key Interactions & Touchpoints:**
    *   Goes through guided onboarding and setup.
    *   Configures support channels, branding, multi-language options.
    *   Manages integrations (CRMs, KBs).
    *   Sets AI agent parameters and intelligent routing rules.
    *   Manages user accounts and roles.
    *   Creates/modifies automated workflows and escalation paths.
    *   Accesses analytics dashboard for platform monitoring.
*   **Decision Points & Potential Paths:**
    *   Decides on specific configurations for channels, AI, routing.
    *   Manages user roles and integration setups.
*   **Tools/Features Interacted With:**
    *   Admin portal, onboarding tools, workflow configuration, integration management, user management, analytics dashboard.
*   **Typical Outcome/Goal:**
    *   Onboard company, configure platform to business needs, manage users, maintain operational efficiency, gain insights via analytics.

```mermaid
graph TD
    subgraph "Initiation"
        A[Logs into Administration Portal];
    end

    subgraph "Onboarding & Initial Setup (New Client)"
        A --> B{New Client Onboarding?};
        B -- Yes --> B1[Goes through Guided Setup];
        B1 --> B2[Answers Setup Questions to Configure Workflows];
        B2 --> B3[Uses Prebuilt Industry Templates (e.g., E-commerce)];
        B3 --> C;
        B -- No / Existing Client --> C;
    end

    subgraph "Platform Configuration Management"
        C --> C_CHANNELS[Configures Support Channels <br>(Voice, Chat, Web Forms)];
        C_CHANNELS --> C_BRANDING[Customizes Branding for User Portal];
        C_BRANDING --> C_LANG[Sets up Multi-Language Support Options];
        C_LANG --> C_INTEGRATIONS{Manages Integrations?};
        C_INTEGRATIONS -- Yes --> C_INT_CRM[CRMs (Salesforce, HubSpot)];
        C_INT_CRM --> C_INT_KB[Knowledge Bases (Confluence, Jira)];
        C_INT_KB --> C_INT_OTHER[Other Third-Party Systems];
        C_INT_OTHER --> C_AI_PARAMS;
        C_INTEGRATIONS -- No --> C_AI_PARAMS;
        C_AI_PARAMS[Configures AI Agent Parameters <br>(e.g., Confidence Thresholds)];
        C_AI_PARAMS --> C_ROUTING[Sets up Intelligent Routing Rules <br>(Skill-based, Priority-based)];
    end

    subgraph "User & Workflow Management"
        C_ROUTING --> D_USERS{Manages User Accounts & Roles?};
        D_USERS -- Yes --> D1[Adds/Modifies Agents, Supervisors];
        D_USERS -- No --> D_WF;
        D1 --> D_WF;
        D_WF{Manages Workflows?};
        D_WF -- Yes --> D2[Creates/Modifies Automated Workflows];
        D2 --> D3[Configures Escalation Paths];
        D_WF -- No --> E;
        D3 --> E;
    end

    subgraph "Monitoring & Reporting"
        E[Accesses Analytics Dashboard];
        E --> E1[Monitors Platform Usage, Agent Performance, KPIs];
        E1 --> E2{Exports Reports?};
        E2 -- Yes --> E3[Exports Reports];
        E2 -- No --> F_END_MONITORING;
        E3 --> F_END_MONITORING;
    end

    subgraph "Ongoing Decisions & Actions"
        ONGOING_CONFIG{Add/Modify Configuration Decision?} --> C; % Loop back to config
        ONGOING_USERS{User Management Decision?} --> D_USERS; % Loop back to user mgmt
        ONGOING_INTEGRATE{Integration Setup Decision?} --> C_INTEGRATIONS; % Loop back to integrations
    end

    subgraph "Tools/Features Used (Examples)"
        direction LR
        TOOL_PORTAL[Admin Portal/Dashboard]
        TOOL_ONBOARD[Onboarding Automation Tools]
        TOOL_WF_CONFIG[Workflow Configuration Tools]
        TOOL_INT_MGMT[Integration Management Interface]
        TOOL_USER_MGMT[User Management Interface]
        TOOL_ANALYTICS[Analytics Dashboard]
        TOOL_CUSTOM[Customization Settings (Branding, Language)]
    end

    subgraph "Outcomes & Goals"
        F_END_MONITORING --> GOAL1([Goal: Successful Company Onboarding]);
        F_END_MONITORING --> GOAL2([Goal: Platform Configured to Business Needs]);
        F_END_MONITORING --> GOAL3([Goal: Users Managed, Platform Operationally Efficient]);
        F_END_MONITORING --> GOAL4([Goal: Insights Gained from Analytics]);
    end

    classDef initiation fill:#f9f,stroke:#333,stroke-width:2px;
    classDef onboarding fill:#ccf,stroke:#333,stroke-width:2px;
    classDef config fill:#cfc,stroke:#333,stroke-width:2px;
    classDef user_workflow_mgmt fill:#ff9,stroke:#333,stroke-width:2px;
    classDef monitoring fill:#e9d2ff,stroke:#333,stroke-width:2px;
    classDef decisions fill:#fcc,stroke:#333,stroke-width:2px;
    classDef tools fill:#eee,stroke:#333,stroke-width:1px,color:#333;
    classDef outcome_goal fill:#cff,stroke:#333,stroke-width:2px;

    class A initiation;
    class B,B1,B2,B3 onboarding;
    class C,C_CHANNELS,C_BRANDING,C_LANG,C_INTEGRATIONS,C_INT_CRM,C_INT_KB,C_INT_OTHER,C_AI_PARAMS,C_ROUTING config;
    class D_USERS,D1,D_WF,D2,D3 user_workflow_mgmt;
    class E,E1,E2,E3,F_END_MONITORING monitoring;
    class ONGOING_CONFIG,ONGOING_USERS,ONGOING_INTEGRATE decisions;
    class TOOL_PORTAL,TOOL_ONBOARD,TOOL_WF_CONFIG,TOOL_INT_MGMT,TOOL_USER_MGMT,TOOL_ANALYTICS,TOOL_CUSTOM tools;
    class GOAL1,GOAL2,GOAL3,GOAL4 outcome_goal;
```
