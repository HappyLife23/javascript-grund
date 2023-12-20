const userIDs = [1, 2, 3, 4];
const userPromises = userIDs.map(id => fetch(`https://api.chucknorris.io/jokes/random`))

Promise.all(userPromises)
    .then(users => {
    console.log(users)
    })
    .catch(error => {
        console.error('Errror: ', error)
    })