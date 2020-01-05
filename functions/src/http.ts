import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp();

import * as express from 'express';
import * as cors from 'cors';


//// -- 
export const basicHTTP = functions.https.onRequest((request, response) => {
    const name = request.query.name;

    if (!name) {
        response.status(400).send('ERROR - name not supplied :[');
    }
    response.send(`Hello ${name}`);
});

// using express

// const auth = (request : any, response : any, next : any) => { // custom Middleware
//     if (!request.headers.authorization) {
//         response.status(400).send('unauthorized');
//     }
//     next();
// };

/*const auth = (request : any, response : any, next : any) => {
    if (!request.headers.authorization) {
      response.status(400).send('unauthorized');
    }
    next();
  };*/ // this is to be added for authorization later!!!

const app = express();
// add this to stop any issues with serving the app when using diff localhost numbers
app.use(cors({ origin : true }));
// app.use(auth);

// // the /cat is basically what gets added onto the URL
// app.get('cat', (request, response) => {
//     response.send('THE CAT');
// });


// app.get('dog', (request, response) => {
//     response.send('THE DOOOOGGG');
// });

// export const api = functions.https.onRequest(app);

app.get('/cat', (request, response) => {
    response.send('CAT');
});

app.get('/dog', (request, response) => {
    response.send('DOG');
});

export const api = functions.https.onRequest(app);
