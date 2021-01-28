
## Project name: Node Application











## Description: 
This Node application gets a JSON from a Public Test API and stores the JSON response in a Mongodb Server.

The Mongodb is running on the default port 27017




## Prerequisites:
Operating System(macOS 10.14.6)

Node.js(v10.16.3)

Express

Mongodb("version": "4.4.3")

Homebrew (2.7.6)

Postman(Optional)



## Usage:
- Use Postman to check if the URL is working by sending a GET request to the URL. 
- Install Mongodb server locally.
- Open a new terminal to start the Mongodb server.(Commands to start Mongodb server will depend on installation)
- Create a database in the Mongo client named employee.
- Open a new terminal to run the Mongo client.
  - > Enter command ```use employee``` to create a database employees in Mongodb server.
- Install Node on system using Brew package manager.
- Download the Code. Navigate to directory containing code in a new terminal.
- Run ```npm install``` to install dependencies.
- In the terminal run ```node index.js```
- Open a browser and enter ```localhost://8080``` in the address bar.
- JSON is written to Mongodb.
- Check contents of Mongodb using the following command in the Mongo client terminal.
  - >```use employee```
  - >```show collections```
- To stop Mongodb server. Open a new terminal.
   - Find PID of mongodb process using ```top``` 
   - exit ```top```
   - $ ```kill <PID>```
## Future work:
- Enter the API url of choice
- Create a table in database to store the corresponding values present in the JSON.

### Contact
For further queries contact developer at tejas3madappa@gmail.com

