import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';
import InlineSVG from 'react-inlinesvg';
import { ComponentContainer, PageContainer } from '../../UI/containers';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { BlueColor } from '../../constants/Colors';

const useStyles = makeStyles(() => ( {
    logo: {
        height: 300
    }
} ));

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	color: #fff;
	text-align: center;
	font-size: 35px;
	margin-bottom: 20px;
`;

const GuideTitle = styled.div`
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
`;

const Row = styled.div`
	font-size: 14px;
	margin-bottom: 10px;
`;

const Link = styled.span`
	color: ${BlueColor};
	text-decoration: underline;
	cursor: pointer;
`;

const WelcomePage = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <PageContainer>
            <Wrapper>
                <InlineSVG src={Logo} className={classes.logo} width={250}/>
                <Title>Добро пожаловать в админ-панель <br/> FightClub Network!</Title>
                <ComponentContainer>
                    <GuideTitle>Быстрый старт</GuideTitle>
                    <Row>
                       Список с информацией о бойцах нахродится во вкладке <Link
                        onClick={() => history.push('/fighters')}>Бойцы</Link>
                    </Row>
                    <Row>
                        Статистика сервиса находится во вкладке <Link
                        onClick={() => history.push('/statistic')}>Статистика</Link>
                    </Row>
                    <Row>
                        Просмотр новостей и управление комментариями находится во вкладке <Link
                        onClick={() => history.push('/news')}>Новости</Link>
                    </Row>
                </ComponentContainer>
            </Wrapper>
        </PageContainer>
    );
};

export default WelcomePage;
