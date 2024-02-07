import {
  Button,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { useState } from "react";

import {
  StyledInput,
  StyledInputLabel,
  StyledMenuItem,
  StyledSelect,
} from "../helpers/inputs";
import { onSubmitHandler } from "../helpers/submitHandlers";
import errorHandler from "../helpers/errorHandler";
import {
  useDeleteUserMutation,
  useUpdateRoleMutation,
  useGetUsersQuery,
} from "../../generated/graphql.tsx";

const UsersData = () => {
  const theme = useTheme();
  const [role, setRole] = useState("");
  const [doneDelete, setDoneDelete] = useState("");
  const [doneRole, setDoneRole] = useState("");
  const [deleteUserMutation, { loading: loadingDelete, error: errorDelete }] =
    useDeleteUserMutation();
  const [updateRoleMutation, { loading: loadingRole, error: errorRole }] =
    useUpdateRoleMutation();
  const { data, error, refetch } = useGetUsersQuery();

  const [formDelete, setFormDelete] = useState({
    id: "",
  });

  const [formRole, setFormRole] = useState({
    id: "",
    role: "",
  });

  const submitHandler = async (e, anyMutation, form, refetch, method = "") => {
    setDoneDelete("");
    setDoneRole("");
    const result = await onSubmitHandler(e, anyMutation, form);
    if (method === "delete") {
      result.deleteUser?.update && setDoneDelete("User Deleted Successfully!");
    } else if (method === "roles") {
      result.updateRole?.update &&
        setDoneRole("User Role Updated Successfully!");
    }
    refetch();
  };

  const roleChangeHandler =
    (name) =>
    ({ target }) =>
      setFormRole({ ...formRole, [name]: target.value });

  refetch();

  return (
    <>
      <form
        onSubmit={(e, method = "delete") =>
          submitHandler(e, deleteUserMutation, formDelete, refetch, method)
        }
      >
        <Stack
          pt={1}
          spacing={2.4}
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          <Stack mt={1} spacing={1}>
            <StyledInputLabel htmlFor="id">
              Enter user id for deletion:
            </StyledInputLabel>
            <StyledInput
              element="input"
              id="id"
              onChange={(e) => setFormDelete({ id: e.target.value })}
              type="text"
            />
          </Stack>
        </Stack>

        {errorDelete && errorHandler(errorDelete)}

        {!errorDelete && doneDelete ? (
          <Stack m={2}>
            {" "}
            <small>{doneDelete}</small>{" "}
          </Stack>
        ) : null}

        <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
          <Button
            disabled={loadingDelete}
            type="submit"
            sx={{ width: "96%", background: "#428BCA", color: "white" }}
            variant="contained"
          >
            {loadingDelete ? "..." : "Delete User"}
          </Button>
        </Stack>
      </form>

      <Divider />

      <form
        onSubmit={(e, method = "roles") =>
          submitHandler(e, updateRoleMutation, formRole, refetch, method)
        }
      >
        <Stack
          mt={6}
          spacing={2}
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          <Stack mt={1} spacing={1}>
            <StyledInputLabel htmlFor="id">
              Enter user id for role update:
            </StyledInputLabel>
            <StyledInput
              element="input"
              id="id"
              onChange={roleChangeHandler("id")}
              type="text"
            />
          </Stack>

          <Stack spacing={1}>
            <StyledInputLabel htmlFor="roles">
              Select new role:
            </StyledInputLabel>
            <StyledSelect
              labelId="role-label"
              id="roles"
              value={role}
              variant="standard"
              onChange={(event) => {
                setRole(event.target.value);
                setFormRole({ ...formRole, role: event.target.value });
              }}
              size="small"
            >
              {["Admin", "Customer Service", "Operations"].map((name) => (
                <StyledMenuItem key={name} value={name}>
                  {name}
                </StyledMenuItem>
              ))}
            </StyledSelect>
          </Stack>
        </Stack>

        {errorRole && errorHandler(errorRole)}

        {!errorRole && doneRole ? (
          <Stack m={2}>
            {" "}
            <small>{doneRole}</small>{" "}
          </Stack>
        ) : null}

        <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
          <Button
            disabled={loadingRole}
            type="submit"
            sx={{ width: "96%", background: "#428BCA", color: "white" }}
            variant="contained"
          >
            {loadingRole ? "..." : "Update Role"}
          </Button>
        </Stack>
      </form>

      <Divider />
      <Stack
        mt={4}
        mb={10}
        pb={2}
        sx={{ backgroundColor: theme.palette.secondary.main }}
      >
        <h3>
          <center>USER DATA</center>
        </h3>
        {data?.getUsers ? (!error ?  
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 220 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ paddingLeft: "50px" }}>User ID</TableCell>
                {["Username", "Role", "Name"].map((val) => {
                  return <TableCell key={val} align="left">{val}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.getUsers.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">{row.username}</TableCell>
                  <TableCell align="left">{row.roles}</TableCell>
                  <TableCell align="left">{row.name || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        :<center>Error fetching data.</center>)
        : <center>No users found.</center>}
      </Stack>
    </>
  );
};

export default UsersData;
