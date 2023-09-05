export interface Referee {
    id: string
    dateOfBirth: string
    priceFix: number
    pricePercent: number
    practice: string
    category: string[]
    singleCombatsType: string[]
    belongingClub: string
    independentReferee: boolean
    location: string
    brigade: boolean
    secondMetrist: boolean
    additionally: string
}
