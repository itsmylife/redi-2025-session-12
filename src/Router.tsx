import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Jokes } from "./components/Jokes";

export const Router = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Jokes view="new_jokes" />} />
        <Route path="/library" element={<Jokes view="library" />} />
      </Routes>
    </BrowserRouter>
  );
}; 