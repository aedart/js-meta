'use strict';

import {DeclareMixin} from '@vcas/js-mixin';

/**
 * dependencies symbol
 *
 * @type {Symbol}
 * @private
 */
const _dependencies = Symbol('dependencies');

/**
 * Dependencies Aware Mixin
 *
 * @return {DependenciesAware}
 */
export default DeclareMixin((superClass) => class DependenciesAware extends superClass {

    /**
     * Set dependencies
     *
     * @param {Array.<*>|null} dependencies Various component dependencies
     */
    set dependencies(dependencies) {
        this[_dependencies] = dependencies;
    }

    /**
     * Get dependencies
     *
     * @return {Array.<*>|null} Various component dependencies
     */
    get dependencies() {
        if (!this.hasDependencies()) {
            this.dependencies = this.defaultDependencies;
        }
        return this[_dependencies];
    }

    /**
     * Check if "dependencies" has been set
     *
     * @return {boolean}
     */
    hasDependencies() {
        return (this[_dependencies] !== undefined && this[_dependencies] !== null);
    }

    /**
     * Get a default "dependencies"
     *
     * @return {Array.<*>|null} A default "dependencies" value or null if none is available
     */
    get defaultDependencies() {
        return [];
    }
});