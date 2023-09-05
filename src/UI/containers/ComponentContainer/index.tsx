import React from 'react';
import { ComponentsContainerProps } from './@types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { PrimaryColor } from '../../../constants/Colors';
import styled from 'styled-components';
import { DefaultAnimation } from '../../../styles/animation';

const Wrapper = styled.div<{height?: string}>`
    height: ${({height}) => height || 'auto'};
	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${DefaultAnimation};
		animation-fill-mode: backwards;
	}
`;

const useStyles = makeStyles(() => ( {
    paper: {
        width: 'fit-content',
        padding: 20,
        background: PrimaryColor
    }
} ));

const ComponentContainer: React.FC<ComponentsContainerProps> = ( { children, width, height } ) => {
    const classes = useStyles();
    return (
        <Wrapper height={height}>
            <Paper elevation={3} className={classes.paper}
                   style={{ width: width || 'fit-content', height: height || 'auto' }}>
                {children}
            </Paper>
        </Wrapper>
    );
};

export default ComponentContainer;
