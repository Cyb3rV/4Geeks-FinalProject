
import DataContext from '@/Context/DataContext';
import { createChart, ColorType } from 'lightweight-charts';
import React, { useContext, useEffect, useRef, useState } from 'react';

export function WeightChart(){
    const {data, dataActions} = useContext(DataContext);

    const [chartInfo, setChartInfo] = useState([]);

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
        try {
            await  dataActions(
            {type: "consult",
            payload: {
            table : "weight_record"
            }});
        } catch (error) {
            console.error("Error al enviar los datos:", error);            
        }};
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          const resolvedData = await data;
          if (resolvedData === null) {
            console.log("Data is null");
            return;
          }
          
          let weightHistory = [];
          if (resolvedData.length > 0) {
            resolvedData.forEach((item, index) => {

                //especifico item.weight porque data puede haber cargado los datos de otra consulta
              if(item.weight){

                const date = new Date(item.date);
                const isoDateString = date.toISOString();

               weightHistory.push({ time: isoDateString.substring(0, 10) , value: item.weight });

                console.log("CORRECT!");
              }
            });
            
            setChartInfo(weightHistory);
            
          } else {
            console.log("WRONG!");
          }         
        };
        fetchData();
      }, [data]);

      function DrawChart(){
        
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

    useEffect(() => {
        if(chartInfo.length > 0){
        console.log("hook", chartInfo);
        DrawChart();
    }
    }, [chartInfo]);

    return (
        <div
            ref={chartContainerRef}
        />
    );
};
