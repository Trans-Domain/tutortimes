module.exports = function(difficultyNum){
  switch(difficultyNum){
    case 1:
      return "easy";
    case 2:
      return "average";
    case 3:
      return "hard";
    default: 
      return "no difficulty set";
  }
}