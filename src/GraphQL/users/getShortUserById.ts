import { gql } from '@apollo/client';

export const QL_GET_SHORT_USER_BY_ID = gql`
    query($id: String!) {
        getUserById(id: $id) {
            id
            displayName
            photoURL
            phoneNumber
            email
            banned
        }
    }
`;
