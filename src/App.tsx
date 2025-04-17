import { createContext } from "react";
import "./App.css";
import { UserView } from "./components/UserView.tsx";
import { Page } from "./components/Page.tsx";
import { Age } from "./components/Age.tsx";

export const UserContext = createContext({
  name: "DEFAULT",
  email: "DEFAULT@gmail.com",
  age: 999,
});

function App() {
  return (
    <>
      <UserContext.Provider
        value={{
          name: "test",
          email: "test@gmail.com",
          age: 20,
        }}
      >
        <UserView />
        -------------------------
        <Page />
        -------------------------
        <Age />
      </UserContext.Provider>
    </>
  );
}

export default App;
