import moment from 'moment';

export const getFightersAge: ( dateOfBirth: string ) => number | string = ( dateOfBirth: string ) => {
    if (!dateOfBirth) return 'Не указан';
    return moment().diff(moment(new Date(dateOfBirth)), 'year');
};
