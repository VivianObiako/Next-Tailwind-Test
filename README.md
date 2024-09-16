# Next.js with Tailwind CSS

This project is a Next.js application styled with Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

Installation
1. Create a new Next.js project:

```bash
npx create-next-app@latest my-project
cd my-project
```

2. Install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure Tailwind CSS

1. Add Tailwind CSS to your CSS file:
Create a styles/globals.css file and add the following:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Deploy on Vercel
https://next-tailwind-landingpage-test.vercel.app/

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.
