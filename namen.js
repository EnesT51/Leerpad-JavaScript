const names = [];
const Id = ["Name", "NameReverse"];
let count;

function Names () {
   var countNames = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3):");
   count = countNames;
   if(countNames == null){
      return;
   }
   if (count < 3){
      alert('Minimaal 3 of hoger.')
      Names();
   } else {
      for (i = 0; i < count; i++) {
         names.push(prompt('Voor je naam in:'));
       }
   }
   Id.forEach(element => {
         document.getElementById(element).innerHTML = "Hallo " + names;
         if(element == "NameReverse"){
            document.getElementById(element).innerHTML = "Hallo " + names.reverse();
         }
   });
   }
Names();