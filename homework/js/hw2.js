function printCalendar(){
    let arr = ["Jan","Feb","Mar"];
    let date = [1,2,3,4,5,6,7,8,9,10];
    
    for (let i=0; i < arr.length; i++) {
      for (let j=0; j < date.lenth; j++) {
        console.log(arr[i] +  + date[j]);
      }
    } 
  }
  
  printCalendar();