var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function Optellen(array1, array2){

   for(let i = 0; i < arrayEen.length; i++){
      document.getElementById("Optellen").innerHTML += `${array1[i]} + ${array2[i]} = ${array1[i] + array2[i]}` + "<br>";
   }
}
function Aftrekken(array1, array2){

   for(let i = 0; i < arrayEen.length; i++){
      document.getElementById("Aftrekken").innerHTML +=  `${array2[i]} - ${array1[i]} = ${array2[i] - array1[i]}` + "<br>";
   }
}
function Vermenigvuldigen(array1, array2){

   for(let i = 0; i < arrayEen.length; i++){
      document.getElementById("Vermenigvuldigen").innerHTML += `${array1[i]} * ${array2[i]} = ${array1[i] * array2[i]}` + "<br>";
   }
}
function Delen(array1, array2){

   for(let i = 0; i < arrayEen.length; i++){
      document.getElementById("Delen").innerHTML += `${array2[i]} / ${array1[i]} = ${array2[i] / array1[i]}` + "<br>";
   }
}
Optellen(arrayEen,arrayTwee);
Aftrekken(arrayEen,arrayTwee);
Vermenigvuldigen(arrayEen,arrayTwee);
Delen(arrayEen,arrayTwee);

