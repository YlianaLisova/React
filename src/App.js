import './App.css';
import {Cats, Dogs} from "./components";
import {CatForm} from "./components/CatForm/CatForm";
import {DogForm} from "./components/DogForm/DogForm";

function App() {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{marginRight: '50px'}}>
                    <CatForm/>
                    <hr/>
                    <Cats/>
                </div>
                <div>
                    <DogForm/>
                    <hr/>
                    <Dogs/>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default App;
