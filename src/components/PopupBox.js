import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const PopupBox = ({ onClose, open, image }) => {
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
          borderRadius: 8,
          overflow: "hidden",
          position: "relative", // Needed for absolute positioning of the close button
          // Adjust width and height based on image size, fullScreen state
          width: fullScreen ? "100%" : "auto",
          height: fullScreen ? "100%" : "auto",
          maxHeight: fullScreen ? "none" : "80vh", // Adjust maximum height on full screen mode
          maxWidth: fullScreen ? "none" : "80vw", // Adjust maximum width on full screen mode
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
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box
        component="img"
        src={image}
        sx={{
          maxHeight: "100%", // Limits the image height to the container's height
          maxWidth: "100%", // Limits the image width to the container's width
          display: "block", // Improves how the image is displayed
          objectFit: "contain", // Ensures the image is scaled properly
          margin: "auto", // Centers the image
        }}
      />
    </Dialog>
  );
};

PopupBox.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired, // Ensure the image prop is required and a string
};

export default PopupBox;
