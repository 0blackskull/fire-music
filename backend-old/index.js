import http from 'node:http';
import Client from "pg";

// Imported classes or functions whatever
import { userRoute } from './routes/UserRoutes.js';

const client = new Client.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'fire_music_db',
    password: "p",
    port: 5432, // Default PostgreSQL port
});

client.connect()
    .then(() => console.log("DB connection successful"))
    .catch((err) => console.error("DB connection Failure: ", err));

// An object with key value pairs as path and class or function
const routes = {
    'users': (req, res) => {userRoute(req, res);}
};

const cors = (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res;
};

const server = http.createServer((req, res) => {
    res = cors(res);

    const base = req.url?.split('/')[1] ?? '';
    const routeFunction = routes[base];
    // routeFunction(req, res);
    userRoute(req, res);
    // do object[req.url] to call the appropriate class or function
});

server.listen(8080, 'localhost');

export default client;

/*
Server will have a secret key say s_k
const jwt = require('jsonwebtoken');

JWT = header + payload + signature

Payload -> Registered claims, Public claims, Private claims

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)

jwt has 2 functions jwt.sign and jwt.verify

jwt.sign(payload, secretkey, [options, callback])
callback will have err and token


jwt.verify(token, secretkey, [options, callback])
*/