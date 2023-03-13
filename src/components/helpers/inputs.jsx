import { Input, InputLabel, MenuItem, Select, styled } from "@mui/material";

export const StyledInput = styled(Input)(({ theme }) =>({
    paddingLeft:'20px', 
    paddingRight:'6px', 
    paddingBottom:'2px',
    paddingTop:'2px',
    '&:before': {
      borderBottom: '0.1px solid #696969',
    },
    input:{
      WebkitBoxShadow: `0 0 0 1000px ${theme.palette.secondary.main} inset`,
      WebkitTextFillColor: `${theme.palette.secondary.text}`
    },
    '&:focused': {
      borderBottom: '0.1px solid #386ec3',
    },
  }))

  export const StyledSelect = styled(Select)({
    paddingLeft:'20px', 
    paddingBottom:'2px',
    '&:before': {
      borderBottom: '0.1px solid #696969',
    },
    '&:focused': {
      borderBottom: '0.1px solid #386ec3',
    },
  })

  export const StyledMenuItem = styled(MenuItem)({
    "&:hover": {
      color: "#5b86cd",
    }
  });

  export const StyledInputLabel = styled(InputLabel)({
    paddingLeft:'20px', 
    color: '#386ec3',
    fontSize: '12px',
    marginBottom: '-6px'
  })
  