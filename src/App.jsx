import { Route, Routes } from "react-router-dom";
import { Form } from "./pages/Form";
import { Navbar } from "./components/Templates/Navbar";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/new" element={<Form />}></Route>
      </Routes>
    </>
  );
}

export default App;
