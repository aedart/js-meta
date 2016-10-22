'use strict';

import Data from '../../../src/Meta/Data';
import InvalidTarget from '../../../src/Exceptions/InvalidTarget';
import faker from 'faker';

describe("Meta Data", function(){

    it("can create new instance", function(){

        let target = {};
        let data = {
            a: true,
            b: false
        };

        let metaData = new Data(target, data);

        expect(metaData).toBeTruthy();
        expect(metaData.target).toBe(target);
        expect(metaData.data).toBe(data);
    });

    it("can create new instance with function as target", function(){

        let target = function(){};
        let data = {
            a: true,
            b: false
        };

        let metaData = new Data(target, data);

        expect(metaData).toBeTruthy();
        expect(metaData.target).toBe(target);
        expect(metaData.data).toBe(data);
    });

    it("fails if target is not a function or object", function(){
        let target = 'my-invalid-target';
        let data = false;

        let f = function(){
            return new Data(target, data);
        };

        expect(f).toThrowError(InvalidTarget)
    });
});