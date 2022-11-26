export default function Filter({ setFilter }) {
  const filters = ["all", "active", "complete"];

  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-around",
        listStyle: "none",
      }}
    >
      {filters.map((filter, index) => {
        return (
          <li key={index}>
            <button
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
  );
}
