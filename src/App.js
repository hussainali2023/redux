import logo from "./logo.svg";
import "./App.css";
import Counters from "./Counters";
import Form from "./Form";
import LinkShorter from "./LinkShorter";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      {/* <LinkShorter /> */}
      {/* <Counters /> */}
      <Form />
    </div>
  );
}

export default App;
