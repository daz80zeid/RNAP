import { DocumentNode, useQuery } from '@apollo/client';

export const useQueryQL = <T>( scheme: DocumentNode, variables?: any, withInput?: boolean ) => {

    const vars = {
        variables: withInput ? {input: variables} : variables
    }

    const {
        loading,
        data,
        error,
        refetch
    } = useQuery<T>(scheme, variables ? { ...vars } : undefined);
    return {
        loading, data: data
            ? !!Object.values(data)?.length && Object.values(data)[0]
            :
            undefined,
        error,
        refetch,
        isReady: !loading && !error && !!data
    };
};
