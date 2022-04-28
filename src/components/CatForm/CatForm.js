import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {catAction} from "../../redux";

export const CatForm = () => {
    const {catForUpdate} = useSelector(state => state.cat);
    const catInput = useRef();
    const dispatch = useDispatch();
    useEffect(()=> {
        if (catForUpdate){
        catInput.current.value = catForUpdate.name
        }
    },[catForUpdate])
    const addCat = () => {
      dispatch(catAction.addCat({cat: catInput.current.value}))
        catInput.current.value = ''
    }
    const saveCatUpdate = () => {
      if (catForUpdate){
          const newCatUpdate = catInput.current.value;
          dispatch(catAction.updateCatById({id:catForUpdate.id, updateName: newCatUpdate}))
      } else {
          const newCatUpdate = catInput.current.value;
          dispatch(catAction.addCat({cat:newCatUpdate}))
      }
      catInput.current.value = ''
    }
    return (
        <div>
            <input type="text" ref={catInput} placeholder={'Cat name'}/>
            <button onClick={addCat}>ADD</button>
            <button onClick={saveCatUpdate}>saveCatUpdate</button>
        </div>
    );
};

