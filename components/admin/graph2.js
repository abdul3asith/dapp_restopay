// pages/index.js
"use client"
import { useEffect } from 'react';
// import dynamic from 'next/dynamic';
import {Chart } from 'react-chartjs-2'

// Load Chart.js dynamically to avoid server-side rendering issues
// const Chart = dynamic(() => import('react-chartjs-2'));

const IndexPage = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, []); // Empty dependency array to run the effect only once, similar to componentDidMount

  return (
    <div>
        <div>helo</div>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default IndexPage;

