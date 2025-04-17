import { useContext } from "react";
import { UserContext } from "../App.tsx";

export const Age = () => {
  const user = useContext(UserContext);

  return <div>age: {user.age}</div>;
};
