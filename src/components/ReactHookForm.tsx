import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  age: string;
};

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>
        Email
        <input type="email" {...register("username")} />
      </label>
      {errors.username && (
        <span>
          {errors.username.message}something is wrong with the username
        </span>
      )}

      {/* include validation with required or other standard HTML validation rules */}
      <label>
        Age
        <input
          type="number"
          {...register("age", {
            max: 100,
            min: 0,
          })}
        />
      </label>
      {errors.age && (
        <span>{errors.age.message}something is wrong with the age</span>
      )}
      {/* errors will return when field validation fails  */}

      <input type="submit" />
    </form>
  );
};
