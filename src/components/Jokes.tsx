import { useCallback, useEffect, useState } from "react";

const apiUrl = "https://official-joke-api.appspot.com/random_ten";

type Joke = {
  id: number;
  punchline: string;
  setup: string;
  type: string;
  showPunchline?: boolean;
  inLibrary?: boolean;
};

type JokesProps = {
  view?: "new_jokes" | "library";
};

export const Jokes = ({ view = "new_jokes" }: JokesProps) => {
  const [jokes, setJokes] = useState<Joke[]>([]);

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

  const handleShowPunchline = (jokeId: number) => {
    const newJokes = jokes.reduce<Joke[]>((prev, curr) => {
      if (curr.id === jokeId) {
        curr.showPunchline = true;
      }
      prev.push(curr);
      return prev;
    }, []);

    setJokes(newJokes);
  };

  const handleSaveRemoveLibrary = (jokeId: number) => {
    const newJokes = jokes.map((joke) => {
      if (joke.id === jokeId) {
        joke.inLibrary = !joke.inLibrary;
      }
      return joke;
    });
    setJokes(newJokes);
  };

  return (
    <>
      <div>
        {jokes
          .filter((j) => {
            if (view === "library") {
              return j.inLibrary;
            } else {
              return !j.inLibrary;
            }
          })
          // .filter((joke) => view === "library" ? !!joke.inLibrary : !joke.inLibrary)
          .map((joke) => (
            <div
              style={{ border: "1px solid red", marginBottom: "10px" }}
              key={joke.id}
            >
              <p>{joke.type}</p>
              <p>{joke.setup}</p>
              {joke.showPunchline ? (
                <p>{joke.punchline}</p>
              ) : (
                <button onClick={() => handleShowPunchline(joke.id)}>
                  Show
                </button>
              )}
              {joke.inLibrary ? (
                <button onClick={() => handleSaveRemoveLibrary(joke.id)}>
                  remove it from library
                </button>
              ) : (
                <button onClick={() => handleSaveRemoveLibrary(joke.id)}>
                  save it in library
                </button>
              )}
            </div>
          ))}
      </div>

      {view === "new_jokes" && <button onClick={fetchJokes}>refresh</button>}
    </>
  );
};
