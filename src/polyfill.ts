/* tslint:disable */
declare function require(name: string): any;
declare const process: any;
declare const Error: any;

import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
console.log(process.env.Env);
if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}