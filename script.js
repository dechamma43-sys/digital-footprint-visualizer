let chart;

function showData() {
    const ctx = document.getElementById('myChart');

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Social Media', 'Emails', 'Comments'],
            datasets: [{
                label: 'Digital Footprint',
                data: [70, 50, 30]
            }]
        }
    });
}
