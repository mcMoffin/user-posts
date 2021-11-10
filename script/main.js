const userElem = $(".user");
const postsListElem = $(".post-list");
const tableElem = $(".info-table");

let fetchLink;

async function infoGeter(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( result => result.json() )
    .then( dataArray => {
        dataArray.forEach(data => {
            populateTable(data);
        });
    });
}

async function populateTable(data){
    $(`<tr>
        <td class="user">${data.id}</td>
        <td class="post">
            <h3>${data.title}</h3>
            <br> ${data.body}</td>
    </tr>`).appendTo(tableElem);
}

infoGeter();