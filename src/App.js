import Lister from './Components/Lister' ;
import Card from './Components/UI/Card'
import {data} from './Components/UI/data'
import Adder from "./Components/Adder";
import Modeler from "./Components/Modeler/Modeler";
import {React, useEffect, useReducer, useRef, useState} from "react";
import todoReducer from './Components/Reducers/ListChangeReducer'
import {useAccordionButton} from 'react-bootstrap/AccordionButton';
import {Accordion, Table} from "react-bootstrap";
import AccordiansGeneric from "./Utils/AccordiansGeneric";


function App() {

    // const [state, setPeople] = useState(data);
    const reference = useRef({});

    let dated = {}

    const todoReducer = (state, action) => {
        switch (action.type) {
            case 'saveData':
                const here_name = (reference.current).name;
                // const here_name = 'Surya';
                const here_id = (reference.current).id;
                // const here_id = 124;

                console.log(`here_name = ${here_name} , here_id : ${here_id}`)

                console.log("After updating ref dude in function")
                console.log([...state, {id: here_id, name: here_name}])

                // return [...state, {id: here_id, name: here_name}]
                return [...state, ...reference.current]
            // return [reference.current]
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(todoReducer, data);

    const saveOnDataHandler = (enteredData) => {
        reference.current = enteredData
        dispatch({type: 'saveData'})
    }




    return (
        <div>




            {/*<Modeler dataer={people}/>*/}
            <Card><h1 className={'text-center text-success'}>Please Enter your Marks</h1></Card>
            <Modeler onSaveData={saveOnDataHandler}/>

            {console.log("The state is ")}
            {console.log(state)}

            {state.map(
                person =>


                    <ul key={person.id}>

                        <Card>


                            <AccordiansGeneric name={person.name}
                                               id={person.id}
                                               sem1Grade={person.sem1}
                                               sem2Grade={person.sem2}

                            >


                            </AccordiansGeneric>

                            {/*{`Name: ${person.name}`}*/}
                            {/*{'                          |||                    '}*/}
                            {/*{`Student ID: ${person.id}`}*/}
                            {/*{'                          |||                    '}*/}
                            {/*{`Semester 1 Grade : ${person.sem1}`}*/}
                            {/*{'                          |||                    '}*/}
                            {/*{`Semester 1 Grade : ${person.sem2}`}*/}
                            {/*{'                          |||                    '}*/}
                            {/*{`Semester Average Grade : ${(Number(person.sem1) + Number(person.sem2))/2}`}*/}


                        </Card>

                    </ul>
            )}


            {/*<Lister dataer={people}/>*/}


            {/*<Adder dataer={people}/>*/}

        </div>
    );
}

export default App;
