import { useCallback, useEffect, useState } from "react";

const apiUrl = "https://official-joke-api.appspot.com/random_ten";

type Joke = {
  id: number;
  punchline: string;
  setup: string;
  type: string;
  showPunchline?: boolean;
};

export const Jokes = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);
  const [view, setView] = useState<"new_jokes" | "library">("new_jokes");

  const fetchJokes = useCallback(async () => {
    fetch(apiUrl)
      .then((data) => data.json())
      .then((d) => setJokes(d))
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    // just initialization
    fetchJokes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleShowPunchline(jokeId: number): void {
    const newJokes = jokes.reduce<Joke[]>((prev, curr) => {
      if (curr.id === jokeId) {
        curr.showPunchline = true;
      }
      prev.push(curr);
      return prev;
    }, []);

    setJokes(newJokes);
  }

  function handleSaveInLibrary(jokeId: number): void {
    setSavedJokes(jokes.filter((joke) => joke.id === jokeId));
    setJokes(jokes.filter((joke) => joke.id !== jokeId));
  }

  if (view === "library") {
    return (
      <div>
        <JokesList
          jokes={savedJokes}
          handleSaveInLibrary={handleSaveInLibrary}
          handleShowPunchline={handleShowPunchline}
        />
      </div>
    );
  }

  return (
    <>
      <div>
        <JokesList
          jokes={jokes}
          handleSaveInLibrary={handleSaveInLibrary}
          handleShowPunchline={handleShowPunchline}
        />
      </div>
      <button onClick={fetchJokes}>refresh</button>
    </>
  );
};

type JokesListProps = {
  jokes: Joke[];
  handleShowPunchline: (jokeId: number) => void;
  handleSaveInLibrary: (jokeId: number) => void;
};

const JokesList = (props: JokesListProps) => {
  const { jokes, handleShowPunchline, handleSaveInLibrary } = props;
  return (
    <>
      {jokes.map((joke) => (
        <div
          style={{ border: "1px solid red", marginBottom: "10px" }}
          key={joke.id}
        >
          <p>{joke.type}</p>
          <p>{joke.setup}</p>
          {joke.showPunchline ? (
            <p>{joke.punchline}</p>
          ) : (
            <button onClick={() => handleShowPunchline(joke.id)}>Show</button>
          )}
          <button onClick={() => handleSaveInLibrary(joke.id)}>
            save it in library
          </button>
        </div>
      ))}
    </>
  );
};
