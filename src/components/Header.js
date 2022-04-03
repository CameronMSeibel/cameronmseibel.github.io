import { Paper, Typography } from "@mui/material";
import React from "react";

function Header({StyleToggle}){
    return (<Paper component="header" sx={{margin: "2rem", padding: "2rem"}}>
            <Typography
                variant="h3"
                component="h1"
            >
                Cameron Seibel
            </Typography>
            <StyleToggle />
        </Paper>);
}

export default Header;