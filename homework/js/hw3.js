function getDateDiscount(date) {
    switch (date) {
      case 1:
        return "Too early";
      case 15:
        return "Here is your discount";
      case 30:
        return "Too late";
      default:
        return "Not a valid date";
    }
  }
 //--------------------------------------------------------------------------------------------------------------------------------------- 

 function createArray(num1, num2) {
    let result = [];
    let currentValue = num1 + 1;
  
    while (currentValue < num2) {
      result.push(currentValue);
      currentValue++;
    }
  
    return result;
  }
  //------------------------------------------------------------------------------------------------------------------------------------------

  function getKeys(obj) {
    const keysArr = [];
  
    for (let n in obj) {
      keysArr.push(n);
    }
  
    return keysArr;
  }
  
  const myObject = { name: "Jack", email: "jack@gmail.com", age: 30 };
  console.log(getKeys(myObject));

 // ----------------------------------------------------------------------------------------------------------------------------------

 