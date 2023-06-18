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
  const { data, loading, error, refetch } = useGetUsersQuery();

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

  return (
    <>
      <form
        onSubmit={(e, method = "delete") =>
          submitHandler(e, deleteUserMutation, formDelete, refetch, method)
        }
      >
       
      </form>
    </>
  );
};

export default UsersData;
