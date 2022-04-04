import { Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

function Project({name, desc, image, links}){
    return (<Card sx={{maxWidth: "sm", margin: "2rem auto"}}>
        <CardMedia
            component="img"
            image={image.src}
            alt={image.alt}
        />
        <CardContent sx={{margin: "0 1rem"}}>
            <Typography variant="h5" component="h3" gutterBottom>
                {name}
            </Typography>
            <Typography gutterBottom>
                {desc}
            </Typography>
            <Stack direction="row" justifyContent="center">
                <Button 
                    target="_blank"
                    href={links.deployed} 
                    size="small"
                >
                    Deployed
                </Button>
                <Button 
                    target="_blank"
                    href={links.github} 
                    size="small"
                >
                    GitHub
                </Button>
            </Stack>
        </CardContent>
    </Card>);
}

export default Project;