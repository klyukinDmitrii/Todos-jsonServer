import styles from './array-todo-list.module.css'

export const ArrayTodoList = ({todoList, requestUpdateTodo, requestDeleteTodo}) => {
	return todoList.map(({ id, text }) => (
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
