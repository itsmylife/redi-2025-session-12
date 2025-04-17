import { useOurUserStore } from "../App";

export const UserView = () => {
  const user = useOurUserStore((state) => state.user);
  return (
    <div>
      <h1>User view</h1>
      <p>User name: {user.name}</p>
    </div>
  );
};
