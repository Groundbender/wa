import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext/ThemeContext";

export const useDarkMode = () => {
  const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);

  return {
    isDarkMode: isDarkMode,
    toggleDarkMode: toggleDarkMode,
  };
};