import { Box, Paper, Typography } from "@mui/material";
import UserIcon from './../../assets/user-profile-icon.jpg'
import { useSelector } from "react-redux";




const UserInfo: React.FC = () => {
  const user = useSelector((state: object) => state.auth.user);

return(
    <>
        <Paper elevation={3} sx={{ width: {xs: '95%', sm: '98%',  md: '25%', lg: '20%'}, m: 1, background: 'white'}}>
            <img src={UserIcon} alt='User Photo' style={{ maxWidth: '100%', height: 'auto' ,  display: 'block', margin: 'auto'}}/>

            {/* will change the state once http request is working */}
            <Box sx={{ maxWidth: '100%', textAlign: 'start', mx: '20%'}}>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: {xs: 16, xl: 18}}}>Employee ID: {user?.employeeID}</Typography>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: {xs: 16, xl: 18}}}>Name: {user?.firstName} {user?.lastName}</Typography>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: {xs: 16, xl: 18}}}>Department: {user?.department}</Typography>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: {xs: 16, xl: 18}}}>Position: {user?.position}</Typography>
            </Box>
        </Paper>
    </>
)

}



export default UserInfo;