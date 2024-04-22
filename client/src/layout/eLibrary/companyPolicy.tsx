import { Box, Button, Paper, Typography } from "@mui/material";
import sampleDocs from "../../assets/files/sampleDocs.pdf";

const CompanyPolicy: React.FC = () => {
  return (
    <>
      <Box sx={{ my: 2 }}>
        <Paper elevation={3} sx={{ width: "90%", border: 2 }}>
          <Typography sx={{ background: "#0d47a1", color: "white", p: 1 }}>
            Company E-Library/Policy
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
                href={sampleDocs}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Code of Conduct
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
                href={sampleDocs}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                HR Manual
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
                href={sampleDocs}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Corporate Policy
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
                href={sampleDocs}
                download
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Company Asset Policy
              </a>
            </Typography>
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default CompanyPolicy;
