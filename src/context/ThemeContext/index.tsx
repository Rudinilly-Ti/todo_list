"use client";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    let localTheme: Theme = 'light';
    if (typeof window !== 'undefined') {
        localTheme = window.localStorage.getItem('theme') as Theme;
    }
    const [theme, setTheme] = useState<Theme>(localTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);

        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default function useThemeContext() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider');
    }

    return context;
}