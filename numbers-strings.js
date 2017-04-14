
//TODO: Change all js to jQuery
//TODO: If it is a string, concatenate it onto all of the strings that have been entered 



var countMsg = document.createElement('h4'); // pg 285
var countText = document.createTextNode('Count: ');
countMsg.appendChild(countText);
document.body.appendChild(countMsg);

var sumMsg = document.createElement('h4');
var sumText = document.createTextNode('Sum: ');
sumMsg.appendChild(sumText);
document.body.appendChild(sumMsg);

var aveMsg = document.createElement('h4');
var aveText = document.createTextNode('Average: ');
aveMsg.appendChild(aveText);
document.body.appendChild(aveMsg);

var count = 0;
var sum = 0;
var avg = 0;

function updateForm() {
  countText.nodeValue = 'Count: ' + count;
  sumText.nodeValue = 'Sum: ' + sum;
  aveText.nodeValue = 'Average: ' + avg;
}

var submitButton = document.getElementById('submit');
var numberLetter;

var newPara = document.createElement('p'); // create paragraph in div tag
var newText = document.createTextNode(''); //text in paragraph tag
newPara.appendChild(newText); //Add text to paragraph node
var newMsg = document.getElementById('msg'); //Find where text element should go in HTML
newMsg.appendChild(newPara); //Append it there

submitButton.addEventListener('click', function (e) {
  if (e.preventDefault) { //stops form from being sent
    e.preventDefault();
  } else {
    e.returnValue = false;
  }  
  var numberLetter = document.getElementById('numberLetter').value;
  if (!isNaN(numberLetter)) {
    newMsg.textContent = numberLetter + " is a number";
     ++count;
  sum += parseFloat(numberLetter, 10);
  avg = sum / count;
  updateForm(); 
    return;
  } else {
    newMsg.textContent = numberLetter + " is not a number";
    return;
  }
                                         
}, false);


var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function (e) {
  count = 0;
  sum = 0;
  avg = 0;
  updateForm();
  if (e.preventDefault) { //stops form from being sent
    e.preventDefault();
  } else {
    e.returnValue = false;
  }                                             
}, false);
