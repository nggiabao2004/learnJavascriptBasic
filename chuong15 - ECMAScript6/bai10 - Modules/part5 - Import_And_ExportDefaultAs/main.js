//Modules
import {loggerIndex} from './logger/index.js';
import * as constants from './constants.js';

console.log(loggerIndex);
// ƒ logger(log, type = 'log'){
//    console[type](log);
// }

loggerIndex('Learn Javascript', constants.TYPE_WARN);
//Learn Javascript (Hiển thị mức Warning)
