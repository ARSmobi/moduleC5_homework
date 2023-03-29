const xml = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xml, 'text/xml');
const listNode = xmlDOM.querySelector('list');
let DOMObjects = {list: []};

for (let i = 0; i < listNode.children.length; i++){
    const studentNode = listNode.children[i]
    const nameNode = studentNode.querySelector('name')
    const langAttr = nameNode.getAttribute('lang')
    const firstNode = nameNode.querySelector('first')
    const secondNode = nameNode.querySelector('second')
    const ageNode = studentNode.querySelector('age')
    const profNode = studentNode.querySelector('prof')
    DOMObjects.list.push({
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr
    })
}

console.log(DOMObjects)
