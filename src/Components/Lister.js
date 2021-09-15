import {React, useState} from 'react';
import Card from './UI/Card';

const Lister = props => {
    const [people, setPeople] = useState(props.dataer);

    const renderer = () => {
        return <div>
            <label htmlFor="">Name : </label>
            <input type="text"/>
            <label htmlFor="">ID : </label>
            <input type="text"/>
        </div>
    }


    return (
        <div>

            {people.map(person => <ul key={person.id}><Card>{person.name}</Card></ul>)}


        </div>
    );
};

export default Lister;
