import React, { useState } from 'react'
import './styles.css'

import Navbar from '../../components/Navbar'
import SubjectList from '../../components/SubjectList'
import RecordingList from '../../components/RecordingList'
import Modal from '../../components/Modal'

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalData, setModalData] = useState(null)

    const openUploadModal = () => {
        setIsModalOpen(true);
        setModalData({type: 'uploadFile'});
    }
    
    const openNotesModal = (data) => {
        setIsModalOpen(true);
        setModalData({
            type: 'displayNotes',
            data: data
        });
    }

    return (
        <>
            <Navbar />

            <section className="section">
                <div className="body__container">
                    <div className="body__header">
                        <h2 className="body__title">
                            Your Collection
                        </h2>
                        <div className="search__container">
                            <i className="bx bx-search"></i>
                            <input type="search" name="search" id="" placeholder="Search querry here..." />
                        </div>
                    </div>

                    <SubjectList />

                    <RecordingList openNotesModal={openNotesModal}  />
                </div>
                <button 
                    className="upload-file-btn" id="upload-file-btn"
                    onClick={openUploadModal}    
                >
                    <i className='bx bx-upload'></i>
                    <span>Upload Audio/Video File</span>
                </button>
            </section>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalData={modalData} setModalData={setModalData} />

        </>
    )
}

export default Home
