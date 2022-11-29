import './App.css';

function App() {

  const handleData = () => {
    undefined.slice(1,2)
  }

  return (

    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          !
        </a>

        <div onClick={handleData}>111</div>

      </header>
    </div>
  );
}

export default App;
