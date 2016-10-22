'use strict';

import InvalidTarget from './../Exceptions/InvalidTarget';

/**
 * Data symbol
 *
 * @type {Symbol}
 *
 * @private
 */
const _data = Symbol('meta-data');

/**
 * Target symbol
 *
 * @type {Symbol}
 * @private
 */
const _target = Symbol('meta-target');

/**
 * @class Meta Data
 *
 * @description Holds arbitrary data about or for a given target
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class Data {

    /**
     * @constructor
     *
     * @param {Function|Object} target
     * @param {*} [data]
     *
     * @throws {InvalidTarget}
     */
    constructor(target, data = {}){
        let type = typeof target;
        if( ! (type === 'function' || type === 'object')){
            throw new InvalidTarget();
        }

        this[_target] = target;
        this.data = data;
    }

    /**
     * Get the target
     *
     * @returns {Function|Object}
     */
    get target(){
        return this[_target];
    }

    /**
     * Set arbitrary data
     *
     * @param {*} value
     */
    set data(value){
        this[_data] = value;

        return this;
    }

    /**
     * Get arbitrary data
     *
     * @returns {*}
     */
    get data(){
        return this[_data];
    }
}