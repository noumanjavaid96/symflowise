---
hidden: true
noIndex: true
coverY: 0
layout:
  cover:
    visible: true
    size: full
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# User End Scenario

{% include ".gitbook/includes/untitled (1).md" %}

### Objectives

The platform revolves around:

* Scenario-based learning and interactions.
* Capturing user inputs through structured questionnaires.
* Applying predefined rubrics.
* Displaying results to assess cultural sensitivity and communication preferences.

### Functional Requirements

#### Scenario 1: Cultural Sensitivity and Respect

* **Narrative:** Pregnant patient with gestational diabetes adheres to Ayurvedic practices.
* **Interactive Elements:**
  * Prompts for cultural, dietary, and medical safety considerations.
  * Questionnaires for patient preferences (Yes/No/Maybe).
  * Score mapping to Bennett’s Intercultural Stages.
  * Feedback with results indicating stages of intercultural development.

#### Scenario 2: Communication Styles

* **Narrative:** Doctor delivering serious news to a patient.
* **Interactive Elements:**
  * Patient preference questions (Strongly Agree to Strongly Disagree).
  * Calculated communication style match.
  * Results show primary and secondary communication styles.

### Non-functional Requirements

* **Performance:** Handle multiple simultaneous users efficiently.
* **Usability:** Intuitive navigation with clear instructions.
* **Scalability:** Support for future content expansions.
* **Maintainability:** Easy update of questionnaires and scoring logic.
* **Security and Accessibility:** Ensure data protection and accessibility for all users.

### Data Handling

* **Storage and Retrieval:**
  * Store user responses for comparison and analysis.
  * Generate reports based on history and user profiles.

### Result Generation

* Provide summary and feedback:
  * **Scenario 1:** Cultural sensitivity stage or match percentage.
  * **Scenario 2:** Matched communication
