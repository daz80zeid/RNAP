import React from 'react';
import { StatisticValueProps } from './@types';
import styled from 'styled-components';
import { PurpleColor } from '../../../constants/Colors';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;

const ValueTitle = styled.div`
	font-size: 14px;
`;

const ValueText = styled.div`
	font-family: 'Comfortaa', cursive;
	font-size: 25px;
	padding-left: 5px;
	color: ${PurpleColor};
`;

const Marker = styled.div<{ color: string }>`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	margin-right: 5px;
	background-color: ${( { color } ) => color};
`;

const StatisticValue: React.FC<StatisticValueProps> = ( { title, value, circleColor } ) => {
    return (
        <Wrapper>
            {circleColor && <Marker color={circleColor}/>}
            <ValueTitle>{title}:</ValueTitle>
            <ValueText>{value}</ValueText>
        </Wrapper>
    );
};

export default StatisticValue;
