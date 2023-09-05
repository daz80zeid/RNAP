import React from 'react';
import { ComponentContainer } from '../../containers';
import { SocialStatisticBadgeProps } from './@types';
import { Loader, StatisticValue, Title } from '../../elements';
import styled from 'styled-components';
import { useQueryQL } from '../../../hooks';
import { Requests } from '../../../GraphQL';

const GridWrapper = styled.div`
	grid-area: social-statistic;
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

const SocialStatisticBadge: React.FC<SocialStatisticBadgeProps> = () => {
    const { data: news, isReady: newsReady } = useQueryQL(Requests.QL_STATISTIC_GET_ALL_NEWS);
    const { data: comments, isReady: commentsReady } = useQueryQL(Requests.QL_STATISTIC_GET_All_COMMENTS);
    return (
        <GridWrapper>
            <ComponentContainer width="100%" height="100%">
                <Title text="Социальная активность" size={25}/>
                <Content>
                    {newsReady && commentsReady ? <>
                            <StatisticValue title="Количество новостей" value={news.length}/>
                            <StatisticValue title="Количество комментариев" value={comments.length}/>
                            <StatisticValue title="Соотношение комментариев к новостям"
                                            value={( comments.length / news.length ).toFixed(2)}/>

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

export default SocialStatisticBadge;
