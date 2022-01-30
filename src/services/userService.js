import { storageService } from './storageService.js'

const KEY = 'gUsers'

export const userService = {
    getUser,
    signup
}

var gUsers = [];

var gUser = {
    // name: 'izack salomon',
    // coins: 100,
    // moves: [],
}
function signup(name) {
    // console.log(name);
    gUsers = storageService.load(KEY)
    // console.log(gUsers);
    if (gUsers) {
        var user = gUsers.filter(user => {
            return user.name === name
        })
        // console.log(user.length);

        if (user.length) {

            gUser = user.pop()
        } else {
            gUser = emptyUser(name)
            gUsers.push(gUser)
        }
    } else {
        gUsers = []
        gUsers.push(emptyUser(name))
    }
    // console.log('im here');
    storageService.store(KEY, gUsers)
}

function emptyUser(name) {
    return {
        name,
        coins: 100,
        moves: [],
    }
}

function getUser() {
    return gUser
    // return Promise.resolve([...userToReturn]);
}
