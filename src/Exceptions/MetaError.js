'use strict';

/**
 * @class Meta Error
 *
 * @description Base error / exception for meta package
 *
 * @extends Error
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class MetaError extends Error {

    /**
     * @constructor
     *
     * @param {string} [message] Error message
     */
    constructor(message = 'Meta Error'){
        super(message);
        this.name = this.constructor.name;
        this.message = message; // ES2015 trick
    }
}