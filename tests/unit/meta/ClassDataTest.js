'use strict';

import ClassData from '../../../src/Meta/ClassData';

describe("Meta Class Data", function(){

    it("can create new instance", function(){

        let target = {};
        let data = {
            a: true,
            b: false
        };

        let metaData = new ClassData(target, data);

        expect(metaData).toBeTruthy();
        expect(metaData.target).toBe(target);
        expect(metaData.data).toBe(data);
    });

    it("has no dependencies by default", function(){
        let target = {};
        let data = {
            a: true,
            b: false
        };

        let metaData = new ClassData(target, data);

        console.log('default dependencies', metaData.dependencies);

        expect(metaData.dependencies.length).toBe(0);
    });

    it("can set and get dependencies data", function(){
        let target = {};
        let data = {
            a: true,
            b: false
        };

        let dependencies = ['a', 'b', 'c'];

        let metaData = new ClassData(target, data);
        metaData.dependencies = dependencies;

        console.log('dependencies', metaData.dependencies);

        expect(metaData.dependencies).toBe(dependencies);
    });

});