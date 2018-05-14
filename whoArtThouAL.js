function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (i=0; i<collection.length; i++) {
    //if collection[i] includes source
    //arr.push collection[i]
    let Keys = Object.keys(source);
    let match = true;
    
    for(j=0;j<Keys.length; j++) {
      let currentKey = Keys[j];
      //rerurn collection[0].last;
      //return(collection[currentKey]
      if(collection[i][currentKey] !== source[currentKey]) {
        match = false;
      }      
    }
    
    if(match === true){
      arr.push(collection[i]);
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });