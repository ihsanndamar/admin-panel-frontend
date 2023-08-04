import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import Register from './Components/Register';
import Login from './Components/Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
 

function App() {
  return (

      

      <Router>
        
        <Menu/>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<Login/>}/>
        </Routes>

      </Router>



  );
}

export default App;
