import { signInWithEmailAndPassword } from 'firebase/auth';
import react, { useState } from 'react';
import {auth} from '../../firebase/Firebase'
import "../../helper/index.css"
function Login(){
    const [email,setEmail] = useState("");
    const [password,Setpassword] = useState("")

    function signin()
    {
        console.log(email);
        console.log(password);
        signInWithEmailAndPassword(auth,email,password)
        .then(auth=>{console.log(auth)})
        .catch((error)=>{
            console.error(error)
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
            <button onClick={()=>{signin()}}>Sign In</button>
            <p>If you are new to our platform, create an account</p>
            <button onClick={()=>{console.log("looking for register")}}>Sign-Up</button>
            </div>
        </div>
    )

}

export default Login;