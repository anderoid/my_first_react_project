import {React, useState} from 'react';
import Card from './UI/Card';

const Lister = props => {
    const [people, setPeople] = useState(props.dataer);


    return (
        <div>

            {people.map(person => <ul key={person.id}><Card>{person.name}</Card></ul>)}


        </div>
    );
};

export default Lister;
