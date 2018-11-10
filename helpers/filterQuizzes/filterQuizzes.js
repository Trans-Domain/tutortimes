module.exports = function(quizzes){
  return quizzes.filter((obj, pos, arr) => {
    //we get an array of the quiz_ids
    let arrOfIds = arr.map(mapObj => mapObj["title"]); 
    // then check if the index of the quiz id is equalled to the position
    return arrOfIds.indexOf(obj["title"]) === pos;
  });
}