import "./styles.css";

import Hello from "./basicComponent";
import TaskList from "./taskList";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magics happen!</h2>
      <Hello firstName="mael" lastName="naccache"></Hello>
      <TaskList />
    </div>
  );
}
