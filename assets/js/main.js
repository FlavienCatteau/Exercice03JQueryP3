$(document).ready(function(){

var randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
 var trycount = 1;
 $('.clicktry').click(function () {
   while ($('#count').val() != randomNumber) {
     trycount++;
     if ($('#count').val() > randomNumber) {
       alert('trop grand !');
       break;
     } else {
       alert('trop petit !');
       break;
     }
   }
   if ($('#count').val() == randomNumber) {
     alert('Bravo ! Vous avez fait ' + trycount + ' essais.');
   }
 });
})
