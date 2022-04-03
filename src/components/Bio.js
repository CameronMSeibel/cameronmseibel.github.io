import { Button, Card, CardContent, CardMedia, Container, Grid, Link, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

function Bio({desc, email, phone, github, linkedin, resume, headshot}){
    return (
        <Grid item xs={12} md={6}>
            <Container sx={{display: "flex", justifyContent: "center"}}>
                <Card sx={{maxWidth: "sm"}}>
                    <CardMedia
                        component="img"
                        image={headshot.src}
                        alt={headshot.alt}
                    />
                    <CardContent>
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
                                <Typography>Email: <Link href={`tel:${phone}`}>{phone}</Link></Typography>
                            </ListItem>
                        </List>
                    </CardContent>
                    <Stack direction="row" justifyContent="center">
                        <Button href={github} size="small">GitHub</Button>
                        <Button href={linkedin} size="small">LinkedIn</Button>
                        <Button href={resume} size="small">Resume</Button>
                    </Stack>
                </Card>
            </Container>
        </Grid>);
}

export default Bio;