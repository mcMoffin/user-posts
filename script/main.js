const postsListElem = $("tbody");

async function getter(){
    return await  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json());
}

async function populate(){
    let userData = await getter();
    
    for(let [i,name] of userData.entries()){
        i > 0 && name.userId === userData[i-1].userId ? console.log('here') : $(`<option value="${name.userId}">${name.userId}</option>`).appendTo( '#userSelect' )
    }
}

async function updateTable(){
    let user = Number($("#userSelect").val());
    let userData = await getter();
    postsListElem.empty();
    
    for(let [i,name] of userData.entries()){
        if(name.userId === user){
            $(`<tr>
                <td class="post">
                    <h3>${name.id}</h3>
                    <br> ${name.body}
                </td>
            </tr>`).appendTo(postsListElem);
        }
    }
}

populate();