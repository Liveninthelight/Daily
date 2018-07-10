
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






/*
/////////////////// yeeaa again daily 

Gotta keep Grinding away 
Work is becoming stressful 
very stressed 
so much to do so little time to do it 
need to focus 

just have to stay focused 

It may take longer for me to achieve the same goals but giving up will never be an option. i will succseed nmw

i will never give up no matter how hard it gets 


Never give up, Just make the next day better 

Everyday is another chane to improve the daily process, 


I am a success because of how i think, because of how i never give up .I am a success because pressure cannot brake me. i am a success because i have gotten out of the mold
i have made my own mold, i broke free from the broad and wide path. i am a success beause i never stop. i am not a follower i am a leader. this is why i succeed. Never give up
