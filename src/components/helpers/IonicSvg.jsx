import { Box } from '@mui/material'
import LoginLogo from "../../img/appicon.svg";

const IonicSvg = () => {
  return (
    <Box mb={2} sx={{ display: "flex", justifyContent: "center" }}>
        <img style={{ width: "180px", height: "180px" }} src={LoginLogo} alt=''/>
    </Box>
  )
}

export default IonicSvg