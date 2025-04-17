import "./App.css";
import { UserView } from "./components/UserView.tsx";
import { Page } from "./components/Page.tsx";
import { Age } from "./components/Age.tsx";

import { create } from "zustand";
import { UserZustand } from "./types.ts";

// https://zustand.docs.pmnd.rs/getting-started/introduction
export const useOurUserStore = create<UserZustand>((set) => ({
  user: {
    name: "DEFAULT",
    email: "DEFAULT@gmail.com",
    age: 999,
    asdas: {
      sadfsdf: {
        asd: {
          name: "asldkjalskjdh",
        },
      },
    },
  },
  increaseAge: () => {
    console.log("increaseAge called");
    set((state) => {
      const newAge = state.user.age + 1;
      // https://zustand.docs.pmnd.rs/guides/immutable-state-and-merging#nested-objects
      return { ...state, user: { ...state.user, age: newAge } };
    });
  },
}));

function App() {
  return (
    <>
      <UserView />
      -------------------------
      <Page />
      -------------------------
      <Age />
    </>
  );
}

export default App;
