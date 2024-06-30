import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

type FormFields = {
  username: string;
  email: string;
  password: string;
};

// formState is used to show error messages

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const handleFormSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Registeration</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "The username must be greater than or equal to 3",
            },
          })}
          type="text"
          name="username"
        />
        {errors.username && (
          <div style={{ color: "red" }}>{errors.username.message}</div>
        )}
        <input
          {...register("email", {
            required: "email is required",
            validate: (val) => {
              if (!val.includes("@")) {
                return "Email must be valid and includes @";
              }
            },
          })}
          type="string"
          name="email"
        />
        {errors.email && (
          <div style={{ color: "red" }}>{errors.email.message}</div>
        )}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "The minimum length of a password must be 4",
            },
          })}
          type="password"
          name="password"
        />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password.message}</div>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
