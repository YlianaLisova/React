import './App.css';
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";

function App() {


    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', color:'seagreen'}}><Users/></div>
            <hr/>
            <div style={{display:'flex', justifyContent: 'center', color:'saddlebrown'}}><Posts/></div>
        </div>
    );
}

export default App;
