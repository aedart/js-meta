'use strict';

import MetaError from './MetaError';

/**
 * @class Invalid Data
 *
 * @description Throw this exception whenever a given data is not valid
 *
 * @extends MetaError
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class InvalidData extends MetaError {

    /**
     * @constructor
     *
     * @param {string} [message] Error message
     */
    constructor(message = 'given data must be instance of "Data"'){
        super(message);
        this.name = this.constructor.name;
        this.message = message; // ES2015 trick
    }
}