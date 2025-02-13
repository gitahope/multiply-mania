import { useSelector } from "react-redux";
import "./App.css";
import TablesApp from "./components/m-tables";
import Template from "./components/template";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { quizStart } = useSelector((state) => state.quiz);
  return <div className="App">{quizStart ? <TablesApp /> : <Template />}</div>;
}

export default App;
