import { ThemeSwitcherBall, ThemeSwitcherCheckbox, ThemeSwitcherLabel } from "@/ui/ThemeSwitcher"
import { Text } from "@/ui/Text"
import { useDarkMode } from "@/hooks/useDarkMode";

export const DarkModeSwitcher = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <>
      <ThemeSwitcherCheckbox checked={isDarkMode} onChange={toggleDarkMode} />
      <ThemeSwitcherLabel >
        <Text>🌚</Text>
        <Text>🌞</Text>
        <ThemeSwitcherBall />
      </ThemeSwitcherLabel>
    </>
  )
}