'use client'
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { ConfigProvider } from 'antd'

import { themes } from '@/config/variable'
import { componentTokens, globalTokens } from '@/config/themeVariable'

type ThemeContextType = [
  keyof typeof themes,
  Dispatch<SetStateAction<keyof typeof themes>>
]
export const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeColor, setThemeColor] = useState<keyof typeof themes>(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('data-theme') || 'default'
      return theme === 'default' ? 'default' : 'dark'
    }
    return 'default'
  })

  const value = useMemo<ThemeContextType>(
    () => [themeColor, setThemeColor],
    [themeColor]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', themeColor)
      localStorage.setItem('data-theme', themeColor)
    }
  }, [themeColor])

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider
        theme={{
          token: globalTokens,
          components: componentTokens,
          cssVar: true,
          hashed: false
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Invalid hook call')
  }
  return context
}
