'use strict';

import Meta from '../../src/Meta';
import Data from '../../src/Meta/Data';
import ClassData from '../../src/Meta/ClassData';
import MethodData from '../../src/Meta/MethodData';
import InvalidTarget from '../../src/Exceptions/InvalidTarget';
import InvalidData from '../../src/Exceptions/InvalidData';
import MetaError from '../../src/Exceptions/MetaError';

describe("Meta", function(){

    afterEach(function(){
       //Meta.clear();
    });

    it("already has Meta instance created - singleton", function () {

        console.log(typeof Meta, Meta);

        let type = typeof Meta;

        expect(type).toBe('object', 'Should be an object');
    });

    it("fails when attempting to create new Meta instance - singleton", function () {
        let f = function () {
            return new Meta();
        };

        expect(f).toThrowError(TypeError);
    });

    it("can set and get meta data for target", function(){
        class Alpha {}

        let d = {
            a: true,
            b: false
        };

        let metaData = new Data(Alpha, d);

        Meta.set(Alpha, metaData);

        expect(Meta.has(Alpha)).toBe(true);
        expect(Meta.get(Alpha)).toBe(metaData);
    });

    it("fails setting meta data if target is invalid", function(){
        let target = 'my-invalid-target';

        let d = {
            a: true,
            b: false
        };

        let metaData = new Data(class Alpha {}, d);

        let f = function(){
            Meta.set(target, metaData);
        };

        expect(f).toThrowError(InvalidTarget);
    });

    it("fails setting meta data if target is invalid", function(){
        let target = class Alpha{};

        let metaData = {lorum:'lipsum'};

        let f = function(){
            Meta.set(target, metaData);
        };

        expect(f).toThrowError(InvalidData);
    });

    it("can add meta data for target", function(){
        class Alpha {}

        let d = {
            a: true,
            b: false
        };

        let metaData = new Data(Alpha, d);

        Meta.add(Alpha, metaData);

        expect(Meta.has(Alpha)).toBe(true);
        expect(Meta.get(Alpha)).toBe(metaData);
    });

    it("fails when attempting to add meta to target that already has meta", function(){
        class Alpha {}

        let d = {
            a: true,
            b: false
        };

        let metaData = new Data(Alpha, d);

        Meta.add(Alpha, metaData);

        expect(Meta.has(Alpha)).toBe(true);
        expect(Meta.get(Alpha)).toBe(metaData);

        let f = function(){
            Meta.add(Alpha, metaData);
        };

        expect(f).toThrowError(MetaError);
    });

    it("can forget / delete meta data", function(){
        class Alpha {}

        let d = {
            a: true,
            b: false
        };

        let metaData = new Data(Alpha, d);

        Meta.set(Alpha, metaData);

        expect(Meta.has(Alpha)).toBe(true);
        expect(Meta.get(Alpha)).toBe(metaData);

        Meta.forget(Alpha);

        expect(Meta.has(Alpha)).toBe(false);
        expect(Meta.get(Alpha)).toBeUndefined();
    });

    it("auto-removes meta data when target is deleted", function(){
        let target = class Alpha {};

        let d = {
            a: true,
            b: false
        };

        let metaData = new Data(target, d);

        Meta.set(target, metaData);

        expect(Meta.has(target)).toBe(true);
        expect(Meta.get(target)).toBe(metaData);

        target = null;

        expect(Meta.has(target)).toBe(false);
        expect(Meta.get(target)).toBeUndefined();
    });

    it("can add meta class data for target", function(){
        class Alpha {}

        let d = {
            a: true,
            b: false
        };

        //Meta.setClass(Alpha, d);
        Meta.addClass(Alpha, d); // Should give same result addClass

        let result = Meta.get(Alpha);

        console.log('Result', result);

        expect(Meta.has(Alpha)).toBe(true);
        expect(result instanceof ClassData).toBe(true);
        expect(result.data).toBe(d);
        expect(Meta.hasClass(Alpha)).toBe(true);
    });

    it("fails when attempting to add class meta to target that already has meta", function(){
        class Alpha {}

        let d = {
            a: true,
            b: false
        };

        Meta.addClass(Alpha, d);

        let f = function(){
            Meta.addClass(Alpha, d);
        };

        expect(f).toThrowError(MetaError);
    });

    it("can add method class data for target", function(){
        let target = function(){};

        let d = {
            a: true,
            b: false
        };

        //Meta.setMethod(target, d);
        Meta.addMethod(target, d); // Should give same result setMethod

        let result = Meta.get(target);

        console.log('Result', result);

        expect(Meta.has(target)).toBe(true);
        expect(result instanceof MethodData).toBe(true);
        expect(result.data).toBe(d);
        expect(Meta.hasMethod(target)).toBe(true);
    });

    it("fails when attempting to add method meta to target that already has meta", function(){
        let target = function(){};

        let d = {
            a: true,
            b: false
        };

        Meta.addMethod(target, d);

        let f = function(){
            Meta.addMethod(target, d);
        };

        expect(f).toThrowError(MetaError);
    });
});