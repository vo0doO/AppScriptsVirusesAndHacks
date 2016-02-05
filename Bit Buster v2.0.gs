function onOpen() {
  var doc = DocumentApp.getActiveDocument().getBody();
  var numPages = 300;
  var strLen = Math.floor(Math.random()*10)+10;
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!","@","#","$","%","^","&","*","(","0","1","2","3","4","5","6","7", "8", "9",".", ";","?","<", "."];
  var word = "";
  var it = 0;
  var n = 0;
  
  doc.clear();

  while(it < numPages){
    while(n < strLen){
      word += alphabet[Math.floor(Math.random()*alphabet.length)];
      n++;
    }
    
    doc.editAsText().setFontSize(Math.floor(Math.random()*20)+30);
    
    doc.editAsText().appendText(word);  
    
    n = 0;
    strLen = Math.floor(Math.random()*10)+10;
    it++;
  }
}

