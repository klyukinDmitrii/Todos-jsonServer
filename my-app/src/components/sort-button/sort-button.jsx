import styles from './sort-button.module.css'

export const SortButton = ({todoList, setTodoList}) => {
	const sortBtn = () => {
		const sortTodo = todoList.sort((a, b) => {
			if (a.text > b.text) return 1;
			if (a.text < b.text) return -1;
			return 0;
		});
		setTodoList([...sortTodo]);
	};

	return <button className={styles.sort} onClick={sortBtn}>Сортировка по алфавиту</button>
}
