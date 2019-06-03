function callBack(value1,value2,funcOperation){
    let result=funcOperation(value1,value2);
    return result *2;
}

let resultadd=callBack(5,2,function(value1,value2){
    return value1 + value2;
});

console.log(resultadd);

let resultsub=callBack(8,2,function(value1,value2){
    return value1 - value2;
})

console.log(resultsub);