import css from './Button.module.css'
import {Link, useSearchParams} from "react-router-dom";
export const Button = ({to,state,children, ...arg}) => {
    const [query] = useSearchParams();
    return (
        <Link to={query?`${to}?${query}`:to} state={state}>
            <button className={css.button} {...arg}>{children}</button>
        </Link>
    );
}