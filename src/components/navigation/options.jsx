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
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth-context/auth-context";

import { links, obj } from "./optionsData";

const Options = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  let key = Object.keys(links).find(k=>links[k]===location.pathname);
  const [value, setValue] = useState(key);

  const dashHandler = (name) => {
    setValue(name);
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
                borderBottomRightRadius: "60px",
                '&.Mui-selected': {
                  color: '#418afb',
                }
              }}
              selected={links[text] === location.pathname}
              component={text !== 'Dark Mode' | 'Logout' ? Link : null} 
              to={links[text]} 
              onClick={() => {
                dashHandler(text !== 'Dark Mode' | 'Logout' ? text : value)
                if(text === 'Logout') {
                  auth.logout()
                  navigate('/tabs/login')
                }
              }}
            >
              <ListItemIcon sx={{color:'#9C9C9C'}}>{obj[text]}</ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ fontWeight: 460 }}>{text}</Typography>
                }
              />
              {text === "Dark Mode" ? (
                <Switch
                sx={{zIndex: 1}}
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
