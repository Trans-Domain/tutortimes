const getInfoUpdates = (user, type) => {
  // get array of keys and values
  let keys = Object.keys(user).map(x => `${type}.$.${x}`);
  let values = Object.values(user);
  // loop through elements and create new object
  let resultObj = {};
  for (let i = 0; i < keys.length; i++) {
    resultObj[keys[i]] = values[i];
  }
  // return object
  return resultObj;
};

export default getInfoUpdates;
