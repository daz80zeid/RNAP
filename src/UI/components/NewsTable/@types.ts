import { News } from '../../../types';

export type NewsTableProps = {
    data: News[]
}

export interface NewsTableRowProps {
    news: News,
    index: number
}

