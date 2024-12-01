// import HighchartsReact from "highcharts-react-official";
// import React from "react";
// import Highcharts from "highcharts";

// export default function Grafik() {
//     const options = {
//         chart: {
//             type: "spline",
//         },
//         title: {
//             text: "My chart",
//         },
//         series: [
//             {
//               name: "Installation & Developers",
//               data: [
//                 43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
//                 161454, 154610, 168960, 171558,
//               ],
//             },
//             {
//               name: "Manufacturing",
//               data: [
//                 24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243,
//                 31050, 33099, 33473,
//               ],
//             },
//             {
//               name: "Sales & Distribution",
//               data: [
//                 11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213,
//                 25663, 28978, 30618,
//               ],
//             },
//             {
//               name: "Operations & Maintenance",
//               data: [
//                 null,
//                 null,
//                 null,
//                 null,
//                 null,
//                 null,
//                 null,
//                 null,
//                 null,
//                 null,
//                 null,
//                 null,
//               ],
//             },
//           ],
//     };

//     return (
//         <HighchartsReact highcharts={Highcharts} options={options} />
//     );
// }
import HighchartsReact from "highcharts-react-official";
import React from "react";
import Highcharts from "highcharts";

// Data penjualan
export const getDataSeries = () => [
    {
        name: "Men's Clothing",
        data: [
            5000, 7000, 8000, 10000, 12000, 14000, 
            16000, 15000, 14000, 13000, 12000, 11000,
        ],
    },
    {
        name: "Jewelry",
        data: [
            3000, 4000, 3500, 4500, 5000, 5500, 
            6000, 6200, 5800, 5700, 5600, 5400,
        ],
    },
    {
        name: "Electronics",
        data: [
            8000, 9000, 9500, 10000, 11000, 12000, 
            13000, 12500, 12000, 11500, 11000, 10500,
        ],
    },
    {
        name: "Women's Clothing",
        data: [
            7000, 8000, 8500, 9000, 9500, 10000, 
            11000, 10800, 10400, 10200, 10000, 9800,
        ],
    },
];

// Fungsi untuk menghitung rata-rata per kategori
export function calculateAverages(dataSeries) {
    return dataSeries.map((series) => {
        const total = series.data.reduce((sum, value) => sum + value, 0);
        return {
            name: series.name,
            average: (total / series.data.length).toFixed(2),
        };
    });
}

// Fungsi untuk mencari kategori dengan rata-rata tertinggi
export function getHighestAverage(averages) {
    return averages.reduce((prev, current) => 
        parseFloat(current.average) > parseFloat(prev.average) ? current : prev
    );
}

export default function Grafik() {
    const dataSeries = getDataSeries();
    const averages = calculateAverages(dataSeries);
    const highestAverage = getHighestAverage(averages);

    const options = {
        chart: {
            type: "spline",
            borderWidth: 1, // Outline untuk grafik
            borderColor: "black", // Warna outline
            plotShadow: true, // Shadow di dalam grafik
        },
        title: {
            text: "Data Penjualan per Kategori",
        },
        xAxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
            ],
            title: {
                text: "Bulan",
            },
        },
        yAxis: {
            title: {
                text: "Jumlah Penjualan",
            },
        },
        series: dataSeries,
    };

    return (
        <div className="p-4 shadow-2xl rounded-lg border border-black bg-gray-50">
            <HighchartsReact highcharts={Highcharts} options={options} />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {averages.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-lg shadow-2xl p-4 bg-white text-center"
                    >
                        <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                        <p className="text-gray-600">Rata-rata: <b>{item.average} unit</b></p>
                    </div>
                ))}
                <div className="border rounded-lg shadow-2xl p-4 bg-green-100 text-center">
                    <h4 className="text-lg font-bold text-gray-800">Kesimpulan</h4>
                    <p className="text-gray-600">
                        Kategori dengan rata-rata penjualan tertinggi adalah 
                        <b> {highestAverage.name}</b> dengan rata-rata sebesar 
                        <b> {highestAverage.average} unit</b>.
                    </p>
                </div>
            </div>
        </div>
    );
}
