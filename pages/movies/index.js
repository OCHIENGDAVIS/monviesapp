import Head from 'next/head';
import axios from 'axios';
import dbConnect from '../../db';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import Carousel from '../../components/Carousel';
import MovieList from '../../components/MovieList';
import Footer from '../../components/Footer';

export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Movies App</title>
        <meta name="description" content="A Movie rental platform" />
      </Head>
      <div>
        <Navbar />
        <div className="flex">
          <SideBar />
          <main className="ml-10 mr-2">
            <Carousel />
            <MovieList movies={movies} />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
export const getStaticProps = async (context) => {
  dbConnect();
  const { data } = await axios.get('http://localhost:3000/api/movies');

  return {
    props: {
      movies: data.data,
    },
    revalidate: 2 * 60,
  };
};
