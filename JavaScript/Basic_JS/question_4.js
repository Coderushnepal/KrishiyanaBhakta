function identicalFilter(array){
    let flag = true;
    let arr = [];
    for(const string in array){
        let value = array[string];
        let val0 = value[0];
        for (let i = 1; i<value.length; i++){
            if (val0==value[i]){
                flag = true;
            } else{
                flag = false;
                break;
            }
        }
        if( flag){
            arr.push(value);
        }
    }
    return arr;
}
// should have ['88','999','22'] as output 
console.log(identicalFilter(["88","999","22","545","133"]));
//should have [] as output
console.log(identicalFilter(["xxxx0","oxo","xox","ooxxoo","oxo"]));
//should have ['x', 'o', '111', '@'] as output
