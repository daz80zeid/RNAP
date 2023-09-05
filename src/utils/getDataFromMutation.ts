export const getDataFromMutation: (data: any) => any = ( { data }: any) => {
    if(!data) return undefined
    return Object.values(data)[0]
};
