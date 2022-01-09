// Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.
function arrayValueTypes(a){
    let result=[];
    for (let i = 0;i<a.length;i++){
        result.push(typeof(a[i]));
    }
    return result;
}

let input=arrayValueTypes([1,2,"null",[]]);
console.log(input);
input=arrayValueTypes(["214",true,false,2,2.15,[],null]);
console.log(input);
input=arrayValueTypes([21.4,"float","array",["i m array"],null,true,214]);
console.log(input);