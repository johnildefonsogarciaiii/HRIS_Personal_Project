import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface LeaveState {
  leave: object | null | void;
  isLoading: boolean;
  error: string | null;
}

interface LeaveForm {
  employeeID: string;
  leaveID: string;
  dateCreated: Date;
  natureOfLeave: string;
  dateFrom: Date;
  dateTo: Date;
  reasons: string;
  status: string;
}

// Define the initial state for authentication
const initialState: LeaveState = {
  leave: null,
  isLoading: false,
  error: null,
};

// getting token from cookies
const getToken = document.cookie.split("=");
const token = getToken[1];

// create an async thunk for creating user leave
export const CREATE_LEAVE = createAsyncThunk(
  "user/createLeave",
  async (credentials: LeaveForm, thunkAPI) => {
    try {
      // Auth HTTP PATCH request for getting current user
      const response = await axios.post(
        "https://hris-personal-project.onrender.com/user/leave",
        credentials,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        const leave = await response.data.data.data;
        //   console.log(response.data.data.data)
        return leave;
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

// create an async thunk for getting all user leave
export const GETTING_ALL_LEAVE = createAsyncThunk(
  "user/getLeave",
  async (credentials, thunkAPI) => {
    try {
      // Auth HTTP PATCH request for getting current user
      const response = await axios.get("https://hris-personal-project.onrender.com/user/leave");

      if (response) {
        const leave = await response.data.data.leaves;
        //   console.log(response.data.data.leaves)
        return leave;
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

// create an async thunk for updating leave status
export const UPDATE_LEAVE = createAsyncThunk(
  "user/updateLeave",
  async (credentials: { status: string; id: string }, thunkAPI) => {
    try {
      // Auth HTTP PATCH request for getting current user
      const response = await axios.patch(
        `https://hris-personal-project.onrender.com/user/leave/${credentials.id}`,
        {status: credentials.status},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        const leave = await response.data.data;
        // console.log(response.data.data);
        return leave;
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

// Create a slice for user profile information
const leaveSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CREATE_LEAVE.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(CREATE_LEAVE.fulfilled, (state, action) => {
        state.isLoading = false;
        state.leave = action.payload;
      })
      .addCase(CREATE_LEAVE.rejected, (state, action) => {
        state.isLoading = false;
        state.leave = null;
        state.error = action.error.message || "Failed to create leave";
      })
      .addCase(GETTING_ALL_LEAVE.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GETTING_ALL_LEAVE.fulfilled, (state, action) => {
        state.isLoading = false;
        state.leave = action.payload;
      })
      .addCase(GETTING_ALL_LEAVE.rejected, (state, action) => {
        state.isLoading = false;
        state.leave = null;
        state.error = action.error.message || "Failed to get all leaves";
      })
      .addCase(UPDATE_LEAVE.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(UPDATE_LEAVE.fulfilled, (state, action) => {
        state.isLoading = false;
        state.leave = action.payload;
      })
      .addCase(UPDATE_LEAVE.rejected, (state, action) => {
        state.isLoading = false;
        state.leave = null;
        state.error = action.error.message || "Failed to update leave status";
      });
  },
});

export default leaveSlice.reducer;
