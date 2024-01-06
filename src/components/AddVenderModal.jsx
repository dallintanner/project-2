import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

export default function AddVender() {
    //for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //for form
    const [venderValue, setVenderValue] = useState('');
    const [repValue, setRepValue] = useState('');
    const [notesValue, setNotesValue] = useState('');
    const [websiteValue, setWebsiteValue] = useState('');

    const handleSubmit = async (event, formData) => {
        event.preventDefault();

        const res = await axios.get(/api/, formData);
    };

    return (
        <>
            <Button varient="primary" onClick={handleShow}>
                Add New Vender
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Vender</Modal.Title>
                </Modal.Header>
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        const newVender = {
                        vender: venderValue,
                        rep: repValue,
                        notes: notesValue,
                        website: websiteValue,
                        }
                        console.log(newVender);
                        handleSubmit
                        }
                    }
                >
                    <Modal.Body>
                        Vender: 
                        <input
                            name="newVender"
                            id="newVender"
                            type="text"
                            required
                            onChange={(event) => setVenderValue(event.target.value)}
                        />
                        Rep: 
                        <input
                            name="newRep"
                            id="newRep"
                            type="text"
                            onChange={(event) => setRepValue(event.target.value)}
                        />
                        Website: 
                        <input
                            name="newWebsite"
                            id="newWebsite"
                            type="text" 
                            onChange={(event) => setWebsiteValue(event.target.value)}
                        />
                        Notes: 
                        <textarea
                            name="newNotes"
                            id="newNotes"
                            type="text"
                            onChange={(event) => setNotesValue(event.target.value)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="primary" onSubmit={handleSubmit} onClick={handleClose}>Save</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}