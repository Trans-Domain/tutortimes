module.exports = function(difficultyString){
  switch(difficultyString){
    case "easy":
      return 1;
    case "average":
      return 2;
    case "hard":
      return 3;
    default: 
      return 0;
  }
}
