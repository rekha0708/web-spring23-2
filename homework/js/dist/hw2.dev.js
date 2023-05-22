"use strict";

function printCalendar() {
  var arr = ["Jan", "Feb", "Mar"];
  var date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < date.lenth; j++) {
      console.log(arr[i] + +date[j]);
    }
  }
}

printCalendar();