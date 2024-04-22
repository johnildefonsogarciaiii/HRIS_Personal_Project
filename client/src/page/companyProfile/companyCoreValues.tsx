import React, { Suspense } from "react";
import { Stack } from "@mui/material";
import LeftContanerTab from "../../layout/companyProfile/leftContainerTab";
import Loader from "../../components/loader/loader";
import CoreValues from '../../assets/CoreValues.png';



const CompanyCoreValues: React.FC = () => {
  return (
    <>
      <Suspense fallback={Loader()}>
        <Stack direction={"row"}>
          <LeftContanerTab></LeftContanerTab>

          <img
            style={{ width: "80%", height: "80%" }}
            src={CoreValues}
            alt=""
          />
        </Stack>
      </Suspense>
    </>
  );
};

export default CompanyCoreValues;
