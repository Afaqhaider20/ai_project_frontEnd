"use client"

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Page = () => {
    const histogramRef = useRef(null);
    const barchartRef = useRef(null);
    const piechartRef = useRef(null);

    useEffect(() => {
        function generateRandomData() {
            var labels = ['Estimated Salary', 'Gender', 'Balance', 'Tenure', 'Country'];
            var data = labels.map(function () {
                return Math.floor(Math.random() * 100);
            });
            return { labels: labels, data: data };
        }

        if (histogramRef.current) {
            if (histogramRef.current.chart) {
                histogramRef.current.chart.destroy();
            }
            const histogramData = generateRandomData();
            const histogramCtx = histogramRef.current.getContext('2d');
            histogramRef.current.chart = new Chart(histogramCtx, {
                type: 'bar',
                data: {
                    labels: histogramData.labels,
                    datasets: [{
                        label: 'Histogram',
                        backgroundColor: 'rgba(108, 99, 255, 0.5)',
                        borderColor: '#6c63ff',
                        borderWidth: 0,
                        data: histogramData.data
                    }]
                },
                options: {
                    indexAxis: 'y',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        if (barchartRef.current) {
            if (barchartRef.current.chart) {
                barchartRef.current.chart.destroy();
            }
            const barchartData = generateRandomData();
            const barchartCtx = barchartRef.current.getContext('2d');
            barchartRef.current.chart = new Chart(barchartCtx, {
                type: 'bar',
                data: {
                    labels: barchartData.labels,
                    datasets: [{
                        label: 'Barchart',
                        backgroundColor: 'rgba(108, 99, 255, 0.5)',
                        borderColor: '#6c63ff',
                        borderWidth: 2,
                        data: barchartData.data
                    }]
                },
                options: {
                    indexAxis: 'y',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        if (piechartRef.current) {
            if (piechartRef.current.chart) {
                piechartRef.current.chart.destroy();
            }
            const piechartData = generateRandomData();
            const piechartCtx = piechartRef.current.getContext('2d');
            piechartRef.current.chart = new Chart(piechartCtx, {
                type: 'pie',
                data: {
                    labels: piechartData.labels,
                    datasets: [{
                        label: 'Piechart',
                        backgroundColor: ['#6c63ff', '#5247ff', '#302f5a', '#1e1e3f', '#0775d3'],
                        data: piechartData.data
                    }]
                },
                options: {}
            });
        }

    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-4">
                <div className="chart-container">
                    <h2 className="text-white text-lg mb-2">Histogram Information</h2>
                    <canvas ref={histogramRef} width="200" height="200" />
                </div>
                <div className="chart-container">
                    <h2 className="text-white text-lg mb-2">Barchart Information</h2>
                    <canvas ref={barchartRef} width="200" height="200" />
                </div>
                <div className="chart-container">
                    <h2 className="text-white text-lg mb-2">Piechart Information</h2>
                    <canvas ref={piechartRef} width="200" height="200" />
                </div>
            </div>
        </div>
    );
};

export default Page;
