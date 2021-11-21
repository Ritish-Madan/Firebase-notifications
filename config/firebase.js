const firestore = require('firebase-admin/firestore') 
const admin = require('firebase-admin/app')
const env = require("./enviroment");

const firebaseConnection = admin.initializeApp({
    credential: admin.cert(env.firebaseConfig),
});
module.exports = firestore.getFirestore()