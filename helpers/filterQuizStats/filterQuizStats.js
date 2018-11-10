const titleCaseInverse = require("../titleCaseInverse/titleCaseInverse");
const difficultySwapInverse = require("../difficultySwapInverse/difficultySwapInverse");
const filterQuizzes = require("../filterQuizzes/filterQuizzes");

module.exports = function(result){
  let questions = [];
  for(let i=0; i< result.length; i++){
    let path = titleCaseInverse(result[i].title);
    let obj = {
      title: result[i].title,
      path,
      difficulty: difficultySwapInverse(result[i].difficulty)
    };
    questions.push(obj);
  }

  return filterQuizzes(questions);
}