"use client"
import { useEffect,useState, React } from 'react';
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2'

const Graphpg = ({ data, labels }) => {
    const [dataa, setDataa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/graph.json');
        const jsonData = await response.json();
        setDataa(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: dataa.map(item => item.item),
    datasets: [
      {
        label: 'Item Prices',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 1,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataa.map(item => item.item),
      },
    ],
  };

      return(
        <>
       
        {/* {dataa.map((item, index) => (
            <div key={index}  id="barChart" width="400" height="200">
             
               <strong>{item.item}</strong>: ${item.price}
            </div>
          ))}
           */}
             <div>
      <h1>Item Prices</h1>
      <Line
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
        </>
      );
    };


export default Graphpg



 

