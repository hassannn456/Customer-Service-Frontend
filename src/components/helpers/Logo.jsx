import { Box } from '@mui/material'
import logo from '../../img/logo.JPG'

const Logo = () => {
  return (
    <Box mb={2} sx={{ display: "flex", justifyContent: "center" }}>
        <img style={{ width: "180px", height: "180px" }} src={logo} alt=''/>
    </Box>
  )
}

export default Logo