javascript: delay=prompt("Enter delay (ms). Any faster than ~60 and typingclub may not register");
/*Please keep in mind that this is just an experiment. If your typingclub stuff is graded please do not use this. Seriously*/
var rawElements = document.getElementsByClassName("token_unit");
var listElements = Array.from(rawElements); 
var letterList = []; 
listElements.forEach(item => letterList.push(item.innerHTML.replace(/<\/?[^>]+(>|$)/g, ""))); 
var strippedLetterList = letterList.map(function(x){return x.trim().replace(/&nbsp;/g, " ");}); 
for (let i = 0; i < strippedLetterList.length; i++) {setTimeout(function(){window.core.record_keydown_time(strippedLetterList[i])}, delay*i)};
