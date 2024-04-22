import { Box, Paper, Typography } from "@mui/material";
import UserIcon from "./../../assets/user-profile-icon.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { GET_CURRENT_USER } from "../../store/userSlice";

const UserInfo: React.FC = () => {
  const user = useSelector((state: object) => state.auth.user);
  const dispatch = useDispatch();
  const path = window.location.pathname;



  return (
    <>
      <Paper elevation={3} sx={{ m: 1, background: "white", height: "80%" }}>
        <img
          src={UserIcon}
          alt="User Photo"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "auto",
          }}
        />

        {/* will change the state once http request is working */}
        <Box sx={{ maxWidth: "100%", textAlign: "start", mx: "20%" }}>
          <Typography
            sx={{ fontFamily: "Roboto", fontSize: { xs: 16, xl: 18 } }}
          >
            Employee ID: {user?.employeeID}
          </Typography>
          <Typography
            sx={{ fontFamily: "Roboto", fontSize: { xs: 16, xl: 18 } }}
          >
            Name: {user?.firstName} {user?.lastName}
          </Typography>
          <Typography
            sx={{ fontFamily: "Roboto", fontSize: { xs: 16, xl: 18 } }}
          >
            Department: {user?.department}
          </Typography>
          <Typography
            sx={{ fontFamily: "Roboto", fontSize: { xs: 16, xl: 18 } }}
          >
            Position: {user?.position}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default UserInfo;
