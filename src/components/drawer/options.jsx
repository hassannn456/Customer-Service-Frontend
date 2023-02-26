import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { drawerActions } from '../Redux/drawerSlice'
import { obj } from "./icons";

// useEffect(()={

// })

const Options = (props) => {
  const dispatch= useDispatch();
  const drawerShow = useSelector(state => state.drawer.activeButton)

  const dashHandler = (name) => {
    dispatch(drawerActions.toggle(name));
 }

  return (
    <>
      <Stack ml={2.2} mt={3}>
        <Typography
          sx={{
            opacity: 0.7,
            fontWeight: 460,
            fontSize: "14px",
            letterSpacing: 1.4,
          }}
        >
          {props.title}
        </Typography>
      </Stack>
      <List>
        {props.options.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                borderTopRightRadius: "60px",
                borderBottomRightRadius: "60px"
              }}
              onClick={() => dashHandler(text) }
            >
              <ListItemIcon>{obj[text]}</ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ fontWeight: 460 }}>{text}</Typography>
                }
              />
              {text === "Dark Mode" ? (
                <Switch
                  checked={props.checked}
                  onChange={props.change}
                />
              ) : null}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};


export default Options;
