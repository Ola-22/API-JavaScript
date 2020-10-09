const remove = document.querySelector('#remove'),
    form = document.querySelector('form'),
    usersDiv = document.querySelector("#users"),
    search = document.querySelector('#search');

remove.addEventListener('click', () => {
    usersDiv.textContent = "";
})

form.addEventListener('submit', e => {
    e.preventDefault();
    const searchVal = search.value;

    fetch(`https://jsonplaceholder.typicode.com/comments?q=${searchVal}`)
        .then(res => {
            console.log(res)
            return res.json();
        })
        .then(users => {
            CommentUser(users);
        })
        .catch(err => {
            console.log('Something went wrong please try again later' + err.message);
        });


    function CommentUser(users) {
        usersDiv.textContent = "";
        var table = document.createElement("table");
        users.forEach(currentUser => {
            var row = table.insertRow();
            var nameCell = row.insertCell();
            nameCell.textContent = currentUser.name;
            var cityCell = row.insertCell();
            cityCell.textContent = currentUser.email;

        });

        usersDiv.appendChild(table);
    }
});