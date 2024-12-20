import PropTypes from 'prop-types';

function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

// Definir PropTypes para ListOfMovies
ListOfMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function NoMoviesResults() {
  return <p>No se encontraron películas para esta búsqueda</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}

// Definir PropTypes para Movies
Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ).isRequired,
};
