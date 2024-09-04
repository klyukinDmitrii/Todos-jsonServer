
export const useRequestAddTodo = ( value, setValue,setTodoList) => {
	const requestAddTodo = (event) => {
		event.preventDefault();

		if (!value) return;

		console.log(value);
		fetch('http://localhost:3007/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				text: value,
			}),
		})
			.then((response) => response.json())
			.then((todosResponse) => {
				setTodoList((prev) => [...prev, todosResponse]);
			})
			.finally(() => setValue(''));
	};
	return { requestAddTodo }
};
