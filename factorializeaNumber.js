
function factorialize(num) {
  var solution = 1;
  for (i = 1; i <= num; i++){
    solution *= i;
  }
  return solution;
}

factorialize(5);