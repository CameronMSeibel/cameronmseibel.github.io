import React from "react";
import projects from "../resources/projects.json"
import aboutMe from "../resources/about.json"
import Header from "./Header";
import Bio from "./Bio";
import ProjectList from "./ProjectList";
import { Box, Grid } from "@mui/material";
import Footer from "./Footer";

function Portfolio({StyleToggle}){
    return (
    <Box sx={{margin: "0 2rem"}}>
        <Header StyleToggle={StyleToggle}/>
        <Grid 
            container
            justifyContent="center"
        >
            <Bio {...aboutMe}/>
            <ProjectList projects={projects}/>
        </Grid>
        <Footer {...aboutMe} />
    </Box>);
}

export default Portfolio;