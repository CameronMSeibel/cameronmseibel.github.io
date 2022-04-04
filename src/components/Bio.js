import { Avatar, Button, Card, CardContent, Grid, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { phoneNumFormat } from "../utils";

function Bio({desc, email, phone, github, linkedin, resume, headshot}){
    return (
        <Grid item lg={12} xl={6}>
            <Card sx={{maxWidth: "sm", margin: "0 auto"}}>
                <Avatar {...headshot} sx={{height: "512px", width: "512px", margin: "1rem auto"}} />
                <CardContent sx={{margin: "0 1rem", padding: "1rem"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        About Me
                    </Typography>
                    <Typography gutterBottom>
                        {desc}
                    </Typography>
                    <Typography variant="h6" component="h3">
                        Contact Information
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography>Email: <Link href={`mailto:${email}`}>{email}</Link></Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Phone: <Link href={`tel:${phone}`}>{phoneNumFormat(phone)}</Link></Typography>
                        </ListItem>
                    </List>
                    <Stack direction="row" justifyContent="center">
                        <Button href={github} size="small">GitHub</Button>
                        <Button href={linkedin} size="small">LinkedIn</Button>
                        <Button href={resume} size="small">Resume</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>);
}

export default Bio;