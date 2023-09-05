import { FullUser } from '../types';

export const getUserType: (user: FullUser) => string[] = (user: FullUser) => {
    if(!!user.fighter) return ['fighter', 'Боец']
    if(!!user.referee) return ['referee', 'Рефери']
    if(!!user.ring) return ['ring', 'Ринг']
    if(!!user.fan) return ['fan', 'Фанат']
    if(!!user.videographer) return ['videographer', 'Видеооператор']

    return ['error', 'ошибка']
}
