import { useState } from 'react';
import styles from './App.module.css';
import { InputText, InputSearch } from './components/index';
import {
	useRequestAddTodo,
	useRequestUpdateTodo,
	useRequestDeleteTodo,
	useRequestGetTodoList,
} from './hooks/index';
import { ArraySearch, ArrayTodoList, SortButton } from './components/index';

export const App = () => {
	const [todoList, setTodoList] = useState([]);
	const [value, setValue] = useState('');
	const [search, setSearch] = useState('');
	const { isLoading } = useRequestGetTodoList(setTodoList);
	const { requestAddTodo } = useRequestAddTodo(value, setValue, setTodoList);
	const { requestUpdateTodo } = useRequestUpdateTodo(todoList, setTodoList);
	const { requestDeleteTodo } = useRequestDeleteTodo(todoList, setTodoList);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className={styles.loading}></div>
			) : (
				<>
					<h1>Список дел</h1>
					<InputText
						value={value}
						setValue={setValue}
						requestAddTodo={requestAddTodo}
					/>
					<InputSearch search={search} setSearch={setSearch} />
					<SortButton todoList={todoList} setTodoList={setTodoList} />
					{!search ? (
						<ArrayTodoList
							todoList={todoList}
							requestUpdateTodo={requestUpdateTodo}
							requestDeleteTodo={requestDeleteTodo}
						/>
					) : (
						<ArraySearch
							todoList={todoList}
							search={search}
							requestUpdateTodo={requestUpdateTodo}
							requestDeleteTodo={requestDeleteTodo}
						/>
					)}
				</>
			)}
		</div>
	);
};
