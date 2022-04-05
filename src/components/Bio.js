import { Avatar, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function Bio({desc, email, phone, github, linkedin, resume, headshot}){
    return (
        <Card sx={{maxWidth: "sm", margin: "1rem auto"}}>
            <Avatar {...headshot} sx={{height: {xs: "256px", sm: "384px", md: "512px"}, width: {xs: "256px", sm: "384px", md: "512px"}, margin: "1rem auto"}} />
            <CardContent sx={{margin: "0 1rem", padding: "1rem"}}>
                <Typography textAlign="center" marginBottom="1rem" variant="h5" component="h2">
                    About Me
                </Typography>
                <Typography>
                    {desc}
                </Typography>
            </CardContent>
        </Card>
        );
}

export default Bio;