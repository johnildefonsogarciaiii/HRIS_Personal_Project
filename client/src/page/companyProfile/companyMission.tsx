import {Stack} from "@mui/material";
import LeftContanerTab from '../../layout/companyProfile/leftContainerTab';
import MissionStatement from '../../assets/MissionStatment.png';



const CompanyMission: React.FC = () => {



    return(
        <>
        <Stack direction={"row"}>
        <LeftContanerTab>
        </LeftContanerTab>
        <img style={{ width: '80%', height: '80%'}} src={MissionStatement} alt="" />
        </Stack>
        </>
    )
}


export default CompanyMission;