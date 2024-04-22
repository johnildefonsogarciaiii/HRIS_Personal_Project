import { Stack } from "@mui/material";
import LeftContanerTab from "../../layout/companyProfile/leftContainerTab";
import OrganizationalChart from "../../assets/OrnanizationalChart.png";

const CompanyOrganizationalChart: React.FC = () => {
  return (
    <>
      <Stack direction={"row"}>
        <LeftContanerTab></LeftContanerTab>
        <img
          style={{ width: "80%", height: "80%" }}
          src={OrganizationalChart}
          alt=""
        />{" "}
      </Stack>
    </>
  );
};

export default CompanyOrganizationalChart;
