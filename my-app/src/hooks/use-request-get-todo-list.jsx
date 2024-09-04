import { useState, useEffect } from 'react';

export const useRequestGetTodoList = (setTodoList) => {
	const [isLoading, setIsLoading] = useState(false);


		useEffect(() => {
			setIsLoading(true);

			fetch('http://localhost:3007/todos')
				.then((response) => response.json())
				.then((loadedTodos) => setTodoList(loadedTodos))
				.catch((error) => console.error('Ошибка при загрузке данных:', error))
				.finally(() => setIsLoading(false));
		}, []);
	return { isLoading }
	}




