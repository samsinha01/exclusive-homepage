# 🚀 Vite + React + SASS + Tailwind CSS Setup

This project is built using **Vite** and **React**, with **SASS** and **Tailwind CSS** for styling. Follow the steps below to install and run the project.

## 📌 Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS version recommended) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)

Check installation:
```sh
node -v
npm -v

📦 Project Setup
1️⃣ Install Vite App

npm create vite@latest my-vite-app --template react
cd my-vite-app

2️⃣ Install Dependencies

npm add -D sass-embedded  # OR npm add -D sass
npm install tailwindcss @tailwindcss/vite

3️⃣ Configure Tailwind CSS
Run the Tailwind initialization command:
npx tailwindcss init -p


4️⃣ Update tailwind.config.js
Modify tailwind.config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
5️⃣ Import Tailwind in index.css
Open src/index.css and add:

@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";


6️⃣ Run the Development Server
npm run dev
Your Vite + React + SASS + Tailwind CSS project is now set up and running! 🚀


# File Strcture
📦 your-project
├── 📂 assets
├── 📂 components
│   ├── 📂 Home
│   │   ├── Banner.jsx
│   │   ├── Banner2.jsx
│   │   ├── Category.jsx
│   │   ├── Facilities.jsx
│   │   ├── Featured.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MonthWise.jsx
│   │   ├── Nav.jsx
│   │   ├── Nav.module.scss
│   │   ├── OurProducts.jsx
│   │   ├── ProductsName.jsx
│   │   ├── Sales.jsx
│   ├── Button.jsx
│   ├── CategoryCard.jsx
│   ├── Heading.jsx
│   ├── ProductCard.jsx
├── 📂 features
├── 📂 pages
│   ├── 📂 Home
│   │   ├── Homepage.jsx
├── 📂 static
│   ├── products.json
