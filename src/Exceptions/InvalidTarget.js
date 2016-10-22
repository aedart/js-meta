'use strict';

/**
 * @class Invalid Target
 *
 * @description Throw this exception whenever a given target is not a function or object
 *
 * @extends TypeError
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class InvalidTarget extends TypeError {

    /**
     * @constructor
     *
     * @param {string} [message] Error message
     */
    constructor(message = 'Target must be a function or an object'){
        super(message);
        this.name = this.constructor.name;
        this.message = message; // ES2015 trick
    }
}