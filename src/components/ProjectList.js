import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Project from "./Project";

function ProjectList({projects}){
    return (
        <Grid item xs={12} md={6}>
            <Paper component="header" sx={{margin: "2rem auto", maxWidth: "sm", display: "flex", justifyContent: "space-between", padding: "2rem"}}>
            <Typography
                variant="h3"
                component="h1"
            >
                Work
            </Typography>
            </Paper>
            <Container sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                {projects.map((project) => <Project key={project.name} {...project}/>)}
            </Container>
        </Grid>);
}

export default ProjectList;