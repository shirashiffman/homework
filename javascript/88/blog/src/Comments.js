
import React, {useEffect, useState} from 'react';


export default function Comments(props){

    const [comments, setComments] = useState([]);
    const [display, setDisplay] = useState([]);
    const { postId } = props;
    const [buttonText, setButtonText] = useState("Show");

    useEffect(()=>{

        (async function loadComments(){
            try{
               const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
               if(!response.ok){
                   throw new Error(response.status);
               }
               setComments(await response.json());
            
               //console.log(comments);
             
            }
            catch(err){
                console.error(err);
            }
        }());

    },[buttonText])

    
            function changeButtonText(text){
                if(text ==="Show"){
                return "Hide";
                }
                else return "Show";
            }

            function getComments(){
                if (buttonText === "Show"){
               setDisplay(comments.map((comment)=>{
                    <div id = "comments" key ={comment.id}>
                        {comment.name}<br/>
                        {comment.email}<br/>
                        {comment.body}
                     </div>
                }))
                }   
                else setDisplay([]);   
            }
            const handleClick = ()=>{
                setButtonText(changeButtonText(buttonText));
                getComments();
            }
        
    return(
        <>
            <button onClick={handleClick}>{buttonText} Comments</button>
            <div class="comments">
                {display}
            </div>
        </>
    )

}