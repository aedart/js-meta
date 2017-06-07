'use strict';

import Data from './Data';
import mix from '@vestergaard-company/js-mixin';
import DependenciesAware from './../Mixins/DependenciesAware';

/**
 * @class Meta Class Data
 *
 * @description Holds arbitrary data about a given class
 *
 * @extends Data
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class ClassData extends mix(Data).with(DependenciesAware) {

    /**
     * @constructor
     *
     * @param {Function|Object} target
     * @param {Object} [data] Key value pairs
     *
     * @throws {InvalidTarget}
     */
    constructor(target, data = {}){
        super(target, data);
    }
}