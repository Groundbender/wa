import { useContext } from "react";
import { DarkModeContext } from "@/context/darkMode/DarkModeContext";

export const useDarkMode = () => {
  const {isDarkMode, toggleDarkMode} = useContext(DarkModeContext);

  return {
    isDarkMode: isDarkMode,
    toggleDarkMode: toggleDarkMode,
  };
};