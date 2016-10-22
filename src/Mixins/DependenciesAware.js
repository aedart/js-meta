'use strict';

import { Mixin } from 'mixwith/src/mixwith';

/**
 * Dependencies symbol
 *
 * @type {Symbol}
 * @private
 */
const _dependencies = Symbol('meta-data-dependencies');

/**
 * dependencies Aware mixin
 *
 * @param {Function} superClass
 *
 * @returns {DependenciesAware}
 */
export default Mixin(function(superClass){

    /**
     * @class DependenciesAware
     *
     * @description Class is aware of one or multiple dependencies.
     *
     * @author Alin Eugen Deac <aedart@gmail.com>
     */
    return class DependenciesAware extends superClass {
        /**
         * Set data about target's dependencies
         *
         * @param {Array<*>} dependencies
         */
        set dependencies(dependencies){
            this.data[_dependencies] = dependencies;

            return this;
        }

        /**
         * Get data about target's dependencies
         *
         * @returns {Array<*>}
         */
        get dependencies(){
            if(!this.data.hasOwnProperty(_dependencies)){
                this.dependencies = [];
            }

            return this.data[_dependencies];
        }
    }
});