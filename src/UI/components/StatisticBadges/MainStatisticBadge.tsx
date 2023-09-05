import React from 'react';
import { ComponentContainer } from '../../containers';
import { MainStatisticBadgeProps } from './@types';
import { Loader, StatisticValue, Title } from '../../elements';
import styled from 'styled-components';
import { useQueryQL } from '../../../hooks';
import { Requests } from '../../../GraphQL';

const GridWrapper = styled.div`
	grid-area: main-statistic;
    height: 100%;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 0;
`;

const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MainStatisticBadge: React.FC<MainStatisticBadgeProps> = () => {
    const { data: users, isReady: usersReady } = useQueryQL(Requests.QL_STATISTIC_GET_ALL_USERS);
    const { data: news, isReady: newsReady } = useQueryQL(Requests.QL_STATISTIC_GET_ALL_NEWS);
    const { data: fights, isReady: fightsReady } = useQueryQL(Requests.QL_STATISTIC_GET_All_FIGHTS);

    return (
        <GridWrapper>
            <ComponentContainer width="100%" height="100%">
                <Title text="Общая статистика" size={25}/>
                <Content>
                    {usersReady && newsReady && fightsReady ?
                        <>
                            <StatisticValue title="Количество пользователей" value={users.length}/>
                            <StatisticValue title="Количество боев" value={fights.length}/>
                            <StatisticValue title="Количество новостей" value={news.length}/>
                        </> :
                        <LoaderWrapper>
                            <Loader/>
                        </LoaderWrapper>
                    }
                </Content>
            </ComponentContainer>
        </GridWrapper>
    );
};

export default MainStatisticBadge;
