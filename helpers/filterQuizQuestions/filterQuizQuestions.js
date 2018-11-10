const difficultySwapInverse = require("../difficultySwapInverse/difficultySwapInverse");

module.exports = function(result){
  for(let i=0; i< result.length; i++){
    result[i].difficulty = difficultySwapInverse(result[i].difficulty);
  }

  return result;
}