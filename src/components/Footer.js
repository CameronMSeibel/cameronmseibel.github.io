import React from "react";
import {IconButton, Link, Paper, Stack, Tooltip, Typography} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import { phoneNumFormat } from "../utils";

function Footer({phone, email, linkedin, github, resume}){
    return(
        <Paper sx={{padding: "2rem", margin: "2rem auto", textAlign: "center"}}>
            <Typography
                variant="h4"
                component="h2"
                marginBottom="1rem"
                id="contact"
            >
                Contact Me
            </Typography>
            <Typography>
            <Typography marginBottom="1rem">Email: <Link href={`mailto:${email}`}>{email}</Link></Typography>
            <Typography marginBottom="1rem">Phone: <Link href={`tel:${phone}`}>{phoneNumFormat(phone)}</Link></Typography>
            <Stack direction="row" justifyContent="center">
                <Tooltip title="View my GitHub">
                    <IconButton href={github} size="small"><GitHubIcon /></IconButton>
                </Tooltip>
                <Tooltip title="View my LinkedIn">
                    <IconButton href={linkedin} size="small"><LinkedInIcon /></IconButton>
                </Tooltip>
                <Tooltip title="View my resume">
                    <IconButton href={resume} size="small"><ArticleIcon /></IconButton>
                </Tooltip>
            </Stack>
            </Typography>
        </Paper>
    );
}

export default Footer;