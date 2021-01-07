import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

export default function Posts(props){

    const [posts, setPosts] = useState([]);
    const { userId } = useParams();
   
    
    useEffect(()=>{
        (async function loadPosts(){
            try{
               const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
               if(!response.ok){
                   throw new Error(response.status);
               }
               setPosts(await response.json());
             
            }
            catch(err){
                console.error(err);
            }
        }());
    }, [userId])

   


    return(
   
        <div>
        {posts.map(post=>(
               <div class ="user" >
                    {post.title}<br/>
                    {post.body}<br/>
                    
                    < Comments postId = {post.id}/>
                </div>            
        )
        )}
       </div>
        
   )
}