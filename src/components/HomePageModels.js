import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import CokeWhite from "../assets/images/coke_white.png";
import FantaWhite from "../assets/images/fanta_white.png";
import SpriteWhite from "../assets/images/sprite_white.png";
import ShowModelContainer from "./ShowModelContainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePageModels = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const [homeData, setHomeData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/index.php/data/homepage", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setHomeData(res?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleClick = (model) => {
    navigate("/3d-models", { state: { model } });
  };

  return (
    <Box marginBottom={0} id="homepage-models">
      <Box marginBottom={4}>
        <Typography
          fontWeight={700}
          variant={"h4"}
          align={"center"}
          gutterBottom
          data-aos={"fade-up"}
        >
          Our Products
        </Typography>
        <Typography
          variant={"h6"}
          component={"p"}
          color={"text.secondary"}
          align={"center"}
          data-aos={"fade-up"}
        >
          Explore the vibrant world of Coca-Cola beverages in stunning 3D.
          <br />
          Dive in to discover the iconic shapes and colors of these beloved
          products.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {homeData?.length > 0 &&
          homeData?.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={"a"}
                display={"block"}
                width={1}
                height={1}
                sx={{
                  textDecoration: "none",
                  transition: "all .2s ease-in-out",
                  "&:hover": {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  borderRadius={2}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <ShowModelContainer
                    showControls={false}
                    model={item.model}
                    height={300}
                    autoSpin={true}
                  />
                  <Box component={CardContent} marginBlock={0}>
                    <Box maxWidth={100} marginY={1}>
                      <Box
                        component="img"
                        height={1}
                        width={1}
                        src={
                          (item.model === "coke" && CokeWhite) ||
                          (item.model === "sprite" && SpriteWhite) ||
                          (item.model === "fanta" && FantaWhite)
                        }
                        alt="..."
                        sx={{
                          filter: mode === "dark" ? "contrast(0)" : "none",
                        }}
                      />
                    </Box>
                    <Typography
                      align={"left"}
                      variant={"body1"}
                      color="textSecondary"
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  <Box flexGrow={1} />
                  <Box
                    marginBlock={0}
                    component={CardActions}
                    justifyContent={"flex-start"}
                  >
                    <Button
                      onClick={() => handleClick(item.model)}
                      size="large"
                      endIcon={<NavigateNextIcon />}
                    >
                      View 3D Model
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default HomePageModels;
