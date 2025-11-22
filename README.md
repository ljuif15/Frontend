# Taxes Management Application

A modern React application for managing taxes with a clean, pixel-perfect UI built using @tanstack/react-table.

## 🚀 Live Demo

[View Live Application](https://your-deployment-url.vercel.app) *(Update after deployment)*

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Approach & Key Decisions](#approach--key-decisions)
- [Challenges & Solutions](#challenges--solutions)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)

## ✨ Features

- 📊 **Data Table** - Built with @tanstack/react-table for optimal performance
- ✏️ **Edit Modal** - Intuitive modal for updating tax name and country
- 🌍 **Country Dropdown** - Dynamically populated from countries API
- 🔄 **Real-time Updates** - Seamless data synchronization via PUT API
- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- ⚡ **Fast & Performant** - Optimized rendering and state management
- 🛡️ **Type Safety** - Full TypeScript implementation
- ✅ **Error Handling** - Comprehensive error states and user feedback

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **@tanstack/react-table** - Powerful table library
- **CSS3** - Custom styling with modern design patterns

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## 📁 Project Structure

```
inkle/
├── src/
│   ├── components/
│   │   ├── TaxesTable.tsx      # Main table component
│   │   ├── TaxesTable.css       # Table styles
│   │   ├── EditModal.tsx        # Edit modal component
│   │   └── EditModal.css        # Modal styles
│   ├── services/
│   │   └── api.ts               # API service layer
│   ├── types.ts                 # TypeScript type definitions
│   ├── App.tsx                  # Main application component
│   ├── App.css                  # App-level styles
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Approach & Key Decisions

### 1. **Technology Selection**
- **@tanstack/react-table**: Chosen for its flexibility, performance, and excellent TypeScript support. It provides a headless table solution that allows full control over styling while handling complex table logic.
- **Vite**: Selected over Create React App for faster development experience, better HMR, and optimized production builds.
- **TypeScript**: Implemented throughout for type safety, better IDE support, and reduced runtime errors.

### 2. **Architecture Decisions**
- **Component Separation**: Separated table and modal into distinct components for better maintainability and reusability.
- **Service Layer**: Created a dedicated API service layer (`services/api.ts`) to centralize all API calls, making it easier to mock, test, and maintain.
- **Type Definitions**: Defined clear TypeScript interfaces for `Tax` and `Country` to ensure type safety across the application.

### 3. **State Management**
- Used React's built-in `useState` and `useEffect` hooks for state management, which is sufficient for this application's scope.
- Implemented optimistic UI updates - the table updates immediately after a successful save operation.

### 4. **API Integration Strategy**
- **Data Fetching**: Fetches existing tax data before updating to ensure all fields are preserved (as per requirement: "data should be passed to the PUT api with existing data and updated fields").
- **Error Handling**: Comprehensive error handling with user-friendly error messages and retry functionality.
- **Loading States**: Implemented loading indicators for better UX during API calls.

### 5. **UI/UX Decisions**
- **Modal Design**: Created a centered modal with smooth animations and proper focus management.
- **Form Validation**: Client-side validation for required fields (name and country) before API calls.
- **Responsive Design**: Ensured the table and modal work well on different screen sizes.
- **Visual Feedback**: Hover effects, transitions, and loading states provide clear user feedback.

### 6. **Code Quality**
- **TypeScript Strict Mode**: Enabled strict type checking for maximum type safety.
- **Component Organization**: Logical file structure with clear separation of concerns.
- **CSS Organization**: Component-scoped CSS files for better maintainability.
- **Accessibility**: Added proper ARIA labels and semantic HTML.

## 🐛 Challenges & Solutions

### Challenge 1: Preserving Existing Data on Update
**Problem**: The requirement specified that PUT requests must include existing data along with updated fields.

**Solution**: Implemented a two-step process:
1. Fetch the complete existing tax record using `getTaxById()`
2. Merge the existing data with updated fields before sending the PUT request

```typescript
const existingTax = await api.getTaxById(tax.id);
const updatedTax = await api.updateTax(tax.id, {
  ...existingTax,
  name: name.trim(),
  country: country.trim(),
});
```

### Challenge 2: Country Dropdown Population
**Problem**: Countries need to be fetched from a separate API endpoint and displayed in the modal.

**Solution**: 
- Fetch countries when the modal opens using `useEffect`
- Store countries in component state
- Map countries to dropdown options, using country name as both value and display

### Challenge 3: Table Styling with @tanstack/react-table
**Problem**: @tanstack/react-table is headless, requiring custom styling to match the design.

**Solution**: 
- Created custom CSS with modern design patterns
- Used flexbox for layout
- Implemented hover states and transitions for better UX
- Ensured responsive design with proper overflow handling

### Challenge 4: Modal State Management
**Problem**: Managing modal open/close state, form data, and API calls without conflicts.

**Solution**:
- Used controlled components for form inputs
- Reset form state when modal opens/closes
- Prevented modal closure during API calls
- Implemented proper cleanup in `useEffect` hooks

### Challenge 5: Error Handling & User Feedback
**Problem**: Providing clear feedback for various error scenarios (network errors, validation errors, etc.).

**Solution**:
- Created error state management in components
- Displayed user-friendly error messages
- Implemented retry functionality for failed API calls
- Added loading states to prevent user confusion

## 📡 API Endpoints

Base URL: `https://685013d7e7c42cfd17974a33.mockapi.io`

- `GET /taxes` - Fetch all taxes
- `GET /taxes/:id` - Fetch tax by ID
- `PUT /taxes/:id` - Update tax (requires existing data + updated fields)
- `GET /countries` - Fetch all countries

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Deploy to GitHub Pages

See `DEPLOYMENT.md` for detailed instructions.

## 📝 License

This project is created for the Inkle Frontend Intern assignment.

## 👤 Author

Created as part of the Inkle Frontend Intern assignment.

---

**Note**: This application is built to demonstrate proficiency in React, TypeScript, and modern frontend development practices.
