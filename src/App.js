import './App.css';
import {AddTodo, Header, TodoList} from "./components";

function App() {

    return (
        <div>
            <Header/>
            <AddTodo/>
            <TodoList/>
        </div>
    );
}

export default App;
