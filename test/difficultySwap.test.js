const chai = require("chai").should();
const difficultySwap = require("../helpers/difficultySwap/difficultySwap");

describe("Get string of difficulty and return a number", function(){
  it("returns 1 if easy", function(){
    difficultySwap("easy").should.equal(1);
  })
  it("returns 2 if average", function(){
    difficultySwap("average").should.equal(2);
  })
  it("returns 3 if hard", function(){
    difficultySwap("hard").should.equal(3);
  })
  it("returns 0 if not easy, average or hard", function(){
    difficultySwap("medium").should.equal(0);
  })
})
