import {  createContext, useContext, useState } from "react";

const ThemeContext = createContext<GlobalContent>({
    theme: false,
    setTheme: () => {},
})

export type GlobalContent = {
    theme: boolean
    setTheme: (c: boolean) => void
  }

export const ThemeContextProvider= ({ children }:any) => {
    const [theme, setTheme] = useState(true);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);