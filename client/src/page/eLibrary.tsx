import React, { Suspense } from "react";
import { Box, Stack } from "@mui/material";
import Loader from "../components/loader/loader";



const CompanyPolicy = React.lazy(() => import("../layout/eLibrary/companyPolicy"));
const GovernmentForms = React.lazy(() => import("../layout/eLibrary/governmentForms"));
const CompanyForms = React.lazy(() => import("../layout/eLibrary/companyForms"));


const ELibrary: React.FC = () => {
  return (
    <>
    <Suspense fallback={Loader()}>
        <Stack direction={{xs: "column", md: 'row'}}>
          <Box>
            <CompanyPolicy />
            <CompanyForms />
          </Box>
          <Box>
            <GovernmentForms />
          </Box>
        </Stack>
        </Suspense>
    </>
  );
};

export default ELibrary;
