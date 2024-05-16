import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Dialog,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ContactPopupBox = ({ onClose, open }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth="sm"
      fullWidth
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          m: "auto",
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          width: fullScreen ? "100%" : "auto",
          height: fullScreen ? "100%" : "auto",
          maxHeight: fullScreen ? "none" : "80vh",
          maxWidth: fullScreen ? "none" : "80vw",
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box
        sx={{
          padding: theme.spacing(6), // Adds padding inside the box
          display: "flex",
          flexDirection: "column", // Stacks items vertically
          alignItems: "center", // Centers items horizontally
          justifyContent: "center", // Centers items vertically
        }}
      >
        <Typography variant="h4" gutterBottom>
          Mobile 3D Applications
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Name: Mukilan Rajendran
        </Typography>
        <Typography variant="h6">Email: mr754@sussex.ac.uk</Typography>
        <Typography variant="h6">Candidate Number: 276334</Typography>
      </Box>
    </Dialog>
  );
};

ContactPopupBox.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ContactPopupBox;
