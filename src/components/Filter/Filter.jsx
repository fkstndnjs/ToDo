import styles from "./Filter.module.css";

export default function Filter({ filter2, setFilter }) {
  const filters = ["all", "active", "complete"];

  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((filter, index) => {
          return (
            <li key={index}>
              <button
                className={`${styles.filter} ${
                  filter === filter2 && styles.selected
                }`}
                onClick={() => {
                  setFilter(filter);
                }}
              >
                {filter}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
