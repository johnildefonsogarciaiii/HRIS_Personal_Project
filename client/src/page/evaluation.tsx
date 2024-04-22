// Will improve this features in future



// import React, { Suspense } from "react";
// import { Box, Button, Divider, Stack, Typography } from "@mui/material";
// import Loader from "../components/loader/loader";


// const LeftContainer = React.lazy(() => import("../components/leftContainer"));

// const Evaluation: React.FC = () => {
//   return (
//     <>
//     <Suspense fallback={Loader()}>
//       <Box>
//         <Stack direction="row">
//           {/* Left side components */}
//           <LeftContainer>
//             <Button
//               sx={{
//                 width: "100%",
//                 color: "#42a5f5",
//                 textTransform: "none",
//                 transition: "background-color 0.3s",
//                 "&:hover": {
//                   backgroundColor: "#EBE4D1",
//                   color: "black",
//                 },
//               }}
//             >
//               <Typography
//                 variant="body1"
//                 sx={{ fontSize: { xs: 12, sm: 16, md: 20 } }}
//               >
//                 Draft
//               </Typography>
//             </Button>
//             <Button
//               sx={{
//                 width: "100%",
//                 color: "#42a5f5",
//                 textTransform: "none",
//                 transition: "background-color 0.3s",
//                 "&:hover": {
//                   backgroundColor: "#EBE4D1",
//                   color: "black",
//                 },
//               }}
//             >
//               <Typography
//                 variant="body1"
//                 sx={{ fontSize: { xs: 12, sm: 16, md: 20 } }}
//               >
//                 Pending
//               </Typography>
//             </Button>
//             <Button
//               sx={{
//                 width: "100%",
//                 color: "#42a5f5",
//                 textTransform: "none",
//                 transition: "background-color 0.3s",
//                 "&:hover": {
//                   backgroundColor: "#EBE4D1",
//                   color: "black",
//                 },
//               }}
//             >
//               <Typography
//                 variant="body1"
//                 sx={{ fontSize: { xs: 12, sm: 16, md: 20 } }}
//               >
//                 Endorsed
//               </Typography>
//             </Button>
//           </LeftContainer>

//           <Divider orientation="vertical" flexItem />

//           {/* Right side components */}
//           <Typography>Application Page Under Construction</Typography>
//         </Stack>
//       </Box>
//       </Suspense>
//     </>
//   );
// };

// export default Evaluation;
