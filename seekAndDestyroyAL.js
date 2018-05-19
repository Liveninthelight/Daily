function destroyer(arr) {
  // Remove all the values
  //return var2;
  var args = Array.from(arguments);
  args.splice(0,1);
  return arr.filter(function(item) {
    return !args.includes(item);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);