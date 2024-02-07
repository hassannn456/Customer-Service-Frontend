import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React, { useState } from "react";

import { links, obj } from "./tabOptions";
import TabNames from "./tabOptions";

import { drawerWidth } from "../console";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const [value, setValue] = useState("");
  const tabNames = TabNames();

  const dashHandler = (name) => {
    setValue(name);
  };

  return (
    <Box
      sx={{
        boxShadow: '0 0 0.6px 0 black',
        position: "fixed",
        bottom: 0,
        width: { xs: "100%", sm: "100%", md: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <BottomNavigation
        showLabels
        value={location.pathname}
      >
        {tabNames.options1.map((text) => (
          <BottomNavigationAction
            label={<small>{text}</small>}
            key={text}
            value={links[text]}
            icon={obj[text]}
            component={Link}
            to={links[text]}
            onClick={() => dashHandler(text !== "Dark Mode" ? text : value)}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
