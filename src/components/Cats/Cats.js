import {useSelector} from "react-redux";
import {Cat} from "../Cat/Cat";


export const Cats = () => {
    const {cats} = useSelector(state => state.cat);

    return (
        <div>
            {cats.map(cat=> <Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

