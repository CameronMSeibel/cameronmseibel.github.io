import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Project from "./Project";

function ProjectList({projects}){
    return (
        <Grid item xs={12} md={6}>
            <Paper component="header" sx={{margin: "0 auto 2rem", maxWidth: "sm", padding: "2rem"}}>
                <Typography
                    variant="h3"
                    component="h1"
                    textAlign="center"
                >
                    Work
                </Typography>
            </Paper>
            {projects.map((project) => <Project key={project.name} {...project}/>)}
        </Grid>);
}

export default ProjectList;