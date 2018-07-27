
$('#submit').on('click', function(){
    var startDate = new Date($('#start').val().replace(/-/g, '\/'));
    var endDate = new Date($('#end').val().replace(/-/g, '\/'));
    if (endDate.getTime() < startDate.getTime()) {
      alert("Please ensure the start date is before the end date"); 
    } else {
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
  
          // The data for our dataset
          data: {
              labels: getDateArray(startDate, endDate),
              datasets: [{
                  label: "My First dataset",
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: [1, 1, 2, 1],
              }]
          },
  
          // Configuration options go here
          options: {}
      });
    }
  });