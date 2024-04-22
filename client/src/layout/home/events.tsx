import { Box, Paper, Typography } from "@mui/material";
import EventCarousel from "../../components/eventCarousel";

const EventInfo: React.FC = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: { xs: "95%", sm: "98%", md: "70%", lg: "60%" },
          m: 1,
          background: "white",
        }}
      >
        <Box sx={{ background: "#0d47a1" }}>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: { xs: 20 },
              color: "white",
              p: 1,
              ml: 2,
            }}
          >
            News / Events
          </Typography>
        </Box>
        <EventCarousel />
      </Paper>
    </>
  );
};

export default EventInfo;
