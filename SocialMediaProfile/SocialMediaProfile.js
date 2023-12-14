/*
//constructor function() - vår blueprint/skapare av användare
function SocialMediaProfile(username) {
    this.username = username;
    this.posts = [];
}

//metod som alla nya sociala medie profielr ärver 
SocialMediaProfile.prototype.postMessage = function (message) {
    this.posts.push(message);
}

//
const myProfile = new SocialMediaProfile('CoolUser123');
const newProfile = new SocialMediaProfile('hello world');

console.log(myProfile.username);
console.log(newProfile.username);

//myProfile.postsMessage('this is the first tweet');
*/

class SocialMediaProfile{
    constructor(username) {
        this.username = username;        
        this.posts = [];
        this.friends = [];
    }
    postsMessage = (message) {
        this.posts.push(message);
    }
    addFriend =  (friend) {
        this.friends.push(friend);
    }
}


