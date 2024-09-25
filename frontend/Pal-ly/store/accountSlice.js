import { createSlice } from "@reduxjs/toolkit";

const accountInit = {
  isLoggedIn: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: accountInit,
  reducers: {
    accountLogIn(state, action) {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.role = action.payload.address;
      state.email = action.payload.email;
    },
    accountLogOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const accountSliceAction = accountSlice.actions;
export default accountSlice;

export function loginThunk(data) {
  return (dispatch) => {
    dispatch(
      accountSliceAction.accountLogIn({
        username: data.account.username,
        name: data.account.name,
        address: data.account.address,
        email: data.account.email,
        role: data.account.accountRole,
      }),
    );
  };
}
