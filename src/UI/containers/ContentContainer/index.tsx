import React from 'react';
import styled from 'styled-components';
import { ContentContainerProps } from './@types';
import {sideBarWidth} from '../../../constants/UiConstants';
import {PrimaryGradient} from '../../../constants/Colors';

const Wtapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-left: ${sideBarWidth}px;
    background: ${PrimaryGradient};
`

const ContentContainer: React.FC<ContentContainerProps> = ({children}) => {
    return (
        <Wtapper>
            {children}
        </Wtapper>
    );
};

export default ContentContainer;
