# ALX Listing App

An Airbnb clone listing page built with Next.js, TypeScript, and Tailwind CSS.

## Project Overview

This project is a simplified clone of Airbnb's listing page, focusing on creating a responsive and user-friendly interface for property listings. The application is built using modern web technologies and best practices.

## Project Structure

```
alx-listing-app/
├── components/           # Reusable UI components
│   └── common/          
│       ├── Button.tsx   # Reusable button component
│       └── Card.tsx     # Reusable card component for property listings
├── constants/           # Application-wide constants
│   └── index.ts        # Exports constants like API URLs and config settings
├── interfaces/         # TypeScript type definitions
│   └── index.ts       # Exports interfaces for props and data models
├── pages/             # Next.js pages and API routes
├── public/            # Static files
│   └── assets/       # Images, icons, and other media files
└── styles/           # Global styles and Tailwind CSS config
    └── globals.css   # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd alx-listing-app
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
