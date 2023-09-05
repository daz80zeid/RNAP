import { gql } from '@apollo/client';

export const QL_STATISTIC_GET_All_REFEREES = gql`
    query{
        getAllReferees {
            id
        }
    }
`;
