import React from 'react';

export type PaginationProps = {
    count: number
    page: number
    onChangePage: (event: any, newPage: number) => void
    onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
    rowsPerPage: number
    component?: string
    rowsPerPageOptions: number[]

}
