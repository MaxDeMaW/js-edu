/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = {
    family: 4,
    friends: 10,
    normal_life: 20,
    profession: 30,
    carrier: 40,
    top_peformance: 60
  }
) {
  //get how many hours need to learn
  var hours = 0;
  if (knowsProgramming === true) {
    hours = 800;
  }
  else {
    hours = 1300;
  }
  //get how many weeks need to learn (Priorities affect to learning time)
  return Math.ceil(hours / config[focus]);
};
