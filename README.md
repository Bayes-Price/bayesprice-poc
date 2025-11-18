# Bayes Price POC

BP marketing website.

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Yarn package manager

### Installation

```sh
# Install dependencies
yarn install

# Start the development server
yarn dev
```

The development server will start on `http://localhost:8080` (or the next available port).

### Available Scripts

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production
- `yarn build:dev` - Build for development
- `yarn lint` - Run ESLint
- `yarn preview` - Preview production build

## Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router

## Development

The project uses Vite for fast development with hot module replacement. Changes to source files will automatically reload in the browser.

## Deployment

Build the project for production:

```sh
yarn build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.
