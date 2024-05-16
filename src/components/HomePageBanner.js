import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MainImage from "../assets/images/main.jpg";

const scrollTo = (id) => {
  setTimeout(() => {
    const element = document.querySelector(`#${id}`);
    if (!element) {
      return;
    }

    window.scrollTo({
      left: 0,
      top: element.offsetTop - 120,
      behavior: "smooth",
    });
  });
};

const HomePageBanner = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll(".jarallax");
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import("jarallax");
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const theme = useTheme();

  return (
    <Box
      className={"jarallax"}
      data-jarallax
      data-speed="0.2"
      position={"relative"}
      minHeight={{ xs: 400, sm: 500, md: 1024 }}
      display={"flex"}
      alignItems={"center"}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      <Box
        className={"jarallax-img"}
        sx={{
          position: "absolute",
          objectFit: "cover",
          fontFamily: "object-fit: cover;",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url(${MainImage})`,
          // filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
        }}
      ></Box>

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          bottom: 24,
          zIndex: 9999,
        }}
      >
        <Box
          component={"svg"}
          viewBox="0 0 20 20"
          fill="currentColor"
          width={{ xs: 30, sm: 40 }}
          height={{ xs: 30, sm: 40 }}
          onClick={() => scrollTo("homepage-models")}
          sx={{ cursor: "pointer" }}
        >
          <KeyboardArrowDownIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageBanner;
