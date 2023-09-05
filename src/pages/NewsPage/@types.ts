import { News } from '../../types';

export type GetNewsByIdData = {
    getNewsById: News
}

export interface URLParamsType {
    id: string
}
