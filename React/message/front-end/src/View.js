import React, { useEffect, useState } from 'react';
import { getAllMessages, deleteAMessage, updateMessage } from './services/allApi';
import './View.css';

function View({ message }) {
    const [showmessage, setShowMessage] = useState("");
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [editId, setEditId] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    // const [newuploadingMessage,setNewuploadingMessage] = useState([])
    const [error, setError] = useState(null);

    const getAllUploadedMessage = async () => {
        try {
            const { data } = await getAllMessages();
            setShowMessage(data);
        } catch (err) {
            setError(`Failed to fetch messages: ${err.message}`);
        }
    };

    const removeVideo = async (id) => {
        try {
            await deleteAMessage(id);
            setDeleteStatus(true);
        } catch (err) {
            setError(`Failed to delete message: ${err.message}`);
        }
    };

    const startEditing = (id, currentMessage) => {
        setEditId(id);
        setNewMessage(currentMessage);
    };

    const cancelEdit = () => {
        setEditId(null);
        setNewMessage('');
    };

    const saveEdit = async (id) => {
        try {
            await updateMessage(id, newMessage);
            setEditId(null);
            setNewMessage('');
            setDeleteStatus(true);
        } catch (err) {
            setError(`Failed to update message: ${err.message}`);
        }
    };

    useEffect(() => {
        getAllUploadedMessage();
        setDeleteStatus(false);
    }, [message, deleteStatus]);

    return (
        <>
            <h4 style={{ textAlign: "center" }}>All Messages</h4>
            <div>
                {error && <p className='fw-bolder fs-5 text-danger'>{error}</p>}
                {showmessage?.length > 0 ? (
                    showmessage?.map((message) => (
                        <div key={message?.id}>
                            <ul>
                                <p key={message?.id} className='upload-item'>
                                    <button
                                        onClick={() => removeVideo(message?.id)}
                                        className='btn text-danger'
                                    >
                                        <i className='fa-solid fa-trash fs-5'></i>
                                    </button>

                                    {editId === message?.id ? (
                                        <>
                                            <input
                                                type='text'
                                                value={newMessage}
                                                onChange={(e) => setNewMessage(e.target.value)}
                                                className='message-input'
                                            />
                                            <button
                                                onClick={() => saveEdit(message?.id)}
                                                className='btn text-success'
                                            >
                                                <i className='fa-solid fa-save fs-5'></i>
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className='btn text-secondary'
                                            >
                                                <i className='fa-solid fa-times fs-5'></i>
                                            </button>
                                                    
                                        </>
                                    ) : (
                                        <>
                                            <span>{message?.message}</span>
                                            <button
                                                    onClick={() => startEditing(message?.id, message?.message)}
                                                    className='btn text-primary'
                                            >
                                                <i className='fa-solid fa-pen-to-square fs-5'></i>
                                            </button>
                                        </>
                                        )}
                                </p>
                            </ul>
                        </div>
                    ))
                ) : (
                    <p className='fw-bolder fs-5 text-danger'>Nothing to display...</p>
                )}
            </div>
        </>
    );
}

export default View;