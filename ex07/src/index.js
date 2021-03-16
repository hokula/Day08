var sum = 0;
function addThree(sum) {
  sum = sum + 3;
}
function addFive(sum) {
  sum = sum + 5;
}
addThree();
addFive();
console.log(addThree(sum));
console.log(addFive(sum));

module.exports = {
  addThree,
  addFive,
};
