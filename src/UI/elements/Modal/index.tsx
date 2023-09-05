import React from 'react';
import { ModalProps } from './@types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { ComponentContainer } from '../../containers';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Modal: React.FC<ModalProps> = ({open, onClose, children}) => {
    return (
        <Dialog
            PaperComponent={ComponentContainer}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            {children}
        </Dialog>
    );
};

export default Modal;
