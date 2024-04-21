import { userRegistration } from '../controllers/UserController.js';

export const userRoute = (req, res) => {
    const userPath = req.url.replace("/users", "");

    switch (req.method) {
        case 'POST':
            userRegistration(req, res);
            break; 
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end();
            break;
    };
};