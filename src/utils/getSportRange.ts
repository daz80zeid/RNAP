export const getSportRange: ( range: string ) => string = ( range: string ) => {
    switch (range) {
        case 'ZMS':
            return 'ЗМС';
        case 'MC':
            return 'МС';
        case 'KMS':
            return 'КМС';
        case 'FIRST_RANK':
            return '1 разряд';
        case 'SECOND_RANK':
            return '2 разряд';
        case 'THIRD_RANK':
            return '3 разряд';
        default:
            return 'Другое';
    }
};

