'use strict';

import Data from './Meta/Data';
import ClassData from './Meta/ClassData';
import MethodData from './Meta/MethodData';
import InvalidTarget from './Exceptions/InvalidTarget';
import InvalidData from './Exceptions/InvalidData';
import MetaError from './Exceptions/MetaError';

/**
 * Mata Map symbol
 *
 * @type {Symbol}
 */
const map = Symbol('meta-map');

/**
 * @class Meta
 *
 * @description Stores meta data of various kinds about given target classes or methods
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
class Meta {

    /**
     * @constructor
     */
    constructor(){
        this[map] = new WeakMap();
    }

    /**
     * Set meta data for target
     *
     * Method will overwrite any existing meta data for target
     *
     * @param {Function|Object} target
     * @param {Data} data
     *
     * @returns {Meta}
     *
     * @throws {MetaError} If target or given data is invalid
     */
    set(target, data){
        // Fail if invalid target
        let type = typeof target;
        if( ! (type === 'function' || type === 'object')){
            throw new InvalidTarget();
        }

        // Fail if invalid data
        if(! (data instanceof Data)){
            throw new InvalidData()
        }

        this[map].set(target, data);

        return this;
    }

    /**
     * Add meta data for target
     *
     * Fails if there already exists meta data for target
     *
     * @param {Function|Object} target
     * @param {Data} data
     *
     * @returns {Meta}
     *
     * @throws {MetaError} If target or given data is invalid OR if meta data has already been added for target
     */
    add(target, data){
        this._assertTargetDoesNotExist(target);

        return this.set(target, data);
    }

    /**
     * Set meta class data for target
     *
     * By using this method, you "label" (associate) the target to be
     * a class.
     *
     * Method will overwrite any existing meta data for target
     *
     * @param {Function|Object} target
     * @param {ClassData|Object} [data]
     *
     * @returns {ClassData}
     *
     * @throws {MetaError} If target or given data is invalid
     */
    setClass(target, data = {}){
        let classData = data;
        if(! (data instanceof ClassData)){
            classData = new ClassData(target, data);
        }

        this.set(target, classData);

        return classData;
    }

    /**
     * Add meta class data for target
     *
     * By using this method, you "label" (associate) the target to be
     * a class.
     *
     * Fails if there already exists meta data for target
     *
     * @param {Function|Object} target
     * @param {ClassData|Object} [data]
     *
     * @returns {ClassData}
     *
     * @throws {MetaError} If target or given data is invalid OR if meta data has already been added for target
     */
    addClass(target, data = {}){
        this._assertTargetDoesNotExist(target);

        return this.setClass(target, data);
    }

    /**
     * Check if target has been "labelled" (associated) with
     * meta class data.
     *
     * @see Meta.setClass()
     * @see Meta.addClass()
     *
     * @param {Function|Object} target
     *
     * @returns {boolean}
     */
    hasClass(target){
        if( ! this.has(target)){
            return false;
        }

        let meta = this.get(target);

        return meta instanceof ClassData;
    }

    /**
     * Set meta method data for target
     *
     * By using this method, you "label" (associate) the target to be
     * a method.
     *
     * Method will overwrite any existing meta data for target
     *
     * @param {Function|Object} target
     * @param {MethodData|Object} [data]
     *
     * @returns {MethodData}
     *
     * @throws {MetaError} If target or given data is invalid
     */
    setMethod(target, data = {}){
        let methodData = data;
        if(! (data instanceof MethodData)){
            methodData = new MethodData(target, data);
        }

        this.set(target, methodData);

        return methodData;
    }

    /**
     * Add meta method data for target
     *
     * By using this method, you "label" (associate) the target to be
     * a method.
     *
     * Fails if there already exists meta data for target
     *
     * @param {Function|Object} target
     * @param {MethodData|Object} [data]
     *
     * @returns {MethodData}
     *
     * @throws {MetaError} If target or given data is invalid OR if meta data has already been added for target
     */
    addMethod(target, data = {}){
        this._assertTargetDoesNotExist(target);

        return this.setMethod(target, data);
    }

    /**
     * Check if target has been "labelled" (associated) with
     * meta method data.
     *
     * @see Meta.setMethod()
     * @see Meta.addMethod()
     *
     * @param {Function|Object} target
     *
     * @returns {boolean}
     */
    hasMethod(target){
        if( ! this.has(target)){
            return false;
        }

        let meta = this.get(target);

        return meta instanceof MethodData;
    }

    /**
     * Returns meta data for the given target
     *
     * @param {Function|Object} target
     *
     * @returns {Data|undefined}
     */
    get(target){
        return this[map].get(target);
    }

    /**
     * Check if target has meta data
     *
     * @param {Function|Object} target
     *
     * @returns {boolean}
     */
    has(target){
        return this[map].has(target);
    }

    /**
     * Delete target meta data
     *
     * @param {Function|Object} target
     *
     * @returns {boolean}
     */
    delete(target){
        return this[map].delete(target);
    }

    /**
     * Alias for delete
     *
     * @see Meta.delete()
     *
     * @param {Function|Object} target
     *
     * @returns {boolean}
     */
    forget(target){
        return this.delete(target);
    }

    /**
     * Assert that given target does not already
     * exist in Meta
     *
     * @param {Function|Object} target
     *
     * @private
     *
     * @throws {MetaError}
     */
    _assertTargetDoesNotExist(target){
        if(this.has(target)){
            throw new MetaError('Target already has meta defined')
        }
    }
}

// Singleton
const instance = new Meta();
Object.freeze(instance);

export default instance;