import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebase/Firebase'
import "../../helper/index.css"
function Signup(){
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,Setpassword] = useState("")
    const [confirmpassword,Setconfirmpassword] = useState("");

    function signup()
    {
        if(email.length<=0)
        {
            alert('please enter valid email')
            return;
        }
        if(password.length<=0)
        {
            alert("please enter valid password");
            return;

        }
        if(confirmpassword!==password)
        {
            alert("Passwords don't match")
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>{console.log(auth)
        alert("User successfully created an account")
        navigate('/')
    })
        .catch((error)=>{
            if (error.code === "auth/email-already-in-use") {
                alert("That email address is already in use!");
                return;
              }
        
              if (error.code === "auth/invalid-email") {
                alert("That email address is invalid!");
                return;
              }
              
              alert(error.code)
        })

    }

    return(
        <div className='main'>
            <div className='center'>
            <h1>Sign-Up</h1>

            <label>E-mail : </label>
            <input autoComplete="off" type='email' name='email' onChange={(event)=>{setEmail(event.target.value)}}/>
            <label>Password : </label>
            <input autoComplete='off' type='password' name='password' onChange={(event)=>{Setpassword(event.target.value)}}></input>
            <label>Confirm Password : </label>
            <input autoComplete='off' type='password' name='confirmpassword' onChange={(event)=>{Setconfirmpassword(event.target.value)}}></input>
            
            <button className="" onClick={()=>{signup()}}>Sign Up</button>
            <p>If you already have an account, please Login</p>
            <button onClick={()=>{navigate('/')}}>Login</button>
            </div>
        </div>
    )

}

export default Signup;