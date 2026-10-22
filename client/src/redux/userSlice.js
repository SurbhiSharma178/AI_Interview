import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
      console.log("action.payload", action.payload);
      state.userData = action.payload
    }
  }
})

export const { setUserData } = userSlice.actions
export default userSlice.reducer