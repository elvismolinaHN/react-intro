import './CreateTodoButton.css';

function CreateTodoButton() {
    return(
        <button 
            className="CreateTodoButton" 
            onClick = {(event) => { // A la hora de persionar un click ocurre un evento.
                    console.log('le diste click');
                    console.log(event);
                    console.log(event.target);
                    console.log(event.target.value);
                }
            }
        >+</button>
    );
}

export { CreateTodoButton };