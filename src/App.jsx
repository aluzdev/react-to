import { Route, Routes } from "react-router-dom";
import { Form } from "./pages/Form";
import { Navbar } from "./components/Templates/Navbar";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/new" element={<Form />}></Route>
      </Routes>
      <>{/* <Login></Login> */}</>
    </>
  );
}

export default App;
