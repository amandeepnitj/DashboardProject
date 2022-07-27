import React, { useEffect, useState } from "react";
import { db } from "../../firebase/Firebase";
import { collection ,getDocs } from "firebase/firestore";
import '../../helper/userprofile.css'
export default function Listofusers()
{
    const [users,setUsers] = useState([]);
    const usersCollectionRef = collection(db,"users");

    useEffect(()=>{
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
        }

        getUsers();
        console.log(users.length)

    },[]);

    return(        
    <>
    <br/>
        <div className="heading flex-right">
            <h1>List Of Users  </h1>
            <h2>{users.length}</h2>
        </div>
        
        {users.map((user)=>{
            return(
                <div className="usersemail">{user.email}</div>
                    
                
            )
        })}
        
        
        </>

    )
}