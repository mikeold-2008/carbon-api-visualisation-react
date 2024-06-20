import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({generationMix}){

    let labelData = []
    let datasetData = []
    
    generationMix.map((genItem)=>{
      labelData.push(genItem.fuel)
      datasetData.push(genItem.perc)
    })


    const data = {
        labels: labelData,
        datasets: [
          {
            data: datasetData,
            backgroundColor: [
              '#2f4f4f',
              '#7f0000',
              '#ff1493',
              '#4b0082',
              '#ff8c00',
              '#ffff00',
              '#00ffff',
              '#00ff00',
              '#008000',
            ],
            borderColor: [
              '#2f4f4f',
              '#7f0000',
              '#ff1493',
              '#4b0082',
              '#ff8c00',
              '#ffff00',
              '#00ffff',
              '#00ff00',
              '#008000',
            ],
            borderWidth: 1,
          },
        ],
      };
      return <Doughnut data={data} />
}

export default DoughnutChart