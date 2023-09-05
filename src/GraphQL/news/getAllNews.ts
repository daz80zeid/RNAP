import { gql } from '@apollo/client';

export const QL_GET_ALL_NEWS = gql`
    query {
        getAllNews{
            title
            id
            isActive
            createdAt
            updatedAt
            userId
            description
            idFight
            event
        }
    }
`;
