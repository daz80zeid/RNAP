import { gql } from '@apollo/client';

export const QL_STATISTIC_GET_All_FIGHTERS = gql`
    query{
        getAllFighters {
            id
        }
    }
`;
