import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, SubmitHandler } from "react-hook-form";
import dayjs from "dayjs";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CREATE_LEAVE, GETTING_ALL_LEAVE } from "../../store/leaveSlice";
import { useState } from "react";
import history from "../../services/history";
import Loader from "../loader/loader";

interface IFormInput {
  employeeID: string;
  leaveID: string;
  dateCreated: Date;
  natureOfLeave: string;
  dateFrom: Date;
  dateTo: Date;
  contact: number;
  reasons: string;
  status: string;
}

const LeaveApplicationForm: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm<IFormInput>();
  const user = useSelector((state: object) => state.auth.user);
  const loading = useSelector((state: object) => state.user.isLoading);
  const leave = useSelector((state: object) => state.leave.leave);
  const dispatch = useDispatch();

  const [successAlert, setSuccessAlert] = useState<boolean>(false);



  const natureOfLeave: [string, string] = [
    "Sick Leave",
    "Vacation Leave"
  ];

  const [dateFrom, setDateFrom] = React.useState<Dayjs | null>(
    dayjs("")
  );

  const [dateTo, setDateTo] = React.useState<Dayjs | null>(dayjs(""));


// Getting all leaves
React.useEffect(() => {
  async function fetchingLeaves() {
    const leaveResponse = await dispatch(GETTING_ALL_LEAVE());
    // console.log(leave)
  }
  fetchingLeaves();
}, [leave]);

  //Submit Form handler
  const onSubmit: SubmitHandler<IFormInput> = (data) => {

    const date = new Date(Date.now());
    const leaves = leave?.length + 1 || 1; 
   

    const credentials = {...data, dateFrom: new Date(dateFrom).toISOString(), dateTo: new Date(dateTo).toISOString(),  employeeID: user.employeeID, leaveID: leaves.toString() , dateCreated: date.toString()}



    dispatch(CREATE_LEAVE(credentials))
    setSuccessAlert(true);
    dispatch(GETTING_ALL_LEAVE())
    history.push("/application/draft");
  };


        // handle close alert
        const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
          if (reason === 'clickaway') {
            return;
          }
          setSuccessAlert(false);
        };

  return (
    <>
    {loading ? Loader() : 

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
            Leave was created.
          </Alert>
        </Snackbar>
      </Stack>
    ) : null}


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
          Leave Application
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
              {/* Nature of Leave */}
              <Autocomplete
                sx={{
                  width: { xs: "100%", md: "35%", xl: "35%" },
                }}
                options={natureOfLeave}
                getOptionLabel={(natureOfLeave: Option) => natureOfLeave}
                renderInput={(params: [string, string, string, string]) => (
                  <TextField
                    {...params}
                    label="Nature of Leave"
                    {...register("natureOfLeave")}
                  />
                )}
              />

              {/* Date From */}
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
                    label="Date From"
                    // defaultValue={dayjs(user?.dateOfBirth)}
                    onChange={(newDate: Date) => {
                      setDateFrom(newDate);
                      // setValue("dateFrom", newDate.$d);
                    }}
                    name="dateFrom"
                  />
                </DemoContainer>
              </LocalizationProvider>

              {/* Date To */}
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
                    label="Date From"
                    // defaultValue={dayjs(user?.dateOfBirth)}
                    onChange={(newDate: Date) => {
                      setDateTo(newDate);
                      // setValue("dateTo", newDate);
                    }}
                    name="dateTo"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>

            <Box
              sx={{
                width: { xs: "100%" },
              }}
            >
              {/* contact */}
              <TextField
                sx={{
                  width: { xs: "100%", md: "30%", lg: "30%", xl: "33%" },
                }}
                id="outlined-basic"
                label="Contact"
                {...register("contact")}
              />
            </Box>

            <Box
              sx={{
                width: { xs: "100%" },
              }}
            >
              {/* reasons */}
              <TextField
                id="outlined-multiline-static"
                label="Reasons"
                multiline
                rows={4}
                sx={{
                  width: { xs: "100%", md: "60%", xl: "50%" },
                }}
                {...register("reasons")}
              />
            </Box>

            {/* Submit Btn */}
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: { xs: "100%", md: "30%", lg: "20%" },
              }}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Paper>
    </>
    }
    </>

  );
};

export default LeaveApplicationForm;
