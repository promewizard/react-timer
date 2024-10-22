import "./App.css";
import Timer from "./timer";

function App() {
  const initialTime = 120;
  return (
    <div className="App">
      <Timer initialTime={initialTime} />
    </div>
  );
}

export default App;
