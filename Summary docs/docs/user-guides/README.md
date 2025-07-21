# User Guides

The Symflowise.ai platform is designed for several key user roles, each with distinct interactions and goals:

*   **End-Users/Customers:** Individuals seeking support or information.
*   **Contact Center Agents Human:** Support staff handling customer inquiries.
*   **AI Agents:** Automated systems providing initial support and task execution.
*   **Administrators/Client Admins:** Personnel responsible for platform setup, configuration, and management.
*   **Supervisors/QA Personnel:** Staff focused on monitoring service quality and agent performance.
*   **Campaign Managers:** Users responsible for planning and executing bulk outreach campaigns.

### Visualizing the End-to-End User Flow

```mermaid
graph TD
    A[Customer Initiates via <br>Web Chat / Voice / Portal <br>Multi-Channel] --> B(AI Agent Engages);

    subgraph AI Processing [AI Efficiency]
        B --> C{Understands Query NLU};
        C --> D[Accesses Knowledge Base/Systems];
        D --> E[Provides Self-Service / Resolves Simple Issue];
    end

    E --> F{Issue Resolved by AI?};
    F -- Yes --> G[End: Resolved by AI];
    F -- No --> HNeeds Human Assistance;

    subgraph Escalation [Seamless Escalation]
        H --> I[Context + CRM Data Transferred];
    end

    I --> JHuman Agent Engages;

    subgraph Human Agent Handling [CRM Integration Benefits]
        J --> K[Reviews Transferred Context <br>& Integrated CRM Data];
        K --> L[Provides Advanced Support <br> & Personalized Interaction];
    end

    L --> M[End: Resolved by Human];
```
