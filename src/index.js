const newman = require('newman');
var schedule = require('node-schedule');

function init(collection) {
  function initScheduleJob() {
    schedule.scheduleJob('0,30 * * * *', function(){
      newman.run({
          collection: require(collection),
          reporters: 'psbl'
          'reporters-psbl-export':
      }, function (err) {
          if (err) { throw err; }
          console.log('collection run complete!');
      });
    });
  }
}
