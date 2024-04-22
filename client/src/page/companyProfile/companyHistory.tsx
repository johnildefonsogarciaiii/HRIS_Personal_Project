import {Stack} from "@mui/material";
import LeftContanerTab from '../../layout/companyProfile/leftContainerTab';
import CompanyHistoryChart from '../../assets/CompanyHistoryChart.png';



const CompanyHistory: React.FC = () => {



    return(
        <>
        <Stack direction={"row"}>
        <LeftContanerTab>
        </LeftContanerTab>
        <img style={{ width: '80%', height: '80%'}} src={CompanyHistoryChart} alt='' />
        </Stack>
        </>
    )
}


export default CompanyHistory;