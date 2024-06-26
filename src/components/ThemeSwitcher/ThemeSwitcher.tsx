'use client'
import { useTheme } from '@/context/ThemeContext'
import { Flex } from 'antd'
import { Moon, Sun } from '@/components/Icons' // Ensure you have these icons
import { Button } from '../Ant/Button'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'dark' : 'default')
  }

  return (
    <Flex gap={16}>
      <Button
        type="primary"
        onClick={toggleTheme}
        icon={theme === 'default' ? <Moon /> : <Sun />}
      >
        {theme === 'default' ? 'Dark' : 'Light'}
      </Button>
    </Flex>
  )
}
