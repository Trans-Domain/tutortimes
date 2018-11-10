const chai = require("chai").should();
const titleCase = require('../helpers/titleCase/titleCase');

describe("Change quiz-title to Quiz Title:", function(){
  it("changes title simple-math to Simple Math", function(){
    titleCase("simple-math").should.equal("Simple Math");
  });
  it("changes complex-math to Complex Math", function(){
    titleCase("complex-math").should.equal("Complex Math");
  });
})
