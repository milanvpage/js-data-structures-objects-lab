// Write your solution in this file!
const driver = {};

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
    obj[key] = value;

    return obj;
}
function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value });
  }
  
  function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver); 
    delete newObj[key];
    return newObj;
}


function  destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
    
}