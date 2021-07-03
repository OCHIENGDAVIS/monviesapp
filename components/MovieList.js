import Movie from './Movie';

function MovieList() {
  return (
    <div className="flex space-x-2">
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
}

export default MovieList;
