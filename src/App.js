import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/editUser/:id" element={<EditUser></EditUser>}></Route>
          <Route exact path="/addUser" element={<AddUser></AddUser>}></Route>
  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
