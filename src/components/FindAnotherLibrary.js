import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ListGroup} from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

// template from https://react-bootstrap.netlify.app/docs/components/modal/
function FindAnotherLibrary(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Find Another Library
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 style={{ color: 'green' }}>Available</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <FaCheckCircle style={{ color: 'green' }}/> Central Public Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCheckCircle style={{ color: 'green' }}/> Shawnessy Library<
                        /ListGroup.Item>
                    <ListGroup.Item>
                        <FaCheckCircle style={{ color: 'green' }}/> Southwood Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCheckCircle style={{ color: 'green' }}/> Louise Riley Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCheckCircle style={{ color: 'green' }}/> Seton Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCheckCircle style={{ color: 'green' }}/> Memorial Park Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCheckCircle style={{ color: 'green' }}/> Fish Creek Library
                    </ListGroup.Item>
                </ListGroup>

                <h4 className="mt-2" style={{ color: 'red' }}>Not Available</h4>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <FaCircleXmark style={{ color: 'red' }}/> Nose Hill Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCircleXmark style={{ color: 'red' }}/> Signal Hill Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCircleXmark style={{ color: 'red' }}/> Sage Hill Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCircleXmark style={{ color: 'red' }}/> Saddletowne Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCircleXmark style={{ color: 'red' }}/> Rocky Ridge Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCircleXmark style={{ color: 'red' }}/> Rocky Ridge Library
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaCircleXmark style={{ color: 'red' }}/> Forest Lawn Library
                    </ListGroup.Item>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FindAnotherLibrary;