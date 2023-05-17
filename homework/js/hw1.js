function ageDiscount(age){
    if (age >= 65) {
      //console.log("Special Discount");
      return "Special Discount"
    } else {
    //console.log("Not Allowed"); 
      return "Not Allowed"
    }
  }

 let result = ageDiscount(23); 
 console.log(result);