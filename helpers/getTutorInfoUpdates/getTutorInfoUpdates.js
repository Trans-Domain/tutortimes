/*
  - password
  - bio
  - phone
*/
const getTutorInfoUpdates = tutorObj => {
  // get array of keys and values
  let keys = Object.keys(tutorObj).map(x => `tutors.$.${x}`);
  let values = Object.values(tutorObj);
  // loop through elements and create new object
  let resultObj = {};
  for (let i = 0; i < keys.length; i++) {
    resultObj[keys[i]] = values[i];
  }
  // return object
  return resultObj;
};

export default getTutorInfoUpdates;
