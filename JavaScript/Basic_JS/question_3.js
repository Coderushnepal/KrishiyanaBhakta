function toArray(obj){
    let finalArray=[];
for (const property in obj) {
    let initialArray=[];
    console.log(property +":"+ obj[property]);
    initialArray.push(property);
    initialArray.push(obj[property]);
     finalArray.push(initialArray);
    }
return finalArray;
}  
const object = { shrimp: 10, tots: 15};
let array = toArray(object);
console.log(array);