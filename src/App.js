import React, { useState } from "react";
import Portfolio from "./components/Portfolio";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Switch, FormControlLabel } from "@mui/material"



function App(){

    function initialThemeState(){
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }
        return false;
    }

    const [darkMode, toggleDarkMode] = useState(initialThemeState());
    const theme = createTheme({
        components: {
            MuiLink: {
                defaultProps: {
                    target: "_blank" // Open a new window for links by default
                }
            },
            MuiIconButton: {
                defaultProps: {
                    target: "_blank" // IconButtons don't count as links.
                }
            }
        },
        palette: {
            mode: darkMode ? "dark" : "light",
            background: {
                default: darkMode ? "#121212" : "#DCDCDC"
            }
        }
    });

    function StyleToggle(){
        return (
            <FormControlLabel 
                control={<Switch
                    aria-label="Toggle Dark Mode"
                    defaultChecked={darkMode}
                    onClick={() => {
                        toggleDarkMode(!darkMode);
                        console.log(darkMode);
                    }}
                />}
                label="Dark Mode"
            />
            
        );
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