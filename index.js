var azure = require('azure');

console.log(process.env.CONNECTION_STRING)

var connStr = process.env.CONNECTION_STRING;
if (!connStr) throw new Exception('Must provide connection string');
var queueName = 'rngbus';

console.log('Connecting to ' + connStr + ' queue ' + queueName);
var sbService = azure.createServiceBusService(connStr);

sbService.listQueues((error, listqueuesresult, response) => {
   //var obj = JSON.parse(listqueuesresult[0]["QueueName"]);
   console.log(listqueuesresult[0].QueueName)
   console.log(listqueuesresult[0].CountDetails)
});
