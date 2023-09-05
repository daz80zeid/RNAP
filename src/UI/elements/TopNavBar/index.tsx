import React from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ( {
    backIcon: {
        color: '#fff',
    }
} ));

const Wrapper = styled.div`
	padding-bottom: 20px;
	padding-left: 10px;
`;

const BackWrapper = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	cursor: pointer;
    transition: 0.2s;

	&:hover {
		span, svg {
			opacity: 0.7
		}

	}
`;

const ActionTitle = styled.span`
	color: #fff;
	font-weight: 500;
`;

const TopNavBar: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Wrapper>
            <BackWrapper onClick={() => history.goBack()}>
                <ArrowBackIosIcon className={classes.backIcon} />
                <ActionTitle>
                    Назад
                </ActionTitle>
            </BackWrapper>
        </Wrapper>
    );
};

export default TopNavBar;
