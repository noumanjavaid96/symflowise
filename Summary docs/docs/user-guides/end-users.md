# End-Users/Customers (Seeking Support)

*   **Initiation/Engagement:**
    *   Contacts support via voice, chat, or web portal/form.
    *   May select language preference (English/French).
*   **Key Interactions & Touchpoints:**
    *   Interacts with an AI agent for initial query resolution (FAQs, order tracking).
    *   May use a Visual IVR.
    *   May search or be directed to a knowledge base.
    *   Provides details and answers questions.
    *   May undergo identity verification.
    *   May grant screen sharing permission to a human agent.
    *   Receives updates/solutions via text/email.
*   **Decision Points & Potential Paths:**
    *   **AI Resolution:** Issue resolved by AI. -> Journey ends.
    *   **Escalation to Human Agent:** If AI cannot resolve or user requests.
    *   **Callback Option:** Offered if wait times are high.
*   **Tools/Features Interacted With:**
    *   Web chat, voice call systems, web forms.
    *   Knowledge base, screen sharing UI, multi-language options, Visual IVR.
*   **Typical Outcome/Goal:**
    *   Issue resolved, question answered, information obtained, service request fulfilled.
    *   Positive customer experience.

```mermaid
graph TD
    subgraph "Initiation"
        A[Contacts Support via <br>Voice/Chat/Web Portal/Form];
        A --> A_LANG{Select Language Preference?};
        A_LANG -- Yes --> A1[Selects Language (EN/FR)];
        A_LANG -- No / Not Offered --> B(Interacts with AI Agent);
        A1 --> B;
    end

    subgraph "AI Interaction & Self-Service"
        B --> B_VIVR{Uses Visual IVR?};
        B_VIVR -- Yes --> B1[Navigates Visual IVR];
        B_VIVR -- No / Not Applicable --> C(AI for Initial Query Resolution <br>e.g., FAQs, Order Tracking);
        B1 --> C;
        C --> C_KB_SEARCH{Searches/Directed to Knowledge Base?};
        C_KB_SEARCH -- Yes --> C1[Accesses Knowledge Base];
        C_KB_SEARCH -- No --> D;
        C1 --> D(Provides Details & Answers Questions to AI);
        D --> D_VERIFY{Identity Verification Required?};
        D_VERIFY -- Yes --> D1[Undergoes Identity Verification];
        D_VERIFY -- No --> E;
        D1 --> E;
    end

    subgraph "Decision & Escalation Path"
        E --> E_AI_RESOLVE{AI Resolves Issue?};
        E_AI_RESOLVE -- Yes --> F([Outcome: Issue Resolved by AI]);
        E_AI_RESOLVE -- No --> G{User Requests Human / AI Cannot Resolve};
        G --> G_CALLBACK{Callback Option Offered/Taken?};
        G_CALLBACK -- Yes --> G1[Accepts Callback];
        G_CALLBACK -- No --> H(Escalation to Human Agent Initiated);
        G1 --> F_CB([Outcome: Awaits/Receives Callback]);
    end

    subgraph "Human Agent Interaction (if escalated)"
        H --> H_SHARE_SCREEN{Grant Screen Sharing Permission?};
        H_SHARE_SCREEN -- Yes --> H1[Grants Screen Sharing];
        H_SHARE_SCREEN -- No / Not Requested --> I(Interacts with Human Agent);
        H1 --> I;
        I --> J(Receives Updates/Solutions via Text/Email from Human);
        J --> K([Outcome: Issue Resolved by Human Agent]);
    end

    subgraph "Tools/Features Used (Examples)"
        direction LR
        TOOL_WC[Web Chat]
        TOOL_VCS[Voice Call Systems]
        TOOL_WF[Web Forms]
        TOOL_KB[Knowledge Base]
        TOOL_SS[Screen Sharing UI]
        TOOL_LANG[Multi-Language Options]
        TOOL_VIVR[Visual IVR]
    end

    F --> Z([Goal: Positive Customer Experience]);
    K --> Z;
    F_CB --> Z_PARTIAL([Goal: Support Request Acknowledged/In Progress]);

    classDef initiation fill:#f9f,stroke:#333,stroke-width:2px;
    classDef ai_interaction fill:#ccf,stroke:#333,stroke-width:2px;
    classDef decision fill:#ff9,stroke:#333,stroke-width:2px;
    classDef human_interaction fill:#cfc,stroke:#333,stroke-width:2px;
    classDef tools fill:#eee,stroke:#333,stroke-width:1px,color:#333;
    classDef outcome_goal fill:#cff,stroke:#333,stroke-width:2px;

    class A,A_LANG,A1 initiation;
    class B,B_VIVR,B1,C,C_KB_SEARCH,C1,D,D_VERIFY,D1 ai_interaction;
    class E,E_AI_RESOLVE,G,G_CALLBACK decision;
    class H,H_SHARE_SCREEN,H1,I,J human_interaction;
    class TOOL_WC,TOOL_VCS,TOOL_WF,TOOL_KB,TOOL_SS,TOOL_LANG,TOOL_VIVR tools;
    class F,K,F_CB,Z,Z_PARTIAL outcome_goal;
```
