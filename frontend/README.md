# Hello World Generator

A web application for generating Hello World code in multiple programming languages.

## Features

- Select from various programming languages
- View generated Hello World code with syntax highlighting
- Download code in the appropriate file format
- Responsive design for all devices

## Tech Stack

- React 18+
- TypeScript
- TailwindCSS
- React Router
- TanStack Query
- Highlight.js

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd hello-world-generator

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:5173

## Project Structure

```
src/
├── app/                  # Application configuration
├── assets/               # Static assets and global styles
├── core/                 # Core components and utilities
├── domain/               # Domain-specific modules
│   ├── code/             # Code generation and display
│   └── language/         # Language selection and management
└── pages/                # Application pages
    └── layouts/          # Page layouts
```

## Building for Production

```bash
npm run build
# or
yarn build
```

## License

MIT
