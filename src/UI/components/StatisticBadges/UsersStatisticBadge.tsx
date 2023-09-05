import React from 'react';
import { ComponentContainer } from '../../containers';
import { UsersStatisticBadgeProps } from './@types';
import { Loader, StatisticValue, Title } from '../../elements';
import styled from 'styled-components';
import { useQueryQL } from '../../../hooks';
import { Requests } from '../../../GraphQL';
import UserStatisticChart from '../UserStatisticChart';
import {
    fanColor,
    fighterColor,
    refereeColor,
    ringColor,
    videographerColor
} from '../../../constants/UsersChartColors';

const GridWrapper = styled.div`
	grid-area: users-statistic;
    height: 100%;
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	margin: 20px 0;
`;

const StatWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UsersStatisticBadge: React.FC<UsersStatisticBadgeProps> = () => {
    const { data: fighters, isReady: fightersReady } = useQueryQL(Requests.QL_STATISTIC_GET_All_FIGHTERS);
    const { data: referees, isReady: refereesReady } = useQueryQL(Requests.QL_STATISTIC_GET_All_REFEREES);
    const { data: rings, isReady: ringsReady } = useQueryQL(Requests.QL_STATISTIC_GET_All_RINGS);
    const {
        data: videographers,
        isReady: videographersReady
    } = useQueryQL(Requests.QL_STATISTIC_GET_ALL_VIDEOGRAPHERS);
    const { data: fans, isReady: fansReady } = useQueryQL(Requests.QL_STATISTIC_GET_ALL_FANS);

    return (
        <GridWrapper>
            <ComponentContainer width="100%" height="100%">
                <Title text="Пользователи" size={25}/>
                <Content>
                    {fightersReady && refereesReady && ringsReady && videographersReady && fansReady ? <>
                            <StatWrapper>
                                <StatisticValue title="Количество бойцов" value={fighters.length}
                                                circleColor={fighterColor}/>
                                <StatisticValue title="Количество судей" value={referees.length}
                                                circleColor={refereeColor}/>
                                <StatisticValue title="Количество рингов" value={rings.length} circleColor={ringColor}/>
                                <StatisticValue title="Количество видеооператоров" value={videographers.length}
                                                circleColor={videographerColor}/>
                                <StatisticValue title="Количество фанатов" value={fans.length} circleColor={fanColor}/>
                            </StatWrapper>
                            <UserStatisticChart fightersCount={fighters.length} refereeCount={referees.length}
                                                ringsCount={rings.length} videographersCount={videographers.length}
                                                fansCount={fans.length}/>
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

export default UsersStatisticBadge;
