import { useState } from "react";

import "./App.css";
import { ReactHookForm } from "./components/ReactHookForm";

type MyForm = {
  username: string;
  age: number;
};

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

// this function validates the age input
const validateAge = (age: number) => {
  return age > 0 && age < 100;
};

function App() {
  const [inputs, setInputs] = useState<MyForm>({
    username: "",
    age: 0,
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    if (!validateEmail(inputs.username)) {
      setErrorMessage("Invalid email");
      return;
    }
    if (!validateAge(inputs.age)) {
      setErrorMessage("Invalid age");
      return;
    }
    alert("Form submitted successfully");
  };

  return (
    <>
      <h1>New Way!</h1>
      <ReactHookForm />
      <p>-------------------------------------------</p>
      <h2>Old way is below</h2>
      <h2>React Forms</h2>
      <form className="my-form" onSubmit={handleSubmit} noValidate>
        <label>
          Email
          <input type="email" name="username" onChange={handleChange} />
        </label>

        <label>
          Age
          <input type="number" name="age" onChange={handleChange} />
        </label>

        {errorMessage !== "" && <p className="error">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
