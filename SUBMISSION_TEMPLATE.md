# Assignment Submission

## Repository Link
```
https://github.com/YOUR_USERNAME/inkle-taxes-app
```
*(Replace YOUR_USERNAME with your actual GitHub username)*

## Deployment Link
```
https://your-app-name.vercel.app
```
*(Replace with your actual deployment URL from Vercel/Netlify)*

---

## Brief Summary

This Taxes Management Application is a modern React application built using @tanstack/react-table as required. The application provides a clean, intuitive interface for viewing and editing tax records with seamless API integration.

### Approach

**Technology Stack**: React 18, TypeScript, Vite, and @tanstack/react-table were selected for their modern capabilities, type safety, and performance. The application follows a component-based architecture with clear separation of concerns.

**Key Implementation Decisions**:
1. **Two-Step Update Process**: The application fetches existing tax data before updating, then merges it with updated fields before sending the PUT request, ensuring all data is preserved as per requirements.
2. **Service Layer Pattern**: Centralized API calls in a dedicated service layer for better maintainability and error handling.
3. **Type Safety**: Full TypeScript implementation with strict mode enabled for maximum type safety.
4. **Component Separation**: Separated table and modal into distinct, reusable components.

**UI/UX**: Implemented a modern, responsive design with smooth animations, proper loading states, and comprehensive error handling for optimal user experience.

### Challenges & Solutions

1. **Preserving Existing Data**: Implemented a fetch-then-merge strategy to ensure PUT requests include all existing data along with updates.
2. **Country Dropdown**: Used useEffect to fetch countries when modal opens, storing them in component state for the dropdown.
3. **Headless Table Styling**: Created comprehensive custom CSS to style the @tanstack/react-table implementation.
4. **State Management**: Managed modal state, form data, and API calls using React hooks with proper cleanup.

The application is production-ready, fully functional, and demonstrates proficiency in modern React development practices.

---

**Note**: Copy this template and fill in your actual repository and deployment links before submission.

