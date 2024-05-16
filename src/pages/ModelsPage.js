import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Main from "../components/Main";
import Container from "../components/Container";
import BrandsSlider from "../components/BrandsSlider";
import ShowModelContainer from "../components/ShowModelContainer";
import { Button, Grid, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import PopupBox from "../components/PopupBox";

import CokeRender from "../assets/images/renders/coke.jpg";
import FantaRender from "../assets/images/renders/fanta.jpg";
import SpriteRender from "../assets/images/renders/sprite.jpg";
import axios from "axios";

const renderData = [
  {
    title: "Coca Cola",
    description:
      "The 3D model was meticulously crafted using Blender to ensure precise detail.",
    model: "coke",
    image: CokeRender,
  },
  {
    title: "Sprite",
    description:
      "The models were exported as glTF to facilitate seamless web integration and scalability.",
    model: "sprite",
    image: SpriteRender,
  },
  {
    title: "Fanta",
    description:
      "Leveraging Three.js, the glTF models were seamlessly integrated into the web environment.",
    model: "fanta",
    image: FantaRender,
  },
];

const ModelsPage = ({ model }) => {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [modelsPageData, setModelsPageData] = useState([]);
  const [modelsData, setModelsData] = useState([]);
  const [activeModel, setActiveModel] = useState("coke");
  const [activeModelDetails, setActiveModelDetails] = useState([]);
  const [popupImage, setPopupImage] = useState(CokeRender);
  const { model: modelFromHome } = location?.state || {};

  useEffect(() => {
    axios
      .get("/index.php/data/modelspage", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setModelsPageData(res?.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("/index.php/data/homepage", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setModelsData(res?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (modelFromHome) {
      setActiveModel(modelFromHome);
    }
  }, [modelFromHome]);

  useEffect(() => {
    if (model) {
      setActiveModel(model);
    }
  }, [model]);

  useEffect(() => {
    if (modelsData && activeModel) {
      const currentModel = modelsData?.find((model, i) => {
        return model?.model === activeModel;
      });
      setActiveModelDetails(currentModel);
    }
  }, [activeModel, modelsData]);

  return (
    <Main>
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            <Box>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "medium",
                }}
                gutterBottom
                color={"textSecondary"}
                align={"center"}
              >
                Discover More
              </Typography>
              <Box marginBottom={2}>
                <Typography
                  variant="h4"
                  align={"center"}
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {modelsPageData?.page_title}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  align={"center"}
                  color={"textSecondary"}
                >
                  {modelsPageData?.page_description}
                </Typography>
              </Box>
            </Box>
          </Container>
          <Container maxWidth={1} paddingY={0} paddingBottom={6} paddingX={0}>
            <ShowModelContainer
              model={activeModel}
              showControls
              setActiveModel={setActiveModel}
            />
          </Container>
          <Container paddingY={1} marginBottom={2}>
            <Box marginBottom={2}>
              <Typography
                variant={"h4"}
                sx={{ fontWeight: 700 }}
                align={"center"}
                data-aos={"fade-up"}
              >
                {activeModelDetails?.title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                align={"center"}
                data-aos={"fade-up"}
              >
                {activeModelDetails?.description}
              </Typography>
            </Box>
          </Container>
          <Container maxWidth={"800px !important"}>
            <Divider />
          </Container>
          <Container paddingY={1} marginBottom={2}>
            <Box marginBottom={2}>
              <Typography
                variant={"h4"}
                sx={{ fontWeight: 700 }}
                align={"center"}
                data-aos={"fade-up"}
              >
                {modelsPageData?.page_mid_title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                align={"center"}
                data-aos={"fade-up"}
              >
                {modelsPageData?.page_mid_description}
              </Typography>
            </Box>
          </Container>
          <Container maxWidth={"800px !important"}>
            <Divider />
          </Container>
          <Container paddingY={1} marginBottom={2}>
            <Box marginBottom={2}>
              <Typography
                variant={"h4"}
                sx={{ fontWeight: 700 }}
                align={"center"}
                data-aos={"fade-up"}
              >
                {modelsPageData?.page_footer_title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                align={"center"}
                data-aos={"fade-up"}
              >
                {modelsPageData?.page_footer_description}
              </Typography>
              <Box marginTop={2} display={"flex"} justifyContent={"center"}>
                <Button
                  href={modelsPageData?.brand_url}
                  color={"primary"}
                  variant="outlined"
                  size={"small"}
                  target="_blank"
                  style={{ fontWeight: "bold" }}
                  data-aos={"fade-up"}
                >
                  Visit Coca-Cola
                </Button>
              </Box>
            </Box>
          </Container>
          <Container maxWidth={"800px !important"}>
            <Divider />
          </Container>
          <Container paddingY={1} marginBottom={6}>
            <Box marginBottom={4}>
              <Typography
                fontWeight={700}
                variant={"h4"}
                align={"center"}
                data-aos={"fade-up"}
              >
                Wireframe of 3D Model
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={{ xs: 2, md: 4 }}>
                {renderData.map((item, i) => (
                  <Grid key={i} item xs={12} sm={6} md={4}>
                    <Box
                      onClick={() => {
                        setOpen(true);
                        setPopupImage(item?.image);
                      }}
                      sx={{
                        width: 1, // Takes full width of the Grid item
                        pt: "100%", // Padding-top as 100% of the width makes the box square
                        position: "relative",
                        cursor: "pointer", // Changes the cursor to pointer on hover
                        "&:hover": {
                          transform: `translateY(-${theme.spacing(1 / 2)})`,
                        },
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        style={{
                          borderRadius: 8,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          position: "absolute", // Positioned absolutely to cover the padded parent box
                          top: 0,
                          left: 0,
                        }}
                      />
                      <Box
                        position={"absolute"}
                        bottom={0}
                        left={0}
                        right={0}
                        padding={2}
                        zIndex={2}
                        sx={{
                          bgcolor: "rgba(0, 0, 0, 0.5)", // Optional: Adds a semi-transparent overlay for readability
                        }}
                      >
                        <Typography
                          color={"common.white"}
                          fontWeight={700}
                          variant={"h6"}
                        >
                          {item.title}
                        </Typography>
                        <Typography color={"common.white"}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
          <Container>
            <Divider />
          </Container>
          <Container
            maxWidth={1}
            paddingTop={"0 !important"}
            paddingBottom={"24px !important"}
          >
            <BrandsSlider />
          </Container>
        </Box>
        <PopupBox
          open={open}
          onClose={() => setOpen(false)}
          image={popupImage}
        />
      </Box>
    </Main>
  );
};

export default ModelsPage;
