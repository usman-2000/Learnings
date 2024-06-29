import { FormSubmitHandler, SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

type FormFields = {
  username: "";
  email: "";
  password: "";
};

function App() {
  <input type="text" name="username" id="" />;
  const { register, handleSubmit } = useForm<FormFields>();

  const handleFormSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Form </h1>
      <p>We are learning react-form-hook</p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("username", {
            required: true,
          })}
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          {...register("email", {
            required: true,
          })}
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          {...register("password", {
            required: true,
          })}
          type="password"
          name="password"
          placeholder="password"
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default App;
