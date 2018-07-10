const azure = require('azure');
const _ = require("lodash");

const connStr = process.env.CONNECTION_STRING;
const qName = process.env.QUEUE_NAME
if (!connStr) throw new Exception('Must provide connection string');

const sbService = azure.createServiceBusService(connStr);

sbService.listQueues((error, listqueuesresult, response) => {
   var filteredQueue = _.find(listqueuesresult,{QueueName: qName})
   var result = _.assign(filteredQueue.CountDetails, { QueueName: filteredQueue.QueueName })
   console.log(result)
   //console.log(filteredQueue[0].QueueName)
});
