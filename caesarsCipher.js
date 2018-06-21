
function rot13(str) { // LBH QVQ VG!
  
  var strSep = str.split(""); // Array
   
  for (i = 0; i < strSep.length; i++) {
    strSep[i] = strSep[i].charCodeAt(0);
    if (strSep[i] > 64 && strSep[i] < 78 ) {
       strSep[i] += 13;
    } else if (strSep[i] > 77 && strSep[i] < 91) {
       strSep[i] -= 13;
      }
    strSep[i] = String.fromCharCode(strSep[i]);
   
    
  }
       
  
  
  return strSep.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
///////