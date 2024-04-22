import { Box } from "@mui/material";


const LeftContainer: React.FC = ({children}: any) => {


return(
    <>
    <Box
    sx={{
        width: { xs: '20%', lg: '15%'},
        height: {xs: '91vh', sm: '92vh', md: '89vh', lg: '91vh'},
    }}>
{children}
    </Box>
    </>
)

}


export default LeftContainer;