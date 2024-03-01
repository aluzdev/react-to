import { Route, Routes } from "react-router-dom";
import { Form } from "./pages/Form";
import { Navbar } from "./components/Templates/Navbar";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { IndividualPostPage } from "./pages/IndividualPostPage";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/new" element={<Form />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/post" element={<IndividualPostPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
