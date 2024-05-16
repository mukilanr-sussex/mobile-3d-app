import React from "react";
import Slider from "react-slick";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import CokeWhite from "../assets/images/coke_white.png";
import FantaWhite from "../assets/images/fanta_white.png";
import SpriteWhite from "../assets/images/sprite_white.png";
import PepperWhite from "../assets/images/pepper_white.png";
import CokeDietWhite from "../assets/images/coke_diet_white.png";
import CokeZeroWhite from "../assets/images/coke_zero_white.png";

const brandLogos = [
  CokeWhite,
  SpriteWhite,
  CokeDietWhite,
  FantaWhite,
  CokeZeroWhite,
  PepperWhite,
];

const BrandsSlider = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up("xs"), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 3;
  }
  if (isMd) {
    slidesToShow = 4;
  }
  if (isLg) {
    slidesToShow = 5;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {brandLogos?.map((item, i) => (
          <Box maxWidth={120} key={i} marginX={3}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item}
              alt="..."
              sx={{
                filter:
                  theme.palette.mode === "dark"
                    ? "brightness(0) invert(0.7)"
                    : "none",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BrandsSlider;
