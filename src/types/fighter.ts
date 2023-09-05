export interface FighterObj {
    id: string
    dateOfBirth: string
    height: string
    weight: string
    basicStyle: string[]
    isProfessional: boolean
    sportCategory: string[]
    isReadyFighter: boolean
    trainer: string
    belongingClub: string
}

export interface Fighter {
    id: string
    displayName: string
    phoneNumber: string
    banned: boolean
    fighter: FighterObj
}
