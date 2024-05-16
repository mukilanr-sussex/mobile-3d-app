import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionList = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={"h5"}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items?.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              "&::before": {
                display: "none",
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography
                fontWeight={800}
                variant="body1"
                color="text.secondary"
              >
                {item.subtitle}
              </Typography>
              <Typography color="text.secondary">{item.description}</Typography>
              <Typography
                target="_blank"
                color="text.secondary"
                component={"a"}
                href={item?.link}
              >
                {item?.link}
              </Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

AccordionList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const AboutPageContent = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <AccordionList
          title={"Tech Stack Used"}
          items={[
            {
              title: "Frontend (Client side)",
              subtitle: "React.JS and Material UI:",
              description:
                "React.js is a flexible and efficient JavaScript library for building user interfaces, particularly for single-page applications where you need fast interaction and seamless data updates across the entire UI. It helps in creating reusable UI components that present data that changes over time. Material-UI is a popular React component library that implements Google's Material Design utilizes Bootstrap classes, providing responsive web design.",
            },
            {
              title: "Backend (Server side)",
              subtitle: "CodeIgniter(MVC) and SQLite:",
              description:
                "CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications. It follows the Model-View-Controller (MVC) architectural pattern which separates the data model with business rules from the user interface. This makes it easier to manage large application development and integrate with databases. SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. It’s the most used database engine in the world, perfect for smaller projects, testing phases, or for embedding into applications without the need for a full database server setup.",
            },
            {
              title: "3D Models",
              subtitle: "Blender:",
              description:
                "Blender is a free and open-source 3D creation suite that supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing, and motion tracking. For developers and designers focused on 3D content creation, Blender offers robust tools for creating detailed, realistic 3D visuals and animations, which can be exported into various formats for different platforms and uses.",
            },
            {
              title: "3D Model UI Integration",
              subtitle: "Three.JS:",
              description:
                "Three.js is a cross-browser JavaScript library and Application Programming Interface (API) used to create and display animated 3D computer graphics in a web browser. Three.js allows the creation of GPU-accelerated 3D animations using the WebGL as its rendering technology, making it one of the most popular tools for integrating 3D content directly into web pages, allowing users to interact with 3D objects and environments seamlessly.",
            },
            {
              title: "3D Model Formats",
              subtitle: ".GLTF formats with textures:",
              description:
                "The GLTF (GL Transmission Format) is a royalty-free specification for the efficient transmission and loading of 3D scenes and models by applications. It supports complete scenes with complex models, geometry, materials, and textures. GLTF is designed to minimize both the size of 3D assets, and the runtime processing needed to unpack and use those assets, making it an ideal choice for streaming large amounts of 3D data. Including textures in GLTF files ensures that the models are not only detailed but also visually consistent with their original designs.",
            },
          ]}
        />
      </Box>

      <Box marginBottom={6}>
        <AccordionList
          title={"References and Acknowledgements"}
          items={[
            {
              title: "Mobile 3D Applications Lab Tutorials",
              description:
                "All the materials and guidance from the Lab sessions.",
            },
            {
              title: "Blender Tutorial",
              link: "https://www.youtube.com/watch?v=3lQSG9XC2jA&list=PLgZJHN2vSZ8JDFzhPGABlbCwbbLgIOBk1",
            },
            {
              title: "React.JS",
              link: "https://react.dev/",
            },
            {
              title: "Material UI",
              link: "https://mui.com/material-ui/getting-started/",
            },
            {
              title: "CodeIgniter",
              link: "https://codeigniter.com/",
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default AboutPageContent;
