import "./styles.css";
import AutoTextBox from "./components/AutoTextBox";

export default function App() {
  return (
    <div className="App">
      <h1>Form element</h1>
      <div className="form-section">
        <label>Normal textbox</label>
        <input className="input-text" value="sample" />
      </div>
      <div className="form-section">
        <label>Magic textbox</label>
        <AutoTextBox value="sample" />
      </div>
    </div>
  );
}
