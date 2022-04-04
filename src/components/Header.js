import { Paper, Typography } from "@mui/material";
import React from "react";

function Header({StyleToggle}){
    return (<Paper component="header" sx={{display: "flex", justifyContent: "space-between", margin: "2rem 0", padding: "2rem"}}>
            <Typography
                variant="h3"
                component="h1"
                textAlign={{xs: "center", sm: "inherit"}}
            >
                Cameron Seibel
            </Typography>
            <StyleToggle />
        </Paper>);
}

export default Header;