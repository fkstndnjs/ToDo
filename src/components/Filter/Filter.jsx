import React from "react";

const filters = ["all", "active", "complete"];

export default function Filter({ setFilter }) {
  return (
    <ul>
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
