import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.fightingnet.club/graphql',
    // uri: 'https://api-staging.fightingnet.club/graphql',
    cache: new InMemoryCache()
})

export default client;

