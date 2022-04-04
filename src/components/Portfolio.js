import React from "react";
import projects from "../resources/projects.json"
import contact from "../resources/contact.json"
import Header from "./Header";
import Bio from "./Bio";
import ProjectList from "./ProjectList";
import { Box, Grid } from "@mui/material";

function Portfolio({StyleToggle}){
    return (
    <Box sx={{margin: "0 2rem"}}>
        <Header StyleToggle={StyleToggle}/>
        <Grid 
            container 
            spacing={3}
            justifyContent="center"
        >
            <Bio {...contact}/>
            <ProjectList projects={projects}/>
        </Grid>
    </Box>);
}

export default Portfolio;