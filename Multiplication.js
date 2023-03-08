const TableMultiplication = {"Table 2": 2, "Table 4":4, "Table 6": 6, "Table 8": 8, "Table 10": 10, "Table 7": 7};
function MainFuction(table){
   Object.entries(table).forEach(([key, val]) => {
      var title = document.createElement("h2");
      var node = document.createTextNode(key);
      var p = document.createElement("p");
      title.appendChild(node);
      document.body.appendChild(title);
      document.body.appendChild(p);
      for(let i = 1; i < 11; i++){
         //console.log(`${i} * ${val} = ` + i * val);
         p.innerHTML += `${i} * ${val} = ` + (i * val) + "<br>";
      }
   });
}
MainFuction(TableMultiplication);

