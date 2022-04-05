import { Box, Button, IconButton, List, ListItem, Paper, Popover, Typography } from "@mui/material";
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

        let open = Boolean(anchorElement);

        return(
            <div>
                <IconButton onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Popover
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
                >
                    <List>
                        <ListItem>
                            <StyleToggle onClick={handleClick} />
                        </ListItem>
                    </List>
                </Popover>
            </div>
        );
    }

    return (
        <Paper component="header" sx={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: "2rem 0", padding: "2rem"}}>
            <Box>
                <Typography
                    variant="h3"
                    component="h1"
                    textAlign={{xs: "center", sm: "inherit"}}
                >
                    Cameron Seibel
                </Typography>
                <Button target="_self" href="#work">
                    Work
                </Button>
                <Button target="_self" href="#contact">
                    Contact
                </Button>
            </Box>
            <MenuPopover />
        </Paper>);
}

export default Header;