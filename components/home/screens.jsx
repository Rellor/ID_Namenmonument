import Image from "next/image";
import Link from "next/link";
import Header from "../main/nav";

const Index = () => (
  <div className="App w-full m-auto p-4">
    <Header />
    {/* Titel en namen */}
    <div className="relative text-white h-128 w-full bg-contain bg-top bg-norepeat bg-bottom bg-[url('/ButtonbannerScreens.png')]">
      <h1 className="uppercase text-tropen-rood bg-white p-2 left-24 bottom-36 absolute text-6xl text-center font-bold">
        Schermen
      </h1>
    </div>

    {/* Uitleg schermen */}
    <div className="w-full flex">
      <div className="w-4/5 m-auto">
        {/* Stukje foto rechts */}
        <div className="w-full flex pt-4 pt-4">
          <div className="w-1/2 px-4">
            <h2 className="text-2xl font-bold">Scherm 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              className="w-24 drop-shadow-md"
              src="/Scherm1.png"
              alt="Picture of the author"
              width="1920"
              height="1080"
            />
          </div>
        </div>

        {/* stukje foto links */}
        <div className="w-full flex pt-4">
          <div className="w-1/2">
            <Image
              className="w-24"
              src="/Scherm2.png"
              alt="Picture of the author"
              width="1920"
              height="1080"
            />
          </div>
          <div className="w-1/2 px-6">
            <h2 className="text-2xl font-bold">Scherm 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Stukje foto rechts */}
        <div className="w-full flex pt-4 px-4">
          <div className="w-1/2 pr-6">
            <h2 className="text-2xl font-bold">Scherm 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              className="w-24"
              src="/Scherm3.png"
              alt="Picture of the author"
              width="1920"
              height="1080"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
