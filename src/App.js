import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import Register from './Components/Register';
import Login from './Components/Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Config from './Components/Config';
 

function App() {
  return (

      

      <Router>
        
        <Menu/>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<Login/>}/>
          <Route path="/config" element={<Config/>}/>
        </Routes>

      </Router>



  );
}

export default App;
