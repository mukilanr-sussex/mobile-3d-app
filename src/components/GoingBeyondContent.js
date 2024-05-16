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
              <Typography fontWeight={800} variant="body1" color="text.primary">
                {item.subtitle}
              </Typography>
              <Typography color="text.primary">{item.description}</Typography>
              <Typography
                target="_blank"
                color="text.primary"
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

const GoingBeyondContent = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <Box marginBottom={2}>
          <Typography fontWeight={700} variant={"h5"}>
            Deeper Understanding Points
          </Typography>
        </Box>
        <Box>
          <Box
            component={Accordion}
            padding={1}
            marginBottom={2}
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
            >
              <Typography fontWeight={600}>
                Blender for 3D Modeling and Texture Mapping
              </Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.primary">
                In the progression of the assignment, I utilized Blender, to
                develop and refine 3D models. Furthermore, I leveraged Blender’s
                capability to export models in the GLTF format. GLTF (GL
                Transmission Format) is pivotal for its wide compatibility with
                various rendering engines and platforms, ensuring that our
                models are readily usable in different environments without
                compatibility issues.
              </Typography>
              <br />
              <Typography color="text.primary">
                Below is the youtube playlist which is referred to create the
                model:
              </Typography>
              <Typography
                target="_blank"
                color="text.primary"
                component={"a"}
                href="https://www.youtube.com/watch?v=3lQSG9XC2jA&list=PLgZJHN2vSZ8JDFzhPGABlbCwbbLgIOBk1"
              >
                https://www.youtube.com/watch?v=3lQSG9XC2jA&list=PLgZJHN2vSZ8JDFzhPGABlbCwbbLgIOBk1
              </Typography>
            </AccordionDetails>
          </Box>
          <Box
            component={Accordion}
            padding={1}
            marginBottom={2}
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
            >
              <Typography fontWeight={600}>
                Photoshop for Enhanced Texture Editing
              </Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.primary">
                In this application, Adobe Photoshop was instrumental for
                refining textures, providing advanced tools for detailed and
                high-resolution texture creation on 3D models.
              </Typography>
            </AccordionDetails>
          </Box>
          <Box
            component={Accordion}
            padding={1}
            marginBottom={2}
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
            >
              <Typography fontWeight={600}>
                Frontend Development with React and Material-UI
              </Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.primary">
                For the frontend development of this application, React coupled
                with Material-UI was employed to create a responsive and
                visually appealing user interface. This combination allowed for
                rapid development of interactive components while maintaining a
                consistent and modern design aesthetic, demonstrating an
                advanced application of frontend technologies.
              </Typography>
            </AccordionDetails>
          </Box>
          <Box
            component={Accordion}
            padding={1}
            marginBottom={2}
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
            >
              <Typography fontWeight={600}>
                Adapting to University's ITS Server Requirements with
                CodeIgniter 3
              </Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.primary">
                Due to the University’s ITS server supporting only PHP 5.6,
                CodeIgniter 3 was selected as the backend framework for this
                application. This adaptation ensured compatibility with the
                existing server technology while still utilizing robust features
                to develop a dynamic and efficient web application.
              </Typography>
              <br />
              <Typography color="text.primary">
                Below is the list of APIs which returns response in JSON format
                for each page.
              </Typography>
              <Typography target="_blank" color="text.primary" component={"a"}>
                <ul>
                  <li>
                    https://users.sussex.ac.uk/~mr754/3dapp/assignment/api/index.php/data/homepage
                  </li>
                  <li>
                    https://users.sussex.ac.uk/~mr754/3dapp/assignment/api/index.php/data/modelspage
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Box>
          <Box
            component={Accordion}
            padding={1}
            marginBottom={2}
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
            >
              <Typography fontWeight={600}>
                Integrated Axios-HTTP for AJAX Requests
              </Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.primary">
                Axios was employed in this application to handle AJAX requests,
                facilitating the retrieval of JSON responses from the backend
                server. This library was chosen for its promise-based structure
                that simplifies asynchronous request handling, enhancing the
                efficiency and readability of the frontend code.
              </Typography>
            </AccordionDetails>
          </Box>
          <Box
            component={Accordion}
            padding={1}
            marginBottom={2}
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
            >
              <Typography fontWeight={600}>
                Implementing Three.js with GLTF Format for 3D Rendering
              </Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.primary">
                For advanced 3D rendering, Three.js was utilized in conjunction
                with the GLTF format, providing an efficient and powerful method
                to display detailed 3D models directly in the web browser. This
                approach allowed for seamless integration of high-fidelity
                models and animations, optimizing performance and compatibility
                across devices.
              </Typography>
            </AccordionDetails>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GoingBeyondContent;
