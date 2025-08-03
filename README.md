


# 🌈 Multi-Theme Switcher App

## 🌍 Live Demo
[Multerthemswitcher.com](https://multerthemswitcher.netlify.app/)

## 📧 Contact
**Developer:** Akshay Jadhav  
**Job Role:** React JS Developer Role

**Email:** akshayj.contact@gmail.com  
**GitHub:** [akshayj9](https://github.com/akshayj9)  
**LinkedIn:** [Akshay Jadhav](https://www.linkedin.com/in/akshaykjadhav)

A responsive React + TypeScript web application that demonstrates **multi-theme support** with **Context API**, **Tailwind CSS**, **API integration**, and **persistent theme selection**.

---

## 📌 Features

- **Three Distinct Themes**
  - **Theme 1:** Minimalist light mode (sans-serif font)
  - **Theme 2:** Dark mode with **sidebar layout** (serif font)
  - **Theme 3:** Colorful **card grid layout** (Pacifico playful font)

- **Theme Management**
  - Context API for state management
  - Theme persists using **localStorage**
  - Smooth animated transitions between themes

- **Responsive Layout**
  - Fully optimized for **desktop and mobile**
  - **Sidebar navigation** in Theme 2
  - **Card grid** in Theme 3

- **API Integration**
  - Fetches products from **[FakeStoreAPI](https://fakestoreapi.com/products)**
  - Displays product cards with hover effects

- **React Router**
  - Multi-page navigation: **Home, About, Contact**

- **TypeScript + Tailwind CSS**
  - Clean, modular, and professional project structure

---

## 📂 Project Structure

src/
│ App.tsx
│ App.css
│ index.css
│
├── components/
│ ├── Header.tsx
│ ├── Sidebar.tsx
│ ├── ThemeSwitcher.tsx
│ └── ProductCard.tsx
│
├── context/
│ └── ThemeContext.tsx
│
├── hooks/
│ └── useFetchProducts.ts
│
├── pages/
│ ├── Home.tsx
│ ├── About.tsx
│ └── Contact.tsx


---

## ⚡ Quick Start

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd multi-theme-app


-Install dependencies
npm install
- Run the app
npm start
