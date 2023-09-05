import { gql } from '@apollo/client';

export const QL_STATISTIC_GET_All_RINGS = gql`
    query{
        getAllRings {
            id
        }
    }
`;
