import logo from "./logo.svg";
import "./App.css";
import Employee from "./Component/Employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Component/Create";
import Update from "./Component/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employee />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
