$(document).ready(function(){
    $.ajax({
        url: "http://localhost/status/chartjs-php-mysql/data.php",
        method: "get",
        dataType: "json",
        success: function(data){
            console.log(data);
            var amendBehind = [];
            var lastAck = [];
            var recordDate = [];
            for (var i in data){
                amend = parseInt(data[i].AMEND_BEHIND)
                amendBehind.push(amend);
                lastAck.push(moment(data[i].LAST_ACK));
                recordDate.push(data[i].RECORD_DATE);
            }
            amendBehind.reverse();
            recordDate.reverse();

            var chartdata = {
                labels: recordDate,
                datasets: [
                    {
                        label: "Last Acknowledged",
                        data: lastAck
                    },
                    {
                        label: "Amend Behind",
                        data: amendBehind,
                        type: 'bar'
                    }
                ]
            };
            var ctx = $("#mycanvas");

            var barGraph = new Chart(ctx, {
                type: "line",
                data: chartdata,
                options: {
                    scales: {
                        bounds: 'data',
                        yAxes: [{
                            type: "time",
                            distribution: "linear",
                            ticks: {

                            },
                            time: {
                                unit: 'day',
                                displayFormat :{
                                    quarter: '||'
                                }
                            },
                            xAxes: [{
                                type: "time",
                                distribution: "linear",
                                time: {
                                    unit: 'day',
                                    displayFormat :{
                                        quarter: '||'
                                    }
                                }
                            }]
                        }]
                    }
                }
            });
        },
        error: function(data){
            console.log(data);
        }
    });
});