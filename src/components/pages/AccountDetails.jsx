import { Done } from "@mui/icons-material";
import { Chip, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useApproveBankBookMutation,
  useRejectBankBookMutation,
  useGetNewBankBooksQuery,
} from "../../generated/graphql.tsx";
import errorHandler from "../helpers/errorHandler";
import { onSubmitHandler } from "../helpers/submitHandlers";

const StyledChip = styled(Chip)({
  width: "120px",
});

const AccountDetails = () => {
  const { id } = useParams();
  const [submitApprove, { loadingActive, errorActive }] =
    useApproveBankBookMutation();
  const [submitReject, { loadingReject, errorReject }] =
    useRejectBankBookMutation();
  const [result, setResult] = useState("");

  const { data, loading, error } = useGetNewBankBooksQuery({ variables: {} });
  const accounts = data?.getNewBankBooks;
  const details = accounts.find((item) => item.id === +id);
  const detailsArray = {
    "Customer ID:": details?.customer_id,
    "Name:": details?.display_name,
    "Account name:": details?.account_name,
    "Account no:": details?.account_number,
    "Routing no: ": details?.routing_number,
  };

  const handleUpdate = async (e, submitApprove, ids, method) => {
    const form = { id: parseInt(ids) };
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

  return (
    <Stack mb={6} alignItems="center">
      <Stack>
        <Stack>
          <Typography variant="h6">
            {" "}
            <b>Passbook Image</b>
          </Typography>
          {loading ? (
            "Loading..."
          ) : (
            <Stack m={1}>
              <img style={{ width: "100%" }} alt="" src={details?.book_image} />
            </Stack>
          )}
        </Stack>

        <Stack>
          <Typography variant="h6">
            {" "}
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
                  handleUpdate(e, submitApprove, id, method)
                }
                onDelete={(e, method = "active") =>
                  handleUpdate(e, submitApprove, id, method)
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
                  handleUpdate(e, submitReject, id, method)
                }
                onClick={(e, method = "reject") =>
                  handleUpdate(e, submitReject, id, method)
                }
                variant="outlined"
              />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AccountDetails;
