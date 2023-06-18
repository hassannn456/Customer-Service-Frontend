import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  useTheme,
} from "@mui/material";
import { useState } from "react";

import IonicSvg from "../helpers/IonicSvg";
import { StyledInput, StyledInputLabel } from "../helpers/inputs";
import { onSubmitHandler } from "../helpers/submitHandlers";
import errorHandler from "../helpers/errorHandler";
import { useUpdatePasswordMutation } from "../../generated/graphql.tsx";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ManageAccounts = () => {
  const theme = useTheme();
  const [updatePasswordMutation, { loading, error }] =
    useUpdatePasswordMutation();
  const [updated, setUpdated] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowNewPassword = () => setShowNewPassword(!showNewPassword);

  const [form, setForm] = useState({
    password: "",
    newPassword: "",
  });

  const submitHandler = async (e, updatePasswordMutation, form) => {
    setUpdated("");
    const result = await onSubmitHandler(e, updatePasswordMutation, form);
    result.updatePassword?.update &&
      setUpdated("- Password Updated Successfully!");
  };

  const onChangeHandler =
    (name) =>
    ({ target }) =>
      setForm({ ...form, [name]: target.value });

  return (
    <>
      <IonicSvg />
      <form onSubmit={(e) => submitHandler(e, updatePasswordMutation, form)}>
        <Stack
          pt={2}
          spacing={2.4}
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          <Stack mt={1}>
            <StyledInputLabel htmlFor="password">Current Password:</StyledInputLabel>
            <StyledInput
              element="input"
              id="password"
              //   type="password"
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

          <Stack>
            <StyledInputLabel htmlFor="new password">
              New Password:
            </StyledInputLabel>
            <StyledInput
              element="input"
              id="new password"
              onChange={onChangeHandler("newPassword")}
              type={showNewPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                  >
                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Stack>
        </Stack>

        {error && errorHandler(error)}

        {!error && updated ? (
          <Stack m={2}>
            {" "}
            <small>{updated}</small>{" "}
          </Stack>
        ) : null}

        <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
          <Button
            disabled={loading}
            type="submit"
            sx={{ width: "96%", background: "#428cff", color: "white" }}
            variant="contained"
          >
            {loading ? "..." : "Update Password"}
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default ManageAccounts;
