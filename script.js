/* .js files add interaction to your website */

// list of facts
var factList = [
  "Globally 70% of fresh water is used for agriculture.", /*0*/
 "The average beef hamburger takes 2400 liters of water to produce.", /*1*/ 
 "An estimated five trillion plastic bags are used worldwide each year.", /*2*/ 
 "Globally only 9% of plastic ever produced has been recycled, whilst 79% can now be found in landfills, dump;s or the environment and 12% has been incinerated.", /*3*/ 
 "In 2015 almost 50% of the plastic waste generated globally was single-use packaging.", /*4*/
  ];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
