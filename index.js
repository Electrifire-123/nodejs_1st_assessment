
const http = require('http');
const { json } = require('stream/consumers');
const server = http.createServer(function(req,res){
    res.write('<h1>This is my SERvER</h1>');
    const user = {fName : 'Rahul', lName : 'Yadav', email : 'rahullyadavv77@gmai.com'};
    res.write('Hi I am Rahul'+'\n')
    res.write(JSON.stringify('{name : Rahul}'))
    res.end(JSON.stringify(user));
})
server.listen(4000);