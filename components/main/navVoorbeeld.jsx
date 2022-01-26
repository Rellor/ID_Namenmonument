import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Header = () => (
  <div className="h-1 w-full z-100 absolute inset-0 z-50">
    <header className="relative m-auto text-center">
      <div className="flex p-4 z-100 w-9/12 h-24">
        <div className="mr-auto cursor-pointer">
          <Link href="/">
            <p className="p-1 px-4 rounded-lg bg-project-button border-2 text-2xl text-project-secondary font-medium">
              Ga terug
            </p>
          </Link>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
