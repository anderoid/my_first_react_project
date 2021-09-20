import Lister from './Components/Lister' ;
import Card from './Components/UI/Card'
import {data} from './Components/UI/data'
import Adder from "./Components/Adder";
import Modeler from "./Components/Modeler/Modeler";
import {React, useEffect, useReducer, useRef, useState} from "react";


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
        dated = {
            ...enteredData
            // , id: Math.random().toString()

        };
        reference.current = enteredData


        // Update the document title using the browser API
        // setPeople(prevPeople => ([...prevPeople, ...enteredData]))


        console.log(`People on APP saveonDataHandler = `)
        console.log(dated);

        dispatch({type: 'saveData'})

    }


    return (
        <div>
            {/*<Modeler dataer={people}/>*/}
            <Modeler onSaveData={saveOnDataHandler}/>

            {console.log("The state is ")}
            {console.log(state)}

            {state.map(person => <ul key={person.id}><Card>{person.name}</Card></ul>)}


            {/*<Lister dataer={people}/>*/}


            {/*<Adder dataer={people}/>*/}

        </div>
    );
}

export default App;
