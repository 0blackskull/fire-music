import client from '../index.js';

export const createUserDao = (userName, firstName, lastName) => {

    const query = `INSERT INTO users (user_name, f_name, l_name)
                   VALUES ($1, $2, $3)
                   RETURNING *`;

    client.query(query, [userName, firstName, lastName])
        .then(result => {
            return result.rows[0];
        }).catch(err => {
            throw err;
        });
};