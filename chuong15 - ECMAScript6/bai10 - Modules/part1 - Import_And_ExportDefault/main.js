//Modules
import logger from './logger.js';

console.log(logger);
// ƒ logger(log, type = 'log'){
//    console[type](log);
// }

logger('Hello World', 'warn');
//Hello World (hiện thị mức Warning)
