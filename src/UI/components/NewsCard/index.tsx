import React from 'react';
import { ComponentContainer } from '../../containers';
import { NewsCardProps } from './@types';
import { Title } from '../../elements';
import styled from 'styled-components';
import { getNewsType } from '../../../utils';
import moment from 'moment';
import UserInfoPopover from '../UserInfoPopover';

const NewsType = styled.span`
	display: block;
	font-size: 13px;
	opacity: 0.7;
`;
const Content = styled.div`
	margin-top: 10px;
`;

const BottomWrapper = styled.div`
    width: 100%;
	font-size: 12px;
    display: flex;
    justify-content: flex-end;
`

const InfoBlock = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

const NewsCard: React.FC<NewsCardProps> = ( { news } ) => {
    const {
        createdAt,
        event,
        // id,
        title,
        updatedAt,
        userId,
        description
    } = news;

    return (
        <ComponentContainer width={'100%'}>
            <Title text={title || 'Без названия'} size={35} margin="0 0 30px 0"/>
            <NewsType>{getNewsType(event)}</NewsType>
            <Content>{description}</Content>
            <BottomWrapper>
            <InfoBlock>
                <span>Автор: {userId ? <UserInfoPopover userId={userId}/> : 'Система' }</span>
                <span>Создано: {moment(createdAt).format('D MMMM YYYY HH:mm')}</span>
                <span>Обновлено: {moment(updatedAt).format('D MMMM YYYY HH:mm')}</span>
            </InfoBlock>
            </BottomWrapper>
        </ComponentContainer>
    );
};

export default NewsCard;
