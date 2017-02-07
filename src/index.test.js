var expect = require("chai").expect;
var names = require("./index");

describe("names", function() {
    describe("all", function() {
        it("should be array of string", function() {
            expect(names.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item){
                    return typeof item === "string";
                });
            }
        });

        it("should contain luke skywalker", function() {
            expect(names.all).to.include("Luke Skywalker");
        });

    });
    describe("random", function() {
        it("should return a random name", function() {
            var randomItem = names.random();
            expect(names.all).to.include(randomItem);
        });
    })
});
