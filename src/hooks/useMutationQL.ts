import { DocumentNode, useMutation } from '@apollo/client';

export const useMutationQL = <T>(scheme: DocumentNode) => {
    const [request, { error, data }] = useMutation(scheme,)

    const mutation = (variables: T) => {
       return request({variables: { input: {...variables} }})
    }
    return [mutation, data, error]
}
