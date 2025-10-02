# Hello World Generator API

A RESTful API for generating Hello World code in various programming languages.

## Features

- Generate Hello World code in multiple programming languages
- List available programming languages
- Download generated code as a file
- View formatted code with syntax highlighting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Create a `.env` file based on `.env.example`
4. Start the development server
   ```
   npm run dev
   ```

## API Endpoints

### Languages

- `GET /api/languages` - List all supported programming languages
- `GET /api/languages/:id` - Get details for a specific language

### Code Generation

- `POST /api/code/generate` - Generate Hello World code
  - Request body: `{ "languageId": 1 }`
- `GET /api/code/download/:languageId` - Download generated code as a file

## Development

### Build

```
npm run build
```

### Run Tests

```
npm test
```

### Linting

```
npm run lint
```

## Deployment

For production deployment:

```
npm run build
npm start
```

## License

This project is licensed under the MIT License.
