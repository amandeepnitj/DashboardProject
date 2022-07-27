import React, { useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { auth } from "../../firebase/Firebase";
import '../../helper/newsidebar.css'
function Home(){
    const navigate = useNavigate();
    const [user,loading, error] = useAuthState(auth);
    function signout()
    {
        let text = "Do you want to Signout from your account?"
        if(window.confirm(text)==true)
        {
            auth.signOut();
            navigate("/");

        }
        else{
            return;
        }
        

    }
    var [class1,setClass] = useState('topnav');
    function myFunction() {

        if(class1=='topnav')
        {
          setClass(()=>'topnav responsive')
        }
        else
        {
          setClass(()=> 'topnav')
        }
      }
    return(
        <>
       
           <div className="sidebar">
               
                <span className="active">Assignment-2</span>
                
                <ul>
                <li><Link  to="/home/dash" className="link">Dashboard(News)</Link></li>
                <li><Link  to="/home/listofusers" className="link">List of Users</Link></li>
                <li><Link  to="/home/userprofile" className="link">User Profile</Link></li>
                <li><Link  to="/home/weather" className="link">Weather</Link></li>
                <li><Link  to="/home/canadaholidays" className="link">Canada Holidays</Link></li>
                <li><Link  to="/home/calculator" className="link">Calculator</Link></li>
                <li><Link  to="/home/todolist" className="link">Todo List</Link></li>
                <li><span  onClick={()=>{signout()}} className="link_1">Sign Out</span></li>
                </ul>
                <span  className="icon" onClick={()=>myFunction()}> 
                <i className="fa fa-bars" style={{marginRight:"2px"}}> </i>
                </span>
                
                
            </div>
           
        
        
        <div className="marginlong">
            
            <Outlet/>
            </div>
        
        
        
        {/* <div>Welcome {user?.email}
        <button onClick={()=>{signout()}}>Signout</button>
        </div> */}
        
        
        </>
    )

};


export default Home;