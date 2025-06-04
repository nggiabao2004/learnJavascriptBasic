//Modules
import logger from './logger.js';
import * as constants from './constants.js';

console.log(logger);
// ƒ logger(log, type = 'log'){
//    console[type](log);
// }

console.log(constants);
//Module {Symbol(Symbol.toStringTag): 'Module'}
// TYPE_ERROR: (...)
// TYPE_LOG: (...)
// TYPE_WARN: (...)
// Symbol(Symbol.toStringTag): "Module"
// get TYPE_ERROR: ƒ ()
// set TYPE_ERROR: ƒ ()
// get TYPE_LOG: ƒ ()
// set TYPE_LOG: ƒ ()
// get TYPE_WARN: ƒ ()
// set TYPE_WARN: ƒ ()
