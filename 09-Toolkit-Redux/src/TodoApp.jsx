import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis'

export const TodoApp = () => {


    const [todoId, setTodoId ] = useState(1)
    // const { data: todos = [] , isLoading } = useGetTodoQuery();
    // console.log(data , isLoading)
    const { data: todo , isLoading } = useGetTodoQuery(todoId);


    const nextTodo = () => {
        setTodoId ( todoId + 1); 
    }

    const prevTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId ( todoId - 1); 
    }

    return (
        <>
            <h1>Todos - RTk Query</h1>
            <hr />
            <h4>{ isLoading ? 'True': 'False' }</h4>

            <pre>{ JSON.stringify( todo )}</pre>
{/*             
            <ul>
                {
                    todos.map( todo => (
                        <li key={ todo.id }>
                            <strong> { todo.completed ? 'DONE' : 'Pending' } </strong>
                            {
                                todo.title
                            }
                        </li>
                    ))
                }
            </ul>
             */}
            
            <button onClick={ prevTodo }>
                Prev Todo
            </button>
            <button onClick={ nextTodo }>
                Next Todo
            </button>
        </>
    )
}
