import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Main from "../components/Main";
import Container from "../components/Container";
import GoingBeyondContent from "../components/GoingBeyondContent";
import { Typography } from "@mui/material";

const GoingBeyondPage = () => {
  const theme = useTheme();
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
          <Container marginBottom={0}>
            <Box>
              <Box marginBottom={2}>
                <Typography
                  variant="h4"
                  align={"center"}
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Going Beyond
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  align={"center"}
                  color={"textSecondary"}
                >
                  Points about the deeper understanding of 3D Mobile
                  Applications Assignment
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        <Container paddingY={0} maxWidth={800}>
          {<GoingBeyondContent />}
        </Container>
      </Box>
    </Main>
  );
};

export default GoingBeyondPage;
