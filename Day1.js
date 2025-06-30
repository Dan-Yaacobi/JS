function removeDuplicate(arr){
    const HashMap = new Map();
    const newArray = new Array();
    for (let i = 0; i < arr.length; i++){
        if (!HashMap.get(arr[i])){
            HashMap.set(arr[i],1)
            newArray.unshift(arr[i])
        }
    }
    return newArray
}


function flatten(arr){
    let answer = new Array();

    recursion(arr,answer);
    function recursion(arr,answer){
        for (let i = 0; i < arr.length;i++){
            
            if (Array.isArray(arr[i])){
                recursion(arr[i],answer)
            }
            else{
                answer.push(arr[i])
            };
        };
    };
    return answer;
};
