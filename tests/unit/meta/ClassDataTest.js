'use strict';

import ClassData from '../../../src/Meta/ClassData';

describe("Meta Class Data", function(){

    it("can create new instance", function(){

        let target = {};
        let data = {
            a: true,
            b: false
        };

        let metaClassData = new ClassData(target, data);

        expect(metaClassData).toBeTruthy();
        expect(metaClassData.target).toBe(target);
        expect(metaClassData.data).toBe(data);
    });

    it("has no dependencies by default", function(){
        let target = {};
        let data = {
            a: true,
            b: false
        };

        let metaClassData = new ClassData(target, data);

        console.log('default dependencies', metaClassData.dependencies);

        expect(metaClassData.dependencies.length).toBe(0);
    });

    it("can set and get dependencies data", function(){
        let target = {};
        let data = {
            a: true,
            b: false
        };

        let dependencies = ['a', 'b', 'c'];

        let metaClassData = new ClassData(target, data);
        metaClassData.dependencies = dependencies;

        console.log('dependencies', metaClassData.dependencies);

        expect(metaClassData.dependencies).toBe(dependencies);
    });

});