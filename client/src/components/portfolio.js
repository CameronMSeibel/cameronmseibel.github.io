import React from "react";
import projects from "../resources/projects.json"
import contact from "../resources/contact.json"
import Header from "./Header";
import Bio from "./Bio";
import ProjectList from "./ProjectList";
import { Grid } from "@mui/material";

function Portfolio(){
    return (
    <>
        <Header />
        <Grid 
            container 
            spacing={3}
            direction="row-reverse"
            justifyContent="center"
        >
            <Bio {...contact}/>
            <ProjectList projects={projects}/>
        </Grid>
    </>);
}

export default Portfolio;