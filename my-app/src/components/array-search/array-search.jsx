import styles from './array-search.module.css'

export const ArraySearch = ({todoList, search, requestUpdateTodo, requestDeleteTodo}) => {
	const filteredSearch = todoList.filter((todo) => {
		return todo.text.toLowerCase().includes(search.toLowerCase());
	});

	return filteredSearch.map(({ id, text }) => (
		<li className={styles.container} key={id}>
			{text}
			<button
				className={styles.todoButton}
				onClick={() => requestUpdateTodo(id)}
			>
				изменить
			</button>
			<button
				className={styles.todoButton}
				onClick={() => requestDeleteTodo(id)}
			>
				удалить
			</button>
		</li>
	))
}
