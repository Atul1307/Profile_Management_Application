# Profile Management Application

A React TypeScript application for managing user profiles with features like create, read, update, and delete operations. The application uses React Context for state management, React Router for navigation, and includes environment-specific configurations.

## 🚀 Features

- **Profile Management**

  - Create and update user profiles
  - View profile details
  - Delete profile with confirmation
  - Form validation for required fields
  - Persistent data storage using local storage
  - API integration with error handling

- **Technical Features**
  - TypeScript implementation
  - React Context for global state management
  - React Router for navigation
  - Environment-specific configurations
  - Local storage integration
  - Mock API server using json-server
  - Responsive design with Tailwind CSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Atul1307/Profile_Management_Application.git
   cd Profile_Management_Application
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## 🚀 Running the Application

1. **Start the mock API server**

   ```bash
   npm run server
   ```

2. **In a separate terminal, start the React application**

   For development:

   ```bash
   npm run start:dev
   ```

   For production:

   ```bash
   npm run start:prod
   ```

## 📦 Build

- **Development build**

  ```bash
  npm run build:dev
  ```

- **Production build**
  ```bash
  npm run build:prod
  ```

## 🏗️ Project Structure

```
Profile_Management_Application/
├── src/
│   ├── components/
│   │   ├── DeleteProfileButton.tsx
│   │   ├── Navigation.tsx
│   │   ├── NotFound.tsx
│   │   ├── ProfileDisplay.tsx
│   │   ├── Footer.tsx
│   │   └── ProfileForm.tsx
│   ├── context/
│   │   └── ProfileContext.tsx
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── Profile.ts
│   ├── config/
│   │   └── config.ts
│   └── App.tsx
├── public/
├── .env.development
├── .env.production
├── db.json
└── package.json
```

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run start:dev` - Runs the app using development environment
- `npm run start:prod` - Runs the app using production environment
- `npm run build` - Builds the app for production
- `npm run build:dev` - Builds the app using development environment
- `npm run build:prod` - Builds the app using production environment
- `npm run server` - Runs the mock API server
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App

## 🔧 Configuration

### Environment Variables

- `REACT_APP_API_BASE_URL`: Base URL for API requests
- `REACT_APP_ENV`: Current environment (development/production)

### API Endpoints

- GET `/profile` - Fetch profile data
- PUT `/profile` - Create/Update profile
- DELETE `/profile` - Delete profile

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop devices
- Tablets
- Mobile devices

## 🛡️ Form Validation

The profile form includes validation for:

- Required fields (name, email)
- Email format
- Minimum length requirements for names
- Optional age field with number validation

## 🔄 State Management

- Uses React Context API for global state management
- Implements local storage for data persistence
- Maintains synchronization between Context and local storage

## ⚠️ Error Handling

The application includes comprehensive error handling for:

- API failures
- Form validation errors
- Route not found (404)
- Network errors
