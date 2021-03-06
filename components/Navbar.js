import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 bg-gray-700 text-white py-2  fixed w-screen ">
      <div className="text-red-100">
        <Link href="/movies">Movies App </Link>
      </div>
      <div className="flex justify-center space-x-2 text-red-100">
        <Link href="/movies">Home </Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact </Link>
      </div>
    </nav>
  );
}

export default Navbar;
