import { Fighter } from '../../../types';

export interface FightersTableProps {
    data: Fighter[]
    refetchData?: () => void
}

export interface FightersTableRowProps {
    fighter: Fighter,
    refetchData?: () => void
    index: number
}

export interface DeleteUserVariables {
    id: string
}

export interface DownloadLinkVariables {

}
