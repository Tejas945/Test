var express = require('express');
var http = require('http');
var app = express();

const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'; //Mongo server runs at ip_address:port_number 

app.use("/hello", (req,res) => {
    res.send("Hello World");
});

var getData = async function(req,res){
    var result = ''
    var options = {
        host: 'dummy.restapiexample.com',
        path: '/api/v1/employees',
        method: 'GET'
    }

    req = http.request(options, async function(response){
        response.on("data", function(chunk){
            result += chunk; //write response chunk by chunk
            result = JSON.parse(result);
        });

        response.on("end", async function(){
        	//console.log("api response is: "+ result.data);//check API response
        	try{
                const dbName = 'employee';
                await MongoClient.connect(url, function (err, client) { //connect to Mongodb
                    const db = client.db(dbName);
                    db.collection('apidata').insertOne(result);
                    client.close();
                });

            }catch(err){
                console.log(err);
            }
        });
    })

    req.end();
}

app.get( "/", getData) ;
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port')); //Check Node application port number
});