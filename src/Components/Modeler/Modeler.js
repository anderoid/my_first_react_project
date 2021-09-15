import Modal from "react-bootstrap/Modal";
import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../UI/Card";
import {data} from '../UI/data'

const Modeler = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [people, setPeople] = useState(data);
    const [name, setName] = useState('');
    const [id, setId] = useState('');

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

    const Saver = () => {

        const dataBoomer = {
            ...people,
            id:id,
            name:name
        }

        props.onSaveData(dataBoomer)




        // setName()
        // console.log(people);
        //
        // const dataSaver = () => {
        //     return [...people, {id: id, name: name}]
        // }
        //
        // console.log(`Name = ${name}`);
        // console.log(`ID = ${id}`)
        // console.log("DtaaSaver here = ")
        // console.log(dataSaver())
        //
        //
        // console.log('people before updation in Modeller = ')
        // console.log(people)
        //
        //
        // setPeople(prevPeople => ([...prevPeople, {id: id, name: name}]))
        // useEffect(() => {
        //     setPeople(prevPeople => ([...prevPeople, {id: id, name: name}]))

        // setPeople(dataSaver()) ;
        // });

        // setPeople([...people, {id: id, name: name}]);

        // {
        //     people.map(person => <ul><Card>{person.name}</Card></ul>)
        // }


        // console.log("People just after updation in saver");
        // console.log(people)
        //
        // props.onSaveData(people);

        // console.log(people);


        hideModal();
        setName('');
        setId('');
    }

    return (
        <>
            <button className="btn btn-success m-5" onClick={showModal}>Add Person</button>
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
