const log4js = require('log4js');
const logger = log4js.getLogger('mysql');
logger.level = 'debug';

module.exports = logger;