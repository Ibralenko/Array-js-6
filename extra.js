const getLastWordLength = (str) => {
   const words = str.trim().split(' ');
   const lastWord = words[words.length -1];
   return lastWord.length;
   };
   
   console.log(getLastWordLength(' ')); 
   console.log(getLastWordLength('man in BlacK')); 
   console.log(getLastWordLength('hello, world!  ')); 