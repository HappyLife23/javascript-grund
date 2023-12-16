/* First, declare the getUsers() function that fetches users.json from the server.
 */

async function getUsers() {
    //let url = 'users.json';
    try {
        let response = await fetch('users.json');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

/* Then, develop the renderUsers() function that renders user data: */

async function renderUsers() {
    let users = await getUsers();
    let html = '';

    users.forEach(user => {
        let htmlSegment = `
        <div class = 'user' >
            <h2>${user.firstName} ${user.lastName}</h2>
            <div class = 'email'><a href = 'email:${user.email}'> ${user.email}</a></div>;
        `
        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();

