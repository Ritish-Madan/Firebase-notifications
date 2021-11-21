const firestore = require('firebase-admin/firestore') 
const admin = require('firebase-admin/app')
const env = require("./enviroment");

const firebaseConnection = admin.initializeApp({
    credential: admin.cert(env.firebaseConfig),
});

// Firestore and admin are different component authorization
module.exports = firestore.getFirestore()