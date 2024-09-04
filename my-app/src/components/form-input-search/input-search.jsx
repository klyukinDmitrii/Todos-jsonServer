import styles from './input-search.module.css'

export const InputSearch = ({ search,  setSearch }) => {


		return <form onSubmit={(e) => e.preventDefault()} className={styles.form}>

			<input
				className={styles.input}
				type="text"
				placeholder="Поиск заметки"
				value={search}
				onChange={({target}) => setSearch(target.value)}

			/>
		</form>

}
