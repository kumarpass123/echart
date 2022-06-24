import React from 'react';         
import { Bar } from 'react-chartjs-2' 
import{ chart as chartJS } from 'chart.js/auto';

function BarChart({charData}) {
return <Bar data={charData} />;
}
export default BarChart


