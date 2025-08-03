import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "theme1" | "theme2" | "theme3";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("theme1");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme to <body> and persist
  useEffect(() => {
    localStorage.setItem("theme", theme);

    const body = document.body;
    body.className = ""; // reset classes first

    if (theme === "theme1") {
      body.classList.add(
        "bg-white",
        "text-black",
        "font-sans",
        "transition-all",
        "duration-500"
      );
    } else if (theme === "theme2") {
      body.classList.add(
        "bg-gray-900",
        "text-white",
        "font-serif",
        "transition-all",
        "duration-500",
        "flex" // sidebar layout
      );
    } else if (theme === "theme3") {
      body.classList.add(
        "bg-yellow-100",
        "text-black",
        "font-[Pacifico]",
        "transition-all",
        "duration-500"
      );
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
