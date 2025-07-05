const ctxIndex = document
    .getElementById("genderIndexChart")
    .getContext("2d");

new Chart(ctxIndex, {
    type: "bar",
    data: {
        labels: ["2020", "2021", "2022", "2023", "2024"],
        datasets: [
            {
                label: "Indeks Kesenjangan Gender",
                data: [0.7, 0.688, 0.697, 0.697, 0.686],
                backgroundColor: "rgb(110, 199, 187)",
                borderRadius: 4,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 0.8,
                ticks: {
                    stepSize: 0.1,
                },
            },
        },
    },
});