export function TodoCard(props) {
    const { todo, handleADeletedTodo, todoIndex, handleCompleteTodo } = props

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled={todo.complete} onClick={() => {
                    handleCompleteTodo(todoIndex)
                }}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleADeletedTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}