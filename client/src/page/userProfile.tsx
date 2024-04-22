import React, { Suspense } from "react";
import { Box, Stack } from "@mui/material";
// import UserInfo from "../layout/userProfile/userInfo";
// import UserInfoForms from "../layout/userProfile/userInfoForms";
import Loader from "../components/loader/loader";

const UserInfo = React.lazy(() => import("../layout/userProfile/userInfo"))
const UserInfoForms = React.lazy(() => import("../layout/userProfile/userInfoForms"))


const UserProfile: React.FC = () => {
 

  return (
    <>
    <Suspense fallback={Loader()}>
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box sx={{ width: { xs: "95%", sm: "98%", md: "25%", lg: "20%" } }}>
        <UserInfo/>
      </Box>
      <Box sx={{ width: { xs: "95%", sm: "98%", md: "75%", lg: "80%" } }}>
        <UserInfoForms />
      </Box>
    </Stack>
    </Suspense>
    </>
  );
};

export default UserProfile;
