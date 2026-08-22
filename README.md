# Product Catalog

A small product catalog application built with React, TypeScript, Vite and Ant Design.
Users can browse products, filter the catalog, sort results and view product details.

## Tech stack

- React
- TypeScript
- Vite
- Ant Design
- Ant Design Icons
- Oxlint
- Vitest
- React Testing Library

## Setup

### Requirements

- Node.js 20 or newer
- npm

### Install and run

~~~bash
npm install
npm run dev
~~~

Open the local URL shown in the terminal, usually:

~~~text
http://localhost:5173
~~~

### Other commands

~~~bash
# Check TypeScript and create a production build
npm run build

# Run the linter
npm run lint

# Run tests
npm test

# Preview the production build locally
npm run preview
~~~

## CI/CD and deployment

This project uses GitHub Actions for continuous integration and deployment.

The workflow is located at:

~~~text
.github/workflows/deploy.yml
~~~

For every pull request to the main branch, GitHub Actions runs:

- Install dependencies with npm ci
- Run tests with npm test
- Run lint with npm run lint
- Create a production build with npm run build

For every push to the main branch, the same checks run and the dist folder is
deployed to GitHub Pages.

### GitHub Pages setup

In the repository settings, configure:

~~~text
Settings
→ Pages
→ Build and deployment
→ Source: GitHub Actions
~~~

The deployed application is available at:

~~~text
https://brightpongpak.github.io/AscendMoney-mini-project/
~~~

## Supported features

### Product list

- Displays product image, name, SKU, category, price, stock status and last updated date.
- Shows 5 products per page.
- Displays an empty state when no product matches the selected filters.

### Filtering and sorting

- Search by product name.
- Select one or more categories.
- Show in-stock products only.
- Sort by price or updated date.
- Reset all filters with one button.

### Product details

- Select Edit to open a product detail modal.
- The modal displays the product image, category, stock status, price, updated date and description.
- In this version, Edit is used to view details. It does not save changes.

## Project structure

~~~text
src/
├── components/
│   ├── FilterBar.tsx              # Search and filter controls
│   ├── FilterBar.test.tsx         # Filter control interaction tests
│   ├── ProductDetailModal.tsx     # Product detail modal
│   ├── ProductDetailModal.test.tsx # Product detail interaction tests
│   └── ProductTable.tsx           # Product table and pagination
├── data/
│   └── products.ts                # Local mock product data
├── hooks/
│   └── useProductCatalog.ts       # Catalog state and business logic
├── types/
│   └── product.ts                 # Product and sort types
├── utils/
│   ├── productCatalog.utils.ts    # Formatting, filtering and sorting helpers
│   └── productCatalog.utils.test.ts # Utility unit tests
├── App.tsx
└── App.css
~~~

## Trade-offs and assumptions

- The application uses local mock data instead of a backend API because this mini project focuses on the catalog UI and client-side interactions.
- Filtering, sorting and pagination are handled on the client.
- Product images are loaded from picsum.photos as placeholder images.
- The Edit action opens a detail modal only; creating, updating and deleting products are not implemented.
- Product data is stored in memory, so changes would not persist after a page reload.
- Tests cover the main product utility logic and key UI interactions in FilterBar and ProductDetailModal.

## Possible improvements

- Connect the catalog to a real product API.
- Add loading, error and retry states.
- Implement create, edit and delete flows with confirmation dialogs.
- Add unit tests for filtering and sorting, plus component tests for the modal and pagination.
- Add server-side pagination when the product list becomes large.
