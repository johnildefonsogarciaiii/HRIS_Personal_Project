import { Stack, Typography } from "@mui/material";
import LeftContanerTab from "../../layout/companyProfile/leftContainerTab";
import VisionStatment from "../../assets/VisionStatement.png";

const CompanyVision: React.FC = () => {
  return (
    <>
      <Stack direction={"row"}>
        <LeftContanerTab></LeftContanerTab>
        <img
          style={{ width: "80%", height: "80%" }}
          src={VisionStatment}
          alt=""
        />
      </Stack>
    </>
  );
};

export default CompanyVision;
