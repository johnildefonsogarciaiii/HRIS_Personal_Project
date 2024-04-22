import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Autocomplete from "@mui/lab/Autocomplete";
import React, { useState } from "react";
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
import history from "../../services/history";

interface IFormInput {
  employeeID: string;
  email: string;
  gender: string;
  firstName: string;
  middleName: string;
  lastName: string;
  civilStatus: string;
  dateOfBirth: Date;
  placeOfBirth: string;
  nationality: string;
}
import { PERSONAL_INFO_UPDATE } from "../../store/authSlice";
import { GET_CURRENT_USER } from "../../store/userSlice";

const PersonalInfo: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: object) => state.auth.user);

  const [successAlert, setSuccessAlert] = useState<boolean>(false);
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(
    dayjs("2024-12-30")
  );

  const { register, handleSubmit, setValue } = useForm<IFormInput>();

  const userGender: [string, string] = ["male", "female"];
  const userCivilStatus: [string, string] = ["single", "married"];

  //Submit Form handler
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const UPDATE_USER = await dispatch(PERSONAL_INFO_UPDATE(data));
    if (UPDATE_USER) {
      dispatch(GET_CURRENT_USER());
      history.push("/user%20profile");
      setSuccessAlert(true);
    }
  };

  // handle close alert
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessAlert(false);
  };

  return (
    <>
      {/* Update Success Alert */}
      {successAlert ? (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={successAlert}
            autoHideDuration={3000}
            onClose={handleClose}
          >
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
            Personal Information
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
                {/* employee ID */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  disabled
                  id="outlined-basic"
                  label="Employee ID"
                  InputLabelProps={{ shrink: true }}
                  defaultValue={user?.employeeID}
                  value={user?.employeeID}
                  {...register("employeeID")}
                />

                {/* email */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  disabled
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  value={user?.email}
                  {...register("email")}
                />

                {/* gender */}
                <Autocomplete
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  options={userGender}
                  getOptionLabel={(userGender: Option) => userGender}
                  value={user.gender}
                  isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                  }
                  renderInput={(params: [string, string]) => (
                    <TextField
                      {...params}
                      label="Gender"
                      value={user.gender}
                      InputLabelProps={{ shrink: true }}
                      {...register("gender")}
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
                {/* first name */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  defaultValue={user?.firstName}
                  // value={user?.firstName}
                  InputLabelProps={{ shrink: true }}
                  {...register("firstName")}
                />

                {/* middle name */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Middle Name"
                  variant="outlined"
                  defaultValue={user?.middleName}
                  InputLabelProps={{ shrink: true }}
                  {...register("middleName")}
                />

                {/* last name */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  defaultValue={user?.lastName}
                  InputLabelProps={{ shrink: true }}
                  {...register("lastName")}
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
                {/* Civil Status */}
                <Autocomplete
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  options={userCivilStatus}
                  defaultValue={user.civilStatus}
                  getOptionLabel={(status: Option) => status}
                  isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                  }
                  renderInput={(params: [string, string]) => (
                    <TextField
                      {...params}
                      label="Civil Status"
                      value={user.civilStatus}
                      InputLabelProps={{ shrink: true }}
                      {...register("civilStatus")}
                    />
                  )}
                />

                {/* Date of Birth */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{
                      width: { xs: "100%", md: "35%", xl: "35%" },
                    }}
                  >
                    <DatePicker
                      sx={{
                        width: { xs: "100%" },
                      }}
                      label="Date of birth"
                      defaultValue={dayjs(user?.dateOfBirth)}
                      onChange={(newDate: Date) => {
                        setDateValue(newDate?.$d);
                        // setValue("dateOfBirth", dateValue.$d);
                        setValue("dateOfBirth", newDate.$d);
                      }}
                      name="dateOfBirth"
                    />
                  </DemoContainer>
                </LocalizationProvider>

                {/* Nationality */}
                <TextField
                  sx={{
                    width: { xs: "100%", md: "35%", xl: "35%" },
                  }}
                  id="outlined-basic"
                  label="Nationality"
                  variant="outlined"
                  defaultValue={user?.nationality}
                  InputLabelProps={{ shrink: true }}
                  {...register("nationality")}
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

export default PersonalInfo;
