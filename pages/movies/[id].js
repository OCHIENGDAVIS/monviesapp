import axios from 'axios';

import Navbar from '../../components/Navbar';
// import dbConnect from '../db';

function details({ movie }) {
  return (
    <div>
      <Navbar />
      <h3>{movie.name}</h3>
      <p>{movie.genre}</p>
    </div>
  );
}
export const getStaticProps = async (context) => {
  // dbConnect();
  const { id } = context.params;
  const { data } = await axios.get(`http://localhost:3000/api/movies/${id}`);
  return {
    props: {
      movie: data.data,
    },
    revalidate: 2 * 60,
  };
};

export const getStaticPaths = async () => {
  // dbConnect();
  const { data } = await axios.get('http://localhost:3000/api/movies');
  console.log(data.data);
  const staticPaths = data.data.map((movie) => {
    return {
      params: { id: movie._id },
    };
  });
  console.log(staticPaths);

  return {
    fallback: 'blocking',
    paths: staticPaths,
  };
};

export default details;
