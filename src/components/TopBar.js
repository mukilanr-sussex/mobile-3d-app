import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CokeWhite from "../assets/images/coke_white.png";
import NavItem from "./NavItem";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";

import ContactPopupBox from "../components/ContactPopupBox";

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const [openContact, setOpenContact] = useState(false);
  const [activeModel, setActiveModel] = useState("coke");
  const navigate = useNavigate();

  const handleClick = (model) => {
    navigate(model);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
      py={1.5}
    >
      <Box
        sx={{
          cursor: "pointer",
        }}
        display={"flex"}
        onClick={() => handleClick("/")}
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={"img"}
          src={mode === "light" ? CokeWhite : CokeWhite}
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box onClick={() => handleClick("/")}>
          <NavItem
            title={"Home"}
            id={"home-page"}
            colorInvert={colorInvert}
            expand={false}
            items={[
              {
                title: "Home",
                href: BASE_URL,
              },
            ]}
          />
        </Box>
        <Box marginLeft={4} onClick={() => handleClick("/about")}>
          <NavItem
            title={"About"}
            id={"about-page"}
            items={[
              {
                title: "About",
                href: "/about",
              },
            ]}
            expand={false}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4} onClick={() => handleClick("/3d-models")}>
          <NavItem
            title={"3D Models"}
            id={"3d-models-page"}
            items={[
              {
                title: "3D Models",
                href: "/3d-models",
              },
            ]}
            colorInvert={colorInvert}
            expand={false}
          />
        </Box>
        <Box marginLeft={4} onClick={() => handleClick("/going-beyond")}>
          <NavItem
            title="Going Beyond"
            id={"going-beyond"}
            items={[
              {
                title: "Going Beyond",
                href: "/going-beyond",
              },
            ]}
            expand={false}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4} onClick={() => setOpenContact(true)}>
          <NavItem
            title={"Contact"}
            id={"contact-page"}
            url="/contact"
            colorInvert={colorInvert}
            expand={false}
          />
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
        <ContactPopupBox
          open={openContact}
          onClose={() => setOpenContact(false)}
        />
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
