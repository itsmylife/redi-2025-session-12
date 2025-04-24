import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Jokes } from "./components/Jokes";

export const Router = () => {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
    color: isActive ? '#0066cc' : '#333'
  });

  return (
    <BrowserRouter>
      <nav style={{ 
        position: 'fixed',
        top: '10px',
        left: '10px',
        background: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}>
        <ul style={{ 
          display: "flex", 
          listStyle: "none", 
          padding: 0,
          margin: 0,
          gap: "20px" 
        }}>
          <li>
            <NavLink to="/" style={navLinkStyle}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/library" style={navLinkStyle}>Library</NavLink>
          </li>
        </ul>
      </nav>

      <div style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Jokes view="new_jokes" />} />
          <Route path="/library" element={<Jokes view="library" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}; 