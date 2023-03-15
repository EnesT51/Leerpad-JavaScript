async function GetJson(){
   var elmarray = [];
   // async en await syntax heb ik moeten gebruiken om de benodigde informatie te kunnen ontvangen.
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
   let Container = document.getElementById('Container');
   let Personen = document.createElement('h2');
   let node = document.createTextNode("Personen");
   Personen.appendChild(node);
   Container.appendChild(Personen);
   const json = await info;
   for(const i of json){
      let paragraph = document.createElement('ul');
      for(const key in i){
         var li = document.createElement('li');
         li.textContent += `${key}: ${i[key]}`;
         paragraph.appendChild(li);
      }
      let newline = document.createElement('br');
      Container.appendChild(newline);
      Container.appendChild(paragraph);
   };
};
var Info = GetJson();
ExtractInfo(Info);
