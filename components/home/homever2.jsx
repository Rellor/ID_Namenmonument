import Image from "next/image";
import Link from "next/link";
import Header from "../main/nav";

const Index2 = () => (
  <div className="App w-full m-auto p-4">
    <Header />
    {/* Titel en namen */}
    <div className="relative text-white h-128 w-full bg-contain bg-right bg-no-repeat bg-project-donker bg-bottom bg-[url('/topbannerstatic.png')]">
      <h1 className="uppercase text-tropen-rood bg-white p-2 left-14 bottom-28 absolute text-4xl text-center font-bold">
        Namenmonument tropenmuseum
      </h1>
      <p className="text-white p-2 bg-tropen-rood left-14 bottom-14 absolute text-center font-medium">
        Lisa Roelvink - Aaron Smits - Bas de Roller
      </p>
    </div>

    {/* Intro project en uitleg */}
    <div className="w-full mt-4 flex">
      <div className="w-6/12 p-14 bg-tropen-rood">
        <h3 className="text-2xl text-white font-medium pb-5">
          Introductie titel
        </h3>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="w-6/12 pl-4">
        <div className="mr-auto bg-project-donker">
          <Image
            className="w-24 drop-shadow-md"
            src="/Banner.png"
            alt="Picture of the author"
            width="1920"
            height="1080"
          />
        </div>
      </div>
    </div>

    {/* buttons */}
    <div className="pt-4 flex">
      <Link href="/screens">
        <div className="bg-[url('/ButtonbannerScreens.png')] bg-contain bg-center bg-no-repeat w-1/3 h-60 bg-project-donker relative">
          <h3 className="absolute bottom-10 left-10 text-tropen-rood bg-white text-xl font-bold p-2 uppercase">
            Uitleg schermen
          </h3>
        </div>
      </Link>
      <Link href="/designgoals">
        <div className="bg-[url('/ButtonbannerGoals.png')] mx-4 bg-contain bg-center bg-no-repeat w-1/3 h-60 bg-project-donker relative">
          <h3 className="absolute bottom-10 left-10 text-tropen-rood bg-white text-xl font-bold p-2 uppercase">
            Design doelen
          </h3>
        </div>
      </Link>
      <Link href="/style">
        <div className="bg-[url('/ButtonbannerStyling.png')] bg-cover bg-center bg-no-repeat w-1/3 h-60 bg-project-donker relative">
          <h3 className="absolute bottom-10 left-10 text-tropen-rood bg-white text-xl font-bold p-2 uppercase">
            Styling
          </h3>
        </div>
      </Link>
    </div>

    {/* project uitleg */}
    <div className="w-full mt-4 flex">
      <div className="w-2/3 m-auto">
        <h2 className="text-2xl font-medium pb-4">Eindproduct</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 className="text-2xl font-medium pb-4 mt-4">Uitleg 1</h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="pl-4 w-2/5">
        {/* links */}
        <div className="m-auto w-1/2 p-4 pt-24">
          <div className="w-full">
            <h2 className="text-2xl font-bold">Bronnen</h2>
            <p className="pt-4">
              Hier zijn alle links te vinden naar de locaties van onze schetsen,
              code en inspiratie.
            </p>
          </div>
          <div className="flex pt-4">
            <a
              className="px-2"
              href="https://github.com/Rellor/ID_Namenmonument"
            >
              <Image
                className="w-12"
                src="/github.png"
                alt="Picture of the author"
                width="1500"
                height="1500"
              />
            </a>
            <a
              className="px-2"
              href="https://www.figma.com/file/OChXVlMBfiRqMGEc56rUUY/Namenmonument-werkbestand"
            >
              <Image
                className="w-12"
                src="/figma.png"
                alt="Picture of the author"
                width="1500"
                height="1500"
              />
            </a>
            <a
              className="px-2"
              href="https://miro.com/app/board/uXjVObENVjc=/?invite_link_id=244899130024"
            >
              <Image
                className="w-12"
                src="/miro.png"
                alt="Picture of the author"
                width="1500"
                height="1500"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index2;
