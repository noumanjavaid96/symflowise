---
noRobotsIndex: true
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Integrations



#### **1. Salesforce Integration Requirements**

| **Integration Point**   | **Description**                                                                         | **API Endpoints**                                      | **Authentication**  |
| ----------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------- |
| **Customer Data Sync**  | Sync customer profiles, interaction history, and tickets between systems.               | `GET /contacts`, `POST/UPDATE /cases`, `GET /accounts` | OAuth 2.0, API Keys |
| **AI-Powered Insights** | Leverage Salesforce Einstein for predictive analytics (sentiment trends, lead scoring). | `POST /predictive-analytics`                           | Named Credentials   |
| **Workflow Automation** | Trigger Salesforce actions (ticket creation, SLA alerts) based on AI analysis.          | `POST /workflows`, `GET /triggers`                     | OAuth 2.0           |

***

#### **2. HubSpot Integration Requirements**

| **Integration Point**   | **Description**                                                                | **API Endpoints**                               | **Authentication**  |
| ----------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------- | ------------------- |
| **Contact & Deal Sync** | Automatically update HubSpot contacts/deals with AI-captured interaction data. | `GET /contacts/v1/lists`, `POST /deals/v1/deal` | API Keys, OAuth 2.0 |
| **Chatbot Handoff**     | Route complex queries from HubSpot chatbots to Sympho Wise AI for resolution.  | `POST /conversations`, `GET /messages`          | OAuth 2.0           |
| **CRM Analytics**       | Feed AI-generated metrics (CSAT, escalation rate) into HubSpot dashboards.     | `POST /analytics/events`, `GET /reports`        | API Keys            |

#### **3. Other Key Integrations**

| **System**          | **Integration Purpose**                                  | **API Endpoints**                                      | **Authentication** |
| ------------------- | -------------------------------------------------------- | ------------------------------------------------------ | ------------------ |
| **Zendesk**         | Sync tickets, automate responses, and route escalations. | `GET /tickets`, `POST /macros`                         | OAuth 2.0          |
| **Microsoft Teams** | Enable real-time AI guidance during Teams-based support. | `POST /messages`, `GET /channels`                      | Azure AD           |
| **Slack**           | Notify agents of AI-escalated cases via Slack channels.  | `POST /chat.postMessage`, `GET /conversations.history` | Bot Tokens         |

### <mark style="color:red;">Most Critical</mark>&#x20;

{% hint style="info" %}
The names that are well known and are a suggestion from our side to integrate in the **1st Version/MVP**&#x20;
{% endhint %}

<table data-header-hidden data-full-width="false"><thead><tr><th width="171"></th><th></th><th></th></tr></thead><tbody><tr><td><strong>Integration</strong></td><td><strong>Functionality</strong></td><td><strong>Use Case</strong></td></tr><tr><td><strong>Salesforce</strong></td><td>Sync customer data, cases, and knowledge articles for personalized support.</td><td>Auto-populate client history during calls.</td></tr><tr><td><strong>HubSpot</strong></td><td>Map marketing/sales workflows to support tickets and embed knowledge base in chat widgets.</td><td>Resolve campaign-related queries instantly.</td></tr><tr><td><strong>Confluence/Jira</strong></td><td>Deflect tickets by linking helpdesk queries to Confluence documentation.</td><td>Reduce IT ticket volume by 30%.</td></tr><tr><td><strong>Zendesk/ServiceNow</strong></td><td>Prioritize tickets using SLA data and integrate knowledge base articles into responses.</td><td>Streamline healthcare compliance workflows.</td></tr></tbody></table>

