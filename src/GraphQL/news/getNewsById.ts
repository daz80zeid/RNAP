import { gql } from '@apollo/client';

export const QL_GET_NEWS_BY_ID = gql`
    query($input: GetNewsByIdArgsInput!){
        getNewsById(input: $input) {
            id
            title
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
