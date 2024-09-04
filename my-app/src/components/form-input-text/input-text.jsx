import styles from './input-text.module.css'

export const InputText = ({value, setValue,  requestAddTodo}) => {

	return <form onSubmit={requestAddTodo} className={styles.form}>
		<input
			className={styles.input}
			type="text"
			placeholder="Введите заметку"
			value={value}
			onChange={({ target }) => setValue(target.value)} />

	</form>
}
