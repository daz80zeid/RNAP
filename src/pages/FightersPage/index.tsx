import React from 'react';
import { LoaderContainer, PageContainer } from '../../UI/containers';
import { Loader, Title } from '../../UI/elements';
import { FightersTable } from '../../UI/components';
import {Requests} from '../../GraphQL'
import {GetAllFightersDataType} from './@types'
import { useQueryQL } from '../../hooks';


const FightersPage: React.FC = () => {
    const { data, isReady, refetch } = useQueryQL<GetAllFightersDataType>(Requests.QL_GET_ALL_FIGHTERS);

    return (
        <PageContainer>
            <Title text={'Бойцы'} size={35} margin="0 0 20px 0"/>
            {isReady ?
                <FightersTable data={data} refetchData={refetch}/> :
                <LoaderContainer>
                    <Loader/>
                </LoaderContainer>
            }
        </PageContainer>
        );
};

export default FightersPage;
