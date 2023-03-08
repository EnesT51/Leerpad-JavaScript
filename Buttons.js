var ButtonNames = ["Green", "Red", "Blue"];
var container = document.getElementById("container");
document.getElementById("bgc").style.backgroundColor = "gray";

function ChangeColor(color){
   document.body.style.backgroundColor = color 
}
function  Createbutton(){

   ButtonNames.forEach(buttonText => {
      var Btn = document.createElement("button");
      var node = document.createTextNode(buttonText);
      Btn.appendChild(node);
      container.appendChild(Btn);
      Btn.style.height = "50px";
      Btn.style.width = "130px";
      Btn.style.margin = "2px";
      Btn.style.backgroundColor = buttonText;
      Btn.addEventListener("click", ChangeColor.bind(undefined,buttonText));
   });
}
const ContainerAtributes = () => {
   container.style.backgroundColor = "white";
   container.style.display = "inline-block";
   container.style.padding = "30px";
   container.style.marginLeft = window.innerWidth / 2 - container.clientWidth / 2 + "px";
}

Createbutton();
ContainerAtributes();
window.addEventListener("resize", ContainerAtributes);

