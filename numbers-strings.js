
//TODO: Change all js to jQuery
//TODO: If it is a string, concatenate it onto all of the strings that have been entered 
/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {
  
  var count = 0;
  var sum = 0;
  var avg = 0;

  var $li = $("li");
  var $countMsg = $("countMsg");
  var $sumMsg = $("sumMsg");
  var $avgMsg = $("avgMsg");
  
  $countMsg = $('li[id="countMsg"]').append("Count: ");
  $sumMsg = $('li[id="sumMsg"]').append("Sum: ");
  $avgMsg = $('li[id="avgMsg"]').append("Average: ");


  function updateForm() {
//    console.log("count = " + count + "\nsum = " + sum + "\navg = " + avg);
    $countMsg.html("Count: " + count);
    $sumMsg.html("Sum: " + sum);
    $avgMsg.html("Average: " + avg);
  }
 
  var $msg = $("#msg");
  var newText;
  
  var $submitButton = $("#submit"); //345
  $submitButton.on("click", function (event) {
    event.preventDefault();
    var $num = $("#numberLetter").val();
//    console.log("num = " + $num);
    if ($.isNumeric($num)) {
//      console.log("it is a number");
      $msg.html($num + " is a number");
      ++count;
      sum += parseFloat($num, 10);
      avg = sum / count;
      updateForm();
    } else {
       $msg.text($num + " is not a number");
    }
  });

  var $resetButton = $("#reset");
  $resetButton.on("click", function (event) {
    event.preventDefault; 
    $msg.html("");
      count = 0;
      sum = 0;
      avg = 0;
    updateForm();                                     
  });
});