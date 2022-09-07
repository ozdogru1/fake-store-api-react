import   { useState, createContext } from "react"

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {
    const [themeToggle, setThemeToggle] = useState(false)

   
    return (
        <DarkModeContext.Provider value={{ theme:themeToggle, setTheme:setThemeToggle }}>
            {children}
        </DarkModeContext.Provider>
    )
}