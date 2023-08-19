import { createContext } from "react";
import { theme } from "./theme";

// context
export const ThemeContext = createContext(theme);

// ThemeContextProvider prop type
type ThemeContextProviderProps = {
    children: React.ReactNode
}

// context provider
export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>{ props.children }</ThemeContext.Provider>
    )
}