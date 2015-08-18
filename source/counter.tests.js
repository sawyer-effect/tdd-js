/// <reference path="counter.js">
"use strict";

describe("Counter tests", function () {

  describe("Add", function() {

    it("gives the correct result", function() {
      expect(counter.add(1, 2)).toBe(3);
    });

  });

});
