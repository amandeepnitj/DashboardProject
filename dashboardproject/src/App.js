import logo from './logo.svg';
import './App.css';
import Login from './pages/public/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from './pages/public/Signup';
import Home from './pages/private/Home';
import Forgotpassword from './pages/public/Forgotpassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Login/>}/>
        <Route path= "/signup" element={<Signup/>}/>
        <Route path= "/home" element={<Home/>}/>
        <Route path= "/forgotpassword" element={<Forgotpassword/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
