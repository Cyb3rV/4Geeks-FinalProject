import ProgressContext from '@/Context/ProgressContext';
import { createChart, ColorType } from 'lightweight-charts';
import React, { useContext, useEffect, useRef } from 'react';

export function WeightChart(){
    const {data} = useContext(ProgressContext);
    
    
    
    const chartData = {
        data: data.weightHistory,
        colors: {
            backgroundColor : 'white',
            lineColor : '#2962FF',
            textColor : 'black',
            areaTopColor : '#2962FF',
            areaBottomColor : 'rgba(41, 98, 255, 0.28)',
        },
    };



    //Dont touch from here to above

    const chartContainerRef = useRef();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: chartData.colors.backgroundColor },
                    textColor: chartData.colors.textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: 300,
            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({ lineColor: chartData.colors.lineColor, topColor: chartData.colors.areaTopColor, bottomColor: chartData.colors.areaBottomColor });
            newSeries.setData(chartData.data);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [chartData.data, chartData.colors]
    );

    return (
        <div
            ref={chartContainerRef}
        />
    );
};
