import AccountForm from "../components/AccountForm";
import { json, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { accountSliceAction } from "../../store/accountSlice";
import store from "../../store/index";

import { loginThunk } from "../../store/accountSlice";
export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <AccountForm />
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const loginInfo = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Login failed:", errorData.error);
      return json({ message: errorData.error }, { status: response.status });
    }

    const resData = await response.json();

    store.dispatch(loginThunk(resData));
    console.log(resData);
    return redirect(`/${resData.account.id}/dashboard`);
  } catch (error) {
    console.log("An error occurred:", error);
    return json({ message: "An error occurred" }, { status: 500 });
  }
}
