import { Stack } from "@mui/material";
import React from "react";

const errorHandler = (error) => {
  return (
    <>
      {error?.graphQLErrors?.map(({ message }, i) => (
        <Stack
          m={2}
          key={i}
          sx={{
            color: "red",
          }}
        >
          <small>
            *{" "} {message.charAt(0).toUpperCase() + message.slice(1)}
          </small>
        </Stack>
      ))}
    </>
  );
};

export default errorHandler;
