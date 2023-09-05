export type DeleteModalProps = {
    open: boolean
    onClose: () => void
    title?: string
    content?: string
    onDelete?: () => void
}
