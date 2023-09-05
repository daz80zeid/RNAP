import React from 'react';
import { PageContainer } from '../../UI/containers';
import { Title } from '../../UI/elements';
import styled from 'styled-components';
import { MainStatisticBadge, SocialStatisticBadge, UsersStatisticBadge } from '../../UI/components';

const MainBadgesWrapper = styled.div`
	display: grid;
	grid-template-areas: 'main-statistic main-statistic users-statistic''social-statistic . . ';
	grid-template-columns: 2fr 1fr;
	gap: 30px;
`;

const StatisticPage = () => {
    return (
        <PageContainer>
            <Title text="Статистика" size={35} margin='0 0 20px 0'/>
            <MainBadgesWrapper>
                <MainStatisticBadge/>
                <SocialStatisticBadge/>
                <UsersStatisticBadge/>
            </MainBadgesWrapper>
        </PageContainer>
    );
};

export default StatisticPage;
