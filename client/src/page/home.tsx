import React, { Suspense, useEffect } from "react";
import { Stack } from "@mui/material";
import Loader from "../components/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { GET_CURRENT_USER } from "../store/authSlice";
import { GETTING_ALL_LEAVE } from "../store/leaveSlice";

const UserInfo = React.lazy(() => import("../layout/home/userInfo"))
const EventInfo = React.lazy(() => import("../layout/home/events"))



const Home: React.FC = () => {

  return (
    <>
    <Suspense fallback={Loader()}>
      <Stack direction={{xs: "column", md: 'row'}}>
        <UserInfo />
        <EventInfo />
      </Stack>
      </Suspense>
    </>
  );
};

export default Home;
