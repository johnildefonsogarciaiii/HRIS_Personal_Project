import { Box, Paper, Typography } from "@mui/material";
import PendingTable from "../../components/leaveApplication/pendingTable";

const Pending: React.FC = () => {
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
            Pending Application
          </Typography>
        </Box>

        <Box>
          <PendingTable />
        </Box>
      </Paper>
    </>
  );
};

export default Pending;
