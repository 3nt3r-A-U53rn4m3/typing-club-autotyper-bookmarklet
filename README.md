# Typing Club Autotyper Bookmarklet
Pretty self-explanatory

## Setup
- copy paste everything in autotyper.js (EVERYTHING)
- create bookmark, except instead of URL paste what you've copied
- go to a typingclub page and press bookmarklet

## Alternatively
- [drag this link](javascript: delay=60; /*(in milliseconds) Any faster than ~60ms and typingclub will crash*/
/*Please keep in mind that this is just an experiment. If your typingclub stuff is graded please do not use this. Seriously*/
const rawElements = document.getElementsByClassName("token_unit");
const listElements = Array.from(rawElements); 
const letterList = []; 
listElements.forEach(item => letterList.push(item.innerHTML.replace(/<\/?[^>]+(>|$)/g, ""))); 
var strippedLetterList = letterList.map(function(x){return x.trim().replace(/&nbsp;/g, %27 %27);}); 
for (let i = 0; i < strippedLetterList.length; i++) {setTimeout(function(){window.core.record_keydown_time(strippedLetterList[i])}, delay*i)};) to your bookmark bar
- go to typingclub page and press bookmarklet
