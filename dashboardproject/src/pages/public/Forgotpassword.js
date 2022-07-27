import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import {auth} from '../../firebase/Firebase'
import "../../helper/index.css"
function Forgotpassword(){
    //using state to store email 
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    function forgotpassword()
    {
        if(email)
        {
            // reset password link 
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
            <h1>Please enter the registered email that you have account</h1>

            <label>Email : </label>
            <input  className='minwidth' autoComplete="off" type='email' name='email' onChange={(event)=>{setEmail(event.target.value)}}/>
            
            
            <button className="padding10" onClick={()=>{forgotpassword()}}>Submit</button>
            
            </div>
        </div>
    )

}


export default Forgotpassword;