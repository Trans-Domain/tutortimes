module.exports = function(pathTitle){
  return pathTitle.split("-").map((x) => x[0].toUpperCase() + x.substring(1,x.length)).join(" ");
};