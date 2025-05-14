# CART (E-commerce Store – React Course Assignment)

<img width="1373" alt="Skjermbilde 2025-05-13 kl  13 26 24" src="https://github.com/user-attachments/assets/62ca4b02-6517-4076-9538-116714f8916f" />

## Purpose

This project was created as part of Noroff’s Frontend Development course (FED2).  
The goal was to build a dynamic and responsive e-commerce store using React, TypeScript, and the Noroff API. It focuses on reusable architecture, global state handling, form validation, and API integration.

---

## Description

The store allows users to browse, filter, and view products, add items to a cart, complete a checkout flow, and submit a contact form. It integrates with a real API and uses Zustand for managing cart state. The app was developed using Vite, React, TypeScript, and Tailwind CSS, and is deployed on Netlify.

### Key Features

- Homepage with live product search
- Dynamic product pages with reviews and discount calculations
- Cart with add/remove functionality and live item count
- Checkout page and confirmation with unique order number
- Contact form with validation and confirmation message
- Responsive layout and mobile support
- Component-based structure with reusable logic and styles
- Route management using React Router
- Global cart state using Zustand

---

## Learning Outcomes

- Designed and implemented a fully functional frontend application
- Built responsive components using Tailwind CSS
- Used TypeScript to strongly type components and state
- Managed global cart state with Zustand
- Fetched and rendered dynamic data from an external API
- Validated form input using regular expressions and controlled components
- Documented all components using JSDoc
- Deployed the site with routing support on Netlify

---

## Target Audience

This store is designed for general users looking to browse and buy products. The fictional client is an online shop aiming to offer a clean, simple shopping experience.

---

## Technologies Used

- React (with TypeScript)
- Vite
- Tailwind CSS
- Zustand (state management)
- React Router
- ESLint and Prettier
- JSDoc (code documentation)
- Netlify (hosting)

---

## Project Structure

- `/pages/` – Route-level components (Home, Contact, Product, Cart, Checkout Success)
- `/components/` – Reusable components like ProductCard, CartItem, FormInput
- `/store/` – Zustand cart store
- `/layout/` – Header, Footer, and Layout wrapper
- `/types/` – Centralized TypeScript types
- `/assets/` – Images and visual content

---

## Deployment

The project is deployed using Netlify and supports dynamic routing.

Live site:  
[CART Deployed site](https://cart-js-framework.netlify.app/)

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/marned91/javascript-framework-ca
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

# Contributing

As this project is for a course assignment, I am not currently accepting external contributions. However, I welcome any feedback or suggestions for improvement. Feel free to create an issue in the repository if you have any thoughts on how to enhance the project.

Thank you for your understanding!

# Contact

[My Linkedin Page](https://www.linkedin.com/in/marte-n-18aab5101/)

# Sources & References

- Noroff API documentation: [https://docs.noroff.dev/docs/v2/about](https://docs.noroff.dev/docs/v2/basic/online-shop)
- Tailwind CSS: https://tailwindcss.com/docs
- Lucide Icons: https://lucide.dev
- Flowbite UI documentation
- JSDoc reference: https://jsdoc.app
- MDN: filter(), findIndex(), conditional rendering
- Netlify docs for SPA routing
