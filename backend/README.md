# Hello World Generator API

A RESTful API for generating Hello World code in various programming languages.

## Features

- Generate Hello World code in multiple programming languages
- Select from a variety of supported programming languages
- View generated code with proper formatting
- Download code files in the appropriate format

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`
4. Start the development server
   ```bash
   npm run dev
   ```

## API Endpoints

### Public Endpoints

- `GET /api/external/public/languages` - List all available programming languages
- `GET /api/external/public/code/:language` - Get Hello World code for a specific language
- `GET /api/external/public/code/:language/download` - Download Hello World code file

### Internal Endpoints

- `GET /api/internal/language` - List all programming languages
- `POST /api/internal/language` - Create a new programming language
- `GET /api/internal/language/:id` - Get a programming language by ID
- `PUT /api/internal/language/:id` - Update a programming language
- `DELETE /api/internal/language/:id` - Delete a programming language

- `GET /api/internal/code/:language` - Get Hello World code for a specific language
- `POST /api/internal/code` - Create a new Hello World code entry
- `PUT /api/internal/code/:id` - Update a Hello World code entry
- `DELETE /api/internal/code/:id` - Delete a Hello World code entry

## Development

### Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run linting
- `npm test` - Run tests

## License

This project is licensed under the MIT License.
