const azure = require('azure');
const _ = require("lodash");
const SumoLogger = require('sumo-logger');

function checkForQueues(sbService, qName, callback) {
  sbService.listQueues((err, listqueuesresult, response) => {
     var filteredQueue = _.find(listqueuesresult,{QueueName: qName})
     var result = _.assign(filteredQueue.CountDetails, { 'QueueName': filteredQueue.QueueName })
     if (err) {
        if (err == 'No messages to receive') {
          console.log('No messages');
        } else {
          callback(err);
        }
      } else {
        callback(null, result);
      }
  });
}

function streamMetricsToSumo(opts, err, metrics){
  if (err) {
    console.log('Error on Rx: ', err);
  } else {
    const sumoLogger = new SumoLogger(opts);
    console.log("streaming log to sumologic at " + new Date())
    sumoLogger.log(metrics)
  }
}

const connStr = process.env.CONNECTION_STRING;
if (!connStr) throw new Exception('Must provide connection string');

const qName = process.env.QUEUE_NAME
const sbService = azure.createServiceBusService(connStr);

const opts = {
    endpoint: process.env.ENDPOINT,
    sessionKey: process.env.SESSIONKEY,
    sendErrors: true,
    sourceName: process.env.SOURCENAME,
    sourceCategory: process.env.SOURCECATEGORY,
    onSuccess: () => {
      console.log("Metrics have been sent")
    },
    onError: () => {
      console.log("Something went wrong in the sumologic collector")
    }
    // ... any other options ...
};

setInterval(checkForQueues.bind(null,sbService, qName, streamMetricsToSumo.bind(null,opts)),5000);
