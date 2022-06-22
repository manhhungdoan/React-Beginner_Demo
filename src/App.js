import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
const App = () => {
  const x = "Manh Hung"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lean react by {x}
        </p>
        <TodoList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          mhung Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
