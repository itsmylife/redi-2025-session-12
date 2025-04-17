import { UserContext } from "../App.tsx";
import { useContext } from "react";

export const UserView = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>User view</h1>
      <p>User name: {user.name}</p>
    </div>
  );
};
