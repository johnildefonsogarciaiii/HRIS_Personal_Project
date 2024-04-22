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
import Autocomplete from "@mui/lab/Autocomplete";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { GET_CURRENT_USER } from "../../store/userSlice";
import { EMPLOYMENT_INFO_UPDATE } from "../../store/authSlice";

interface IFormInput {
  position: string;
  department: string;
  assignedLocation: string;
  section: string;
  company: string;
  employmentStatus: string;
  sss: string;
  pagibig: string;
  philhealth: string;
}

const EmploymentInfo: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: object) => state.auth.user)
  const [successAlert, setSuccessAlert] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IFormInput>();

  const tenureship: [string, string] = ["probitionary", "regular"];


  //Submit Form handler
  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    try {
      const UPDATE_USER = await dispatch(EMPLOYMENT_INFO_UPDATE(data));
      if(UPDATE_USER){
        setSuccessAlert(true)
        dispatch(GET_CURRENT_USER())
      } 
    } catch (error) {
      console.log(error)
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
          paddingBottom: 1
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
            Employment Information
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
                {/* position */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Position"
                  defaultValue={user?.position}
                  InputLabelProps={{ shrink: true }}
                  {...register("position")}
                />

                {/* department */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Department"
                  variant="outlined"
                  defaultValue={user?.department}
                  InputLabelProps={{ shrink: true }}
                  {...register("department")}
                />

                {/* assigned location */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Assigned Location"
                  variant="outlined"
                  defaultValue={user?.assignedLocation}
                  InputLabelProps={{ shrink: true }}
                  {...register("assignedLocation")}
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
                {/* section */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Section"
                  variant="outlined"
                  defaultValue={user?.section}
                  InputLabelProps={{ shrink: true }}
                  {...register("section")}
                />

                {/* company */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Company"
                  variant="outlined"
                  defaultValue={user?.company}
                  InputLabelProps={{ shrink: true }}
                  {...register("company")}
                />

               {/* employment status */}
               <Autocomplete
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                      defaultValue={user?.employmentStatus}
                      // value={user?.employmentStatus}
                  options={tenureship}
                  getOptionLabel={(tenureship: Option) => tenureship}
                  isOptionEqualToValue={(option, value) => option.value === value.value}
                  renderInput={(params: [string, string]) => (
                    <TextField
                      {...params}
                      label="Employment Status"
                      // defaultValue={user?.employmentStatus}
                  value={user?.employmentStatus}
                  InputLabelProps={{ shrink: true }}
                    {...register("employmentStatus")}


                    />
                  )}
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
                {/* sss */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="SSS"
                  variant="outlined"
                  defaultValue={user?.sss}
                  InputLabelProps={{ shrink: true }}
                  {...register("sss")}
                />

                {/* pagibig */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Pag-ibig"
                  variant="outlined"
                  defaultValue={user?.pagibig}
                  InputLabelProps={{ shrink: true }}
                  {...register("pagibig")}
                />

                {/* philhealth */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="PhilHealth"
                  variant="outlined"
                  defaultValue={user?.philHealth}
                  InputLabelProps={{ shrink: true }}
                  {...register("philHealth")}
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

export default EmploymentInfo;
