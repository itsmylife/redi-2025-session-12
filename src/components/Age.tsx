import { useOurUserStore } from "../App.tsx";

export const Age = () => {
  const { user, increaseAge } = useOurUserStore((state) => state);

  const handleGettingOld = () => {
    console.log("getting old clicked");
    increaseAge();
  };

  return (
    <div>
      <p>age: {user.age}</p>
      <button onClick={handleGettingOld}>get old</button>
    </div>
  );
};
