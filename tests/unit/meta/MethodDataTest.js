'use strict';

import MethodData from '../../../src/Meta/MethodData';

describe("Meta Method Data", function(){

    it("can create new instance", function(){

        let target = {};
        let data = {
            a: true,
            b: false
        };

        let metaMethodData = new MethodData(target, data);

        expect(metaMethodData).toBeTruthy();
        expect(metaMethodData.target).toBe(target);
        expect(metaMethodData.data).toBe(data);
    });

    it("has no dependencies by default", function(){
        let target = {};
        let data = {
            a: true,
            b: false
        };

        let metaMethodData = new MethodData(target, data);

        console.log('default dependencies', metaMethodData.dependencies);

        expect(metaMethodData.dependencies.length).toBe(0);
    });

    it("can set and get dependencies data", function(){
        let target = {};
        let data = {
            a: true,
            b: false
        };

        let dependencies = ['a', 'b', 'c'];

        let metaMethodData = new MethodData(target, data);
        metaMethodData.dependencies = dependencies;

        console.log('dependencies', metaMethodData.dependencies);

        expect(metaMethodData.dependencies).toBe(dependencies);
    });

});