// 30 date array 
var getMonthlyArray = function(){
    var dates = [];
    var date = new Date();
  
    for (var i = 0; i < 30; i++){
      var tempDate = new Date();
      tempDate.setDate(date.getDate() - i);
      var str = tempDate.getMonth() + "/" + tempDate.getDate();
      dates.push(str);  
    }
    return dates.reverse();
  }