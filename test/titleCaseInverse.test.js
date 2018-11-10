const chai = require("chai").should();
const titleCaseInverse = require('../helpers/titleCaseInverse/titleCaseInverse');

describe("Change program title to path name", function(){
  it("'Simple Path' becomes 'simple-path'", function(){
    titleCaseInverse("Simple Path").should.equal("simple-path");
  })
  it("'Complex Path' becomes 'complex-path'", function(){
    titleCaseInverse("Complex Path").should.equal("complex-path");
  })
  it("'Animals' becomes 'animals'", function(){
    titleCaseInverse("Animals").should.equal("animals");
  })
})