import { useContext } from "react";
import { UserContext } from "../App.tsx";

export const Page = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Page view</h2>
      <p>User email: {user.email}</p>
    </div>
  );
};
