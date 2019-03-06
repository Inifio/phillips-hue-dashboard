var Hue = require('philips-hue');

/*var hue = new Hue;
hue.devicetype = "phillips-hue-dashboard";

hue.getBridges()
    .then(function(bridges){
        console.log(bridges);
        var bridge = bridges[0];
        console.log("bridge: "+bridge);
        hue.bridge = bridge;
        return hue.auth(bridge);
    })
    .then(function(username){
        console.log("username: "+username);
        hue.username = username;
    })
    .catch(function(err){
        console.error(err.stack || err);
    })*/

var hue = new Hue;
var configFile = process.env.HOME+'/.philips-hue.json';

hue.login(configFile);

hue.getLights()
  .then(function(lights){
    console.log(lights);
    console.log(Object.keys(lights) + " lights found!");
  })
  .catch(function(err){
    console.error(err.stack || err);
  });