import React from 'react';
import {useDispatch} from "react-redux";
import {todoAction} from "../../redux";

export const OneTodo = ({todo}) => {
    const {id, title} = todo
    const dispatch = useDispatch();
    const deleteTodo = () => {
        dispatch(todoAction.deleteTodo({id}))
    }
    const setTodo = () => {
      dispatch(todoAction.setTodoForUpdate({todo}))
    }
    return (
        <div>
            <div style={{border: '1px solid black', borderRadius: '5px', background: 'lightcyan', display:'flex', justifyContent:'space-between'}}>
                <div><input style={{cursor: 'pointer'}} type="checkbox"/>
                    {id}-{title} {}</div>
                <div>
                    <button onClick={deleteTodo} type="button"><img
                        style={{height: '13px', width: '12px', cursor: 'pointer'}}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png"
                        alt=""/></button>
                    <button onClick={setTodo}><img style={{height: '13px', width: '12px', cursor: 'pointer'}}
                                                   src="https://static.thenounproject.com/png/3053734-200.png" alt=""/>
                    </button>
                </div>
            </div>
            <br/>
        </div>
    );
};



