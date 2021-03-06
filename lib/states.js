var getConfigFileName = require(__dirname + '/tools').getConfigFileName;
var config = JSON.parse(require('fs').readFileSync(getConfigFileName()));
if (!config.states) config.states = {type: 'file'};

if (config.states.type == 'file') {
    module.exports = require(__dirname + '/statesInMemClient');
} else if (config.states.type == 'redis') {
    module.exports = require(__dirname + '/statesInRedis');
} else {
    throw 'Unknown objects type:' + config.objects.type;
}