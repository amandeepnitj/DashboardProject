import React, { useEffect, useState } from "react";
import { db } from "../../firebase/Firebase";
import { collection ,getDocs } from "firebase/firestore";
import '../../helper/userprofile.css'
export default function Listofusers()
{
    const [users,setUsers] = useState([]);
    const usersCollectionRef = collection(db,"users");
    // use of useeffect hooks... to get the data from firestore at time of refreshing the page.
    useEffect(()=>{
        const getUsers = async () => {
            // geting the data from collection created in firestore of documents.
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
            {/* to displays the number of users. */}
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