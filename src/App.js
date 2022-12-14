import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography fontSize={["1rem", "5rem"]} fontWeight={300}>
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
