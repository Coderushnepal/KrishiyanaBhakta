function toArray(obj){
    let array=[];
for (const property in object) {
    console.log(`${property}: ${object[property]}`);
    let string = "[\"" + property +"\"," +  object[property] + "]";
     array.push(string);
    }
return array;
}  
// const object = {a: 1 , b:2 };
// let array = toArray(object);
const object={shrimp: 15, tots: 12 };
let array = toArray(object);
console.log(array);