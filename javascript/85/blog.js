(function(){

    'use strict';

    loadUsers();

    function loadUsers(){

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((r)=>{
                if(!r.ok){
                    throw new Error(r.status);
                }
                return r.json();
            })  
            .then((users)=>{
            //   console.log(data);
                let usersMap = [];
                users.forEach((user)=>{
                    let {id, name, website, company }= user;
                    usersMap.push({
                        id: id,
                        name: name,
                        website: website,
                        company: company
                    })
                })
                // console.log(dataMap)
                usersMap.forEach((user)=>{
                let currentUser = $(`<div class ="user">
                    ${user.name}<br>
                    ${user.company.name}<br>
                    ${user.company.catchPhrase}<br>
                    ${user.company.bs}<br>
                    ${user.website}
                    </div>`).appendTo("#container")
                    .click((event)=>{
                        $("#container").empty();
                        loadPosts(user.id);
                        console.log(currentUser);
                        // currentUser.addClass("selected");
                    });
                })
            })
            .catch((e)=>{
                console.error(e);
            })

            function loadPosts(id){
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                    .then((r)=>{
                        if(!r.ok){
                            throw new Error(r.status);
                        }
                        return r.json();
                    }) 
                    .then((posts)=>{
                        console.log(id, 'clicked');
                        $(`<button id = "back">Back </button>`).appendTo("#container")
                            .click(()=>{
                                $("#container").empty();
                                loadUsers();
                            });
                        // $(`<h1>${user.name}</h1>`).appendTo("#container");
                        posts.forEach((post)=>{
                            
                            const id = post.id;
                            let buttonText = "Show";
                            let currentPost = $(`<div class = "post">${post.title}<br>${post.body}</div>`).appendTo("#container");
                            let button = $(`<br><br><button class ="comment">${buttonText} Comments</button>`).appendTo(currentPost);
                            let comments = $(`<div class="comments"></div>`).appendTo(currentPost);
                            button.click((post)=>{
                                    if(buttonText === "Show"){
                                        loadComments(id, comments);
                                        
                                        buttonText = "Hide";
                                        button.text(buttonText);
                                        //  console.log(currentPost);   
                                        //  console.log(loadComments(id));          
                                    }
                                    else{

                                        buttonText = "Show";
                                        button.text(buttonText);
                                        clearComments(comments);
                                    }                   
                                })
                           
                        })
                    })
                    .catch(()=>{})
            }
        }

        function clearComments(comments){
            comments.empty();
        }


        function loadComments(id, commentsElem){
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((r)=>{
                if(!r.ok){
                    throw new Error(r.status);
                }
                return r.json();
            }) 
            .then((comments)=>{
                comments.forEach((comment)=>{
                  $(`<div><br>${comment.name}<br>${comment.email}<br>${comment.body}</div>`).appendTo(commentsElem);
                })

                
            })
            .catch((e)=>{
                console.error(e);
            })
        }
}())