import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp();

import * as express from 'express';
import * as cors from 'cors';

export const basicHTTP = functions.https.onRequest((request, response) => {
    const name = request.query.name;

    if (!name) {
        response.status(400).send('ERROR - name not supplied :[');
    }
    response.send(`Hello ${name}`);
});

// using express

const auth = (request, response, next) => { // custom Middleware
    if (!request.headers.authorization) {
        response.status(400).send('unauthorized');
    }
    next();
};


const app = express();
// add this to stop any issues with serving the app when using diff localhost numbers
app.use(cors({ origin : true }));
app.use(auth);

// the /cat is basically what gets added onto the URL
app.get('/cat', (request, response) => {
    response.send('THE CAT');
});

app.get('/dog', (request, response) => {
    response.send('THE DOOOOGGG');
});

export const api = functions.https.onRequest(app);
