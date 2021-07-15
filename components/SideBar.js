import Link from 'next/dist/client/link';
function SideBar() {
  return (
    <div className="flex flex-col h-screen p-4 w-1/6  items-center">
      <Link href="/" className="text-red-200 py-4">
        category 1
      </Link>
      <Link href="/" className="text-red-200 py-4">
        category 2
      </Link>
      <Link href="/" className="text-red-200 py-4">
        category 3
      </Link>
      <Link href="/" className="text-red-200 py-4">
        category 4
      </Link>
    </div>
  );
}

export default SideBar;
