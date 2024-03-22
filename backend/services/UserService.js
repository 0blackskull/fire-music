import { createUserDao } from "../data/UserData.js";

export const createUser = async (userName, firstName, lastName) => {

    createUserDao(userName, firstName, lastName)
    .then(user => {
        console.log('New user created successfully: ', user);
    }).catch(err => {
        throw new Error(`Error in query while creating new user: ${err}`);
    });
}; 