import { useCallback, useEffect, useState } from "react";
import {
  jokeCardStyle,
  jokeTypeStyle,
  jokeSetupStyle,
  jokePunchlineStyle,
  showButtonStyle,
  saveButtonStyle,
  removeButtonStyle,
  refreshButtonStyle,
  jokesContainerStyle,
  emptyLibraryContainerStyle,
  emptyLibraryTitleStyle,
  emptyLibraryTextStyle
} from "./styles";

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
  const [showEmptyLibraryMessage, setShowEmptyLibraryMessage] = useState(false);
  const [countdown, setCountdown] = useState(3);

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

  useEffect(() => {
    // Check if we're in library view and there are no jokes in the library
    if (view === "library") {
      const hasLibraryJokes = jokes.some(joke => joke.inLibrary);
      if (jokes.length > 0 && !hasLibraryJokes) {
        setShowEmptyLibraryMessage(true);
        
        // Set up countdown timer
        const countdownInterval = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              clearInterval(countdownInterval);
              // Use window.location for a full page reload
              window.location.href = "/";
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        
        // Cleanup the interval when component unmounts
        return () => {
          clearInterval(countdownInterval);
        };
      }
    }
  }, [jokes, view]);

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

  // If we're showing the empty library message
  if (showEmptyLibraryMessage) {
    return (
      <div style={emptyLibraryContainerStyle}>
        <h2 style={emptyLibraryTitleStyle}>Your joke library is empty</h2>
        <p style={emptyLibraryTextStyle}>Redirecting to the main page in {countdown} seconds...</p>
        <p style={emptyLibraryTextStyle}>You can save jokes to your library from the main page.</p>
      </div>
    );
  }

  return (
    <>
      <div style={jokesContainerStyle}>
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
            <div style={jokeCardStyle} key={joke.id}>
              <p style={jokeTypeStyle}>{joke.type}</p>
              <p style={jokeSetupStyle}>{joke.setup}</p>
              {joke.showPunchline ? (
                <p style={jokePunchlineStyle}>{joke.punchline}</p>
              ) : (
                <button
                  onClick={() => handleShowPunchline(joke.id)}
                  style={showButtonStyle}
                >
                  Show Punchline
                </button>
              )}
              {joke.inLibrary ? (
                <button
                  onClick={() => handleSaveRemoveLibrary(joke.id)}
                  style={removeButtonStyle}
                >
                  Remove from library
                </button>
              ) : (
                <button
                  onClick={() => handleSaveRemoveLibrary(joke.id)}
                  style={saveButtonStyle}
                >
                  Save to library
                </button>
              )}
            </div>
          ))}
      </div>

      {view === "new_jokes" && (
        <button onClick={fetchJokes} style={refreshButtonStyle}>
          Refresh Jokes
        </button>
      )}
    </>
  );
};
