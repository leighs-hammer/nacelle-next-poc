import React, { createContext, useState, useEffect, useContext } from 'react'
import getStorageValueAtKeyorSetFallback, { setLocalStorage } from '../_utils/localstorage';
import THEME_COLORS from '../_constants/theme';
import { IFuseTheme } from '../_types/theme';

export const ThemeContext: React.Context<any> = createContext({})

export const ThemeProvider = ({children}) => {

  const [themeKey, setThemeKey] = useState('dark')

  const setOrUpdateThemKey = (key) => {
    const value = getStorageValueAtKeyorSetFallback('themekey', key)
    if(value !== key) {
      setThemeKey(`${value}`)
    }
  }
  
  const toggleTheme = () => {
    const toggledValue = themeKey === 'dark' ? 'light' : 'dark'
    const value = setLocalStorage('themekey', toggledValue)
    if(toggledValue !== themeKey) {
      setThemeKey(toggledValue)
    }
  }

  useEffect(() => {
  
    if(typeof window !== undefined) {
      setOrUpdateThemKey(themeKey)
    }
  
  }, [themeKey])

  const contextValue: IFuseTheme = {
    themeKey, 
    toggleTheme, 
    colors : THEME_COLORS[themeKey]
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}


export default ThemeProvider

export const useTheme = () => {
  const Context: IFuseTheme = useContext(ThemeContext)
  return Context
}