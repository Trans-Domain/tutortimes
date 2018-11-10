const chai = require("chai").should();
const difficultySwapInverse = require("../helpers/difficultySwapInverse/difficultySwapInverse");

describe("Get a number and return a difficulty String", function(){
  it("returns easy if 1", function(){
    difficultySwapInverse(1).should.equal("easy");
  })
  it("returns average if 2", function(){
    difficultySwapInverse(2).should.equal("average");
  })
  it("returns hard if 3", function(){
    difficultySwapInverse(3).should.equal("hard");
  })
  it("returns difficulty not set if 0", function(){
    difficultySwapInverse(0).should.equal("no difficulty set");
  })
})
