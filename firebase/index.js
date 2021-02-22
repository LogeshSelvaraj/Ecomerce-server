var admin = require("firebase-admin");

var {serviceAccount} = require("./adminkey");

// var serviceAccount=require('./fb-admin-key.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce-6a1b0.firebaseio.com",
});

module.exports=admin