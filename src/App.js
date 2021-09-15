import Lister from './Components/Lister' ;
import Card from './Components/UI/Card'
import {data} from './Components/UI/data'
import Adder from "./Components/Adder";
import Modeler from "./Components/Modeler/Modeler";
import {useEffect, useState} from "react";


function App() {

    const [people, setPeople] = useState(data);


    const SaveonDataHandler = (enteredData) => {
        const dated = {
            ...enteredData
            // , id: Math.random().toString()

        };
        // Update the document title using the browser API
        setPeople(dated);


        console.log(people);

    }


    return (
        <div>
            {/*<Modeler dataer={people}/>*/}
            <Modeler onSaveData={SaveonDataHandler}/>
            <Lister dataer={people}/>


            {/*<Adder dataer={people}/>*/}

        </div>
    );
}

export default App;
