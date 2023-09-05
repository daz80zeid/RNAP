import { gql } from '@apollo/client';

export const QL_GET_FULL_USER_BY_ID = gql`
    query($id: String!) {
        getUserById(id: $id) {
            id
            displayName
            photoURL
            phoneNumber
            email
            banned
            fan {
                id
                dateOfBirth
                preference
                additionally
                location
            }
            fighter {
                id
                isReadyFighter
                nickname
                isProfessional
                basicStyle
                readyToFightStyle
                sportCategory
                inSports
                belongingClub
                independentFighter
                trainer
                agent
                additionally
                dateOfBirth
                weight
                height
                location
                promoVideo
            }

            referee {
                id
                dateOfBirth
                priceFix
                pricePercent
                practice
                category
                singleCombatsType
                belongingClub
                independentReferee
                location
                brigade
                secondMetrist
                additionally
            }

            ring {
                id
                playgroundsType
                playgroundsSize
                contactPerson
                contactPhone
                doctor
                shower
                priceHour
                pricePercent
                additionally
                location
                lockerRoom
            }
            videographer {
                id
                experience
                additionally
                priceFix
                pricePercent
                location
                equipment
            }
            advertiser {
                id
                contactPerson
                contactPhone
                additionally
            }
        }
    }
`;
