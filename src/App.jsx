import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/Button";
import { Home, Microphone, Camera, Tag, Idea, Bag } from "./icons/Icons";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button type="login">Log in</Button>
      <Button type="create">Create account</Button>
      <Button type="left_sidebar" width="lg">
        <Home /> Home
      </Button>
      <Button type="create">Bag <Bag/></Button>
    </>
  );
}

export default App;
