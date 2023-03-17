let Container = document.getElementById('Container');
let DisplayInfo = document.getElementById('displayInfo');
let button = document.createElement('button');
button.id = 'button';
let butonText = document.createTextNode('Filter');
let InputText = document.createElement('input');

InputText.setAttribute('id','input');
button.appendChild(butonText);
Container.appendChild(InputText);
Container.appendChild(button);

async function GetJson(){
   var elmarray = [];
   await fetch('opdracht2_bijlage.json')
      .then(res => res.json())
      .then(data => {
         data.forEach(element => {
            elmarray.push(element);
         });
      });
   return elmarray;
}
async function ExtractInfo(info){

   DisplayInfo.innerHTML = '';
   let getelm = document.getElementById('input').value;
   const json = await info;
   for(const i of json){
      if(i.leeftijd > getelm){
         let list = document.createElement('ul');
         for(const key in i){
            let li = document.createElement('li');
            li.textContent += `${key}: ${i[key]}`;
            list.appendChild(li);
      }
      let newline = document.createElement('br');
      DisplayInfo.appendChild(newline);
      DisplayInfo.appendChild(list);
      }
   };
};
var Info = GetJson();
button.addEventListener('click', ExtractInfo.bind(undefined, Info));