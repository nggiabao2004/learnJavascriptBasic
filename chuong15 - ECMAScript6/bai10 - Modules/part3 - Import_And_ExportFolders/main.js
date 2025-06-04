//Modules
import {
   TYPE_LOG,
   TYPE_WARN,
} from './constants.js';
import logger from './logger.js';

console.log(logger);
// ƒ logger(log, type = 'log'){
//    console[type](log);
// }

logger('Hello World', TYPE_LOG);
//Hello World (hiện thị mức Log)
logger('Hello World', TYPE_WARN);
//Hello World (hiện thị mức Warning)
logger('Hello World', TYPE_ERROR);
//ERROR (Chưa import TYPE_ERROR ở main.js))

//Nếu bên export không có export default function thì sẽ xảy ra ERROR
//import constants from './constants.js';
//console.log(constants);
