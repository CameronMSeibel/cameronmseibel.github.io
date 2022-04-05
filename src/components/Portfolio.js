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
        <Grid 
            container
            justifyContent="center"
        >
            <Grid item xs={12} width="100vw" minHeight="100vh">
                <Header StyleToggle={StyleToggle}/>
                <Bio {...aboutMe}/>
            </Grid>
            <ProjectList projects={projects}/>
            <Grid item xs={12}>
                <Footer {...aboutMe} />
            </Grid>
        </Grid>
    </Box>);
}

export default Portfolio;