import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

import NavItem from "../mobile/NavItem";
import CokeWhite from "../../assets/images/coke_white.png";
import { useNavigate } from "react-router-dom";

const SidebarNav = ({ pages, onClose }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const navigate = useNavigate();

  const handleClick = (model) => {
    navigate(model);
  };

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={"flex"}
          component="a"
          href="/"
          title="Mobile 3D Applications"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={"img"}
            src={mode === "light" ? CokeWhite : CokeWhite}
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box
          onClick={() => {
            onClose();
            handleClick("/");
          }}
        >
          <NavItem expand={false} title={"Home"} />
        </Box>
        <Box
          onClick={() => {
            onClose();
            handleClick("/about");
          }}
        >
          <NavItem expand={false} title={"About"} />
        </Box>
        <Box
          onClick={() => {
            onClose();
            handleClick("/3d-models");
          }}
        >
          <NavItem expand={false} title={"3D-Models"} />
        </Box>
        <Box
          onClick={() => {
            onClose();
            handleClick("/going-beyond");
          }}
        >
          <NavItem expand={false} title={"Going Beyond"} />
        </Box>
        <Box>
          <NavItem expand={false} title={"Contact"} />
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
