import classes from './ErrorModal.module.css' ;
import Card from '../UI/Card';


const ErrorModal = (props) => {

    console.log(`props here are ${props.setter(false)}`)


    const clickHandler = () => {
        return props.setter(true);
    }

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <Card className={classes.modal}>
                <header>
                    <h2 className={classes.title}>
                        {props.title}
                    </h2>
                </header>
                <p className={classes.message}>
                    {props.message}
                </p>
                <footer className={classes.actions}>
                    <button className={classes.modalBtn} type={'button'} onClick={clickHandler}>OKAY</button>
                </footer>
            </Card>
        </div>


    )
}


export default ErrorModal;