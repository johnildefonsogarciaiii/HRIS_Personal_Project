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
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "./../../store/authSlice";
import history from "../../services/history";
import AuthService from "../../services/authService";
import { useSelector, useDispatch } from "react-redux";
import { GETTING_ALL_LEAVE } from "../../store/leaveSlice";

interface IFormInput {
  email: string;
  password: string;
}

interface props {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<props> = ({ setIsSignUp }) => {
  const [errorAlert, setErrorAlert] = useState<boolean>(false);
  const dispatch = useDispatch();
  const user = useSelector((state: object) => state.user.user);

  const authService = AuthService();

  // console.log(user)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  //Submit Form handler
  const onSubmit: SubmitHandler<IFormInput> = async (credentials) => {
    try {
      const setToCookies = await authService.login(
        credentials.email,
        credentials.password
      );
      if (!setToCookies) {
        setErrorAlert(true);
      } else {
        const success = await dispatch(login(credentials));
        dispatch(GETTING_ALL_LEAVE());
        history.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //isSignup handler
  const isSignUpHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setIsSignUp(true);
  };

  // handle close alert
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorAlert(false);
  };

  // Sign in as demo version handle
  const demoVersionHandle = async () => {
    try {
      const setToCookies = await authService.login(
        "Demo@gmail.com",
        "qweqwe123"
      );
      if (!setToCookies) {
        setErrorAlert(true);
      } else {
        const success = await dispatch(login({email: "Demo@gmail.com", password: "qweqwe123"}));
        dispatch(GETTING_ALL_LEAVE());
        history.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Auth Error Alert */}
      {errorAlert ? (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar
            open={errorAlert}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Invalid email or password!
            </Alert>
          </Snackbar>
        </Stack>
      ) : null}

      {/* Content */}
      <Box
        sx={{
          marginTop: { xs: 8, sm: 12 },
          py: "5%",
          margin: "auto",
          width: { xs: "90%", md: "70%", lg: "50%", xl: "40%" },
          border: "solid 1px",
          borderRadius: "16px",
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

            {/* Submit button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                width: { xs: "70%", md: "50%", lg: "55%" },
              }}
            >
              Sign In
            </Button>

            {/* Demo Sign in Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                width: { xs: "70%", md: "50%", lg: "55%" },
              }}
              onClick={demoVersionHandle}
            >
              Sign in as Demo Version
            </Button>

            <Button onClick={isSignUpHandler}>
              {"Don't have an account?"}
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

export default LoginForm;
