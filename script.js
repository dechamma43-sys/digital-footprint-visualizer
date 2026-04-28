let chart;

function showData() {
    const ctx = document.getElementById('myChart');

    // Destroy old chart if exists (prevents overlap)
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Social Media', 'Emails', 'Comments'],
            datasets: [{
                label: 'Digital Footprint',
                data: [70, 50, 30],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
}
