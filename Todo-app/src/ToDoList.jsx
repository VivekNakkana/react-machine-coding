import {useState} from 'react';

function ToDoList() {
	const[input, setInput] = useState('')
	const[todoList, setTodoList] = useState([])

	const addTodoList = () => {
		if(input.trim() === '') return;
		const newTodo = {
			id: todoList.length+1,
			text: input.trim(),
			completed: false
		}
		setTodoList(prev => [...prev, newTodo])
		setInput('')
	}

	const toggleCompleted = (id) => {
		setTodoList(
			todoList.map(todo =>{
				if(todo.id === id){
					return({...todo, completed: !todo.completed})
				}
				else{
					return todo
				}
			})
		)
	}

	const deleteTodo = (id) => {
		setTodoList(
			todoList.filter(todo => todo.id !== id)
		)
	}

    return (
        <>
					<input type="text" placeholder="Enter Task" value={input} onChange={(e) => setInput(e.target.value)} />
					<button onClick={addTodoList} >Add</button>
					<ul>
						{todoList.map(( todo => <li key={todo.id}>
							<input type='checkbox' checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
							<span className={todo.completed ? "strikeThrough" : "" } >{todo.text}</span>
							<button onClick={() => deleteTodo(todo.id) } >Delete</button>
						</li>))}
					</ul>

        </>
    )
}

export default ToDoList;
