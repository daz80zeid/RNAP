export type BanModalProps = {
    open: boolean
    onClose: () => void
    userName: string
    userId: string
    refetchUsers?: () => void
}

export type BanVariables = {
    idUser: string
    bannedPeriod: number
}
