import {
  Alert,
  Box,
  Button,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { GET_CURRENT_USER } from "../../store/userSlice";
import { CONTACT_INFO_UPDATE } from "../../store/authSlice";
import React, { useState} from "react";

interface IFormInput {
  personalMobileNumber: number;
  companyMobileNumber: number;
  companyLocalNumber: number;
  presentCity: string;
  presentAddress: string;
  presentTelephoneNumber: string;
  permanentCity: string;
  permanentAddress: string;
  permanentTelephoneNumber: number;
}

const ContactInfo: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: object) => state.auth.user)
  const [successAlert, setSuccessAlert] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IFormInput>();

  //Submit Form handler
  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
  console.log(data);

  const UPDATE_USER = await dispatch(CONTACT_INFO_UPDATE(data));
  if(UPDATE_USER){
    setSuccessAlert(true)
    dispatch(GET_CURRENT_USER());
  }

}



    // handle close alert
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setSuccessAlert(false);
    };


  return (
    <>
    {/* Update Success Alert */}
    {successAlert ? (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={successAlert} autoHideDuration={3000} onClose={handleClose}>
            <Alert
            onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Personal Information was successfully updated.
            </Alert>
          </Snackbar>
        </Stack>
      ) : null}


      {/* Content */}
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
              fontSize: { xs: 20 },
              color: "white",
              p: 1,
              ml: 2,
            }}
          >
            Contact Information
          </Typography>
        </Box>

        {/* Forms */}
        <Box sx={{ m: 2 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              direction="column"
              spacing={2}
              sx={{
                width: { xs: "100%" },
                alignItems: { xs: "center", md: "start" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "98%", md: "95%" },
                  alignItems: "center",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 2,
                }}
              >
                {/* personal mobile no. */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Personal Mobile Number"
                  defaultValue={user?.personalContact}
                  InputLabelProps={{ shrink: true }}
                  {...register("personalContact")}
                />

                {/* company mobile no. */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Company Mobile  umber"
                  variant="outlined"
                  defaultValue={user?.companyMobileNumber}
                  InputLabelProps={{ shrink: true }}
                  {...register("companyMobileNumber")}
                />

                {/* company local number */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Company Local Number"
                  variant="outlined"
                  defaultValue={user?.companyLocalNumber}
                  InputLabelProps={{ shrink: true }}
                  {...register("companyLocalNumber")}
                />
              </Box>

              <Box
                sx={{
                  width: { xs: "100%", sm: "98%", md: "95%" },
                  alignItems: "center",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 2,
                }}
              >
                {/* Present City */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Present City"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  defaultValue={user?.presentCity}
                  {...register("presentCity")}
                />

                {/* present address */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Present Address"
                  InputLabelProps={{ shrink: true }}
                  defaultValue={user?.presentAddress}
                  variant="outlined"
                  {...register("presentAddress")}
                />

                {/* Present Telephone Number */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Telephone Number"
                  InputLabelProps={{ shrink: true }}
                  defaultValue={user?.presentAddressTelephone}
                  variant="outlined"
                  {...register("presentAddressTelephone")}
                />
              </Box>

              <Box
                sx={{
                  width: { xs: "100%", sm: "98%", md: "95%" },
                  alignItems: "center",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 2,
                }}
              >
                {/* Permanent City */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Permanent City"
                  InputLabelProps={{ shrink: true }}
                  defaultValue={user?.permanentCity}
                  variant="outlined"
                  {...register("permanentCity")}
                />

                {/* permanent address */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Permanent Address"
                  InputLabelProps={{ shrink: true }}
                  defaultValue={user?.permanentAddress}
                  variant="outlined"
                  {...register("permanentAddress")}
                />

                {/* Permanent Telephone Number */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Telephone Number"
                  InputLabelProps={{ shrink: true }}
                  defaultValue={user?.permanentAddressTelephone}
                  variant="outlined"
                  {...register("permanentAddressTelephone")}
                />
              </Box>

              {/* Update Btn */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: { xs: "100%", md: "30%", lg: "20%" },
                }}
              >
                Update
              </Button>
            </Stack>
          </form>
        </Box>
      </Paper>
    </>
  );
};

export default ContactInfo;
