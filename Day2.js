function groupBy(arr,key){
    let hash = new Map()
    for (let i = 0; i < arr.length;i++){
        if (!hash.has(arr[i][key])){
            hash.set(arr[i][key], new Array());
        }
        hash.get(arr[i][key]).push(arr[i]);
    };
    return hash
};

// obj is a nested object, path is a string representing the path in the format of: "a.b.c"
function getNested(obj, path){
    let index = 0;
    let split_path = path.split(".")

    function recursiveFind(current, index) {
        if (current == null) return undefined;

        if (index === split_path.length - 1) {
            return current[split_path[index]];
        }

        return recursiveFind(current[split_path[index]], index + 1);
    }
    return recursiveFind(obj, 0);
}
