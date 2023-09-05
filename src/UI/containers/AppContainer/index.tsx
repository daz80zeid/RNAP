import React from 'react';
import styled from 'styled-components';
import { AppContainerProps } from './@types';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

const AppContainer: React.FC<AppContainerProps> = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default AppContainer;
