import { useLocation } from 'react-router-dom';
export const useCurrentMenuSection: () => string = () => {
    const location = useLocation()
    const fightersRex =  /^\/fighters/gm;
    const statisticRex =  /^\/statistic/gm;
    const newsRex =  /^\/news/gm;

    if(fightersRex.test(location.pathname)) return 'fighters'
    if(statisticRex.test(location.pathname)) return 'statistic'
    if(newsRex.test(location.pathname)) return 'news'

    return "none"
}
