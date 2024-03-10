import { useState } from "react";

export const useLocalTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return {
    theme,
    toggle,
  };
};
