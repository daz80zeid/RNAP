import React from 'react';
import { LoaderContainer, PageContainer } from '../../UI/containers';
import { useQueryQL } from '../../hooks';
import { Requests } from '../../GraphQL';
import { GetNewsByIdData, URLParamsType } from './@types';
import { useHistory, useParams } from 'react-router-dom';
import { Loader, TopNavBar } from '../../UI/elements';
import { CommentsList, NewsCard } from '../../UI/components';

const NewsPage: React.FC = () => {
    const history = useHistory();
    const { id: newsId } = useParams<URLParamsType>();
    const { data, isReady, error } = useQueryQL<GetNewsByIdData>(Requests.QL_GET_NEWS_BY_ID, { id: newsId }, true);

    if (error) history.push('/news');

    return (
        <PageContainer>
            <TopNavBar/>
            {isReady ?
                <>
                    <NewsCard news={data}/>
                    <CommentsList newsId={data.id}/>
                </> :
                <LoaderContainer>
                    <Loader/>
                </LoaderContainer>
            }
        </PageContainer>
    );
};

export default NewsPage;
