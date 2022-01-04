 function KeyAndValues(obj){
    let finalArray=[];
    let keyArray=[];
    let valueArray=[];
for (const property in obj) {
    console.log(property +":"+ obj[property]);
    keyArray.push(property);
    valueArray.push(obj[property]);
    }
    finalArray.push(keyArray);
    finalArray.push(valueArray);
return finalArray;
}  
const object = { a: 1, b: 2, c:3};
let array = KeyAndValues(object);
console.log(array);
let array1 = KeyAndValues( {a: "Apple", b: "Microsoft", c: "Google"});
console.log(array1);
console.log(KeyAndValues({key1:true, key2:false, key3: undefined}));