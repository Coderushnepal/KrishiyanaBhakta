// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
function filterArray(a){
    let result=[];
    for (let i = 0;i<a.length;i++){
        if (typeof(a[i])=="number")
            result.push(a[i]);
    }
    return result;
}

let input=filterArray([1,2,"a","b"]);
console.log(input);
input=filterArray([1,"a","b",0,15]);
console.log(input);
input=filterArray([1,2,"aasf","123","1",123]);
console.log(input);