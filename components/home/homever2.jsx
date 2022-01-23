import Image from "next/image";
import Link from "next/link";

const Index2 = () => (
  <div className="App w-full m-auto p-4">
    <div className="h-1 w-full z-100 absolute inset-0 z-50">
      <header className="relative m-auto text-center">
        <div className="flex p-8 z-100 bg-white w-9/12 h-24 m-auto">
          <div className="mr-auto">
            <Image
              className="w-24"
              src="/logo.svg"
              alt="Picture of the author"
              width="100"
              height="50"
            />
          </div>
          <Link href="/search">
            <a className="text-2xl text-tropen-rood font-medium">Voorbeeld</a>
          </Link>
        </div>
      </header>
    </div>
    {/* Titel en namen */}
    <div className="relative text-white h-128 w-full bg-[url('https://static.wixstatic.com/media/fa0117_285bcc23916542d29d45ae0b402f6a90~mv2.gif/v1/fill/w_280,h_155,q_90/fa0117_285bcc23916542d29d45ae0b402f6a90~mv2.gif')]">
      <h1 className="text-tropen-rood bg-white p-2 left-14 bottom-28 absolute text-4xl text-center font-bold">
        Namenmonument tropenmuseum
      </h1>
      <p className="text-white p-2 bg-tropen-rood left-14 bottom-14 absolute text-center font-medium">
        Lisa Roelvink - Aaron Smits - Bas de Roller
      </p>
    </div>

    {/* Intro project en uitleg */}
    <div className="w-full mt-4 flex">
      <div className="w-3/5 p-14 bg-tropen-rood">
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
      <div className="w-2/5 pl-4">
        <div className="mr-auto">
          <Image
            className="w-24"
            src="/filler.png"
            alt="Picture of the author"
            width="1920"
            height="1080"
          />
        </div>
      </div>
    </div>

    {/* Uitleg schermen */}
    <div className="w-full flex">
      <div className="w-3/5">
        {/* Stukje foto rechts */}
        <div className="w-full flex pt-4">
          <div className="w-1/2 pr-6">
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
              className="w-24"
              src="/filler.png"
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
              src="/filler.png"
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
        <div className="w-full flex pt-4">
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
              src="/filler.png"
              alt="Picture of the author"
              width="1920"
              height="1080"
            />
          </div>
        </div>
      </div>
      <div className="pl-4 w-2/5">
        {/* links */}
        <div className="m-auto w-1/2 p-4 pt-24">
          <div className="w-full">
            <h2 className="text-2xl font-bold">Links</h2>
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
