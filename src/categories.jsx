import React from "react";

export const Categories = ({ allCategories, filterCategory }) => {
  return (
    <div className="btn-container">
      {allCategories.map((item) => {
        return (
          <button
            type="button"
            className="btn"
            key={item}
            onClick={() => filterCategory(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
