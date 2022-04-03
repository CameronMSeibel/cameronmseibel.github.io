import React, { useState } from "react";
import Portfolio from "./components/Portfolio";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import {Button} from "@mui/material"



function App(){

    function initialThemeState(){
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }
        return false;
    }

    const [darkMode, toggleDarkMode] = useState(initialThemeState());
    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light"
        }
    });

    function StyleToggle(){
        return <Button
                onClick={() => {
                    toggleDarkMode(!darkMode);
                    console.log(darkMode);
                }}
            >
                {darkMode ? "Use Light Mode" : "Use Dark Mode"}
            </Button>
    }

    return (
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Portfolio StyleToggle={StyleToggle} />
        </ThemeProvider>
    </React.StrictMode>);
}

export default App;