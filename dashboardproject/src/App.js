import logo from './logo.svg';
import './App.css';
import Login from './pages/public/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from './pages/public/Signup';
import Home from './pages/private/Home';
import Forgotpassword from './pages/public/Forgotpassword';
import NoPage from './pages/public/Nopage';
import Dash from './pages/private/Dash';
import Listofusers from './pages/private/Listofusers';
import UserProfile from './pages/private/UserProfile';
import Weatherlive from './components/Weatherlive';
import CanadaHolidays from './components/CanadaHolidays';
import Calculator from './components/Calculator';
import Todolist from './components/Todolist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Login/>}/>
        <Route path= "signup" element={<Signup/>}/>
        <Route path= "forgotpassword" element={<Forgotpassword/>}/>


            <Route path= "home" element={<Home/>}>
              
              <Route path="dash" element={<Dash/>}/>
              <Route path="userprofile" element={<UserProfile/>}/>
              <Route path="listofusers" element={<Listofusers/>}/>
              <Route path="weather" element={<Weatherlive/>}/>
              <Route path="canadaholidays" element={<CanadaHolidays/>}/>
              <Route path="calculator" element={<Calculator/>}/>
              <Route path="todolist" element={<Todolist/>}/>
              

            </Route>


          
        
        <Route path="*" element={< NoPage/>} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
