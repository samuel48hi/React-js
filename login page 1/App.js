import Register from "./Register/Register";
import Login from "./Login/Login";
import Table from "./Table/Table";
import './assets/font-awesome/css/font-awesome.min.css';
import {BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Routes>
        <Route path="" element={<Register/>}></Route>
        <Route path="login" element={ <Login/> }></Route>
        <Route path="table" element={ <Table/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
