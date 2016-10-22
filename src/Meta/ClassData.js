'use strict';

import Data from './Data';
import dependenciesAware from './../Mixins/dependenciesAware';

// /**
//  * Dependencies symbol
//  *
//  * @type {Symbol}
//  * @private
//  */
// const _dependencies = Symbol('meta-data-dependencies');

/**
 * @class Meta Class Data
 *
 * @description Holds arbitrary data about a given class
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class ClassData extends dependenciesAware(Data) {

}