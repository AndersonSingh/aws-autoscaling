{"filter":false,"title":"jobs-module.js","tooltip":"/jobs-module.js","undoManager":{"mark":73,"position":73,"stack":[[{"start":{"row":0,"column":0},"end":{"row":68,"column":2},"action":"insert","lines":["'use strict';","","let redisConfig;","if (process.env.NODE_ENV === 'production') {","  redisConfig = {","    redis: {","      port: process.env.REDIS_PORT,","      host: process.env.REDIS_HOST,","      auth: process.env.REDIS_PASS,","      options: {","        no_ready_check: false","      }","    }","  };","} else {","  redisConfig = {};","}","","const kue = require('kue');","const queue = kue.createQueue(redisConfig);","queue.watchStuckJobs(1000 * 10);","","queue.on('ready', () => {","  console.info('Queue is ready!');","});","","queue.on('error', (err) => {","  console.error('There was an error in the main queue!');","  console.error(err);","  console.error(err.stack);","});","","","// Set up UI","kue.app.listen(process.env.KUE_PORT);","kue.app.set('title', 'Kue');","","function createPayment(data, done) {","  queue.create('payment', data)","    .priority('critical')","    .attempts(8)","    .backoff(true)","    .removeOnComplete(false)","    .save(err => {","      if (err) {","        console.error(err);","        done(err);","      }","      if (!err) {","        done();","      }","    });","}","","// Process up to 20 jobs concurrently","queue.process('payment', 20, function(job, done){","  // other processing work here","  // ...","  // ...","","  // Call done when finished","  done();","});","","module.exports = {","  create: (data, done) => {","    createPayment(data, done);","  }","};"],"id":1}],[{"start":{"row":1,"column":0},"end":{"row":17,"column":0},"action":"remove","lines":["","let redisConfig;","if (process.env.NODE_ENV === 'production') {","  redisConfig = {","    redis: {","      port: process.env.REDIS_PORT,","      host: process.env.REDIS_HOST,","      auth: process.env.REDIS_PASS,","      options: {","        no_ready_check: false","      }","    }","  };","} else {","  redisConfig = {};","}",""],"id":2}],[{"start":{"row":3,"column":40},"end":{"row":3,"column":41},"action":"remove","lines":["g"],"id":3}],[{"start":{"row":3,"column":39},"end":{"row":3,"column":40},"action":"remove","lines":["i"],"id":4}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":39},"action":"remove","lines":["f"],"id":5}],[{"start":{"row":3,"column":37},"end":{"row":3,"column":38},"action":"remove","lines":["n"],"id":6}],[{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"remove","lines":["o"],"id":7}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"remove","lines":["C"],"id":8}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"remove","lines":["s"],"id":9}],[{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"remove","lines":["i"],"id":10}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"remove","lines":["d"],"id":11}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"remove","lines":["e"],"id":12}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"remove","lines":["r"],"id":13}],[{"start":{"row":21,"column":15},"end":{"row":21,"column":22},"action":"remove","lines":["Payment"],"id":14},{"start":{"row":21,"column":15},"end":{"row":21,"column":16},"action":"insert","lines":["J"]}],[{"start":{"row":21,"column":16},"end":{"row":21,"column":17},"action":"insert","lines":["o"],"id":15}],[{"start":{"row":21,"column":17},"end":{"row":21,"column":18},"action":"insert","lines":["b"],"id":16}],[{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"remove","lines":["t"],"id":17}],[{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"remove","lines":["n"],"id":18}],[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"remove","lines":["e"],"id":19}],[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"remove","lines":["m"],"id":20}],[{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"remove","lines":["y"],"id":21}],[{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"remove","lines":["a"],"id":22}],[{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"remove","lines":["p"],"id":23}],[{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"insert","lines":["j"],"id":24}],[{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"insert","lines":["o"],"id":25}],[{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["b"],"id":26}],[{"start":{"row":39,"column":15},"end":{"row":39,"column":22},"action":"remove","lines":["payment"],"id":27},{"start":{"row":39,"column":15},"end":{"row":39,"column":16},"action":"insert","lines":["j"]}],[{"start":{"row":39,"column":16},"end":{"row":39,"column":17},"action":"insert","lines":["o"],"id":28}],[{"start":{"row":39,"column":17},"end":{"row":39,"column":18},"action":"insert","lines":["b"],"id":29}],[{"start":{"row":40,"column":0},"end":{"row":43,"column":0},"action":"remove","lines":["  // other processing work here","  // ...","  // ...",""],"id":30}],[{"start":{"row":40,"column":0},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":31}],[{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"insert","lines":["  "],"id":32}],[{"start":{"row":41,"column":2},"end":{"row":41,"column":3},"action":"insert","lines":["c"],"id":33}],[{"start":{"row":41,"column":3},"end":{"row":41,"column":4},"action":"insert","lines":["o"],"id":34}],[{"start":{"row":41,"column":4},"end":{"row":41,"column":5},"action":"insert","lines":["n"],"id":35}],[{"start":{"row":41,"column":5},"end":{"row":41,"column":6},"action":"insert","lines":["s"],"id":36}],[{"start":{"row":41,"column":6},"end":{"row":41,"column":7},"action":"insert","lines":["o"],"id":37}],[{"start":{"row":41,"column":7},"end":{"row":41,"column":8},"action":"insert","lines":["l"],"id":38}],[{"start":{"row":41,"column":8},"end":{"row":41,"column":9},"action":"insert","lines":["e"],"id":39}],[{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"insert","lines":["."],"id":40}],[{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"insert","lines":["l"],"id":41}],[{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"insert","lines":["o"],"id":42}],[{"start":{"row":41,"column":12},"end":{"row":41,"column":13},"action":"insert","lines":["g"],"id":43}],[{"start":{"row":41,"column":13},"end":{"row":41,"column":15},"action":"insert","lines":["()"],"id":44}],[{"start":{"row":41,"column":14},"end":{"row":41,"column":16},"action":"insert","lines":["''"],"id":45}],[{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"insert","lines":["p"],"id":46}],[{"start":{"row":41,"column":16},"end":{"row":41,"column":17},"action":"insert","lines":["r"],"id":47}],[{"start":{"row":41,"column":17},"end":{"row":41,"column":18},"action":"insert","lines":["o"],"id":48}],[{"start":{"row":41,"column":18},"end":{"row":41,"column":19},"action":"insert","lines":["c"],"id":49}],[{"start":{"row":41,"column":19},"end":{"row":41,"column":20},"action":"insert","lines":["e"],"id":50}],[{"start":{"row":41,"column":20},"end":{"row":41,"column":21},"action":"insert","lines":["s"],"id":51}],[{"start":{"row":41,"column":21},"end":{"row":41,"column":22},"action":"insert","lines":["s"],"id":52}],[{"start":{"row":41,"column":22},"end":{"row":41,"column":23},"action":"insert","lines":["i"],"id":53}],[{"start":{"row":41,"column":23},"end":{"row":41,"column":24},"action":"insert","lines":["n"],"id":54}],[{"start":{"row":41,"column":24},"end":{"row":41,"column":25},"action":"insert","lines":["g"],"id":55}],[{"start":{"row":41,"column":25},"end":{"row":41,"column":26},"action":"insert","lines":[" "],"id":56}],[{"start":{"row":41,"column":26},"end":{"row":41,"column":27},"action":"insert","lines":["t"],"id":57}],[{"start":{"row":41,"column":27},"end":{"row":41,"column":28},"action":"insert","lines":["h"],"id":58}],[{"start":{"row":41,"column":27},"end":{"row":41,"column":28},"action":"remove","lines":["h"],"id":59}],[{"start":{"row":41,"column":26},"end":{"row":41,"column":27},"action":"remove","lines":["t"],"id":60}],[{"start":{"row":41,"column":26},"end":{"row":41,"column":27},"action":"insert","lines":["a"],"id":61}],[{"start":{"row":41,"column":27},"end":{"row":41,"column":28},"action":"insert","lines":[" "],"id":62}],[{"start":{"row":41,"column":28},"end":{"row":41,"column":29},"action":"insert","lines":["j"],"id":63}],[{"start":{"row":41,"column":29},"end":{"row":41,"column":30},"action":"insert","lines":["o"],"id":64}],[{"start":{"row":41,"column":30},"end":{"row":41,"column":31},"action":"insert","lines":["b"],"id":65}],[{"start":{"row":41,"column":31},"end":{"row":41,"column":32},"action":"insert","lines":["."],"id":66}],[{"start":{"row":41,"column":32},"end":{"row":41,"column":33},"action":"insert","lines":[" "],"id":67}],[{"start":{"row":41,"column":32},"end":{"row":41,"column":33},"action":"remove","lines":[" "],"id":68}],[{"start":{"row":41,"column":34},"end":{"row":41,"column":35},"action":"insert","lines":[";"],"id":69}],[{"start":{"row":41,"column":35},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":70},{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":49,"column":9},"end":{"row":49,"column":17},"action":"remove","lines":["ePayment"],"id":71},{"start":{"row":49,"column":9},"end":{"row":49,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":49,"column":10},"end":{"row":49,"column":11},"action":"insert","lines":["J"],"id":72}],[{"start":{"row":49,"column":11},"end":{"row":49,"column":12},"action":"insert","lines":["o"],"id":73}],[{"start":{"row":49,"column":12},"end":{"row":49,"column":13},"action":"insert","lines":["b"],"id":74}]]},"ace":{"folds":[],"scrolltop":337.20001220703125,"scrollleft":0,"selection":{"start":{"row":43,"column":28},"end":{"row":43,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":22,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1511033889039,"hash":"485a180511b19ce914c23e24c5fd30f436a53ab1"}