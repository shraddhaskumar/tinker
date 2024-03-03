// Function to update the pie chart
function updatePieChart() {
    const values = [];
    for (let i = 1; i <= 5; i++) {
      const valueInput = document.getElementById(`value${i}`);
      const value = parseInt(valueInput.value);
      if (!isNaN(value)) {
        values.push(value);
      } else {
        alert(`Please enter a valid number for Value ${i}`);
        return;
      }
    }
  
    const data = {
      labels: ['Balance', 'Saving', 'Extra Expense', 'Rent', 'Loan'],
      datasets: [{
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    };
  
    const ctx = document.getElementById('pie-chart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: false
      }
    });
  }
  