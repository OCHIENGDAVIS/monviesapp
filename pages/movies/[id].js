import axios from 'axios';
import Head from 'next/dist/next-server/lib/head';

import SideBar from '../../components/SideBar';
import dbConnect from '../../db';

function details({ movie }) {
  return (
    <div>
      <Head>
        <title>Movies App | {movie.name}</title>
        <meta name="description" content="A Movie rental platform" />
      </Head>

      <div className="pt-10 flex">
        <SideBar />
        <div>
          <h3>{movie.name}</h3>
          <p>{movie.genre}</p>
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async (context) => {
  dbConnect();
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
  dbConnect();
  const { data } = await axios.get('http://localhost:3000/api/movies');
  if (!data.data) {
    data.data = [];
  }
  const staticPaths = data.data.map((movie) => {
    return {
      params: { id: movie._id },
    };
  });

  return {
    fallback: 'blocking',
    paths: staticPaths,
  };
};

export default details;
