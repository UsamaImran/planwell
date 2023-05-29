import React from 'react';
import { Modal as MuiModal, ModalProps } from '@mui/material';

interface IModal extends ModalProps {}

function Modal({ children, ...props }: IModal) {
  return <MuiModal {...props}>{children}</MuiModal>;
}

export default Modal;
