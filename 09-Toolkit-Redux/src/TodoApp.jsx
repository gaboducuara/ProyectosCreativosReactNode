import { useGetTodosQuery } from './store/apis'

export const TodoApp = () => {

    const { algo } = useGetTodosQuery
    console.log(algo)


    return (
        <>
            <h1>Todos - RTk Query</h1>
            <hr />
            <h4> isLoading... </h4>

            <pre>...</pre>

            <button>
                Next Todo
            </button>

        </>
    )
}
