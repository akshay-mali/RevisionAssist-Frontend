import React from 'react';
import recordingsData from '../data/recordings';

const RecordingList = ({ openNotesModal }) => {

    return (
        <div className="recording__list">
            {
                recordingsData.map(rec => (
                    <div className="recording__item" key={rec.id}>
                        <div className="recording__head">
                            <div className="recording__play">
                                <i className='bx bx-play'></i>
                            </div>
                            <h4 className="recording__name">{ rec.name }</h4>
                        </div>
                        <div className="recording__info">
                            <div className="recording__info-box">
                                <span>Uploaded on</span>
                                <p>{ rec.uploadedOn }</p>
                            </div>
                            <div className="recording__info-box">
                                <span>Duration</span>
                                <p>{ rec.duration }</p>
                            </div>
                        </div>
                        <div className="recording__action">
                            <button className="view-notes-btn" id="view-notes-btn" onClick={() => openNotesModal(rec)}>
                                <i className='bx bx-notepad'></i>
                                <span>View Notes</span>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RecordingList
