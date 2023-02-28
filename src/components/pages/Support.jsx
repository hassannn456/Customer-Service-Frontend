import { Button, Stack, TextField, useTheme } from "@mui/material";
import { StyledInputLabel } from "../helpers/inputs";
import IonicSvg from "../helpers/IonicSvg";

const Support = () => {
  const theme = useTheme()

  return (
    <>
      <IonicSvg/>

        <Stack pt={2} spacing={0.6} sx={{ backgroundColor: theme.palette.secondary.main }}>
          <StyledInputLabel htmlFor="text">Enter your support message below:</StyledInputLabel>
          <TextField
          rows={5}
          multiline
          variant="standard"
          InputProps={{
            style:{
              paddingLeft:'20px'
            }
         }}
        />
        </Stack>

        <Stack mt={2} width='100%' alignItems='center'>
    <Button sx={{width:'98%', background:'#428cff', color:'white'}} variant="contained">Submit</Button>
    </Stack>

      </>
  )
}

export default Support