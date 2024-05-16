import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import CokeWhite from "../assets/images/coke_white.png";
import { IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const navigate = useNavigate();

  const handleClick = (model) => {
    navigate(model);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={1}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box display={"flex"}>
            <Typography
              align={"center"}
              variant={"subtitle2"}
              color="text.secondary"
              gutterBottom
            >
              &copy; Mobile 3D Applications. All rights reserved
            </Typography>
          </Box>
          <Box
            sx={{
              cursor: "pointer",
            }}
            display={"flex"}
            onClick={() => handleClick("/")}
            width={80}
          >
            <Box component={"img"} src={CokeWhite} height={1} width={1} />
          </Box>
          <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
            <Box marginTop={1} marginRight={2}>
              {/* <Box marginTop={4}> */}
              <IconButton
                target="_blank"
                component="a"
                href="https://www.facebook.com/cocacolaGB"
                size={"large"}
                color={""}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                target="_blank"
                component="a"
                href="https://www.instagram.com/cocacolagbi/"
                size={"large"}
                color={""}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                target="_blank"
                component="a"
                href="https://twitter.com/cocacola_gb"
                size={"large"}
                color={""}
              >
                <XIcon />
              </IconButton>
              <IconButton
                target="_blank"
                component="a"
                href="https://www.youtube.com/user/cocacolacompanyuk"
                size={"large"}
                color={""}
              >
                <YouTubeIcon />
              </IconButton>
              {/* </Box> */}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
