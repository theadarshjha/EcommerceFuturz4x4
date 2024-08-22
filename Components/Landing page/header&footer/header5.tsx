import Link from 'next/link';
import Image from 'next/image';
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className="flex bg-gray-100 w-[90%] max-w-[1250px] mx-auto font-sf-pro-icons h-10 shadow-md rounded-lg mb-3 m-0 p-0 justify-center items-center">
      <div className="flex justify-between items-center w-full h-full p-0">
        <div className="ml-4">
          <Image 
            src="/Website logo.webp" 
            alt="Logo" 
            width={150} 
            height={50} 
            className="m-0 p-0"
          />
        </div>
        <nav className="flex space-x-6 items-center flex-1 justify-center gap-3">
          <div className="relative group">
            <Link href="#" passHref>
              <span className="text-gray-800 hover:text-blue-500 cursor-pointer">Brands</span>
            </Link>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block rounded-lg">
              <Link href="#" passHref>
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg cursor-pointer">Ironman</span>
              </Link>
              <Link href="#" passHref>
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Bimbra4x4</span>
              </Link>
              <Link href="#" passHref>
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Lighthouse</span>
              </Link>
              <Link href="#" passHref>
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-lg cursor-pointer">Futurz4x4</span>
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="#" passHref>
              <span className="text-gray-600 hover:text-black cursor-pointer">Cars</span>
            </Link>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block rounded-lg">
              <Link href="#" passHref>
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg cursor-pointer">Hilux</span>
              </Link>
              <Link href="#" passHref>
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Jimmy</span>
              </Link>
              <Link href="#" passHref>
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Thar</span>
              </Link>
              <Link href="#" passHref>
                <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-lg cursor-pointer">Isuzu</span>
              </Link>
            </div>
          </div>
          <Link href="#" passHref>
            <span className="text-gray-800 hover:text-blue-500 cursor-pointer">About Us</span>
          </Link>
          <Link href="#" passHref>
            <span className="text-gray-800 hover:text-blue-500 cursor-pointer">Support</span>
          </Link>
        </nav>
        <div className="flex items-center pr-4 gap-3">
          <Link href="#" passHref>
            <span className="text-gray-800 hover:text-blue-500 flex items-center cursor-pointer">
              <MagnifyingGlassIcon className="h-5 w-5 mr-1" />
              Search
            </span>
          </Link>
          <Link href="#" passHref>
            <span className="text-gray-800 hover:text-blue-500 flex items-center cursor-pointer">
              <ShoppingCartIcon className="h-5 w-5 mr-1" />
              Add to Cart
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
