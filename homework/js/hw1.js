function ageDiscount(age){
    if (age >= 65) {
      return "Special Discount"
    } else {
      return "Not Allowed"
    }
  }

 let result = ageDiscount(23);
 console.log(result);
//------------------------------------------------------------------------------------------------
 function multiply100(numbers) {
    const arr1 = [];
    numbers.forEach(number => {
      arr1.push(number * 100);
    });
    return arr1;
  }

  const numbers = [1, 2, 3];
  const arr1 = multiply100(numbers);

  console.log(arr1); // [100, 200, 300]
  //console.log(numbers);

// --------------------------------------------------------------------------------------------------

function multiplyBy100(arr1) {
    if (arr1.length > 5) {
      const arr2 = arr1.map(number => number * 100);
      return arr2;
    }
  }

  const arr = [1, 2, 3, 4, 5, 6, 7];
  const result = multiplyBy100(arr);
  console.log(result);

  //--------------------------------------------------------------------------------------------------------------

  function multiplyEvenNumbers(arr) {
    return arr.map(num => {
      if (num % 2 === 0) {
        return num * 100;
      } else {
        return num;
      }
    });
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const aar1 = multiplyEvenNumbers(arr);

  console.log(aar1);
  // Output: [1, 200, 3, 400, 5, 600, 7, 800, 9, 1000]
  console.log(arr);

 // -----------------------------------------------------------------------------------------------------------------

 function countOccurrences(array, number) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === number) {
        count++;
      }
    }
    return count;
  }


  const array = [154, 657, 564, 561, 154, 678, 100, 154];
  const numberToCount = 154;
  const occurrenceCount = countOccurrences(array, numberToCount);
  console.log(occurrenceCount);

  //--------------------------------------------------------------------------------------------------------------------

  