import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import "./App.css";
import { zodResolver } from "@hookform/resolvers/zod";

const FormFieldsSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof FormFieldsSchema>;

// formState is used to show error messages

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      username: "usmanrahim",
      email: "usmanrhim@gmail.com",
    },
    resolver: zodResolver(FormFieldsSchema),
  });

  const handleFormSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      // setError("email", {
      //   message: "This email is already taken",
      // });

      setError("root", {
        message: "Form has some errors",
      });
    }
  };

  return (
    <div className="App">
      <h1>Registeration</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register("username")} type="text" name="username" />
        {errors.username && (
          <div style={{ color: "red" }}>{errors.username.message}</div>
        )}
        <input {...register("email")} type="string" name="email" />
        {errors.email && (
          <div style={{ color: "red" }}>{errors.email.message}</div>
        )}
        <input {...register("password")} type="password" name="password" />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password.message}</div>
        )}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : "Submit"}
        </button>

        {/* This will throw error on the whole forms */}
        {errors.root && (
          <div style={{ color: "red" }}>{errors.root.message}</div>
        )}
      </form>
    </div>
  );
}

export default App;
