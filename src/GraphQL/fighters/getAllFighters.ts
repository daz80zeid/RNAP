import { gql } from '@apollo/client';

export const QL_GET_ALL_FIGHTERS = gql`
    query {
        getAllFighters {
            id
            displayName
            phoneNumber
            banned
            fighter {
                id
                dateOfBirth
                height
                weight
                basicStyle
                isProfessional
                sportCategory
                isReadyFighter
                trainer
                belongingClub
            }
        }
    }
`;
