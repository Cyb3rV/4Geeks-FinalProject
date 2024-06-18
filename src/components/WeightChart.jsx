import WeightContext from '@/Context/WeightContext';
import { createChart, ColorType } from 'lightweight-charts';
import React, { useContext, useEffect, useRef, useState } from 'react';

export function WeightChart(){
    const {weightData} = useContext(WeightContext);

    const [chartColor, setChartColor] = useState({
        backgroundColor : 'white',
        lineColor : '#2962FF',
        textColor : 'black',
        areaTopColor : '#2962FF',
        areaBottomColor : 'rgba(41, 98, 255, 0.28)',
    })

    const chartContainerRef = useRef();


    useEffect(() => {
        const fetchData = async () => {
          const resolvedData = await weightData;
          // const resolvedData = await data;
          // if (resolvedData === null) {
          //   console.log("Data is null");
          //   return;
          // }
          
          let weightHistory = [];
          if (resolvedData.length > 0) {

            const sortedData = resolvedData.sort((a, b) => new Date(a.date) - new Date(b.date));


              console.log("odernado", sortedData);

              sortedData.forEach((item, index) => {

                const date = new Date(item.date);
                const isoDateString = date.toISOString();

               weightHistory.push({ time: isoDateString.substring(0, 10) , value: item.weight });
            });

            DrawChart(weightHistory);
                
        }
        else {
          console.log("WRONG!");
        }    
        };
        fetchData();
      }, []);

      function DrawChart(chartInfo){
        
        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: chartColor.backgroundColor },
                textColor: chartColor.textColor,
            },
            width: chartContainerRef.current.clientWidth,
            height: 300,
        });
        chart.timeScale().fitContent();

        const newSeries = chart.addAreaSeries({ lineColor: chartColor.lineColor, topColor: chartColor.areaTopColor, bottomColor: chartColor.areaBottomColor });
        newSeries.setData(chartInfo);


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);

            chart.remove();
        };
    }


    return (
        <div
            ref={chartContainerRef}
        />
    );
};
