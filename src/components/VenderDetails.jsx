import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export default function ShowDetails({id, name, venderId, vender, setVenders, index}, props) {
    //for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     //for form
    //  const [venderValue, setVenderValue] = useState('');
    //  const [repValue, setRepValue] = useState('');
    //  const [notesValue, setNotesValue] = useState('');
    //  const [websiteValue, setWebsiteValue] = useState('');
 
     return (
         <>
            <Button varient="primary" onClick={handleShow}>
                {name}
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
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <form
                    onSubmit={async (event) => {
                        event.preventDefault()
                        const newVender = {
                        name: venderValue,
                        rep: repValue,
                        notes: notesValue,
                        website: websiteValue,
                        }
                        const res = await axios.post('/api/newVender', newVender);
                        console.log(newVender);
                        console.log(res);
                        // if(res.data.success === true){
                        //     props.newVender([...props.vender, res.data.newVender]);//spread operator creates copy of vender object
                        //     handleClose();
                        //     // console.log('hit');
                        // }
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
                        <Button variant="secondary" onClick={() => {
                            console.log(vender[index])
                            // const res = axios.delete(`/api/venderItems/${venderId}`).then(() => {
                            //     console.log("Item Deleted");
                            // })
                            // if(res.data.success === true){
                            //     handleClose();
                            //     console.log(`deleted ${vender}`);
                            // }
                        }}>
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="primary">Save</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}