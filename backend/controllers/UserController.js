import { createUser } from "../services/UserService.js";
import { bodyParser } from "../utils/ParserUtil.js";

export const userRegistration = async (req, res) => {

    if (req.method !== "POST") return;
    
    const data = await bodyParser(req.body);

    res.setHeader('Content-Type', 'application/json');

    createUser(...data).then(() => {

        res.writeHead(201, { 'Location':  'http/users/:id' });
        res.end();

    }).catch(err => {

        console.error('Failed to create new user: ', err);
        res.writeHead(500);
        res.end(JSON.stringify({ message: 'Failed to create new user' }));

    });
};