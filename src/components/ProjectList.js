import { Container, Grid } from "@mui/material";
import React from "react";
import Project from "./Project";

function ProjectList({projects}){
    return (
        <Grid item xs={12} md={6}>
            <Container sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                {projects.map((project) => <Project key={project.name} {...project}/>)}
            </Container>
        </Grid>);
}

export default ProjectList;