// Convert the list of names in array....
let nameArray = ["Neeta Sapkota", "neha shiwakoti", "Srijana Khatiwada", "Smrity Dhakal", "Sami Chakradhar", "Kirtee Maharjan", "Trija Thebe", "Sindhu Aryal", "Kusum Ranjitkar", "Elisha Bista", "Rachana kafle", "Barsha Maharjan", "Pooja Gurung", "Bisikha Subedi", "Kritika Baral", "Srijana Thulung"];
function  arrayOfObj(names){
    let outputArray = [];
    for (let i =0;i<names.length;i++){
    let fullname = names[i].split(" ");
    // let firstName = fullname[0];
    // let lastName = fullname[1];
    let obj = new Object();
    obj.id = i+1;
    obj.firstName =  fullname[0];
    obj.lastName =  fullname[1];
    outputArray.push(obj);
    
    }
    return outputArray;
    
}  
//Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter
function find(alphabet){
    let matched = 0;
    let arrLength = output1.length;
    for(let i =0; i<arrLength;i++){
        let arrValue = output1[i];
        if (arrValue.firstName[0].toLowerCase()==alphabet.toLowerCase()){
            matched++;
        }
    }
    console.log(matched+ " names start with \"" + alphabet + "\" and " +(arrLength - matched) + " names with other than \"" + alphabet + "\"");
}
// Convert the array of the result in Question 1
function convertOutput1(argument){
    let finalOutput = new Object();
    for(let i =0; i <argument.length;i++){
        intialArrayObject = argument[i];
        let intialObject = new Object();
        intialObject.firstName = intialArrayObject.firstName;
         intialObject.lastName = intialArrayObject.lastName;
         finalOutput[intialArrayObject.id] = intialObject;
         
    }
    console.log(finalOutput);
}

//1
let output1 = arrayOfObj(nameArray);
console.log(output1);
//2
find("s");
find("a");
//3
convertOutput1(output1);