import React, { useState } from 'react'

const Modal = ({ isModalOpen, setIsModalOpen, modalData, setModalData }) => {
    const UploadFileModal = () => {

        const [file, setFile] = useState(null)

        const onFileChange = (event) => {
            setFile(event.target.files[0])
        }

        return (
            <>
                <h1 className="modal__title">
                    Upload Audio/Video File
                </h1>

                <div className="drag-drop__container">
                    <div className="drag-drop__img"></div>
                    <p className="drag-drop__main">Drag & Drop your file here...</p>
                    <span>Make sure that the file format is either MP3 or MP4</span>
                    <p className="drag-drop__or">OR</p>
                    <input type="file" name="audiofile" id="audiofile" onChange={onFileChange} style={{ display: 'none' }} />
                    <label htmlFor="audiofile" className="drag-drop__btn modal__button">
                        Browse File
                    </label>
                </div>

                {
                    file &&
                    <div className="selected-file__info">
                        <h5>Selected File</h5>
                        <p>Filename: <span>{file.name}</span></p>
                        <p>Duration: <span>00:45:32</span></p>
                    </div>
                }
                <button className="modal__button modal__button-width">
                    Generate Notes
                </button>
            </>
        )
    }

    const DisplayNotesModal = () => {

        return (
            modalData &&
            <>
                <h1 className="modal__title">
                    Notes
                </h1>

                <div className="notes">
                    <div className="notes__info">
                        <div className="notes__subject-info">
                            <h4 className="notes__subject">{modalData.data.name}</h4>
                            <p className="notes__date">{modalData.data.uploadedOn}</p>
                        </div>
                        <div className="search__container keywords">
                            <i className="bx bx-search"></i>
                            <input type="search" name="search" id="" placeholder="Search keywords here..." />
                        </div>
                    </div>
                    <div className="notes__container">
                        {
                            modalData.data.notes.map(note => (
                                <div className="notes__box" key={note.id}>
                                    <div className="notes__header">
                                        <h5>{note.topic}</h5>
                                        <i className='bx bxs-pencil'></i>
                                    </div>
                                    <ul className="notes__body">
                                        {
                                            note.details.map(detail => (
                                                <li key={detail.id}>{detail.text}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <button className="modal__button modal__button-width">
                    Download PDF
                </button>
            </>
        )
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className={isModalOpen ? "modal__container show-modal" : "modal__container"}>
            <div className="modal__content">
                <div className="modal__close close-modal" title="Close" onClick={closeModal}>
                    <i className="bx bx-x"></i>
                </div>

                {
                    modalData && modalData.type === 'uploadFile' ? <UploadFileModal /> : <DisplayNotesModal />
                }

                <button className="modal__button-link close-modal" onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal
