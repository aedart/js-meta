'use strict';

import Data from './Data';
import mix from '@vcas/js-mixin';
import DependenciesAware from './../Mixins/DependenciesAware';

/**
 * @class Meta Method Data
 *
 * @description Holds arbitrary data about a given method
 *
 * @extends Data
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class MethodData extends mix(Data).with(DependenciesAware) {
    
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