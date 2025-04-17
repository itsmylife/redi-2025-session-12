import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// https://react-hook-form.com/get-started#SchemaValidation
const MyInputSchema = z.object({
  username: z.string().email("Invalid email"),
  age: z.coerce
    .number()
    .gt(0, "Minimum should be 0")
    .lt(100, "Maximum should be 100"),
});

type Inputs = z.infer<typeof MyInputSchema>;

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(MyInputSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>
        Email
        <input type="email" {...register("username")} />
      </label>
      {/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining*/}
      <p>{errors.username?.message}</p>
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <label>
        Age
        <input type="number" {...register("age")} />
      </label>
      <p>{errors.age?.message}</p>
      {/* errors will return when field validation fails  */}
      <br />
      <input type="submit" />
    </form>
  );
};
