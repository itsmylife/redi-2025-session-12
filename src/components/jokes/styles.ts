export const jokeCardStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  backgroundColor: "#f5f0e0",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  color: "#333"
};

export const jokeTypeStyle = {
  color: "#666",
  fontSize: "14px",
  textTransform: "capitalize" as const,
  margin: "0 0 8px 0"
};

export const jokeSetupStyle = {
  fontSize: "18px",
  margin: "0 0 16px 0",
  color: "#222",
  borderBottom: "2px dotted #ddd"
};

export const jokePunchlineStyle = {
  fontSize: "20px",
  fontStyle: "italic",
  fontWeight: 500,
  margin: "0 0 16px 0",
  color: "#111",
  padding: "8px 0",
  borderBottom: "2px dotted #ddd"
};

export const buttonBaseStyle = {
  padding: '8px 12px',
  background: '#f0f0f0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  margin: '0 8px 8px 0',
  fontWeight: 500,
  transition: 'background 0.2s ease',
};

export const showButtonStyle = {
  ...buttonBaseStyle,
  background: '#e6f7ff',
  color: '#0066cc'
};

export const saveButtonStyle = {
  ...buttonBaseStyle,
  background: '#f0fff0',
  color: '#00cc66'
};

export const removeButtonStyle = {
  ...buttonBaseStyle,
  background: '#fff0f0',
  color: '#cc0000'
};

export const refreshButtonStyle = {
  padding: '10px 16px',
  background: '#0066cc',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

export const jokesContainerStyle = {
  color: '#333'
};

export const emptyLibraryContainerStyle = {
  textAlign: 'center' as const, 
  padding: '30px', 
  backgroundColor: '#f5f0e0', 
  borderRadius: '8px',
  margin: '20px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
  color: '#333'
};

export const emptyLibraryTitleStyle = {
  fontSize: '22px',
  margin: '0 0 16px 0',
  color: '#222'
};

export const emptyLibraryTextStyle = {
  fontSize: '16px',
  margin: '0 0 12px 0',
  color: '#333'
}; 