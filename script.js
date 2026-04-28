function showData() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
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
