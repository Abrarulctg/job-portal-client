import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

// export const ustTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
        console.log(theme)
    }

    const themeInfo = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;