import { error } from "console";
import { StringDecoder } from "string_decoder";

export const bodyParser = (req) => {

    const decoder = new StringDecoder('utf-8');

    const body = new Promise((resolve, reject) => {

        let data = '';

        req.on('data', (chunk) => {
            data += decoder.write(chunk);
        });
        
        req.on('end', () => {
            data += decoder.end();

            try {
                const parsedData = JSON.parse(data);
                resolve(parsedData);
            } catch (err) {
                reject(err);
            }            
        });

        req.on('error', (err) => reject(err));
    });

    return body;
};