import { Button, IconButton, InputAdornment, Stack, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import IonicSvg from "../helpers/IonicSvg";
import { StyledInput, StyledInputLabel } from "../helpers/inputs";
import { useLoginMutation } from "../../generated/graphql.tsx";
import { onSubmitHandler } from "../helpers/submitHandlers";
import errorHandler from "../helpers/errorHandler";
import { AuthContext } from "../auth-context/auth-context";
import { navHome } from "../navigation/optionsData";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const auth = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [submitLogin, { loading, error }] = useLoginMutation();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const submitHandler = async (e, submitLogin, form) => {
    const result = await onSubmitHandler(e, submitLogin, form);
    auth.login(result.login?.role, result.login?.token);
    navigate(navHome(result.login?.role));
  };

  const onChangeHandler =
    (name) =>
    ({ target }) =>
      setForm({ ...form, [name]: target.value });

  return (
    <>
      <IonicSvg />
      <form onSubmit={(e) => submitHandler(e, submitLogin, form)}>
        <Stack
          pt={2}
          spacing={2.4}
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          <Stack mt={1}>
            <StyledInputLabel htmlFor="username">Username:</StyledInputLabel>
            <StyledInput
              element="input"
              id="username"
              type="username"
              onChange={onChangeHandler("username")}
            />
          </Stack>

          <Stack>
            <StyledInputLabel htmlFor="password">Password:</StyledInputLabel>
            <StyledInput
              element="input"
              id="password"
              onChange={onChangeHandler("password")}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Stack>
        </Stack>

        {error && errorHandler(error)}

        <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
          <Button
            disabled={loading}
            type="submit"
            sx={{ width: "98%", background: "#428cff", color: "white" }}
            variant="contained"
          >
            {loading ? "..." : "LOGIN"}
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default Login;
