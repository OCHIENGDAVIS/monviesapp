import Link from 'next/link';

function Movie({ movie }) {
  return (
    <div className="max-w-[400px]">
      <div className="bg-gray-300 h-24"></div>
      <div>
        <Link href={`/movies/${movie._id}`} className="cursor-pointer">
          <h3 className="hover:cursor-pointer text-red-200 bg-gray-700">
            {movie.name}
          </h3>
        </Link>

        <p>$24.99</p>
        <p>{movie.genre}</p>
      </div>
      <div className="bg-gray-200 "></div>
    </div>
  );
}

export default Movie;
