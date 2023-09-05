import React from 'react';
import styled from 'styled-components';
import { StyledProps, TitleProps } from './@types';
import { PrimaryTextColor } from '../../../constants/Colors';

const Text = styled.span<StyledProps>`
    display: ${( { textDisplay } ) => textDisplay || null};
	width: fit-content;
	color: ${( { textColor } ) => textColor || PrimaryTextColor};
	font-size: ${( { textSize } ) => textSize || 14}px;
	font-weight: ${( { textWeight } ) => textWeight || 300};
	cursor: default;
	margin: ${( { textMargin } ) => textMargin || 0};
	padding: ${( { textPadding } ) => textPadding || 0};;
`;

const Title: React.FC<TitleProps> = ( { text, color, size, weight, padding, margin , display} ) => {
    return (
        <Text textSize={size} textColor={color} textWeight={weight} textMargin={margin}
              textPadding={padding} textDisplay={display}>{text}</Text>
    );
};

export default Title;
