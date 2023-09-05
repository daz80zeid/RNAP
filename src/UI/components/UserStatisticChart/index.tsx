import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    fanColor,
    fighterColor,
    refereeColor,
    ringColor,
    videographerColor
} from '../../../constants/UsersChartColors';
import { UserStatisticChartProps } from './@types';

const UserStatisticChart: React.FC<UserStatisticChartProps> = (
    {
        fightersCount,
        refereeCount,
        ringsCount,
        videographersCount,
        fansCount
    } ) => {
    const data = {
        labels: [
            'Бойцы',
            'Суди',
            'Ринги',
            'Видеограферы',
            'Фанаты'
        ],
        datasets: [ {
            data: [ fightersCount, refereeCount, ringsCount, videographersCount, fansCount ],
            backgroundColor: [
                fighterColor,
                refereeColor,
                ringColor,
                videographerColor,
                fanColor
            ],
            hoverBackgroundColor: [
                fighterColor,
                refereeColor,
                ringColor,
                videographerColor,
                fanColor
            ]
        } ]
    };

    return (
        <div>
            <Pie data={data} height={200} options={{
                legend: {
                    display: false
                }

            }}/>
        </div>
    );
};

export default UserStatisticChart;
