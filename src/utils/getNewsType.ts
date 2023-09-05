export const getNewsType: (type: string) => string = (type: string) => {
    switch (type) {
        case 'fight': return 'Бой'
        case 'post': return 'Пост'
        default: return 'Событие'
    }
}
