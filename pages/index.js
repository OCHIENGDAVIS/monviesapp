import Head from 'next/head';

import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export default function Home() {
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
            <MovieList />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
