# Theme Switcher

A React + TypeScript + Vite project with styled-components and theme switching.

## Features

- Theme switching (Light, Dark, Red)
- React Router for navigation
- Styled-components for theming
- Axios for API requests
- ESLint for linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository:

```sh
git clone https://github.com/your-username/theme-switcher.git
cd theme-switcher
```

Install dependencies:

```sh
npm install
# or
yarn install
```

### Development

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

To build for production:

```sh
npm run build
# or
yarn build
```

### Linting

To lint the codebase:

```sh
npm run lint
# or
yarn lint
```

## Project Structure

```
src/
  components/      # Layout and UI components
  context/         # Theme context provider
  pages/           # App pages (Home, About, Contact)
  service/         # API client and endpoints
  utils/           # Theme definitions
  theme.d.ts       # Theme type definitions
  App.tsx          # Main app component
  index.tsx        # Entry point
```

## ESLint Configuration

See [eslint.config.js](eslint.config.js) for recommended settings.  
You can expand type-aware linting and add React-specific rules as described in the comments.

## License

MIT
