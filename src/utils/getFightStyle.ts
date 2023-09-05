export const getFightStyle: ( fightStyle: string ) => string = ( fightStyle: string ) => {
    switch (fightStyle) {
        case 'MMA':
            return 'MMA';
        case 'KIK':
            return 'Кикбоксинг';
        case 'BOX':
            return 'Бокс';
        case 'TAI_BOX':
            return 'Тайский бокс';
        case 'GRAPPLING':
            return 'Грэплнинг';
        case 'KARATE':
            return 'KARATE';
        case 'JUJUTSU':
            return 'Джиу-Джитсу';
        case 'SAMBO':
            return 'Самбо';
        case 'DZUDO':
            return 'Дзюдо';
        default:
            return 'Другое';
    }
};
