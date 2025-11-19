# Companies Directory

A React-based frontend application to browse, search, and filter a directory of companies. Built with responsiveness, state management, and a clean UI.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

---

## Features

- List of companies displayed in card format
- Search bar to filter companies by **name**, **location**, or **industry**
- Recently viewed companies (persistent via `localStorage`)
- Infinite scroll / pagination to handle large datasets
- Responsive layout for mobile, tablet, and desktop
- Loading state with skeleton cards
- Proper error handling with Error Boundary
- Error handling for API requests

---

## Tech Stack

- **React** for building the UI
- **Tailwind CSS** for styling
- **React Router** for navigating between pages
- **React Icons** for icons
- **Custom Hooks** (useDebounce, usePagination, etc.) for clean logic
- **Local Storage** for recently viewed companies

---

## Demo

Live Demo: `https://companies-directory-navy.vercel.app`

---

## Getting Started

**Prerequisites**

- Node.js (v14 or above)
- npm or yarn

**Installation**

```bash
git clone https://github.com/hprakash1999/companies-directory.git

cd companies-directory

npm install
# or
yarn install
```

**Run Locally**

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

---

## Usage

1. Use the **search bar** to look for companies by name.
2. Use the **dropdown** to filter by location.
3. Scroll down to load more companies via **infinite scroll**.
4. Click on a company card to mark it as recently viewed (it will appear in the recently viewed section).
5. On mobile, use the burger menu to navigate.

---

## Folder Structure

```
companies-directory/
├── public/
│   ├── index.html
├── src/
│   ├── api/
│   │   └── company.api.js
│   ├── components/
│   │   └── ui/
│   │       ├── CompanyCard.jsx
│   │       ├── SearchBar.jsx
│   │       ├── RecentlyViewed.jsx
│   │       ├── Loader.jsx
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   ├── hooks/
│   │   ├── useCompanies.js
│   │   ├── useDebounce.js
│   │   ├── usePagination.js
│   │   └── useUniqueValues.js
│   ├── pages/
│   │   ├── CompaniesDirectory.jsx
│   │   └── CompanyDetails.jsx
│   ├── utils/
│   │   └── filterCompanies.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

---

## Future Improvements

- Add **sorting** (by name, date founded, etc.)
- Use a **real backend** (Express + MongoDB) instead of mock data
- Add **pagination controls** for manual page navigation
- Implement unit/integration tests using Jest or React Testing Library
- Add **dark mode** support

---

## Author

**Harsh Prakash**  
GitHub: [hprakash1999](https://github.com/hprakash1999)
