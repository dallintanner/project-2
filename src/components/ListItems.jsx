import ItemDetails from "./ItemDetails";
import AddItem from "./AddItem.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function ListItems(props) {

    return (
        <Container>
            {props.items ?
                    props.items.map(item => {
                        return (
                            <Row>
                                <Col xs= "3">
                                    <li key={item.id}>{item.name}</li>
                                </Col>
                            </Row>
                        );
                    })
                : null}
        </Container>
    );
}