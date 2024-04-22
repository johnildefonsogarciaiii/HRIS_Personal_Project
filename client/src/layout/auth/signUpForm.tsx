import {
  Alert,
  Avatar,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signup } from "../../store/authSlice";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/userAPI";
import AuthService from "../../services/authService";

interface IFormInput {
  firstName: string;
  email: string;
  password: string;
  employeeID: string;
}

interface props {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpForm: React.FC<props> = ({ setIsSignUp }) => {
  const dispatch = useDispatch();
  const authService = AuthService();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const [employeeID, setEmployeeID] = useState<string>("");
  const [errorAlert, setErrorAlert] = useState<boolean>(false);

  useEffect(() => {
    const fetchingUser = async () => {
      const allUsers = await getAllUsers();
      const ID = allUsers.data.data.user.length + 1;
      setEmployeeID(`23-${ID}`);
    };
    fetchingUser();
  }, []);

  //Submit Form handler
  const onSubmit: SubmitHandler<IFormInput> = async (credentials) => {
    try {
      const signin = await dispatch(
        signup({
          ...credentials,
          employeeID,
        })
      );

      if (!signin) {
        setErrorAlert(true);
      } else {
        const login = await authService.login(
          credentials.email,
          credentials.password
        );
        const success = await dispatch(login(credentials.email, credentials.password));
        history.push("/home");
        window.location.reload();
      }
    } catch (error) {
      setErrorAlert(true);
    } 
  };

  //isSignup handler
  const isSignUpHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setIsSignUp(false);
  };


    // handle close alert
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setErrorAlert(false);
    };


  return (
    <>
    {/* Auth Error Alert */}
    {errorAlert ? (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={errorAlert} autoHideDuration={3000} onClose={handleClose}>
            <Alert
            onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Please provide valid email
            </Alert>
          </Snackbar>
        </Stack>
      ) : null}



      {/* Content */}
      <Box
        sx={{
          marginTop: { xs: 8, sm: 12 },
          py: "5%",
          margin: 'auto',
          width: {xs: "90%", md: '70%', lg: '50%', xl: '40%'},
          border: "solid 1px",
          borderRadius: '16px'
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            direction="column"
            spacing={2}
            sx={{ width: { xs: "100%" }, alignItems: "center" }}
          >
            {/* image and header*/}
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            {/* firstname */}
            {errors.firstName?.type === "required" ? (
              <TextField
                error
                sx={{ width: { xs: "70%", md: "50%", lg: "55%" } }}
                id="outlined-basic"
                label="First Name*"
                {...register("firstName", { required: true, maxLength: 50 })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
            ) : (
              <TextField
                sx={{ width: { xs: "70%", md: "50%", lg: "55%" } }}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                {...register("firstName", { required: true, maxLength: 50 })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
            )}

            {/* email */}
            {errors.email?.type === "required" ? (
              <TextField
                error
                sx={{ width: { xs: "70%", md: "50%", lg: "55%" } }}
                id="outlined-basic"
                label="Email*"
                {...register("email", { required: true, maxLength: 50 })}
                aria-invalid={errors.email ? "true" : "false"}
              />
            ) : (
              <TextField
                sx={{ width: { xs: "70%", md: "50%", lg: "55%" } }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email", { required: true, maxLength: 50 })}
                aria-invalid={errors.email ? "true" : "false"}
              />
            )}

            {/* password */}
            {errors.password?.type === "required" ? (
              <TextField
                error
                sx={{ width: { xs: "70%", md: "50%", lg: "55%" } }}
                id="outlined-basic"
                label="Password*"
                variant="outlined"
                type="password"
                {...register("password", { required: true, min: 8, max: 30 })}
                aria-invalid={errors.password ? "true" : "false"}
              />
            ) : (
              <TextField
                sx={{ width: { xs: "70%", md: "50%", lg: "55%" } }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                {...register("password", { required: true, min: 8, max: 30 })}
                aria-invalid={errors.password ? "true" : "false"}
              />
            )}

            {/* <Link to='profile'> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, width: { xs: "70%", md: "50%", lg: "55%" } }}
            >
              Sign Up
            </Button>
            {/* </Link> */}

            <Button onClick={isSignUpHandler}>
              {"Already have an account?"}
            </Button>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 8, mb: 4 }}
            >
              {"Project of John Garcia III."}
            </Typography>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default SignUpForm;
