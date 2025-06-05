# Technical Assessment: To-Do List Application

## Candidate: Henry Corredor

### Implementation Overview
This solution addresses all specified requirements with the following implementations:

- **CRUD Functionality**: Full CRUD operations managed via Pinia store actions.

    Note: Per project scope, CRUD operations are client-side only (not persisted via API)

- **Data Handling**: Utilizes Nuxt server endpoints for mock data:
 
    - Task list fetching
    - Article data retrieval
    - Article summaries

- **State Management**: Application state fully managed with Pinia stores

- **Component Architecture**: 
  - Features two distinct layouts: Default layout (main application), Article layout (specialized view)
  - Modular component design per requirements.

- **User Interface**: Faithfully implements provided mockups. Includes confirmation dialogs for all user actions