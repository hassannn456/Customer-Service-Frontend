import * as React from "react";
import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  useTheme,
  Tabs,
  Tab,
  styled,
} from "@mui/material";
import {
  StyledInput,
  StyledInputLabel,
  StyledMenuItem,
  StyledSelect,
} from "../helpers/inputs";

import {
  useGetCustomersQuery,
  useGetNationalitiesQuery,
  useCustomerUsersMutation,
  useCustomerAddressMutation,
  useCustomerWorkDetailsMutation,
} from "../../generated/graphql.tsx";
import { fieldNames, customerData, tabOptions } from "../helpers/customerInfo";
import { onSubmitHandler } from "../helpers/submitHandlers";

const StyledTab = styled(Tab)({
  fontSize: "12px",
  padding: 0,
});

function Row({ row, dataFetch }) {
  const [open, setOpen] = React.useState(false);
  const [arrIndex, setArrIndex] = React.useState(0);
  const [userData, setUserData] = React.useState();

  const [customerUsersMutation, { loading: loadingUser }] =
    useCustomerUsersMutation();
  const [customerAddressMutation, { loading: loadingAddress }] =
    useCustomerAddressMutation();
  const [customerWorkDetailsMutation, { loading: loadingWork }] =
    useCustomerWorkDetailsMutation();

  const handleUpdate = async (e, submit1, submit2, submit3, id) => {
    const form = { id };
    const users = await onSubmitHandler(e, submit1, form);
    const address = await onSubmitHandler(e, submit2, form);
    const workinformation = await onSubmitHandler(e, submit3, form);

    //Complete address
    address.customerAddress.address_line1 =
      address.customerAddress.address_line1 +
      " " +
      address.customerAddress.address_line2;

    // console.log([
    //   users?.customerUsers,
    //   address?.customerAddress,
    //   workinformation?.customerWorkDetails,
    // ]);
    setUserData([
      users?.customerUsers,
      address?.customerAddress,
      workinformation?.customerWorkDetails,
    ]);
  };

  return (
    <>
      <TableRow key={row.user_id}>
        <TableCell component="th" scope="row">
          <Button
            size="small"
            onClick={(e) => {
              !open &&
                handleUpdate(
                  e,
                  customerUsersMutation,
                  customerAddressMutation,
                  customerWorkDetailsMutation,
                  row.user_id
                );
              setOpen(!open);
            }}
          >
            #{row.user_id}
          </Button>
        </TableCell>
        <TableCell align="left">{row.fullname_th}</TableCell>
        <TableCell align="left">{row.fullname_en}</TableCell>
        <TableCell align="left">{row.risk_factor}</TableCell>
        <TableCell align="left">{row.risk_reason}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ borderBottom: 0, paddingBottom: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              minHeight={"380px"}
            >
              <Stack
                direction={{ xs: "column", sm: "row", md: "row" }}
                justifyContent="space-between"
                my={1.6}
              >
                <Stack
                  minWidth={{
                    xs: 300,
                    sm: arrIndex === 0 || arrIndex === 2 ? 280 : 580,
                  }}
                  justifyContent="flex-start"
                  mt={arrIndex === 2 ? 2 : 0}
                >
                  {fieldNames[arrIndex].map((fields, index) => {
                    return (
                      <Stack
                        m={-1}
                        direction="row"
                        justifyContent="space-between"
                        key={index}
                      >
                        <p>
                          <b>{fields}:</b>
                        </p>
                        <Stack
                          width={
                            (arrIndex === 0) | (arrIndex === 2)
                              ? 120
                              : { xs: 160, sm: 400 }
                          }
                          sx={{ wordWrap: "break-word" }}
                          textAlign={{ xs: "right", sm: "left" }}
                        >
                          {(arrIndex === 0) | (arrIndex === 2) ? (
                            <p>{row[customerData[arrIndex][index]]}</p>
                          ) : (
                            <p>
                              {!userData &&
                              loadingUser | loadingAddress | loadingWork
                                ? "Loading..."
                                : userData
                                ? userData[
                                    Object.keys(
                                      customerData[arrIndex][index]
                                    )[0]
                                  ][
                                    Object.values(
                                      customerData[arrIndex][index]
                                    )[0]
                                  ]
                                : "Error fetching data..."}
                            </p>
                          )}
                        </Stack>
                      </Stack>
                    );
                  })}
                </Stack>

                <Stack
                  alignItems="center"
                  justifyContent="center"
                  py={3}
                  pl={{ xs: 0, sm: 0, md: arrIndex === 0 ? 10 : 2 }}
                  sx={{
                    display:
                      arrIndex === 0 || arrIndex === 2 ? "block" : "none",
                  }}
                  minWidth="260px"
                >
                  <Box
                    sx={{
                      width: arrIndex === 0 ? 240 : 320,
                      height: arrIndex === 0 ? 240 : 200,
                    }}
                    component="img"
                    src={
                      arrIndex === 0
                        ? row.image_face
                        : arrIndex === 2
                        ? row.image_card
                        : null
                    }
                    alt=""
                  />
                </Stack>
              </Stack>

              <Stack
                sx={{
                  maxWidth: { xs: 360, sm: 610, md: 610 },
                  bgcolor: "background.paper",
                }}
                mb={1}
              >
                <Tabs
                  size="sm"
                  value={arrIndex}
                  onChange={(e, newValue) => {
                    setArrIndex(newValue);
                  }}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  {tabOptions.map((fields, index) => {
                    return <StyledTab key={index} label={fields} />;
                  })}
                </Tabs>
              </Stack>
            </Stack>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CustomSearch() {
  const {
    data: dataNation,
    loading: loadingNation,
    error: errorNation,
  } = useGetNationalitiesQuery();
  const { data, loading, error } = useGetCustomersQuery();
  const theme = useTheme();
  const options = dataNation?.getNationalities;

  const [form, setForm] = React.useState({
    ename: "",
    tname: "",
    nationalid: "",
    passport: "",
  });

  const [nationality, setNationality] = React.useState("");
  const customersFiltered = data?.getCustomers?.filter(
    (data) =>
      data.fullname_en.toLowerCase().includes(form.ename.toLowerCase()) &&
      data.fullname_th.toLowerCase().includes(form.tname.toLowerCase()) &&
      data.nationality.includes(nationality)
  );
  const finalFilter =
    nationality === "THA"
      ? customersFiltered?.filter((data) =>
          data.national_id.includes(form.nationalid)
        )
      : customersFiltered?.filter((data) =>
          data.passport.includes(form.passport)
        );
  const rows = finalFilter;

  const onChangeHandler =
    (name) =>
    ({ target }) =>
      setForm({ ...form, [name]: target.value });

  return (
    <Box m={2} pb={10}>
      <Stack
        sx={{ backgroundColor: theme.palette.secondary.main }}
        spacing={2}
        mx={2}
        p={2}
        mb={3}
      >
        <Stack direction="row" spacing={2}>
          <Stack width="50%" spacing={0.2}>
            <StyledInputLabel htmlFor="ename">Name(English):</StyledInputLabel>
            <StyledInput
              element="input"
              id="ename"
              type="ename"
              onChange={onChangeHandler("ename")}
            />
          </Stack>

          <Stack width="50%" spacing={0.2}>
            <StyledInputLabel htmlFor="tname">Name(Thai):</StyledInputLabel>
            <StyledInput
              element="input"
              id="tname"
              type="tname"
              onChange={onChangeHandler("tname")}
            />
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Stack width="50%" spacing={0.8}>
            <StyledInputLabel htmlFor="username">Nationality:</StyledInputLabel>
            <StyledSelect
              labelId="role-label"
              id="roles"
              value={nationality}
              variant="standard"
              onChange={(event) => {
                setNationality(event.target.value);
              }}
              size="small"
              MenuProps={{
                PaperProps: {
                  sx: {
                    height: "200px",
                  },
                },
              }}
            >
              <StyledMenuItem key={"None"} value={""}>
                {loadingNation
                  ? "Loading..."
                  : errorNation
                  ? "Error loading"
                  : "None"}
              </StyledMenuItem>
              {options?.map((name, index) => (
                <StyledMenuItem key={index} value={name.country_code}>
                  {name.country}
                </StyledMenuItem>
              ))}
            </StyledSelect>
          </Stack>

          <Stack width="50%" spacing={0.2}>
            <StyledInputLabel htmlFor="id">
              {(nationality === "THA") | (nationality === "")
                ? "National Id:"
                : "Passport:"}
            </StyledInputLabel>
            <StyledInput
              element="input"
              id="id"
              type="id"
              value={nationality === "THA" ? form.nationalid : form.passport}
              onChange={onChangeHandler(
                nationality === "THA" ? "nationalid" : "passport"
              )}
            />
          </Stack>
        </Stack>
      </Stack>

      {rows?.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 220 }} mt={2} size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ paddingLeft: "25px" }}>User ID</TableCell>
                {[
                  "Name (Thai)",
                  "Name (English)",
                  "ID Card No.",
                  "Passport No.",
                ].map((val, index) => {
                  return (
                    <TableCell key={index} align="left">
                      {val}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            {rows?.length ? (
              <TableBody>
                {rows?.map((row, index) => (
                  <Row key={index} align="left" row={row} />
                ))}
              </TableBody>
            ) : null}
          </Table>
        </TableContainer>
      ) : loading ? (
        "Loading..."
      ) : error ? (
        "Error fetching data"
      ) : (
        "No results found."
      )}
    </Box>
  );
}
