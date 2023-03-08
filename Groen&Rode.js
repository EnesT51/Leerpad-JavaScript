function ChangeButtonColor(buttonId){
   var x = document.getElementById(buttonId).style.backgroundColor = "red";
}
var container = document.getElementById("container");
for(let i = 1; i <= 30; i++){
   var Button = document.createElement('button');
   var node = document.createTextNode(i);
   Button.style.margin = '5px';
   Button.style.width = '100px';
   Button.style.height = '100px';
   Button.style.fontSize = "50px";
   Button.style.backgroundColor = "green";
   Button.id = i;
   Button.appendChild(node);
   container.appendChild(Button);
   Button.addEventListener('click', ChangeButtonColor.bind(undefined, Button.id));
   if(i % 5 === 0){
      const newline = document.createElement('br');
      container.appendChild(newline);
   }
}
const Container = () => { 
   container.style.display = 'inline-block';
   container.style.padding = '10px';
   container.style.backgroundColor = "gray";
   container.style.marginLeft = window.innerWidth / 2 - container.clientWidth / 2 + "px";
};
Container();
window.addEventListener('resize', Container);
