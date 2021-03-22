import { createContext, ReactNode, useContext, useState } from 'react';

interface DarkThemeContextData {
  isActive: boolean;
  changeToDarkTheme: () => void;
}

interface DarkThemeProviderProps {
  children: ReactNode;
}

const DarkThemeContext = createContext<DarkThemeContextData>({} as DarkThemeContextData);

export function DarkThemeProvider ({children}: DarkThemeProviderProps) {
  const [ isActive, setIsActive ] = useState(false);

  function changeToDarkTheme () {
    setIsActive(!isActive)
  }

  return (
    <DarkThemeContext.Provider value={{changeToDarkTheme, isActive}}>
      {children}
    </DarkThemeContext.Provider>
  );
}

export function useDarkTheme () {
  const context = useContext(DarkThemeContext);

  return context;
}