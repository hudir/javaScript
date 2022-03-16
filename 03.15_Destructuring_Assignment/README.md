- deep clone(Array / Object nested in Array / Object)

``````
JSON.stringify(target) // change the target to json file
JSON.parse(JSON.stringify(target)) // change the json file back to normol / none JSON file


function deepClone(data) {
    return JSON.parse(JSON.stringify(data));
};
``````