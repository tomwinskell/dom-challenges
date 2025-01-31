function mostFrequent (htmlNode) {
  const classesDict = {};
  
  function addToDict(classArray) {
    classArray.forEach((element) => {
      if (classesDict[element]) {
        classesDict[element] ++;
      } else {
        classesDict[element] = 1;
      }
    })
  }

  function getArrayOfClasses(node) {
    if (node.hasChildNodes()) {
      node.childNodes.forEach((node) => {
        getArrayOfClasses(node);
        if (node.nodeType === Node.ELEMENT_NODE && node.classList) {
          const classArray = [...node.classList];
          addToDict(classArray);
        }
      })
    }
  }
  
  getArrayOfClasses(htmlNode);
  return classesDict;
}

function dictToString (classesDict) {

  function toArray(classesDict) {
    const newArray = [];
    for (const key in classesDict) {
      newArray.push([key, classesDict[key]]);
    }
    return newArray;
  }
  
  function sortArray(classesArray) {
    return classesArray.sort(([,a], [,b]) => b - a);
  }
  
  function getString(sorted) {
    const stringArray = [];
    sorted.forEach((element) => {
      document.querySelectorAll(`.${element[0]}`).forEach((node) => {
        stringArray.push(node.firstChild.textContent.trim());
      });
    })
    return stringArray.join(' ');
  }

  const array = toArray(classesDict);
  const sorted = sortArray(array);
  return getString(sorted);

}


const classesDict = mostFrequent(document.body);
const res = dictToString(classesDict);

console.log(res);