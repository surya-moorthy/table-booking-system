import { createContext, useEffect, useState, type ReactNode } from "react";

interface ThemeContextType {
    darkTheme : string,
    toggleTheme : ()=>void
}

const ThemeContext = createContext<ThemeContextType>({
    darkTheme : "",
    toggleTheme : ()=>{}
});

const ThemeProvider = ({children} : {children : ReactNode})=> {

    const [darkTheme,setDarkTheme] = useState<string>(()=> {
        return JSON.parse(localStorage.getItem("darktheme") as string)  || "dark";
    });

    const toggleTheme = ()=> {

        setDarkTheme(darkTheme == "light" ? "dark" : "light")

        useEffect(() => {
           localStorage.setItem("darktheme", JSON.stringify(darkTheme));
        }, [darkTheme]);
    }

    return (
        <ThemeContext.Provider value={{darkTheme,toggleTheme}}>
          {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider};