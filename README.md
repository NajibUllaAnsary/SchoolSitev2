# SchoolSite v2

A simple "Hello World" website built with:
- **SolidStart** - Full-stack framework for Solid.js
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Bun** - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites
- Bun installed on your system (or Node.js as fallback)

### Installation

Install dependencies:
```bash
bun install
```

Or with npm:
```bash
npm install
```

### Development

Run the development server:
```bash
bun run dev
```

Or with npm:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build for production:
```bash
bun run build
```

### Start Production Server

```bash
bun run start
```

## Project Structure

```
SchoolSitev2/
├── src/
│   ├── routes/
│   │   └── index.tsx      # Home page with Hello World
│   ├── app.tsx            # Root app component
│   ├── app.css            # Global styles with Tailwind
│   ├── entry-client.tsx   # Client entry point
│   └── entry-server.tsx   # Server entry point
├── app.config.ts          # SolidStart configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Learn More

- [SolidStart Documentation](https://start.solidjs.com)
- [Solid.js Documentation](https://www.solidjs.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Bun Documentation](https://bun.sh)
