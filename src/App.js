import Lister from './Components/Lister' ;
import Card from './Components/UI/Card'
import {data} from './Components/UI/data'
import Adder from "./Components/Adder";
import Modeler from "./Components/Modeler/Modeler";
import {useEffect, useState} from "react";


function App() {

    const [people, setPeople] = useState(data);
    let dated= {}

    const saveOnDataHandler = (enteredData) => {
         dated = {
            ...enteredData
            // , id: Math.random().toString()

        };
        // Update the document title using the browser API
        // setPeople(prevPeople => ([...prevPeople, ...enteredData]))



        console.log(`People on APP saveonDataHandler = `)
        console.log(dated);

        // setPeople(prevPeople=>([...prevPeople, dated]));
        // console.log("Setter People = ")
        // console.log(people)
        //     setPeople(dated)
        // console.log("Doer People = ")
        // console.log(people)


    }


    return (
        <div>
            {/*<Modeler dataer={people}/>*/}
            <Modeler onSaveData={saveOnDataHandler}/>
            <Lister dataer={people}/>


            {/*<Adder dataer={people}/>*/}

        </div>
    );
}

export default App;
