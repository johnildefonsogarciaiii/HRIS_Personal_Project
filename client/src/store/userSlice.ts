import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



interface UserState {
  user: object | null | void;
  isLoading: boolean;
  error: string | null;
}

// Define the initial state for authentication
const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};


  // getting token from cookies
  const getToken = document.cookie.split("=");
  const token = getToken[1];


// create an async thunk for getting current user
export const GET_CURRENT_USER = createAsyncThunk(
    "user/me",
    async (credentials, thunkAPI) => {
      try {
        // Auth HTTP PATCH request for getting current user
        const response = await axios.get(
          "https://hris-personal-project.onrender.com/user/me",
          {headers: {
              Authorization: `Bearer ${token}`,
            }}
        );
  
        if (response) {
          const user = await response.data.data.data
          // console.log(response.data.data.data)
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





// create an async thunk for logging out current user
export const LOGOUT_USER = createAsyncThunk(
    "user/logout",
    async (credentials, thunkAPI) => {
      try {
          const user = null
          console.log(user)
          return user;    
      } catch (error) {
        console.log(error);
      }
    }
  );



// Create a slice for user profile information
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      .addCase(LOGOUT_USER.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(LOGOUT_USER.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user =  null;
      })
      .addCase(LOGOUT_USER.rejected, (state, action) => {
        state.isLoading = false;
        state.user =  null;
        state.error = action.error.message || "Failed to logout";
      })
  },
});

export default userSlice.reducer;
