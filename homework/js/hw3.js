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

 /*function calculateProfit(stockPrices) {
  
    let maxProfit = 0;
  
    for (let i = 0; i < stockPrices.length ; i++) {
      for (let j = i + 1; j < stockPrices.length; j++) {
        const buyPrice = stockPrices[i];
        const sellPrice = stockPrices[j];
        const profit = sellPrice - buyPrice;
  
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }
  
    return maxProfit;
  }
  
  const stockPrices = [315, 50, 314, 684, 100, 648, 132, 50, 98, 45];
  const maxProfit = calculateProfit(stockPrices);
  console.log(maxProfit);

*/
  //--------------------------------------------------------------------------------------------------------------------------------------

  function calculateMaxProfit(stockPrices) {
    let maxProfit = 0;
    let minPrice = stockPrices[0];
  
    for (let i = 1; i < stockPrices.length; i++) {
      const currentPrice = stockPrices[i];
      const potentialProfit = currentPrice - minPrice;
  
      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit;
      }
  
      if (currentPrice < minPrice) {
        minPrice = currentPrice;
      }
    }
  
    return maxProfit;
  }
  
  const stockPrices = [315, 50, 314, 684, 100, 648, 132, 50, 98, 45];
  const maxProfit = calculateMaxProfit(stockPrices);
  console.log(maxProfit);