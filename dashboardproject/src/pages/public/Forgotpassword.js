import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import {auth} from '../../firebase/Firebase'
import "../../helper/index.css"
function Forgotpassword(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    function forgotpassword()
    {
        if(email)
        {
            sendPasswordResetEmail(auth,email)
            .then(()=>{
                alert("please check your mail....")
                navigate('/');
            })
            .catch((error)=>{
                alert(error.code);
            })

        }

    }
    return(
        <div className='main'>
            <div className='center'>
            <h1>Please enter the email that you have account</h1>

            <label>Password : </label>
            <input autoComplete="off" type='email' name='email' onChange={(event)=>{setEmail(event.target.value)}}/>
            
            
            <button className="" onClick={()=>{forgotpassword()}}>Submit</button>
            
            </div>
        </div>
    )

}


export default Forgotpassword;