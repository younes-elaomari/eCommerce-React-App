import React from "react";

const Category = ({ genres, selectedGenre, onGenreSelect }) => {
  return (
    <div className="category">
      <ul className="nav justify-content-center">
        {genres.map((genre) => {
          return (
            <li key={genre.id} className="nav-item px-2">
              <button
                onClick={() => onGenreSelect(genre)}
                className={
                  selectedGenre === genre
                    ? "nav-link btn category-btn g-active"
                    : "nav-link btn category-btn"
                }
              >
                {genre.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
