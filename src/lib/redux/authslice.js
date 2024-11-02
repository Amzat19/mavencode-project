import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API login function
const fakeApiLogin = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === "admin@maven.com" &&
        credentials.password === "password123"
      ) {
        resolve({ username: "admin", role: "admin" }); // Mock user
      } else {
        reject("Invalid username or password");
      }
    }, 1000);
  });
};

// Create an async thunk for login
export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await fakeApiLogin(credentials);
  return response;
});

// Create a slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
