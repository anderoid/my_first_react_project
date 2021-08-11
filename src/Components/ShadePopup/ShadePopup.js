import React, {useState} from 'react';
import Card from '../UI/Card'
import ErrorModal from "./ErrorModal";
import classes from './ShadePopup.module.css'

const ShadePopup = () => {

    const [userName, setUserName] = useState('');
    const [error, setError] = useState();
    const [flag, setFlag] = useState(false) ;


    const submitHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0) {
            setError({
                title: 'Empty Name',
                message: 'Please enter a userName'
            })
        } else if (userName.trim().length < 3) {
            setError({
                title: 'Invalid Name',
                message: 'Please enter a userName of length atleast 4 characters'
            })
        }

        setUserName('');
    }

    const errorSetter = (flag) => {
        if (flag) {
            setError('');
            console.log(` Iam getting executed here `)
        }
    }

    const textChangeHandler = (event) => {

        setUserName(event.target.value);

    }


    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} setter={errorSetter(flag)}/>}


            <Card>

                <div className={classes.labeller}>
                    <form action="" onSubmit={submitHandler}>
                        <label htmlFor="name">Name</label>
                        <input type="text" value={userName} id={'name'} onChange={textChangeHandler}/>
                        <button type={'submit'}>Click Me</button>
                    </form>

                </div>
            </Card>


        </div>
    );
};

export default ShadePopup;
