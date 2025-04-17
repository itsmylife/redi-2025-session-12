export type UserType = {
  name: string;
  email: string;
  age: number;
};

export type UserZustand = {
  user: UserType;
  increaseAge: () => void;
};
