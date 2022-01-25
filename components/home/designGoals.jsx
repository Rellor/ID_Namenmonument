import Image from "next/image";
import Link from "next/link";
import Header from "../main/nav";

const Index = () => (
  <div className="App w-full m-auto p-4">
    <Header />
    {/* Titel en namen */}
    <div className="relative text-white h-128 w-full bg-contain bg-project-donker bg-right bg-no-repeat bg-bottom bg-[url('/ButtonbannerGoals.png')]">
      <h1 className="uppercase text-tropen-rood bg-white p-2 left-24 bottom-36 absolute text-6xl text-center font-bold">
        Design goals
      </h1>
    </div>

    {/* Uitleg schermen */}
    <div className="w-full flex">
      <div className="w-4/5 m-auto">
        {/* Stukje foto rechts */}
        <div className="w-2/3 m-auto pt-4">
          <h2 className="text-2xl font-bold">• Doel 1</h2>
          <p className="mt-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="text-2xl font-bold pt-4">• Doel 2</h2>
          <p className="mt-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="text-2xl font-bold pt-4">• Doel 3</h2>
          <p className="mt-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
