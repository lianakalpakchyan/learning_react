import {Header} from "./components/Header.jsx";
import {Tabs} from "./components/Tabs.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";
import {useState, useEffect} from "react";


function App() {
    const [todos, setTodos] = useState([
        { input: 'Hello! Add your first todo!', complete: true }
    ]);

    const [selectedTab, setSelectedTab] = useState('Open');

    function handleAddTodo(newTodo) {
        const newTodoList = [...todos, {input: newTodo, complete: false}];
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    }

    function handleCompleteTodo(index) {
        let newTodoList = [...todos]
        let completeTodo = todos[index]
        completeTodo['complete'] = true;
        newTodoList[index] = completeTodo;
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    }

    function handleADeletedTodo(index) {
        let newTodoList = todos.filter((val, valIndex) => valIndex !== index);
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    }

    function handleSaveData(currTodos) {
        localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}));
    }

    useEffect(() => {
        if ( !localStorage || !localStorage.getItem('todo-app') ) { return }
        let db = JSON.parse(localStorage.getItem('todo-app'))
        setTodos(db.todos);

    }, [todos])

    return (
        <>
            <Header todos={todos} />
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
            <TodoList
                handleCompleteTodo={handleCompleteTodo}
                handleADeletedTodo={handleADeletedTodo}
                todos={todos} selectedTab={selectedTab}
            />
            <TodoInput handleAddTodo={handleAddTodo} />
        </>
    )
}

export default App;