function ageDiscount(age){
    if (age >= 65) {
      return "Special Discount"
    } else {
      return "Not Allowed"
    }
  }

 let result = ageDiscount(23);
 console.log(result);

 function multiply100(numbers) {
    const arr1 = [];
    numbers.forEach(number => {
      arr1.push(number * 100);
    });
    return arr1;
  }

  const numbers = [1, 2, 3];
  const arr1 = multiply100(numbers);

  console.log(multipliedNumbers); // [100, 200, 300]
  //console.log(numbers);