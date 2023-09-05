import React from 'react';
import { UserFullData, UserSmallCardProps } from './@types';
import { useQueryQL } from '../../../hooks';
import {Requests} from '../../../GraphQL'
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PrimaryDarkColor } from '../../../constants/Colors';
import { getUserType } from '../../../utils';

const Wrapper = styled.div`

`;

const UserContent = styled.div`
	display: flex;
`;

const UserImage = styled.div<{ url?: string }>`
	background-image: url(${( { url } ) => url});
	background-color: ${PrimaryDarkColor};
	width: 50px;
	height: 50px;
	background-position: center;
	background-size: cover;
	border-radius: 50%;
	margin-right: 20px;
`;

const UserName = styled.div`
    color: #fff;
`
const UserType = styled.div`
    color: #fff;
    font-size: 12px;
    opacity: 0.7;
`

const UserSmallCard: React.FC<UserSmallCardProps> = ({userId}) => {
    const {data, isReady} = useQueryQL<UserFullData>(Requests.QL_GET_FULL_USER_BY_ID,{ id: userId } )
    return (
        <Wrapper>
            {isReady ? <UserContent>
                <UserImage url={data.photoURL}/>
                <div>
                <UserName>{data.displayName}</UserName>
                <UserType>{getUserType(data)[1]}</UserType>
                </div>
            </UserContent> : <CircularProgress color="secondary" size={20}/>}
        </Wrapper>
    );
};

export default UserSmallCard;
