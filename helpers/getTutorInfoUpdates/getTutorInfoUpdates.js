/*
  - password
  - bio
  - phone
*/
const getTutorInfoUpdates = tutorObj => {
  // get array of keys and values
  let keys = Object.keys(tutorObj).map(x => `tutors.$.${x}`);
  let values = Object.values(tutorObj);
  // modify keys and make them strings
  return "hi";
  // re-attach values
  // return object
};

export default getTutorInfoUpdates;
