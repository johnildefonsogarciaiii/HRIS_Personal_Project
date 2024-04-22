import { Link } from "react-router-dom";
import Draft from "../../layout/application/draft";

import LeftContainer from "../../components/leftContainer";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const DraftApplication: React.FC = () => {
  return (
    <>
      <Stack direction={"row"}>
        <LeftContainer>
          <Link to="/application/draft">
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
                Draft
              </Typography>
            </Button>
          </Link>
          <Link to="/application/pending">
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
                Pending
              </Typography>
            </Button>
          </Link>
          <Link to="/application/approved">
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
                Approved
              </Typography>
            </Button>
          </Link>
          <Link to="/application/disapproved">
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
                Disapproved
              </Typography>
            </Button>
          </Link>
          <Link to="/application/void">
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
                Void
              </Typography>
            </Button>
          </Link>
        </LeftContainer>
        <Divider orientation="vertical" flexItem />

        <Box sx={{ width: "100%" }}>
          <Draft />
          {/* <Pending/> */}
          {/* <Disapproved/> */}
          {/* <Void/> */}
        </Box>
      </Stack>
    </>
  );
};

export default DraftApplication;
