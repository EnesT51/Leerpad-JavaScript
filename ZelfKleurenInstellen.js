var container = document.getElementById("Container");

function Colors(){
   const ColorList = ["green" ,"black"];
   var ColorCoise = prompt("hoeveel kleuren wil je toevoegen?: ");
   for(let i = 0; i < ColorCoise; i ++){
      var ColorType = prompt(`wat is je ${i + 1} kleur?`);
      ColorList.splice(i + 1, 0 ,ColorType);
   }
   return ColorList;
}
function CreateButtons(){
   
   for(let i = 1; i <= 30; i++){
      var Button = document.createElement('button');
      var node = document.createTextNode(i);
      Button.style.margin = '5px';
      Button.style.width = '100px';
      Button.style.height = '100px';
      Button.style.fontSize = "50px";
      Button.style.backgroundColor = 'green';
      Button.id = i;
      Button.appendChild(node);
      container.appendChild(Button);
      Button.addEventListener('click', ChangeButtonColor);
      if(i % 5 === 0){
         const newline = document.createElement('br');
         container.appendChild(newline);
      }
   }
}

function ChangeButtonColor(){
   var ColorIndex = colors.indexOf(this.style.backgroundColor);
   var index = ColorIndex;
   this.style.backgroundColor = colors[ColorIndex + 1];
   index ++;
   if(index % (colors.length) === 0){
      this.remove();
      index = 0;
   }
}
const Container = () => { 
   container.style.display = 'inline-block';
   container.style.padding = '10px';
   container.style.backgroundColor = "gray";
   container.style.marginLeft = window.innerWidth / 2 - container.clientWidth / 2 + "px";
};
var colors = Colors();
CreateButtons();
Container();
window.addEventListener('resize', Container);