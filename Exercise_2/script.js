const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const res = JSON.parse(jsonString);

let view = '';

for (let i = 0; i < res.list.length; i++){
    view = view + `
    {name: '${res.list[i].name}', age: ${Number(res.list[i].age)}, prof: '${res.list[i].prof}'}`
    if (i + 1 < res.list.length){
        view += ','
    }
}

view = `{
  list: [${view}
  ]
}`;

console.log(view);
