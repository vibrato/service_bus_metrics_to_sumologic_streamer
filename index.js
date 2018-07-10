const azure = require('azure');
const _ = require("lodash");

function checkForQueues(sbService, qName) {
  sbService.listQueues((error, listqueuesresult, response) => {
     var filteredQueue = _.find(listqueuesresult,{QueueName: qName})
     var result = _.assign(filteredQueue.CountDetails, { 'QueueName': filteredQueue.QueueName })
     console.log(result)
  });
}

const connStr = process.env.CONNECTION_STRING;
if (!connStr) throw new Exception('Must provide connection string');

const qName = process.env.QUEUE_NAME
const sbService = azure.createServiceBusService(connStr);
setInterval(checkForQueues.bind(null,sbService, qName),5000);
