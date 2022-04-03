import { Button, Paper, Typography } from "@mui/material";
import React from "react";

function Header(){
    return (<Paper component="header" sx={{margin: "2rem", padding: "2rem"}}>
            <Typography
                variant="h3"
                component="h1"
            >
                Cameron Seibel
            </Typography>
            <Button
                variant="outlined"
                onClick={() => {
                    console.log("works")
                    document.querySelectorAll("*").classList.add("dark");
                }}
            >
                Dark
            </Button>
        </Paper>);
}

export default Header;