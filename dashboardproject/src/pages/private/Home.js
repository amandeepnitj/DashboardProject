import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/Firebase";
function Home(){
    const navigate = useNavigate();
    const [user,loading, error] = useAuthState(auth);
    function signout()
    {
        auth.signOut();
        navigate("/");

    }
    return(
        <div>Welcome {user?.email}
        <button onClick={()=>{signout()}}>Signout</button>
        </div>
    )

};


export default Home;