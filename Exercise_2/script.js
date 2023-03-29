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

const parsedJson = JSON.parse(jsonString);

for (let i = 0; i < parsedJson.list.length; i++){
    parsedJson.list[i].age = Number(parsedJson.list[i].age)
}

console.log(parsedJson)
