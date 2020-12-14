const express = require("express");
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json')

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://chatbot-700f4.firebaseio.com"
});

const db = admin.firestore();

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

app.post('/webhook/', function (req, res) {

    content = req.body

    const phone_no = content.queryResult.outputContexts[1].parameters['number']
    const city = content.queryResult.outputContexts[1].parameters['geo-city']
    var person1 = content.queryResult.outputContexts[1].parameters['person1.original']
    var person2 = content.queryResult.outputContexts[1].parameters['person2.original']
    var name_arr = content.queryResult.intent['displayName']

    console.log(content.queryResult)
    console.log(content.queryResult.outputContexts[1])
    
    let name = "Crime"
    if(name_arr == "Default Welcome Intent - yes - murder - location - phone") {
        name = "Murder"
    }
    else if(name_arr == "Default Welcome Intent - yes - assault - location - phone") {
        name = "Assault"
    }
    else if(name_arr == "Default Welcome Intent - yes - kidnap - location - phone") {
        name = "Kidnap"
    }
    else if(name_arr == "Default Welcome Intent - yes - pickpocketing - location - stole") {
        name = "Pickpocketing"
    }
    else if(name_arr == "Default Welcome Intent - yes - shoplifting") {
        name = "Shoplifting"
    }

    console.log("Name: "+name)
    console.log("city: "+city)
    console.log("person1: "+person1)
    console.log("person2: "+person2)
    console.log("phone_no: "+phone_no)

    if(person2.constructor === Array) {
        person2 = person2[0]
    }
    if(person1.constructor === Array) {
        person1 = person1[0]
    }

    person2 = capitalize(person2)
    person1 = capitalize(person1)

    const data = {
        "Name": name?name: "Unknown",
        "City": city?city: "Unknown",
        "Criminal": person1?person1: "Unknown",
        "Victim": person2?person2: "Unknown",
        "Contact No": phone_no?phone_no: "Unknown"
    }

    db.collection('Cases').add(data)

    response =  {
      "fulfillmentText": "Cool, your case has been registered. Don't worry, necessary actions will be taken soon!"
    }
  
    res.send(response);
});


app.listen(process.env.PORT || 8080);