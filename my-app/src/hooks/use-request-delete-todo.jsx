
export const useRequestDeleteTodo = (todoList, setTodoList) => {
	const requestDeleteTodo = (id) => {
		fetch(`http://localhost:3007/todos/${id}`, {
			method: 'DELETE',
		})
			.catch((error) => console.error('Ошибка:', error))
			.finally(() => {
				const deleteTodo = todoList.filter((todo) => todo.id !== id);
				setTodoList([...deleteTodo]);
			});
	};
	return { requestDeleteTodo }
};
