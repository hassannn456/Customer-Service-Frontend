import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

import BottomNav from "./navigation/BottomNav";
import Options from "./navigation/options";
import { links } from "./navigation/optionsData";
import TabNames from "./navigation/optionsData";

import useRoutes from "./hooks/routes";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export const drawerWidth = 340;

export default function ResponsiveDrawer(props) {
  const location = useLocation();
  const navigate = useNavigate();
  let key = Object.keys(links).find((k) => links[k] === location.pathname);
  const drawerShow = key;
  const tabName = TabNames();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Stack mt={-4}>
      <Toolbar />
      {tabName.options1.length ? (
        <>
          <Options options={tabName.options1} title={"MANAGEMENT"}></Options>
          <Divider />
        </>
      ) : null}
      <Options
        options={tabName.options2}
        title={"ACCOUNT"}
        checked={props.checked}
        change={props.change}
      ></Options>
      <Divider />
      <Options options={tabName.options3} title={"TUTORIAL"}></Options>
    </Stack>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          color: "inherit",
          background: props.checked ? "#1f1f1f" : "#ffffff",
        }}
      >
        <Toolbar>
          {drawerShow &&
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          }
          {drawerShow ?
          <Typography variant="h6" color="inherit">
            {drawerShow}
          </Typography>
          :
          <IconButton  aria-label="back" size="large"
          onClick={()=>{navigate(-1)}}>
            <ArrowBack />
          </IconButton>
        }
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          borderRight: "none",
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              borderRight: "none",
              boxShadow: props.checked
                ? "0 0 0.3px 0 #D7D7D7"
                : "0 0 3px 0 #D7D7D7",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {useRoutes()}
        {tabName.options1?.includes(drawerShow) ? <BottomNav /> : null}
      </Box>
    </Box>
  );
}
