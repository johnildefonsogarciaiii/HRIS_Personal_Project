import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



interface AuthState {
  user: object | null | void;
  isLoading: boolean;
  error: string | null;
}

// Define the initial state for authentication
const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};


  // getting token from cookies
  const getToken = document.cookie.split("=");
  const token = getToken[1];


// Create an async thunk for user login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      // Auth HTTP POST request for login
      const response = await axios.post(
        "http://127.0.0.1:5000/user/login",
        credentials
      );

      if (response) {
        const user = await response.data.data.user;
        return user;
      } else {
        // Handle authentication error
        const errorData = await response;
        throw new Error(errorData);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// Create an async thunk for user signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials: { email: string; password: string , firstName: string , employeeID: string}, thunkAPI) => {
    try {
      // Auth HTTP POST request for signup
      const response = await axios.post(
        "http://127.0.0.1:5000/user/signup",
        credentials
      );

      if (response) {
        console.log("success");

      } else {
        // Handle authentication error
        const errorData = await response;
        throw new Error(errorData);
      }
    } catch (error) {
      console.log(error);
    }
  }
);





// create an async thunk for updating personal info of user
export const PERSONAL_INFO_UPDATE = createAsyncThunk(
  "user/personalInfo",
  async (credentials : {
    gender: string,
    firstName: string,
    middleName: string,
    lastName: string,
    civilStatus: string,
    dateOfBirth: Date,
    nationality: string
  }, thunkAPI) => {
    try {
      // Auth HTTP PATCH request for updating user personal information
      const response = await axios.patch(
        "http://127.0.0.1:5000/user/update-current-user",
        credentials,
        {headers: {
            Authorization: `Bearer ${token}`,
          }}
      );

      if (response) {
        const user = await response.data.data.user;
        return user;
      } else {
        // Handle authentication error
        const errorData = await response;
        throw new Error(errorData);
      }
    } catch (error) {
      console.log(error);
    }
  }
);


// create an async thunk for updating personal info of user
export const EMPLOYMENT_INFO_UPDATE = createAsyncThunk(
  "user/employmentInfo",
  async (credentials : {
    position: string,
    department: string,
    assignedLocation: string,
    section: string,
    company: string,
    employmentStatus: string,
    sss: string,
    pagibig: string,
    philHealth: string,
  }, thunkAPI) => {
    try {
      // Auth HTTP PATCH request for updating user personal information
      const response = await axios.patch(
        "http://127.0.0.1:5000/user/update-current-user",
        credentials,
        {headers: {
            Authorization: `Bearer ${token}`,
          }}
      );

      if (response) {
        const user = await response.data.data.user;
        return user;
      } else {
        // Handle authentication error
        const errorData = await response;
        throw new Error(errorData);
      }
    } catch (error) {
      console.log(error);
    }
  }
);



// create an async thunk for updating contact info of user
export const CONTACT_INFO_UPDATE = createAsyncThunk(
  "user/contactInfo",
  async (credentials : {
    personalContact: number,
    companyMobileNumber: number,
    companyLocalNumber: number,
    presentCity: string,
    presentAddress: string,
    presentAddressTelephone: number,
    permanentCity: string,
    permanentAddress: string,
    permanentAddressTelephone: number,
  }, thunkAPI) => {
    try {
      // Auth HTTP PATCH request for updating user personal information
      const response = await axios.patch(
        "http://127.0.0.1:5000/user/update-current-user",
        credentials,
        {headers: {
            Authorization: `Bearer ${token}`,
          }}
      );

      if (response) {
        const user = await response.data.data.user;
        return user;
      } else {
        // Handle authentication error
        const errorData = await response;
        throw new Error(errorData);
      }
    } catch (error) {
      console.log(error);
    }
  }
);


// create an async thunk for getting current user
export const GET_CURRENT_USER = createAsyncThunk(
  "user/me",
  async (credentials, thunkAPI) => {
    try {
      // Auth HTTP PATCH request for getting current user
      const response = await axios.get(
        "http://127.0.0.1:5000/user/me",
        {headers: {
            Authorization: `Bearer ${token}`,
          }}
      );

      if (response) {
        const user = await response.data.data.data
      //   console.log(response.data.data.data)
        return user;
      } else {
        // Handle authentication error
        const errorData = await response;
        throw new Error(errorData);
      }
    } catch (error) {
      console.log(error);
    }
  }
);



// Create a slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Authentication failed";
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Email used is not valid";
      })
      .addCase(PERSONAL_INFO_UPDATE.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(PERSONAL_INFO_UPDATE.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user =  action.payload
      })
      .addCase(PERSONAL_INFO_UPDATE.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to update";
      })
      .addCase(EMPLOYMENT_INFO_UPDATE.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(EMPLOYMENT_INFO_UPDATE.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user =  action.payload
      })
      .addCase(EMPLOYMENT_INFO_UPDATE.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to update";
      })
      .addCase(CONTACT_INFO_UPDATE.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(CONTACT_INFO_UPDATE.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user =  action.payload
      })
      .addCase(CONTACT_INFO_UPDATE.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to update";
      })
      .addCase(GET_CURRENT_USER.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GET_CURRENT_USER.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user =  action.payload
      })
      .addCase(GET_CURRENT_USER.rejected, (state, action) => {
        state.isLoading = false;
        state.user =  null;
        state.error = action.error.message || "Failed to get current user";
      })
  },
});

export default authSlice.reducer;
