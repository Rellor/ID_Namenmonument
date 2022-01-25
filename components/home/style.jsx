import Image from "next/image";
import Link from "next/link";
import Header from "../main/nav";

const Index = () => (
  <div className="App w-full m-auto p-4">
    <Header />
    {/* Titel en namen */}
    <div className="relative text-white h-128 w-full bg-cover bg-project-donker bg-center bg-[url('/ButtonbannerStyling2.png')]">
      <h1 className="uppercase text-tropen-rood bg-white p-2 left-24 bottom-36 absolute text-6xl text-center font-bold">
        Style
      </h1>
    </div>

    {/* Uitleg style */}
    <div className="w-full">
      {/* kleuren */}
      <div className="w-full flex">
        <div className="uppercase w-1/5 pb-16/100 mr-2 my-4 bg-project-donker">
          <p className="text-white text-center">#1B0A08</p>
        </div>
        <div className="uppercase w-1/5 pb-16/100 mx-2 my-4 bg-project-secondary">
          <p>#F2EFE7</p>
        </div>
        <div className="uppercase w-1/5 pb-16/100 mx-2 my-4 bg-project-button">
          <p>#978C58</p>
        </div>
        <div className="uppercase w-1/5 pb-16/100 mx-2 my-4 bg-project-button2">
          <p>#331F19</p>
        </div>
        <div className="uppercase w-1/5 pb-16/100 ml-2 my-4 bg-project-button3">
          <p>#736B56</p>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
