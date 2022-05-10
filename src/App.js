import './App.css';
import {useEffect, useRef, useState} from "react";
import {v4} from 'uuid'
import {randomColor} from 'randomcolor'
import Draggable from "react-draggable";

function App() {
    const input = useRef();
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    );

    const updatePos = (data, index) => {
        let newArray = [...items];
        newArray[index].defaultPos = {x: data.x, y: data.y}
        setItems(newArray)
    }

    const keyPress = (e) => {
      const code = e.keyCode || e.which
        if (code === 13) {
            newItem()
        }
    }

    const newItem = () => {
        if (input.current.value.trim() !== '') {
            const newItem = {
                id: v4(),
                item: input.current.value,
                color: randomColor({
                    luminosity: 'light'
                }),
                defaultPos: {
                    x: 500,
                    y: -500
                }
            }
            setItems((items) => [...items, newItem]);
            input.current.value = ''
        } else {
            alert('Enter something...')
            input.current.value = ''
        }
    }

    const deleteNode = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])
    return (
        <div className={'App'}>
            <div className={'wrapper'}>
                <input onKeyPress={(e)=> keyPress(e)} type="text" ref={input} placeholder={'Enter something'}/>
                <button className={'enter'} onClick={newItem}> ENTER</button>
            </div>
            {items.map((item, index) => {
                    return (
                        <Draggable
                            key={index}
                            defaultPosition={item.defaultPos}
                            onStop={(_, data) => {
                                updatePos(data, index)
                            }}
                        >
                            <div className={'todo_item'} style={{backgroundColor: item.color}}>
                                {`${item.item}`}
                                <button onClick={() => deleteNode(item.id)} className={'delete'}>X</button>
                            </div>

                        </Draggable>
                    )
                }
            )}
        </div>
    );
}

export default App;
