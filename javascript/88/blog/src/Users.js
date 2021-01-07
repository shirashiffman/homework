import './users.css';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function Users(props){

    const [users, setUsers] = useState([]);
    
    useEffect(()=>{

        (async function loadUsers(){
            try{
               const response = await fetch('https://jsonplaceholder.typicode.com/users');
               if(!response.ok){
                   throw new Error(response.status);
               }
               setUsers(await response.json());
               console.log(users);
             
            }
            catch(err){
                console.error(err);
            }
        }());

    },[])
    console.log(users);
    console.log("in users");

    return(
        <div id = 'userContainer'>
        {users.map(user=>(
               <div class ="user" key={user.id} >
                   <Link to = {`/posts/${user.id}`}>
                    {user.name}<br/>
                    {user.company.name}<br/>
                    {user.company.catchPhrase}<br/>
                    {user.company.bs}<br/>
                    {user.website}
                    </Link>
                </div>
        )
        )}
       </div> 
   )
}