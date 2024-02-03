import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function ShowDetails(props) { //{name, venderId, vender, setVenders, index, rep, notes, website}
    //for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //for form
    const [venderValue, setVenderValue] = useState('');
    const [repValue, setRepValue] = useState('');
    const [notesValue, setNotesValue] = useState('');
    const [websiteValue, setWebsiteValue] = useState('');

    return (
        <>
            <Button varient="primary" onClick={handleShow}>
                {props.name}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="xl"
            //dialogClassName="modal-90w"       figure out how to make it bigger
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <form
                    onSubmit={async (event) => {
                        event.preventDefault()
                        const setVender = {
                            name: venderValue,
                            rep: repValue,
                            notes: notesValue,
                            website: websiteValue,
                        }
                        const res = await axios.post('/api/newVender', setVender);
                        // console.log(setVender);
                        // console.log(res);
                        if (res.data.success === true) {
                            props.setVender([...props.vender, res.data.setVenders]);//spread operator creates copy of vender object
                            handleClose();
                            // console.log('hit');
                        }
                    }
                    }
                >
                    <Modal.Body>
                        {/* Vender: 
                        <input
                            name="newVender"
                            id="newVender"
                            type="text"
                            required
                            onChange={(event) => setVenderValue(event.target.value)}
                        /> */}
                        <Row>
                            <Col xs="6">
                                Rep:
                                <input
                                    name="newRep"
                                    id="newRep"
                                    type="text"
                                    defaultValue={`${props.rep}`}
                                    onChange={(event) => setRepValue(event.target.value)}
                                />
                            </Col>
                            <Col xs="6">
                                Website:
                                <input
                                    name="newWebsite"
                                    id="newWebsite"
                                    type="text"
                                    defaultValue={`${props.website}`}
                                    onChange={(event) => setWebsiteValue(event.target.value)}
                                />
                            </Col>
                        </Row>
                        Notes:
                        <textarea
                            name="newNotes"
                            id="newNotes"
                            type="text"
                            defaultValue={`${props.notes}`}
                            onChange={(event) => setNotesValue(event.target.value)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="deleteButton" onClick={async (event) => {
                            event.preventDefault

                            const res = axios.delete(`/api/venderItems/${props.venderId}`).then(() => {
                                console.log("Item Deleted", props.index);
                                const vendersCopy = props.vender.slice()
                                vendersCopy.splice(props.index, 1)
                                props.setVenders(vendersCopy);
                            })

                            handleClose();
                        }}>
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={handleClose} color="red">
                            Cancel
                        </Button>
                        <Button type="submit" variant="primary">Save</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}