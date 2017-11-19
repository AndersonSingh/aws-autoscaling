'use strict';

const router = require('express').Router();
const job_module = require('./job-module');

router.post('/', (req, res, next) => {
  const order = {'name' : 'test'};
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
});

module.exports = router;