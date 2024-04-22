import React, { Suspense } from "react";
// import Authentication from "./page/authentication";
import AuthService from "./services/authService";
// import Home from "./page/home";
// import DraftApplication from "./page/application/draftApplication";
// import PendingtApplication from "./page/application/pendingApplication";
// import ApprovedApplication from "./page/application/approvedApplication";
// import DisapprovedApplication from "./page/application/disapprovedApplication";
// import VoidApplication from "./page/application/voidApplication";
// import Evaluation from "./page/evaluation";
// import UserProfile from "./page/userProfile";
// import ELibrary from "./page/eLibrary";
// import CompanyHistory from "./page/companyProfile/companyHistory";
// import CompanyMission from "./page/companyProfile/companyMission";
// import CompanyVision from "./page/companyProfile/companyVision";
// import CompanyCoreValues from "./page/companyProfile/companyCoreValues";
// import CompanyOrganizationalChart from "./page/companyProfile/companyOrganizationalChart";
// import NavBar from "./layout/navBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import Loader from "./components/loader/loader";

const Authentication = React.lazy(() => import('./page/authentication'));
const Home = React.lazy(() => import('./page/home'));
const DraftApplication = React.lazy(() => import('./page/application/draftApplication'));
const PendingtApplication = React.lazy(() => import('./page/application/pendingApplication'));
const ApprovedApplication = React.lazy(() => import('./page/application/approvedApplication'));
const DisapprovedApplication = React.lazy(() => import('./page/application/disapprovedApplication'));
const VoidApplication = React.lazy(() => import('./page/application/voidApplication'));
const ELibrary = React.lazy(() => import('./page/eLibrary'));
const CompanyHistory = React.lazy(() => import('./page/companyProfile/companyHistory'));
const CompanyMission = React.lazy(() => import('./page/companyProfile/companyMission'));
const CompanyVision = React.lazy(() => import('./page/companyProfile/companyVision'));
const CompanyCoreValues = React.lazy(() => import('./page/companyProfile/companyCoreValues'));
const CompanyOrganizationalChart = React.lazy(() => import('./page/companyProfile/companyOrganizationalChart'));
const NavBar = React.lazy(() => import('./layout/navBar'));


const UserProfile = React.lazy(() => import("./page/userProfile"));

function App() {
  const authService = AuthService();

  return (
    <>
      <Suspense fallback={Loader()}>
        {authService.isAuthenticated() ? (
          <Box>
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" Component={Home} />
                <Route path="/application/" Component={DraftApplication} />
                <Route path="/application/draft" Component={DraftApplication} />
                <Route
                  path="/application/pending"
                  Component={PendingtApplication}
                />
                <Route
                  path="/application/approved"
                  Component={ApprovedApplication}
                />
                <Route
                  path="/application/disapproved"
                  Component={DisapprovedApplication}
                />
                <Route path="/application/void" Component={VoidApplication} />
                {/* <Route path="/ticketing" Component={Evaluation} /> */}
                <Route path="/user profile" Component={UserProfile} />
                <Route path="/e-library" Component={ELibrary} />
                <Route path="/company profile" Component={CompanyHistory} />
                <Route
                  path="/company profile/Company History"
                  Component={CompanyHistory}
                />
                <Route
                  path="/company profile/Mission"
                  Component={CompanyMission}
                />
                <Route
                  path="/company profile/Vision"
                  Component={CompanyVision}
                />
                <Route
                  path="/company profile/Core Values"
                  Component={CompanyCoreValues}
                />
                <Route
                  path="/company profile/Organizational Chart"
                  Component={CompanyOrganizationalChart}
                />
              </Routes>
            </Router>
          </Box>
        ) : (
          <Authentication />
        )}
      </Suspense>
    </>
  );
}

export default App;
