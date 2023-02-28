import { Button, Stack, useTheme } from "@mui/material";
import { StyledInput, StyledInputLabel } from "../helpers/inputs";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import IonicSvg from "../helpers/IonicSvg";
import { useLoginMutation } from "../../generated/graphql.tsx";
import { onSubmitHandler } from "../helpers/submitHandlers";
import errorHandler from "../helpers/errorHandler";
import { AuthContext } from "../auth-context/auth-context";
import { navHome } from "../navigation/optionsData";

const Login = () => {
  const theme = useTheme();
  const [submitLogin, { loading, error }] = useLoginMutation();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

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
              type="password"
              onChange={onChangeHandler("password")}
            />
          </Stack>
        </Stack>

        {error && errorHandler(error)}

        <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
          <Button
            disabled={loading}
            type="submit"
            sx={{ width: "47%", background: "#428cff", color: "white" }}
            variant="contained"
          >
            {loading ? "..." : "LOGIN"}
          </Button>
          <Button
            sx={{ width: "47%" }}
            variant="contained"
            color="secondary"
            LinkComponent={Link}
            to={"/tabs/signup"}
          >
            SIGN UP
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default Login;
