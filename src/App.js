import './App.css';
import {Cats, Dogs} from "./components";

function App() {
    return (
        <div style={{display:'flex'}}>

            <div><Cats/></div>
            <div><Dogs/></div>
        </div>
    );
}

export default App;
