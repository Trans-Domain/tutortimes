const chai = require("chai").should();
const filterQuizQuestions = require("../helpers/filterQuizQuestions/filterQuizQuestions");

describe("swap difficulties from numbers to strings", function(){
  it("check 1,2,3 => easy, medium, hard", function(){
    filterQuizQuestions(
      [
        {
          title:'simple',
          difficulty: 1
        },
        {
          difficulty: 2
        },
        {
          difficulty: 3
        },
      ]
    ).should.deep.equal(
      [
        {
          title:'simple',
          difficulty: 'easy'
        },
        {
          difficulty: 'average'
        },
        {
          difficulty: 'hard'
        }
      ]
    )
  })
})