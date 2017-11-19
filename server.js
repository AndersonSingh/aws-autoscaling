var express = require('express');
var bodyParser = require('body-parser');
var kue = require('kue');
var job_module = require('./job-module');

var app = express(); 

app.use(bodyParser.json());


app.post('/', function(req, res){

    var order = {'transactionID' :'T12','sellerID' : 'S1', 'salePrice' : 102.50, 'productName' : 'Misc'};
  job_module.create(order, (err) => {
    if (err) {
      return res.json({
        error: err,
        success: false,
        message: 'Could not create job',
      });
    } else {
      return res.json({
        error: null,
        success: true,
        message: 'Successfully created job',
        order
      });
    }
  })
    
    res.send('added to queue.');
    
    
});


// req_queue.process('email', 3, function(job){
    
//     persist_transaction(job.data, function(){
//         console.log('testint');
//     });

// });
    

var server = app.listen(process.env.PORT || 8081, function(){

    var port = server.address().port;
    
    console.log('server is running on port %s\n', port);
});