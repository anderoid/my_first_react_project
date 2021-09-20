import Modal from "react-bootstrap/Modal";
import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../UI/Card";
import {data} from '../UI/data'

const Modeler = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [sem1Marks, setSem1Marks] = useState(0);
    const [sem2Marks, setSem2Marks] = useState(0);

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

    const Saver = () => {

        const dataBoomer = [
            {
                id: id,
                name: name,
                sem1:sem1Marks,
                sem2:sem2Marks,


            }
        ]

        props.onSaveData(dataBoomer)

        hideModal();
        setName('');
        setId('');
        setSem1Marks(0);
        setSem2Marks(0);
    }

    return (
        <>
            <button className="btn btn-success m-5" onClick={showModal}>Enter Details </button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>Please Enter your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className={'form-group '}>
                    <label className='m-2' htmlFor="namer">Name</label>
                    <input type="text" className="form-control" id="namer" aria-describedby="emailHelp"
                           placeholder="Enter Your name" value={name} onChange={nameHandler}/>
                    <label className='m-2' htmlFor="ider">ID</label>
                    <input type="text" className="form-control" id="ider" aria-describedby="emailHelp"
                           placeholder="Please enter the ID" value={id} onChange={idHandler}/>
                    <label className='m-2' htmlFor="sem1">Semester 1 Marks : </label>
                    <input type="number" className="form-control" id="sem1" aria-describedby="emailHelp"
                           placeholder="Please enter Semester 1 Grade" value={sem1Marks} onChange={sem1Handler}/>
                    <label className='m-2' htmlFor="sem2">Semester 2 Marks : </label>
                    <input type="number" className="form-control" id="sem2" aria-describedby="emailHelp"
                           placeholder="Please enter Semester 2 Grade" value={sem2Marks} onChange={sem2Handler}/>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" onClick={hideModal} className="btn btn-danger">Cancel</button>
                    <button type="button" className="btn btn-success" onClick={Saver}>Save</button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default Modeler;
