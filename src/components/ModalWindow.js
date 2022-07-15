import React, { useState } from 'react';
import Modal from 'react-modal';
import { modalStyle } from '../styles/AppStyles';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const ModalWindow = ({ modalIsOpen, setIsOpen, position, title, artist, duration }) => {
    //console.log(data);

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={modalStyle}
                contentLabel="Track details">

                <div style={modalStyle.songData}>
                    <div style={modalStyle.title}>
                        <h3>Track details</h3>
                        <button onClick={closeModal} style={modalStyle.button}>&#9587;</button>
                    </div>
                    <h1>{position}. {title}</h1>
                    <h3 style={modalStyle.h3}>{artist}</h3>
                    <p style={modalStyle.p}>{duration}</p>
                </div>
            </Modal>
        </div>
    );
}

export default ModalWindow;