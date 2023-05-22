function printCalendar(){
    let arr = ["Jan","Feb","Mar"];
    let date = [1,2,3,4,5,6,7,8,9,10];
    
    for (let i=0; i < arr.length; i++) {
      for (let j=0; j < date.length; j++) {
        console.log(arr[i] +  + date[j]);
      }
    } 
  }
  
  printCalendar();

 // -----------------------------------------------------------------------------------------------------------------------------

 function cloneArray(arr) {
    let array = []
    for(let i = 0; i < arr.length; i++) {
        array[i] = arr[i];
    }
    return array
}

let arr = [1,2,3,4];
let res = cloneArray(arr);
console.log(res);

//-------------------------------------------------------------------------------------------------------------------------------

function getNthElement(arr,n) {
    for(let i = 0; i < arr.length; i++) {
        if (n = i){
            return arr[i];
        }else {
           return "element does not exist";
        }
    }
}

let arr = [1,2,3,4];
let res = getNthElement(arr,7)
console.log(res);

//---------------------------------------------------------------------------------------------------------------------------------------

function customPush(arr, item) {
    arr[arr.length] = item; // Add the item to the end of the array
    return arr.length; // Return the new length of the array
  }
  
  function customPop(arr) {
    if (arr.length === 0) {
      return undefined; // If the array is empty, return undefined
    }
    
    const poppedItem = arr[arr.length - 1]; // Get the last element
    arr.length--; // Reduce the length of the array by 1 to remove the last element
    return poppedItem; // Return the removed element
  }

const myArray = [1, 2, 3];
console.log(customPush(myArray, 4)); // Output: 4 (new length of the array)
console.log(myArray); // Output: [1, 2, 3, 4]

console.log(customPop(myArray)); // Output: 4 (popped item)
console.log(myArray); // Output: [1, 2, 3]

//-----------------------------------------------------------------------------------------------------------