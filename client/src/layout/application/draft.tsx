import { Box } from "@mui/material";
import LeaveApplicationForm from "../../components/leaveApplication/leaveApplication";


const Draft: React.FC = () => {


    return(
        <Box>
        {/* <Stack direction={'row'}> */}

          <Box sx={{width: {xs: '100%'}}}>
            <LeaveApplicationForm />
          </Box>
        {/* </Stack> */}
      </Box>
    )
}


export default Draft;