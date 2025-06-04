//Modules
import logger, {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from './logger.js';

console.log(logger);
// ƒ logger(log, type = 'log'){
//    console[type](log);
// }

logger('Hello World', TYPE_LOG);
//Hello World (hiện thị mức Log)
logger('Hello World', TYPE_WARN);
//Hello World (hiện thị mức Warning)
logger('Hello World', TYPE_ERROR);
//Hello World (hiện thị mức Error)
