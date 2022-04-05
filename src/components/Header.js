import { IconButton, Paper, Popover, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import React, {useState} from "react";

function Header({StyleToggle}){

    function MenuPopover(){
        const [anchorElement, setAnchor] = useState(null);

        const handleClick = (event) => {
            setAnchor(event.currentTarget);
        }

        const handleClose = (event) => {
            setAnchor(null);
        }

        const open = Boolean(anchorElement);
        const id = open ? "menu-popover" : undefined;

        return(
            <div>
                <IconButton aria-describedby={id} onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorElement}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    sx={{
                        padding: "10rem"
                    }}
                >
                    <StyleToggle />
                </Popover>
            </div>
        );
    }

    return (
        <Paper component="header" sx={{display: "flex", justifyContent: "space-between", margin: "2rem 0", padding: "2rem"}}>
            <Typography
                variant="h3"
                component="h1"
                textAlign={{xs: "center", sm: "inherit"}}
            >
                Cameron Seibel
            </Typography>
            <MenuPopover />
        </Paper>);
}

export default Header;