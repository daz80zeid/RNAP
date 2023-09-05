export type UnbanModalProps = {
    open: boolean
    onClose: () => void
    userName: string
    userId: string
    refetchUsers?: () => void
}

export type UnbanVariables = {
    id: string
}
