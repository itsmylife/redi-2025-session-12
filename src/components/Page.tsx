import { useOurUserStore } from "../App.tsx";

export const Page = () => {
  const user = useOurUserStore((state) => state.user);
  return (
    <div>
      <h2>Page view</h2>
      <p>User email: {user.email}</p>
    </div>
  );
};
