import {
  Card,
  CardMedia,
  Stack,
  Tooltip,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

import { useGetNewBankBooksQuery } from "../../generated/graphql.tsx";

const StyledSearchResultBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const BankAccounts = () => {
  const { data, loading, error, refetch } = useGetNewBankBooksQuery({
    variables: {},
  });
  refetch();

  const accounts = data?.getNewBankBooks;

  if (accounts?.length > 0) {
    const filteredAccounts = accounts.filter((acc) => acc.active === false && acc.account_number !== null);
    return (
      <StyledSearchResultBox mb={8}>
        {filteredAccounts.length ? (
          filteredAccounts.map((acc) => (
            <ResultsAccounts
              key={acc.id}
              id={acc.id}
              name={acc.display_name}
              account={acc.account_number}
              image={acc.book_image}
            />
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
          {loading ? "Loading..." : error ? error : "No results found."}
        </Stack>
      </StyledSearchResultBox>
    );
  }
};

export default BankAccounts;

const ResultsAccounts = (props) => {
  return (
    <Tooltip title="Click for details">
      <Stack
        mx={1.2}
        mb={2}
        sx={{
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={`/tabs/BankAccountApproval/${props.id}`}
        >
          <Card sx={{ minWidth: 320 }}>
            <CardMedia
              component="img"
              alt=""
              height="140"
              image={props.image}
            />
            <Stack px={1.6} py={1}>
              <Typography fontSize={14} fontWeight={"bold"}>
                Name: {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Account No: {props.account}
              </Typography>
            </Stack>
          </Card>
        </Link>
      </Stack>
    </Tooltip>
  );
};
