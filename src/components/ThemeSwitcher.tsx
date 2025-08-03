import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as any)}
      className="ml-2 p-2 border rounded bg-white text-black"
    >
      <option value="theme1">Theme 1 - Minimal</option>
      <option value="theme2">Theme 2 - Dark Sidebar</option>
      <option value="theme3">Theme 3 - Colorful Cards</option>
    </select>
  );
};

export default ThemeSwitcher;
