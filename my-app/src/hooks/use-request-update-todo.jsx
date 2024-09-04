

export const useRequestUpdateTodo = (todoList, setTodoList) => {

	const requestUpdateTodo = (id) => {
		const corectTodo = prompt('изменить заметку');
		if (!corectTodo) return;

		fetch(`http://localhost:3007/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				text: corectTodo,
			}),
		})
			.catch((error) => console.error('Ошибка:', error))
			.finally(() => {
				const index = todoList.findIndex((todo) => todo.id === id);
				todoList[index].text = corectTodo;
				setTodoList((prev) => [...prev]);
			});
	}
	return { requestUpdateTodo }

};
