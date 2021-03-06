import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Header = () => (
  <div className="h-1 w-full z-100 absolute inset-0 z-50">
    <header className="relative m-auto text-center">
      <div className="flex p-8 z-100 bg-white w-9/12 h-24 m-auto">
        <div className="mr-auto cursor-pointer">
          <Link href="/">
            <p className="text-2xl text-tropen-rood font-medium">Home</p>
          </Link>
        </div>

        <Link href="/search">
          <a className="text-2xl text-tropen-rood font-medium">Voorbeeld</a>
        </Link>
      </div>
    </header>
  </div>
);

export default Header;
