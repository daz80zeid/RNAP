import React from 'react';
import { useQueryQL } from '../../hooks';
import { Requests } from '../../GraphQL';
import { NewsTable } from '../../UI/components';
import { LoaderContainer, PageContainer } from '../../UI/containers';
import { Loader, Title } from '../../UI/elements';
import { GetAllNewsData } from './@types';

const NewsListPage = () => {
    const { data, isReady } = useQueryQL<GetAllNewsData>(Requests.QL_GET_ALL_NEWS);

    return (
        <PageContainer>
            <Title text="Новости" size={35} margin="0 0 20px 0"/>
            {isReady ?
                <NewsTable data={data}/>
            : <LoaderContainer>
                    <Loader/>
                </LoaderContainer>
            }
        </PageContainer>
    );
};

export default NewsListPage;
