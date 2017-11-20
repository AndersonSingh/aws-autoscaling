'use strict';

const kue = require('kue');
const queue = kue.createQueue();
queue.watchStuckJobs(1000 * 10);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'cloud.cx2m3l55xkpt.us-west-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'uniquepassword',
  database : 'cloud'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});



queue.on('ready', () => {
  console.info('Queue is ready!');
});

queue.on('error', (err) => {
  console.error('There was an error in the main queue!');
  console.error(err);
  console.error(err.stack);
});


// Set up UI
// kue.app.listen(process.env.KUE_PORT);
// kue.app.set('title', 'Kue');

function createJob(data, done) {
  queue.create('job', data)
    .priority('critical')
    .attempts(8)
    .backoff(true)
    .removeOnComplete(true)
    .save(err => {
      if (err) {
        console.log(err);
        done(err);
      }
      if (!err) {
        //console.log('created.');
        done();
      }
    });
}

// Process up to 20 jobs concurrently
queue.process('job', 20, function(job, done){

  //console.log('processing a job.');
  
  connection.query('INSERT INTO transactions SET ?', job.data, function (error, results, fields) {
  if (error) console.log(error);
  console.log(results.insertId);
  });

  // Call done when finished
  done();
});

module.exports = {
  create: (data, done) => {
    createJob(data, done);
  }
};