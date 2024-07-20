import { ThemeTogglerBall, ThemeTogglerCheckbox, ThemeTogglerLabel } from "@/ui/ThemeToggler"
import { Text } from "@/ui/Text"
import { useDarkMode } from "@/hooks/useDarkMode";

export const DarkModeSwitcher = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <>
      <ThemeTogglerCheckbox checked={isDarkMode} onChange={toggleDarkMode} />
      <ThemeTogglerLabel >
        <Text>🌚</Text>
        <Text>🌞</Text>
        <ThemeTogglerBall />
      </ThemeTogglerLabel>
    </>
  )
}