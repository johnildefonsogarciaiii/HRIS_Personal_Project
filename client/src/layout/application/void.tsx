import { Box, Paper, Typography } from "@mui/material";
import VoidTable from "../../components/leaveApplication/voidTable";

const Void: React.FC = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: { xs: "95%", sm: "98%", md: "95%" },
          m: 1,
          background: "white",
          paddingBottom: 1,
        }}
      >
        <Box sx={{ background: "#0d47a1" }}>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: { xs: 16, md: 20 },
              color: "white",
              p: 1,
              ml: 2,
            }}
          >
            Void Application
          </Typography>
        </Box>

        <Box>
          <VoidTable />
        </Box>
      </Paper>
    </>
  );
};

export default Void;
