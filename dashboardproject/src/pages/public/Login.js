import { signInWithEmailAndPassword } from 'firebase/auth';
import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebase/Firebase'
import "../../helper/index.css"

function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,Setpassword] = useState("")

    function signin()
    {
        // console.log(email);
        // console.log(password);
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

        signInWithEmailAndPassword(auth,email,password)
        .then(auth=>{console.log(auth);
        navigate('/home')})
        .catch((error)=>{
            if (error.code === "auth/invalid-email") {
                alert("Email provided is invalid");
              } else if (error.code === "auth/wrong-password") {
                alert("Entered password is wrong");
              } else {
                alert(error.code);
              }
            
        })

    }

    return(
        <div className='main'>
            <div className='center'>
            <h1>Sign-in</h1>

            <label>E-mail : </label>
            <input autoComplete="off" type='email' name='email' onChange={(event)=>{setEmail(event.target.value)}}/>
            <label>Password : </label>
            <input autoComplete='off' type='password' name='password' onChange={(event)=>{Setpassword(event.target.value)}}></input>
            <button className="" onClick={()=>{signin()}}>Sign In</button>
            <p>If you are new to our platform, create an account</p>
            <button onClick={()=>{navigate('/signup')}}>Sign-Up</button>
            <p>If you don't remember the password</p>
            <button onClick={()=>{navigate('/forgotpassword')}}>Forgot Password</button>
            </div>
        </div>
    )

}

export default Login;