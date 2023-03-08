function PiramideAflopend(){

   var array = [];
   var getal = prompt("Voer een Getal in: ");
   for(let i = 0; i <= getal; i++){
      array.push(i);
   }
   var title = document.createElement("h2");
   var paragraph = document.createElement("p");
   var para = document.createElement("p");
   var node = document.createTextNode("Piramide Aflopend");

   para.innerHTML = "Array: " + array;
   title.appendChild(node);
   document.body.appendChild(title);
   document.body.appendChild(para);
   document.body.appendChild(paragraph);
   if(getal == null){
      alert("Input is leeg, voer een getal in.");
      PiramideAflopend();
   }
   for(let i = getal; i >= 0; i--){
      for(let x = 0; x <= i; x++){
         paragraph.innerHTML += array[x];
      };
      paragraph.innerHTML += "<br>";
   };
};
PiramideAflopend();