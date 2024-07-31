import { FC, useCallback, useEffect, useMemo } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((isDarkMode: boolean) => !isDarkMode);
  }, [isDarkMode]);

  const memoizedContext = useMemo(() => ({
    isDarkMode,
    toggleDarkMode
  }), [isDarkMode, toggleDarkMode]);

  return (
    <ThemeContext.Provider value={memoizedContext}>
      {children}
    </ThemeContext.Provider>
  );
};