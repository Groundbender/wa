import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FC, useCallback, useEffect, useMemo } from "react";
import { DarkModeContext } from "./DarkModeContext";

interface DarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
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
    <DarkModeContext.Provider value={memoizedContext}>
      {children}
    </DarkModeContext.Provider>
  );
};