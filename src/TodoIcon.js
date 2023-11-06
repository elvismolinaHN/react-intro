import { ReactComponent as CheckSVG} from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';

const iconTypes = { // Es una forma de crear condicionales mediante objetos.
    "check": <CheckSVG />,
    "delete": <DeleteSVG />,
};

function TodoIcon( { type } ) {
    return (
        <span 
            className={`Icon Icon-svg Icon-${type}`} // Agregamos el tipo de propiedad que esta en el archivo CSS.
        >
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };