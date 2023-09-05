import React from 'react';
import { LoaderContainerProps } from './@types';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: calc(50% - 50px);
    right: calc(50% - 50px);
`;

const LoaderContainer: React.FC<LoaderContainerProps> = ({children}) => {

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default LoaderContainer;
