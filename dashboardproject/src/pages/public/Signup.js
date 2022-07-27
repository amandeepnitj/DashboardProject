import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth, db} from '../../firebase/Firebase'
import { addDoc, collection } from 'firebase/firestore';
import "../../helper/index.css"
function Signup(){
    //made three states email, password and confirm password.
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,Setpassword] = useState("")
    const [confirmpassword,Setconfirmpassword] = useState("");
    const usersCollectionRef = collection(db,"users") 
    const createUser = async () =>{
        await addDoc(usersCollectionRef,{email: email})

    }

    function signup()
    {
        //check on each input
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
        // authencating using auth()
        createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>{console.log(auth)
        alert("User successfully created an account")
        createUser();
        navigate('/')
    })
        .catch((error)=>{
            //displaying the error code.
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
            <input  className='minwidth' autoComplete="off" type='email' name='email' onChange={(event)=>{setEmail(event.target.value)}}/>
            <label>Password : </label>
            <input className='minwidth' autoComplete='off' type='password' name='password' onChange={(event)=>{Setpassword(event.target.value)}}></input>
            <label>Confirm Password : </label>
            <input className='minwidth' autoComplete='off' type='password' name='confirmpassword' onChange={(event)=>{Setconfirmpassword(event.target.value)}}></input>
            
            <button className="padding10" onClick={()=>{signup()}}>Sign Up</button>
            <p>If you already have an account, please Login</p>

            <button className="padding10" onClick={()=>{navigate('/')}}>Login</button>
            </div>
        </div>
    )

}

export default Signup;