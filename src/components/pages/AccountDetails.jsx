import { Done } from "@mui/icons-material";
import { Chip, Stack, styled, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useApproveBankBookMutation,
  useRejectBankBookMutation,
  useGetBankBookImageMutation,
  useGetBankMutation,
  useGetNewBankBooksQuery,
} from "../../generated/graphql.tsx";
import errorHandler from "../helpers/errorHandler";
import { StyledInput, StyledInputLabel } from "../helpers/inputs";
import { onSubmitHandler } from "../helpers/submitHandlers";

const StyledChip = styled(Chip)({
  width: "120px",
});

const AccountDetails = () => {
  const { id } = useParams();
  const theme = useTheme();
  const [result, setResult] = useState("");
  const [remark, setRemark] = useState("");
  const [state, setState] = useState("start");

  const [submitApprove, { loading: loadingActive, error: errorActive }] =
    useApproveBankBookMutation();
  const [submitReject, { loading: loadingReject, error: errorReject }] =
    useRejectBankBookMutation();
  const [
    getBankBookImageMutation,
    { data: dataImage, loading: loadingImage, error: errorImage },
  ] = useGetBankBookImageMutation();
  const [
    getBankMutation,
    { data: dataBank, loading: loadingBank, error: errorBank },
  ] = useGetBankMutation();
  const { data, loading, error } = useGetNewBankBooksQuery({ variables: {} });

  const accounts = data?.getNewBankBooks;
  const details = accounts?.find((item) => item.id === +id);
  const detailsArray = {
    "Customer ID:": details?.customer_id,
    "Name:": details?.display_name,
    "Account name:": details?.account_name,
    "Account no:": details?.account_number,
    "Routing no: ": details?.routing_number,
  };

  const dataLoad = async (submitFunction, id) => {
    try {
      await submitFunction({
        variables: { id },
        onCompleted: (data) => {
          return data;
        },
      });
    } catch (err) {
      return err;
    }
  };

  const handleUpdate = async (e, submitApprove, ids, remark, method) => {
    const form = { id: parseInt(ids), remark };
    const results = await onSubmitHandler(e, submitApprove, form);
    if (!results?.response) {
      if (method === "active") {
        setResult("Approved Successfully!");
      } else if (method === "reject") {
        setResult("Rejected Successfully!");
      }
    } else if (results?.response) {
      setResult("Failed to update!");
    } else {
      setResult(results?.response);
    }
  };

  useEffect(() => {
    dataLoad(getBankMutation, details?.routing_number);
    dataLoad(getBankBookImageMutation, details?.id);
    setTimeout(() => {
      setState("");
    }, 30000);
  }, [
    getBankBookImageMutation,
    getBankMutation,
    details?.routing_number,
    details?.id,
  ]);

  if (dataImage?.getBankBookImage.response && state === "start") {
    setState(dataImage?.getBankBookImage.response);
  }

  const Bank = dataBank?.getBank.response;

  console.log("signedUrl", dataImage?.getBankBookImage.response);

  return (
    <Stack mb={6} alignItems="center">
      <Stack minWidth="50%">
        <Stack>
          <Typography variant="h6">
            <center>
              <b>Bank Book Image</b>
            </center>
          </Typography>
          {loading ? (
            "Loading..."
          ) : (
            <Stack m={3} alignItems="center">
              {state !== "" ? (
                loadingImage ? (
                  <h5>
                    <center>Loading...</center>
                  </h5>
                ) : errorImage ? (
                  <h5>
                    <center>Error loading image.</center>
                  </h5>
                ) : (
                  <img alt="" style={{ maxWidth: "450px" }} src={state} />
                )
              ) : (
                <h5>
                  <center>Image expired.</center>
                </h5>
              )}
            </Stack>
          )}
        </Stack>

        <Stack>
          <Typography variant="h6">
            <center>
              <b>Account details</b>
            </center>
          </Typography>

          {loading ? (
            "Loading..."
          ) : (
            <Stack px={1} my={3}>
              {Object.entries(detailsArray).map((item) => {
                return (
                  <Stack
                    key={item[0]}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <b>{item[0]} </b>
                    <Typography fontSize="15px"> {item[1]}</Typography>
                  </Stack>
                );
              })}
              <Stack direction="row" justifyContent="space-between">
                <b>{"Bank Name:"} </b>
                <Typography
                  pt={0.3}
                  maxWidth="250px"
                  textAlign="right"
                  fontSize="14px"
                >
                  {" "}
                  {loadingBank
                    ? "Loading... "
                    : errorBank
                    ? "Error loading."
                    : Bank
                    ? "UNITED OVERSEAS BANK (THAI) PUBLIC COMPANY LIMITED"
                    : null}
                </Typography>
              </Stack>
            </Stack>
          )}

          {error && errorHandler(error)}
          {errorActive && errorHandler(errorActive)}
          {errorReject && errorHandler(errorReject)}

          {result ? (
            <center
              style={
                result.includes("Approved")
                  ? { color: "#75C669" }
                  : { color: "red" }
              }
            >
              {result}
            </center>
          ) : null}

          {result.includes("Successfully") ? null : (
            <>
              <Stack
                py={1}
                sx={{ backgroundColor: theme.palette.secondary.main }}
              >
                <StyledInputLabel htmlFor="remark">Remark:</StyledInputLabel>
                <StyledInput
                  element="input"
                  id="remark"
                  type="remark"
                  onChange={({ target }) => setRemark(target.value)}
                />
              </Stack>

              <Stack
                px={1}
                py={1}
                spacing={1}
                direction="row"
                justifyContent="center"
              >
                <StyledChip
                  sx={{
                    "&:hover": {
                      color: "green",
                    },
                  }}
                  label={loadingActive ? "..." : "Approve"}
                  onClick={(e, method = "active") =>
                    handleUpdate(e, submitApprove, id, remark, method)
                  }
                  onDelete={(e, method = "active") =>
                    handleUpdate(e, submitApprove, id, remark, method)
                  }
                  deleteIcon={<Done />}
                />
                <StyledChip
                  sx={{
                    "&:hover": {
                      color: "red",
                    },
                  }}
                  label={loadingReject ? "..." : "Reject"}
                  onDelete={(e, method = "reject") =>
                    handleUpdate(e, submitReject, id, remark, method)
                  }
                  onClick={(e, method = "reject") =>
                    handleUpdate(e, submitReject, id, remark, method)
                  }
                  variant="outlined"
                />
              </Stack>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AccountDetails;
