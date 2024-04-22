import { Box, Button, Paper, Typography } from "@mui/material";
import BIR2305 from "../../assets/files/BIR-2305.pdf";
import SSSE4 from "../../assets/files/SSS-E4.pdf";
import SSSMAT1 from "../../assets/files/SSS-MAT1.pdf";
import SSSMAT2 from "../../assets/files/SSS-MAT2.pdf";
import SSSSicknessNotif from "../../assets/files/SSS-Sickness_Notification.pdf";
import SSSSalaryLoan from "../../assets/files/SSS-Form_Salary_Loan.pdf";
import PhilHealthPMRF from "../../assets/files/PhilHealth-PMRF.pdf";
import PagibigMPLF from "../../assets/files/Pagibig-MPLF_NEW-1.pdf";
import PagibigMICF from "../../assets/files/Pagibig-MCIF-1.pdf";

const GovernmentForms: React.FC = () => {
  return (
    <>
      <Box sx={{ my: 2 }}>
        <Paper elevation={3} sx={{ width: "90%", border: 2 }}>
          <Typography sx={{ background: "#0d47a1", color: "white", p: 1 }}>
            Government Forms
          </Typography>

          <Button
            variant="outlined"
            sx={{
              width: "100%",
              p: { xs: 2, sm: 4 },
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#EBE4D1",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{ textTransform: "none", fontSize: { xs: 12, sm: 16 } }}
            >
              <a
                href={BIR2305}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                BIR 2305
              </a>
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              p: { xs: 2, sm: 4 },
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#EBE4D1",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{ textTransform: "none", fontSize: { xs: 12, sm: 16 } }}
            >
              <a
                href={SSSE4}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                BIR 2305
              </a>
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              p: { xs: 2, sm: 4 },
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#EBE4D1",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{ textTransform: "none", fontSize: { xs: 12, sm: 16 } }}
            >
              <a
                href={SSSMAT1}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                SSS MAT1
              </a>
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              p: { xs: 2, sm: 4 },
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#EBE4D1",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{ textTransform: "none", fontSize: { xs: 12, sm: 16 } }}
            >
              <a
                href={SSSMAT2}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                SSS MAT2
              </a>
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              p: { xs: 2, sm: 4 },
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#EBE4D1",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{ textTransform: "none", fontSize: { xs: 12, sm: 16 } }}
            >
              <a
                href={SSSSicknessNotif}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                SSS Sickness Notification
              </a>
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              p: { xs: 2, sm: 4 },
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#EBE4D1",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{ textTransform: "none", fontSize: { xs: 12, sm: 16 } }}
            >
              <a
                href={SSSSalaryLoan}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                SSS Form Salary Loan
              </a>
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              p: { xs: 2, sm: 4 },
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#EBE4D1",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{ textTransform: "none", fontSize: { xs: 12, sm: 16 } }}
            >
              <a
                href={PhilHealthPMRF}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                PhilHealth PMRF
              </a>
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              p: { xs: 2, sm: 4 },
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#EBE4D1",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{ textTransform: "none", fontSize: { xs: 12, sm: 16 } }}
            >
              <a
                href={PagibigMICF}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Pag-ibig Change Information
              </a>
            </Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              p: { xs: 2, sm: 4 },
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#EBE4D1",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{ textTransform: "none", fontSize: { xs: 12, sm: 16 } }}
            >
              <a
                href={PagibigMPLF}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Pag-ibig Multi-Purpose Loan
              </a>
            </Typography>
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default GovernmentForms;
