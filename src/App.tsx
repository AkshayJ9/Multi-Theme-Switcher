import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar"; // for theme 2
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./index.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex ${
        theme === "theme2" ? "flex-row" : "flex-col"
      }`}
    >
      <Header />
      {theme === "theme2" && <Sidebar />}
      <main className={`flex-grow p-4 mt-20 md:mt-24`}>{children}</main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
