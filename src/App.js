import './App.css';
import {Counter, Users} from "./components";
import {Form} from "./components/Form";

function App() {
    return (
        <div>
            <Counter/>
            <br/>
            <br/>
            <Form/>
            <Users/>
        </div>
    );
}

export default App;
