import { Avatar, Button, Card, CardContent, Grid, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { phoneNumFormat } from "../utils";

function Bio({desc, email, phone, github, linkedin, resume, headshot}){
    return (
        <Grid item lg={12} xl={6}>
            <Card sx={{maxWidth: "sm", margin: "1rem auto"}}>
                <Avatar {...headshot} sx={{height: "512px", width: "512px", margin: "1rem auto"}} />
                <CardContent sx={{margin: "0 1rem", padding: "1rem"}}>
                    <Typography textAlign="center" marginBottom="1rem" variant="h5" component="h2">
                        About Me
                    </Typography>
                    <Typography>
                        {desc}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>);
}

export default Bio;