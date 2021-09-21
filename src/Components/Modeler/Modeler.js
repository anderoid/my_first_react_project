import Modal from "react-bootstrap/Modal";
import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../UI/Card";
import {data} from '../UI/data'
import {Accordion, Badge, Col, Container, InputGroup, Row, Table} from "react-bootstrap";
import Form from 'react-bootstrap/Form';


const Modeler = (props) => {
    const [validated, setValidated] = useState(false);

    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [sem1Marks, setSem1Marks] = useState(0);
    const [sem2Marks, setSem2Marks] = useState(0);
    const [subj1Name, setSubj1Name] = useState('');
    const [subj1Marks, setSubj1Marks] = useState(0);
    const [subj2Name, setSubj2Name] = useState('');
    const [subj2Marks, setSubj2Marks] = useState(0);
    const [subj3Name, setSubj3Name] = useState('');
    const [subj3Marks, setSubj3Marks] = useState(0);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const nameHandler = (e) => {

        setName(e.target.value);
    }
    const idHandler = (e) => {

        setId(e.target.value);
    }
    const sem1Handler = (e) => {

        setSem1Marks(e.target.value);
    }
    const sem2Handler = (e) => {

        setSem2Marks(e.target.value);
    }
    const sub1NameHandler = (e) => {
        setSubj1Name(e.target.value);
    }
    const sub1MarksHandler = (e) => {
        setSubj1Marks(e.target.value);
    }
    const sub2NameHandler = (e) => {
        setSubj2Name(e.target.value);
    }
    const sub2MarksHandler = (e) => {
        setSubj2Marks(e.target.value);
    }
    const sub3NameHandler = (e) => {
        setSubj3Name(e.target.value);
    }
    const sub3MarksHandler = (e) => {
        setSubj3Marks(e.target.value);
    }


    const subjectAdder = () => {

        return <div>

            <label htmlFor="">Subject Name : </label>
            <input type="text"/>

        </div>

    }

    const Saver = () => {






        const dataBoomer = [
            {
                id: id,
                name: name,
                subj1: subj1Name,
                subj1Marks: subj1Marks,
                subj2: subj2Name,
                subj2Marks: subj2Marks,
                subj3: subj3Name,
                subj3Marks: subj3Marks
            }
        ]

        props.onSaveData(dataBoomer)

        setValidated(true);

        if (name !== '')
            hideModal();

        setName('');
        setId('');
        setSubj1Name('')
        setSubj1Marks('')
        setSubj2Name('')
        setSubj2Marks('')
        setSubj3Name('')
        setSubj3Marks('')
    }

    return (

        <>
            <button className="btn btn-success m-5" onClick={showModal}>Enter Details</button>
            <Form noValidate validated={validated}>

                <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Header>
                        <Modal.Title>Please Enter your Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={'form-group '}>


                        <Form.Label className='m-2' htmlFor="namer">Name</Form.Label>

                        {/*<InputGroup hasValidation>*/}
                            {/*<InputGroup.Text>@</InputGroup.Text>*/}
                            {/*<Form.Control*/}
                            {/*    type="text" className="form-control" id="namer"*/}
                            {/*    aria-describedby="emailHelp"*/}
                            {/*    placeholder="Enter Your name" value={name} onChange={nameHandler}/>*/}

                            {name === '' ? <div>
                                <Form.Control type="text" className="form-control" id="namer"
                                              aria-describedby="emailHelp"
                                              placeholder="Enter Your name" value={name} onChange={nameHandler} required isInvalid />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </div> : <Form.Control type="text" className="form-control" id="namer"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Enter Your name" value={name} onChange={nameHandler}/>
                               }

                        {/*</InputGroup>*/}


                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                        <label className='m-2' htmlFor="ider">ID</label>
                        <input type="text" className="form-control" id="ider" aria-describedby="emailHelp"
                               placeholder="Please enter the ID" value={id} onChange={idHandler}/>


                        <Container>

                            <Row>

                                <Col className={'text-center '}>
                                    <Badge className='mt-3 mb-2 text-center font-weight-bold' bg="secondary">
                                        Subject
                                    </Badge>
                                    <input type="text" className="form-control text-center" id="sub1Name"
                                           aria-describedby="emailHelp"
                                           placeholder="Subject 1 " value={subj1Name} onChange={sub1NameHandler}/>
                                </Col>
                                <Col className={'text-center'}>
                                    {/*<label className='mt-3 mb-2 ' htmlFor="sem2">Marks : </label>*/}
                                    <Badge className='mt-3 mb-2 text-center font-weight-bold' bg="secondary">
                                        Marks :
                                    </Badge>
                                    <input type="number" className="form-control mb-3 text-center" id="sem2"
                                           aria-describedby="emailHelp"
                                           placeholder="GPA" value={subj1Marks}
                                           onChange={sub1MarksHandler}/>
                                </Col>
                            </Row>
                            <Row>

                                <Col className={'text-center'}>

                                    <input type="text" className="form-control text-center" id="sub2Name"
                                           aria-describedby="emailHelp"
                                           placeholder="Subject 2 " value={subj2Name} onChange={sub2NameHandler}/>
                                </Col>

                                <Col className={'text-center'}>
                                    <input type="number" className="form-control mb-3 text-center" id="sem2"
                                           aria-describedby="emailHelp"
                                           placeholder="GPA" value={subj2Marks}
                                           onChange={sub2MarksHandler}/>
                                </Col>
                            </Row>
                            <Row>

                                <Col className={'text-center'}>

                                    <input type="text" className="form-control text-center" id="sub3Name"
                                           aria-describedby="emailHelp"
                                           placeholder="Subject 3 " value={subj3Name} onChange={sub3NameHandler}/>
                                </Col>

                                <Col className={'text-center'}>
                                    <input type="number" className="form-control mb-3 text-center" id="sem3"
                                           aria-describedby="emailHelp"
                                           placeholder="GPA" value={subj3Marks}
                                           onChange={sub3MarksHandler}/>
                                </Col>
                            </Row>

                            <Row>
                                <button className={'btn btn-success'} onClick={() => <Card>
                                    <Col className={'text-center'}>

                                        <input type="text" className="form-control text-center" id="sub3Name"
                                               aria-describedby="emailHelp"
                                               placeholder="Subject 3 " value={subj3Name} onChange={sub3NameHandler}/>
                                    </Col>

                                    <Col className={'text-center'}>
                                        <input type="number" className="form-control mb-3 text-center" id="sem3"
                                               aria-describedby="emailHelp"
                                               placeholder="GPA" value={subj3Marks}
                                               onChange={sub3MarksHandler}/>
                                    </Col>
                                </Card>}>
                                    Add New Subject
                                </button>
                            </Row>

                        </Container>


                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" onClick={hideModal} className="btn btn-danger">Cancel</button>
                        <button type="submit" className="btn btn-success" onClick={Saver}>Save</button>
                        {/*<button type="submit" className="btn btn-success">Save</button>*/}
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    );
};
export default Modeler;
