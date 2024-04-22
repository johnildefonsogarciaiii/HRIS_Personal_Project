import { Stack, Button, Typography } from "@mui/material";
import LeftContainer from "../../components/leftContainer";
import { Link } from "react-router-dom";

function LeftContainerTab() {
  return (
    <>
      <LeftContainer>
        <Stack direction={"column"}>
          <Link to="/company profile/Company History">
            <Button
              sx={{
                width: "100%",
                color: "#42a5f5",
                textTransform: "none",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#EBE4D1",
                  color: "black",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: 12, sm: 16, md: 20 } }}
              >
                Company History
              </Typography>
            </Button>
          </Link>
          <Link to="/company profile/Mission">
            <Button
              sx={{
                width: "100%",
                color: "#42a5f5",
                textTransform: "none",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#EBE4D1",
                  color: "black",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: 12, sm: 16, md: 20 } }}
              >
                Mission
              </Typography>
            </Button>
          </Link>
          <Link to="/company profile/Vision">
                    <Button
                        sx={{
                        width: "100%",
                        color: "#42a5f5",
                        textTransform: "none",
                        transition: "background-color 0.3s",
                        "&:hover": {
                        backgroundColor: "#EBE4D1",
                        color: "black",
                        },
                     }}
                    >   
                        <Typography
                            variant="body1"
                            sx={{ fontSize: { xs: 12, sm: 16, md: 20 } }}
                        >
                             Vision
                        </Typography>
                    </Button>
                </Link>
                <Link to="/company profile/Core Values">
                    <Button
                        sx={{
                        width: "100%",
                        color: "#42a5f5",
                        textTransform: "none",
                        transition: "background-color 0.3s",
                        "&:hover": {
                        backgroundColor: "#EBE4D1",
                        color: "black",
                        },
                     }}
                    >   
                        <Typography
                            variant="body1"
                            sx={{ fontSize: { xs: 12, sm: 16, md: 20 } }}
                        >
                             Core Values
                        </Typography>
                    </Button>
                </Link>
                <Link to="/company profile/Organizational Chart">
                    <Button
                        sx={{
                        width: "100%",
                        color: "#42a5f5",
                        textTransform: "none",
                        transition: "background-color 0.3s",
                        "&:hover": {
                        backgroundColor: "#EBE4D1",
                        color: "black",
                        },
                     }}
                    >   
                        <Typography
                            variant="body1"
                            sx={{ fontSize: { xs: 12, sm: 16, md: 20 } }}
                        >
                            Organizational Chart
                        </Typography>
                    </Button>
                </Link>
        </Stack>
      </LeftContainer>
    </>
  );
}

export default LeftContainerTab;
