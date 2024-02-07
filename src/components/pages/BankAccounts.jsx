import { Card, Stack, Tooltip, Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

import { useGetNewBankBooksQuery } from "../../generated/graphql.tsx";

const StyledSearchResultBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const BankAccounts = () => {
  const { data, loading, error, refetch } = useGetNewBankBooksQuery();

  refetch();

  const accounts = data?.getNewBankBooks;

  if (accounts?.length > 0) {
    const filteredAccounts = accounts.filter(
      (acc) => acc.active === false && acc.account_number !== null
    );
    return (
      <StyledSearchResultBox mb={8}>
        {filteredAccounts.length ? (
          filteredAccounts.map((acc) => (
            <ResultsAccounts key={acc.id} users={acc} />
          ))
        ) : (
          <Stack mt={2}>No results found.</Stack>
        )}
      </StyledSearchResultBox>
    );
  } else {
    return (
      <StyledSearchResultBox mb={8}>
        <Stack mt={2}>
          {loading ? "Loading..." : error ? error.message : "No results found."}
        </Stack>
      </StyledSearchResultBox>
    );
  }
};

export default BankAccounts;

const ResultsAccounts = ({ users }) => {
  return (
    <Tooltip title="Click for details">
      <Stack
        mx={1}
        mb={1}
        width="100%"
        sx={{
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={`/tabs/BankAccountApproval/${users.id}`}
        >
          <Card>
            <Stack py={1.4} direction="row" justifyContent="center" spacing={1}>
              <Box pl={2} sx={{ minWidth: "44%" }}>
                <small>
                  <b>Customer ID:</b>&nbsp;{users.customer_id}
                </small>
              </Box>
              <Box sx={{ minWidth: "28%" }}>
                <small>
                  <b>Name:</b>&nbsp;{users.display_name}
                </small>
              </Box>
              <Box sx={{ minWidth: "22%" }}>
                <small>
                  <b>Account No:</b>&nbsp;{users.account_number}
                </small>
              </Box>
            </Stack>
          </Card>
        </Link>
      </Stack>
    </Tooltip>
  );
};
