import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export default function AddItem(props) {
    //for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //for form
    const [nameValue, setNameValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [pictureValue, setPictureValue] = useState('');
    const [usageValue, setUsageValue] = useState('');
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1);
    const [currentStockValue, setCurrentStockValue] = useState(0);
    const [linkValue, setLinkValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [items, setItems] = useState(props.items)

    //console.log('Items in AddItem', items);

    return (
        <>
            <Button varint="secondary" onClick={handleShow}>
                + Item
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Item</Modal.Title>
                </Modal.Header>
                <form
                    onSubmit={async (event) => {
                        event.preventDefault()
                        const newItem = {
                            name: nameValue,
                            description: descriptionValue,
                            picture: pictureValue,
                            usage: usageValue,
                            min: minValue,
                            max: maxValue,
                            currentStock: currentStockValue,
                            link: linkValue,
                            price: priceValue,
                            venderId: props.venderId,
                        }
                        const res = await axios.post('/api/newItem', newItem);
                        if (res.data.success === true) {
                            //console.log("Items:", items);
                            setItems(...items, newItem);
                            handleClose();
                        }
                    }
                    }
                >
                    <Modal.Body>
                        Item:
                        <input
                            name="newItem"
                            id="newItem"
                            type="text"
                            required
                            onChange={(event) => setNameValue(event.target.value)}
                        />
                        Description:
                        <input
                            name="newDescription"
                            id="newDescription"
                            type="text"
                            onChange={(event) => setDescriptionValue(event.target.value)}
                        />
                        Picture:
                        <input
                            name="newPicture"
                            id="newPicture"
                            type="image"
                            onChange={(event) => setPictureValue(event.target.value)}
                        />
                        Usage:
                        <input
                            name="newUsage"
                            id="newUsage"
                            type="text"
                            onChange={(event) => setUsageValue(event.target.value)}
                        />
                        Min:
                        <input
                            name="newMin"
                            id="newMin"
                            type="number"
                            onChange={(event) => setMinValue(event.target.value)}
                        />
                        Max:
                        <input
                            name="newMax"
                            id="newMax"
                            type="number"
                            onChange={(event) => setMaxValue(event.target.value)}
                        />
                        Current Stock:
                        <input
                            name="newCurrentStock"
                            id="newCurrentStock"
                            type="number"
                            onChange={(event) => setCurrentStockValue(event.target.value)}
                        />
                        Link:
                        <input
                            name="newLink"
                            id="newLink"
                            type="url"
                            onChange={(event) => setLinkValue(event.target.value)}
                        />
                        Price:
                        <input
                            name="newPrice"
                            id="newPrice"
                            type="number"
                            onChange={(event) => setPriceValue(event.target.value)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
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