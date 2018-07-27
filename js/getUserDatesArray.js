// date array
var getDateArray = function(start, end) {

    var
      arr = new Array(),
      dt = new Date(start);
  
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
}