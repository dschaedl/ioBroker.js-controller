var getConfigFileName = require(__dirname + '/tools').getConfigFileName;
var config = JSON.parse(require('fs').readFileSync(getConfigFileName()));
if (!config.objects) config.objects = {type: 'file'};

if (config.objects.type == 'file') {
    module.exports = require(__dirname + '/objectsInMemClient');
} else if (config.objects.type == 'redis') {
    module.exports = require(__dirname + '/objectsInRedis');
} else if (config.objects.type == 'couch') {
    module.exports = require(__dirname + '/objectsInCouch');
} else {
    throw 'Unknown objects type:' + config.objects.type;
}