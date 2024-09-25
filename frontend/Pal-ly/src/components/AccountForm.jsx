import { Form, useLoaderData } from "react-router-dom";
import InputGroup from "./InputGroup";
import Button from "./Button";
export default function AccountForm() {
  const data = useLoaderData();

  console.log(data);

  return (
    <Form
      method="post"
      action="/login"
      className="flex h-[60%] w-[500px] flex-col justify-center rounded-xl bg-customAccentGray"
    >
      <h1 className="k mb-8 text-center text-5xl font-bold tracking-widest">
        Pal-ly
      </h1>
      <InputGroup label="Username" name="username" />
      <InputGroup label="Password" name="password" />
      <Button text={"Login"} />
    </Form>
  );
}
