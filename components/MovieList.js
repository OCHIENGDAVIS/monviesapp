import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <div className="flex space-x-2">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie._id} />
      ))}
    </div>
  );
}

export default MovieList;
