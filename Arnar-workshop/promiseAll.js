// 3. Använd Promise.all

const usersNames = ['David', 'Sofie', 'Sara', 'Åsa', 'Andreas']
const usersIDs = usersNames.map(id => fetch('https://jsonplaceholder.typicode.com/'))

Promise.all(usersIDs)
    .then(usersNames => {
    console.log(usersNames)
})


