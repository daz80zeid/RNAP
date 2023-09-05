import React from 'react';
import { PageContainerProps } from './@types';
import styled from 'styled-components'
import { DefaultAnimation } from '../../../styles/animation';

const Wrapper = styled.div`
	position: relative;
    display: flex;
    flex-direction: column;
	padding: 40px;
    height: 100%;
    min-height: 100vh;
	animation-duration: 1000ms;
	animation-delay: 0ms;
    
	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${DefaultAnimation};
		animation-fill-mode: backwards;
	}
`;

const PageContainer: React.FC<PageContainerProps> = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default PageContainer;
