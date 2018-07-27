$(document).ready(function(){
    $.ajax({
        url: "http://localhost/status/data.php",
        method: "get",
        success: function(data){
            console.log(data);
            var amendBehind = [];
            var lastAck = [];
            var recordDate = [];
            for (var i in data){
                amendBehind.push(data[i].AMEND_BEHIND);
                lastAck.push(data[i].LAST_ACK);
                recordDate.push(data[i].RECORD_DATE);
            }
            amendBehind.reverse();
            lastAck.reverse();
            recordDate.reverse();

            var chartdata = {
                labels: recordDate,
                datasets: [
                    {
                        label: "Last Acknowledged",
                        backgroundColor: "blue",
                        borderColor: "darkblue",
                        hoverBackgroundColor: "gray",
                        hoverBorderColor: "darkgray",
                        data: lastAck
                    }
                ]
            };
            var ctx = $("#mycanvas");

            var barGraph = new Chart(ctx, {
                type: "line",
                data: chartdata
            });
        },
        error: function(data){
            console.log(data);
        }
    });
});