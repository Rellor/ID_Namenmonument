import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Footer = () => (
  <div className=" w-full py-14 mt-4 bg border-t-2">
    <div className="flex space-x-4 justify-center">
      {" "}
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/screens">
        <p>Ontwerp uitleg</p>
      </Link>
      <Link href="/style">
        <p>Styling</p>
      </Link>
      <Link href="/search">
        <p>Voorbeeld</p>
      </Link>
    </div>
  </div>
);

export default Footer;
